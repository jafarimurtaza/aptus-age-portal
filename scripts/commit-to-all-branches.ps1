<#
.SYNOPSIS
    Commits staged changes on the current branch, then cherry-picks that
    commit onto every other local branch.

.USAGE
    git add <files...>
    .\scripts\commit-to-all-branches.ps1 -Message "Your commit message"

    # Optionally skip some branches:
    .\scripts\commit-to-all-branches.ps1 -Message "msg" -Exclude dev,experiment
#>
param(
    [Parameter(Mandatory = $true)]
    [string]$Message,

    [string[]]$Exclude = @()
)

$ErrorActionPreference = 'Stop'

# Make sure there is something staged
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Error "Nothing is staged. Run 'git add <files>' first."
    exit 1
}

# Make sure the working tree is otherwise clean (unstaged changes would block checkout)
git diff --quiet
if ($LASTEXITCODE -ne 0) {
    Write-Error "You have unstaged changes. Stash or stage them first."
    exit 1
}

$startBranch = (git rev-parse --abbrev-ref HEAD).Trim()

# 1. Commit on the current branch
git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    Write-Error "Commit failed on '$startBranch'."
    exit 1
}
$hash = (git rev-parse HEAD).Trim()
Write-Host "Committed $hash on '$startBranch'" -ForegroundColor Green

# 2. Cherry-pick onto every other local branch
$branches = git for-each-ref --format='%(refname:short)' refs/heads/ |
    Where-Object { $_ -ne $startBranch -and $Exclude -notcontains $_ }

$failed = @()
foreach ($branch in $branches) {
    git checkout $branch --quiet
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Could not check out '$branch', skipping."
        $failed += $branch
        continue
    }

    git cherry-pick $hash --quiet
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Cherry-pick conflicted on '$branch' - rolling back that branch."
        git cherry-pick --abort
        $failed += $branch
        continue
    }

    Write-Host "Applied to '$branch'" -ForegroundColor Green
}

# 3. Return to the starting branch
git checkout $startBranch --quiet

Write-Host ""
if ($failed.Count -gt 0) {
    Write-Warning ("Failed on: " + ($failed -join ', ') + ". Resolve those manually.")
    exit 1
}
Write-Host "Done. Commit applied to all local branches. (Nothing was pushed.)" -ForegroundColor Cyan
