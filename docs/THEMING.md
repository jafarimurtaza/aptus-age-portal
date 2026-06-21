# Theming Guide (daisyUI + Tailwind v4)

This project uses **Tailwind CSS v4** + **daisyUI v5** for styling and theming.
The whole point of theming is that you write your UI **once** and it adapts to
light, dark (`night`), or any other theme automatically — *as long as you use
the right classes*.

> ⚠️ The #1 mistake: hardcoding colors like `bg-white`, `text-gray-800`,
> `bg-blue-700`. These look **identical in every theme**, so the theme appears
> "broken" even when it's correctly configured. Use **semantic** classes instead.

---

## 1. How themes are configured

Themes are declared in `src/app/globals.css`:

```css
@import "tailwindcss";

@plugin "daisyui" {
  themes:
    light --default,   /* used when no other theme is active */
    night;             /* our dark theme */
}
```

And the active theme is set on the `<html>` tag in `src/app/layout.js`:

```jsx
<html data-theme="night" lang="en">
```

Change `data-theme="night"` to `data-theme="light"` to switch the whole app.

---

## 2. Use semantic colors, NOT fixed colors

daisyUI gives every theme a set of named "slots". Use these and your colors
follow the theme automatically.

| Use this (semantic) | Instead of (hardcoded) | Meaning |
|---|---|---|
| `bg-base-100` | `bg-white` | Main page/surface background |
| `bg-base-200` / `bg-base-300` | `bg-gray-100/200` | Slightly raised / sunken surfaces |
| `text-base-content` | `text-black` / `text-gray-800` | Default text color |
| `text-base-content/70` | `text-gray-500` | Muted / secondary text (`/70` = 70% opacity) |
| `bg-primary` `text-primary` | `bg-blue-700` | Brand / main accent color |
| `bg-secondary` | `bg-green-600` | Secondary accent |
| `bg-accent` | — | Third accent |
| `bg-error` `text-error` | `bg-red-600` | Errors / destructive |
| `bg-success` `bg-warning` `bg-info` | — | Status colors |

Each color has a matching `*-content` color for readable text **on top of it**,
e.g. `bg-primary text-primary-content`.

### ❌ Before (theme-blind)
```jsx
<div className="bg-white">
  <h1 className="text-green-600">Title</h1>
  <p className="text-gray-800">Subtitle</p>
  <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Save</button>
</div>
```

### ✅ After (theme-aware)
```jsx
<div className="bg-base-100">
  <h1 className="text-primary">Title</h1>
  <p className="text-base-content/70">Subtitle</p>
  <button className="btn btn-primary">Save</button>
</div>
```

---

## 3. Prefer daisyUI components

daisyUI ships ready-made component classes that are already theme-aware.
Use them instead of styling raw elements by hand.

```jsx
{/* Buttons */}
<button className="btn btn-primary">Primary</button>
<button className="btn btn-outline btn-primary">Outline</button>
<button className="btn btn-ghost">Ghost</button>

{/* Cards */}
<div className="card bg-base-200 shadow-md">
  <div className="card-body">
    <h2 className="card-title">Graduate</h2>
    <p>Real talent. Ready to build.</p>
  </div>
</div>

{/* Inputs */}
<input className="input input-bordered" placeholder="Search..." />
```

Full component list: https://daisyui.com/components/

---

## 4. Quick checklist before you commit

- [ ] No `bg-white`, `bg-black`, `text-gray-*`, `bg-blue-*` etc. in your JSX.
- [ ] Backgrounds use `bg-base-100/200/300`.
- [ ] Text uses `text-base-content` (with `/70`, `/50` for muted variants).
- [ ] Accents use `primary` / `secondary` / `accent`.
- [ ] Buttons/cards/inputs use daisyUI component classes (`btn`, `card`, `input`).
- [ ] Toggle `data-theme` between `light` and `night` in `layout.js` — your UI
      should look correct in **both** without changing anything else.

If it looks good in both themes, you did it right. 🎉
