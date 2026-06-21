# AGE Portal Frontend

A [Next.js](https://nextjs.org) application built with React, Tailwind CSS, and daisyUI.

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **Tailwind CSS 4** with **daisyUI**
- **ESLint** for linting

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Start editing by modifying `app/page.js` — the page auto-updates as you save.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `bun run dev`   | Start the development server      |
| `bun run build` | Build the app for production      |
| `bun run start` | Run the production build          |
| `bun run lint`  | Lint the codebase with ESLint     |

## Branching

Branches are organized per page. Each page of the portal gets its own branch
prefixed with `page/`, named after the page it covers:

- `page/home`
- `page/graduates`
- `page/projects`
- `page/aptus`
- `page/impact`
- `page/cohorts`

When starting work on a page, create (or check out) the matching branch:

```bash
git checkout -b page/<page-name>
```

Keep changes scoped to the page the branch is named for, then open a pull
request back into `main`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — features and API
- [Learn Next.js](https://nextjs.org/learn) — an interactive tutorial
