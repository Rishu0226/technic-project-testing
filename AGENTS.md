<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-design-rules -->
# Technic Technologies — Design System

When a new page, section, or design file is provided, build it with this system. Do not invent a new palette, font, radius, or shadow. Match the public site: light, corporate, spacious, cyan + orange. There is no dark mode.

## How to apply a new design

1. Read `app/globals.css` before writing UI. Colors, the brand gradient, and shadows already live there.
2. Keep existing routes, forms, API calls, and content. Change presentation only unless the design explicitly adds a field.
3. Use the logo at `/Assest/logo-brand.png`. Do not redraw it as text.
4. Pages use `Navbar`, a `main` region, and `Footer`.
5. If a supplied design uses navy, rose, amber, purple, or Consolas, translate it into the tokens below.

## Colors

Defined once in `app/globals.css` `:root`. Tailwind classes read those variables. To recolor the site, edit `:root` only. Do not paste hex into components, SVG, or styled-jsx.

| Token | Class | Use |
| --- | --- | --- |
| `--brand-cyan` | `technic-cyan` | Primary accent, links, focus, active nav |
| `--brand-cyan-deep` | `technic-cyan-deep` | Icons, link text, eyebrow labels |
| `--brand-orange` | `technic-orange` | Secondary accent only: one word, a badge, a small mark |
| `--brand-orange-deep` | `technic-orange-deep` | Orange badge text |
| `--text-primary` | `technic-text` | Headings |
| `--text-secondary` | `technic-secondary` | Body |
| `--text-muted` | `technic-muted` | Captions, meta |
| `--background` | `technic-bg` | Alternate sections |
| `--surface` | `technic-surface` / `bg-white` | Navbar, cards, forms |
| `--border` | `technic-border` | Default borders |
| `--cyan-soft` | `technic-cyan-soft` | Icon wells, cyan badges |
| `--orange-soft` | `technic-orange-soft` | Orange badges |
| `--success` / `--success-soft` | `technic-success` / `technic-success-soft` | Success only |
| `--error` / `--error-soft` | `technic-error` / `technic-error-soft` | Errors only |
| `--neutral-soft` | `technic-neutral-soft` | Draft / quiet chips |
| `--header` | `technic-header` | Table headers |
| `--brand-gradient` | `bg-brand-gradient` | Primary buttons and thin highlights only |

Balance: mostly white and `#F5FAFC`, then charcoal text, then a little cyan, then a little orange. Do not paint whole sections, sidebars, tables, or forms with the gradient.

In SVG and custom CSS use `var(--brand-cyan)`, `var(--brand-orange)`, `var(--text-primary)`, `var(--surface)`, `var(--border)`, and the other `:root` names.

## Fonts

Loaded in `app/layout.tsx`. Use only these:

| Font | Class | Use |
| --- | --- | --- |
| Inter | `font-sans` | Body, nav, buttons, forms. This is the default. |
| Raleway | `font-heading` | Headings (`h1`–`h4`, section titles) |
| Roboto | `font-technical` | Small tracked labels only |

Do not use Consolas, `font-mono`, or any other family.

## Font sizes

| Role | Classes |
| --- | --- |
| Hero title | `font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-technic-text` |
| Page title | `font-heading text-4xl md:text-6xl font-extrabold text-technic-text` |
| Section title | `font-heading text-3xl md:text-5xl font-bold text-technic-text` |
| Card title | `font-heading text-xl md:text-2xl font-bold text-technic-text` |
| Eyebrow | `text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep` |
| Section body | `text-lg text-technic-secondary leading-relaxed` |
| Card body | `text-base text-technic-secondary leading-relaxed` |
| Nav / UI | `text-sm font-medium text-technic-text` |
| Meta / caption | `text-xs or text-sm text-technic-muted` |

Highlight one or two words in a heading with `text-technic-cyan` or `text-technic-orange`. Do not gradient-fill whole headings.

## Page structure

```tsx
<div className="min-h-screen bg-white font-sans text-technic-secondary">
  <Navbar />
  <main className="pt-32 pb-20">{/* section */}</main>
  <Footer />
</div>
```

- Content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Reading width: `max-w-3xl` or `max-w-4xl`
- Top offset: `pt-32` so content clears the fixed navbar
- Section padding: `py-24`
- Section backgrounds alternate `bg-white` and `bg-technic-bg`
- Separate sections with spacing, a `border-technic-border`, or a shadow. Do not use dark bands.

Breakpoints: Tailwind defaults. Desktop nav appears at `lg`. Check 375, 768, and 1280.

## Surfaces

| Piece | Classes |
| --- | --- |
| Card | `bg-white border border-technic-border rounded-2xl shadow-tn-card` |
| Large card | `rounded-3xl` |
| Card hover | `hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300` |
| Icon well | `w-14 h-14 rounded-2xl bg-technic-cyan-soft text-technic-cyan-deep` |
| Secondary icon well | `bg-technic-orange-soft text-technic-orange` |
| Chip | `rounded-full px-3 py-1 text-xs font-semibold bg-technic-cyan-soft text-technic-cyan-deep` |

Shadows, already in `globals.css`: `shadow-tn-sm`, `shadow-tn-md`, `shadow-tn-lg`, `shadow-tn-card`.

## Buttons and forms

Primary:

`inline-flex items-center justify-center bg-brand-gradient text-white font-semibold rounded-full px-8 py-4 shadow-tn-md hover:opacity-95`

Secondary:

`inline-flex items-center justify-center bg-white border border-technic-border text-technic-text font-semibold rounded-full px-8 py-4 hover:border-technic-cyan hover:text-technic-cyan-deep`

Danger text or icons: `text-technic-error`. Do not invent a third button color.

Inputs use the `tn-input` class. Labels are `text-sm font-medium text-technic-text`. Errors use `bg-technic-error-soft text-technic-error` and `role="alert"`. Success uses `bg-technic-success-soft text-technic-success`.

## Motion and accessibility

Transitions stay between 200ms and 300ms: color, border, opacity, and a small lift. No bounce, no continuous flash, no large parallax.

Keep visible focus, real button text, labels on inputs, and alt text on images.

## Assets

- Logo: `/Assest/logo-brand.png`
- New images that do not exist yet need a placeholder until the asset from `PROMPT_TEMPLATES.md` is added.
<!-- END:project-design-rules -->
