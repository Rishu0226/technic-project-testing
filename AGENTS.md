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

<!-- BEGIN:project-implementation-rules -->
# Technic Technologies — Public site implementation

`FRONTEND.md` is the inventory of routes, APIs, forms, and flows. `DESIGN.md` is the visual system. Follow both. The source code wins when an older note (`PROJECT_DOCUMENTATION.md`, `PROJECT_DEEP_ANALYSIS.md`, `CONTACT_FORM_SETUP_PLAN.md`) disagrees.

This app is the public marketing site in `technic-technologies`. It is not the admin app and it is not the backend.

## Stack

- Next.js 16 App Router, React 19, TypeScript.
- Tailwind CSS v4. Tokens live only in `app/globals.css`.
- No Redux, Zustand, React Query, React Hook Form, Zod, toast library, or modal library.
- HTTP goes through `lib/api.ts` (`ApiClient`) or `fetch` against `API_BASE_URL`.
- Dev and start scripts use port `3005`.

## Folder conventions

- Routes belong in `app/`. Each page renders `Navbar`, a `main` (or equivalent), and `Footer`. The root layout does not render them.
- Shared UI belongs in `components/`, grouped by feature (`Services`, `solutions`, `About`, `Contact`, `legal`).
- API access, types used by fetchers, and small helpers belong in `lib/`. Solution types live in `types/solution.ts`.
- Navigation labels live in `lib/data.tsx` (`navItems`). Do not put product or service catalogs back into that file.
- Static marketing copy that is not from the API stays next to its feature (`servicesData.ts`, `solutionsContent.ts`, `legalContent.ts`).

## Routing

Public routes only. There is no middleware and no auth.

| Path | Notes |
| --- | --- |
| `/` | Home sections |
| `/products`, `/products/[slug]` | Product cards link to the published detail page. Store and website buttons use the saved URLs |
| `/services`, `/services/[slug]` | Catalog and published detail |
| `/solutions`, `/solutions/[slug]` | Catalog and published detail |
| `/about` | Journey + about section |
| `/blog`, `/blog/[slug]` | Insights |
| `/career`, `/career/[slug]` | Jobs and application |
| `/contact` | Contact hero + form |
| `/privacy-policy`, `/terms-of-service` | Static legal copy |

Detail helpers in `lib/getService.ts` and `lib/getSolution.ts` treat HTTP 404 and `status === "Draft"` as not found. Do not show drafts on those pages.

`app/sitemap.ts` is incomplete relative to the routes above. If you add a public page, add it to the sitemap and the navbar or footer when the design includes it.

## API conventions

- Base URL: `NEXT_PUBLIC_API_URL`, default `http://localhost:3001`.
- Calls are public. Do not add an `Authorization` header unless the product gains auth.
- Keep `cache: "no-store"`. The root layout is `force-dynamic`.
- `ApiClient` always sends JSON. Do not use it for binary uploads.
- Used endpoints, and only these, unless the backend contract changes and the UI is updated together:
  - `GET /api/services`, `GET /api/services/:slug`
  - `GET /api/products`
  - `GET /api/solutions`, `GET /api/solutions/:slug`
  - `GET /api/settings`
  - `GET /api/blogs`, `GET /api/blogs/:slug`
  - `GET /api/careers`, `GET /api/careers/:slug`
  - `POST /api/contact`
  - `POST /api/careers/:slug/applications`
- `ApiClient.put` and `ApiClient.delete` are unused. Do not call them for new UI without a real backend route.
- Contact POST bodies use `firstName`, `lastName`, `email`, `phone`, `interest`, `message`. The services and solutions forms split a full name and prefix the message with the company. Do not rename those keys casually.
- Read errors as `data.error`, then `data.message`, then status text. Show that string in an inline `role="alert"`. There is no toast.

## State

- Server Components fetch catalogs.
- Client state is `useState` for the navbar, forms (`idle | submitting | success | error`), the FAQ index, and the legal sidebar.
- Do not introduce a global store for this site.
- Do not persist form data or session data in `localStorage`.

## Forms

- Native forms and `FormData`. No schema library.
- Required fields use the `required` attribute. Errors and success use the existing soft red and soft green styles.
- Disable the submit button while `submitting`, and ignore a second submit.
- On success, reset the form and show the API `message` when present.
- Job application fields come from `job.applicationFields`. Hide `active === false`. A file input is not a working upload: the body is JSON.

## UI states

- Services and solutions list failures have visible copy and a way to try again. Keep that. Do not collapse an error into an empty grid on those pages.
- Careers already distinguish load failure from an empty list. Keep that distinction.
- Blog list currently shows the empty copy for both an empty array and a failed fetch. Do not make that worse.
- Missing or draft service/solution slugs use the existing `not-found` pages.
- Service and solution detail routes already have `loading.tsx` skeletons and `error.tsx` retry buttons.

## Components and naming

- Match the surrounding file’s component style. The app mixes `function` declarations and `React.FC`. Do not rewrite unrelated files for style.
- Path alias `@/*` exists. Most imports are relative. Stay consistent with the file you are editing.
- Map API icon strings through `IconMapper`. Add new names there when the API starts sending them.
- `next/image` may load only local files plus the hosts in `next.config.ts` (`res.cloudinary.com`, `www.transparenttextures.com`). Blog images use `<img>` on purpose.

## Reuse existing UI

Search `components/` and `lib/` before adding a file. This site has no shared `Button`, `Input`, `Select`, `Modal`, `Dialog`, `Drawer`, `DataTable`, pagination, toast, or form-field component. Do not add that layer, and do not install a library for it.

Use this order: existing component, then different props, then an optional prop on that component, then a feature component that composes the pieces below. Add a new shared component only when none of those can cover the behavior.

| Need | Reuse |
| --- | --- |
| Page chrome | `Navbar`, `Footer`, and the page shell in `DESIGN.md` |
| Marketing hero | `components/Hero.tsx` (`badgeText`, `title`, description, actions) |
| Cards, chips, icon wells | The classes in `DESIGN.md`. Do not add a `Card` component for one screen |
| Buttons and links | The primary and secondary class strings in `DESIGN.md`. Full-width `rounded-2xl` submits stay on the existing contact and career forms only |
| Fields | `tn-input`, a `text-sm font-medium text-technic-text` label, and a native `input`, `select`, or `textarea` |
| Inquiry form | `components/InquiryForm.tsx` through `ServicesContact` or `SolutionsContact`. Payload helper is `lib/inquiryContact.ts`. Do not copy the name split, company prefix, or `/api/contact` post |
| Main contact or job application | `ContactSection` or `CareerApplicationForm`. Same status values: `idle \| submitting \| success \| error`. Native `<form>` and `FormData`. Disable submit while `submitting`. Errors use `role="alert"`. Success uses `role="status"` |
| FAQ | `ServiceFaqs` |
| Legal page | `LegalLayout`, `LegalBreadcrumb`, `LegalSidebar`, `LegalSection` |
| API icons | `IconMapper` |
| HTTP | `lib/api.ts` (`ApiClient`). Error text stays `data.error`, then `data.message`, then status text |
| Catalog fetch failure | `CatalogLoadError` |
| Detail route error | `RouteErrorState` inside the route `error.tsx` |
| Missing service, solution, article, or job | `DetailNotFound` inside that route’s `not-found.tsx` |
| Unknown address | `app/not-found.tsx` (`DetailNotFound`) |
| Named page that is not built yet | `ComingSoon` |
| Detail loading | `DetailLoading` inside the route `loading.tsx` |
| Other empty states | The careers and blog messages already on those pages |

A feature file under `components/` is appropriate when the screen has its own content. Inside it, reuse the rows above. Do not copy `ApiClient`, contact field names (`firstName`, `lastName`, `email`, `phone`, `interest`, `message`), or the success and error panels into a second helper.

Before changing `Navbar`, `Footer`, `Hero`, `IconMapper`, `ApiClient`, or `tn-input`, check current callers. New props stay optional and keep the current defaults.

```tsx
<label className="text-sm font-medium text-technic-text">Email</label>
<input name="email" type="email" required className="tn-input mt-2" />
<button
  type="submit"
  disabled={status === "submitting"}
  className="inline-flex items-center justify-center bg-brand-gradient text-white font-semibold rounded-full px-8 py-4 shadow-tn-md hover:opacity-95 disabled:opacity-60"
>
```

Do not add `PrimaryButton`, `UserForm`, `ConfirmModal`, `DataTable`, or another API client for a single page.

## Responsive

- Desktop nav starts at `lg`. Below that, the hamburger panel is the navigation.
- Content width is `max-w-7xl` with `px-4 sm:px-6 lg:px-8`.
- Clear the fixed navbar (`pt-32` on standard pages).
- Check layout at 375, 768, and 1280.

## Business rules that must not break

- The site stays public. Do not add login walls to marketing pages.
- Do not render a service or solution whose detail payload is `Draft`.
- Product cards do not have detail URLs. Their actions go to `/contact`.
- Footer product links go to `/products`. Footer service links go to `/services/[slug]` when a slug exists.
- Privacy copy in `components/legal/legalContent.ts` is marked as a draft. Do not present it as approved legal policy.
- Company stats on the about section are static marketing figures, not API data.
- `RESEND_API_KEY` and `CONTACT_EMAIL` are not read by this frontend. Inquiries go to `POST /api/contact` on the backend.

## Do not break

- `app/globals.css` token names and the `tn-input` / `tn-prose` classes.
- `lib/api.ts` error message order.
- Contact and application success/error regions (`role="status"` / `role="alert"`).
- Reduced-motion early returns in the GSAP wrappers.
- Canonical metadata that uses `NEXT_PUBLIC_SITE_URL` on service, solution, and legal pages.
<!-- END:project-implementation-rules -->
