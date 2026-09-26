# Technic Technologies — Public Site Design

Light theme only. Cyan and orange are the brand accents. Backgrounds stay white and `#F5FAFC`. There is no dark mode.

This file describes the UI that is actually built. `FRONTEND.md` describes routes and APIs. `AGENTS.md` tells agents how to apply this system. Do not invent a second palette, font, radius, or shadow.

## Tokens

Defined in `app/globals.css` `:root`. Tailwind utilities read these variables. Change a color in `:root` only.

| Token | Value | Class | Use |
| --- | --- | --- | --- |
| `--brand-cyan` | `#10b8d4` | `technic-cyan` | Primary accent, links, focus |
| `--brand-cyan-deep` | `#0797b2` | `technic-cyan-deep` | Icons, link text, eyebrows |
| `--brand-orange` | `#ff8a00` | `technic-orange` | Secondary accent: one word, a badge, a small mark |
| `--brand-orange-deep` | `#e86f00` | `technic-orange-deep` | Orange badge text |
| `--text-primary` | `#1f2937` | `technic-text` | Headings |
| `--text-secondary` | `#4b5563` | `technic-secondary` | Body |
| `--text-muted` | `#6b7280` | `technic-muted` | Captions, meta |
| `--background` | `#f5fafc` | `technic-bg` | Alternate sections |
| `--surface` | `#ffffff` | `technic-surface` | Cards, navbar, forms |
| `--border` | `#e5e7eb` | `technic-border` | Borders |
| `--success` | `#16a34a` | `technic-success` | Success text only |
| `--success-soft` | `#dcfce7` | `technic-success-soft` | Success panels |
| `--error` | `#dc2626` | `technic-error` | Error text only |
| `--error-soft` | `#fee2e2` | `technic-error-soft` | Error panels |
| `--cyan-soft` | `#e8f9fc` | `technic-cyan-soft` | Icon wells, cyan chips |
| `--orange-soft` | `#fff3e6` | `technic-orange-soft` | Orange chips |
| `--neutral-soft` | `#f3f4f6` | `technic-neutral-soft` | Quiet chips |
| `--header` | `#f8fafc` | `technic-header` | Reserved for table headers |
| `--brand-gradient` | `135deg, #10b8d4 → #ff8a00` | `bg-brand-gradient` | Primary buttons and thin highlights |
| `--focus-ring` | cyan at 20% | — | Input glow and text selection |

Balance: mostly white and `#F5FAFC`, then charcoal text, then a little cyan, then a little orange. Do not paint whole sections, sidebars, or forms with the gradient.

`color-scheme` is `light`. There is no `dark:` theme.

## Typography

Loaded in `app/layout.tsx`.

| Font | Class | Use |
| --- | --- | --- |
| Inter | `font-sans` | Body, nav, buttons, forms. Default |
| Raleway | `font-heading` | `h1`–section titles |
| Roboto | `font-technical` | Small tracked labels. Also mapped to `--font-mono` |

Do not add Consolas or another family.

| Role | Classes in use |
| --- | --- |
| Hero title | `font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-technic-text` |
| Section title | `font-heading text-3xl md:text-5xl font-bold text-technic-text` |
| Card title | `font-heading text-xl` or `text-2xl font-bold text-technic-text` |
| Eyebrow | `text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep` |
| Body | `text-lg text-technic-secondary leading-relaxed` |
| Meta | `text-xs` or `text-sm text-technic-muted` |

Highlight one or two words in a heading with `text-technic-cyan` or `text-technic-orange`. Do not gradient-fill a whole heading.

Blog and job prose use `.tn-prose` so headings, body, links, and strong text follow the tokens.

## Layout

```tsx
<div className="min-h-screen bg-white font-sans text-technic-secondary">
  <Navbar />
  <main className="pt-32 pb-20">{/* section */}</main>
  <Footer />
</div>
```

The root layout does not include the navbar or footer. Each page does.

- Content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Reading width: `max-w-3xl` or `max-w-4xl` for articles and legal prose
- Top offset: `pt-32` so content clears the fixed navbar. Some heroes use `pt-28` or `md:pt-40`
- Section padding: `py-24` or `py-20 md:py-24`
- Sections alternate `bg-white` and `bg-technic-bg`
- Separate sections with space, `border-technic-border`, or a shadow. Do not use dark bands

## Navigation

- Logo: `/Assest/logo-brand.png`. Do not redraw it as text.
- Desktop links appear at `lg` (1024px). They are `text-sm font-medium`. The active item is `text-technic-cyan`.
- “Let’s Talk” is the navbar primary button and goes to `/contact`.
- Below `lg`, a bordered icon button opens a white panel under the bar. Active items use `bg-technic-cyan-soft`. Choosing a link closes the panel.
- The bar is fixed, white, with a bottom border. After 20px of scroll it tightens vertical padding and adds `shadow-tn-sm`.
- Footer is `bg-technic-bg`, four columns from `md`: brand, services, products, company. Service and product names come from the API. Social SVGs are decorative and are not links.

Nav labels: Home, Products, Services, Solutions, About, Insights, Careers, Contact.

## Surfaces

| Piece | Classes |
| --- | --- |
| Card | `bg-white border border-technic-border rounded-2xl shadow-tn-card` |
| Large card / form shell | `rounded-3xl` or `rounded-[2rem]` |
| Card hover | `hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300` |
| Icon well | `w-14 h-14 rounded-2xl bg-technic-cyan-soft text-technic-cyan-deep` |
| Secondary icon well | `bg-technic-orange-soft text-technic-orange` |
| Chip | `rounded-full px-3 py-1 text-xs font-semibold` on a soft cyan or orange fill |

Shadows, already in `globals.css`: `shadow-tn-sm`, `shadow-tn-md`, `shadow-tn-lg`, `shadow-tn-card` (`0 8px 30px rgba(31,41,55,0.06)`).

## Buttons and inputs

Primary:

`inline-flex items-center justify-center bg-brand-gradient text-white font-semibold rounded-full px-8 py-4 shadow-tn-md hover:opacity-95`

Full-width form submits on the main contact and career forms use `rounded-2xl` and `w-full` instead of the pill. Keep that on those existing forms.

Secondary:

`inline-flex items-center justify-center bg-white border border-technic-border text-technic-text font-semibold rounded-full px-8 py-4 hover:border-technic-cyan hover:text-technic-cyan-deep`

Disabled submits: `disabled:opacity-50` or `disabled:opacity-60`, `disabled:cursor-not-allowed`.

Inputs use `.tn-input`: white, 1px border, `1rem` radius, padding `1rem 1.25rem`, cyan border and a 4px focus ring. Labels are `text-sm font-medium text-technic-text`.

Errors: `bg-technic-error-soft text-technic-error` and `role="alert"`.

Success: `bg-technic-success-soft text-technic-success` and `role="status"`.

There is no toast and no modal. Confirmation replaces or sits inside the form.

Focus: `:focus-visible` is a 2px cyan outline with 2px offset on links, buttons, inputs, selects, and textareas.

## Pages

| Page | What the screen is |
| --- | --- |
| Home | Hero with badge, two CTAs, and `HeroVisual`. Then product/service relationship, product cards, service cards, six-step process, about plus stats, contact split panel |
| Products | Reused `Hero` (“Proprietary AI Platforms.”) and product cards with a short description and View Details |
| Product detail | `/products/[slug]`. Breadcrumb, category, name, tagline, summary, store or website actions, hero image, then only the blocks the API filled: feature cards, showcase, rich HTML (`RichContent`), technologies, mobile screenshots, website preview, gallery, CTA, other products |
| Services | Custom hero with `/Assest/service.png`, static capability cards, API service cards, static process, technology groups, reasons, inquiry form |
| Service detail | Breadcrumb, hero copy plus image, then only the blocks the API filled: benefits, overview, capabilities, process, technologies, use cases, FAQ, CTA, related cards |
| Solutions | Hero, static advantages, API industry cards with images, why section, process, technology chips, global image, inquiry split |
| Solution detail | Same sectional pattern as a service, plus metrics when present. CTA returns to `/solutions#contact` |
| About | `CompanyJourney`, then the about copy, four static stats, and the engineering-impact card grid (`AboutGrid`). The page-level `Hero` is commented out. The same about block also sits on the home page |
| Blog | Centered “TechNic Insights” header and a 1/2/3 column card grid |
| Article | Back link, white `rounded-[2rem]` article, category chip, optional image, prose, tags, gallery, video link |
| Careers | Intro, three reason cards, job rows |
| Job | Back link, meta chips, responsibilities, requirements, skills, then the application block |
| Contact | `ContactHero`, then the same contact panel as the home page |
| Privacy and terms | Legal eyebrow, split hero, sticky section list, numbered sections, contact CTA. Privacy copy on the page says it is a draft |

## Lists and cards

Product card: icon well, type chip, name, tagline, short description, feature chips, gradient “View Details” button to `/products/[slug]`.

Rich HTML from `longDescription` (and blog `content`) is rendered by `components/RichContent.tsx` inside `.tn-prose`. The same sanitizer strips scripts before display. Blog articles still pass markdown through `lib/markdown.ts`, which sanitizes the HTML it produces.

Service card on the services page: order number, icon, title, short description, up to three technology chips, “Learn More” to the detail route.

Solution card: image via `SolutionVisual`, icon, order, title, short description, “Learn More”.

Blog card: image area (`bg-technic-cyan-soft` when there is no image), orange category chip, date, title, excerpt, author, arrow.

Job row: title plus department, location, and employment type, with an arrow chip. The whole row is a link.

There are no data tables. `--header` is unused by current screens.

## Forms

| Form | Layout |
| --- | --- |
| Main contact | White shell. Left `lg:w-2/5` panel on `bg-technic-bg` with address, email, phone, WhatsApp. Right side is the form. Two-column names from `md` |
| Services inquiry | Card, `sm:grid-cols-2`. Name and email share a row. Service and details span both columns |
| Solutions inquiry | Single column inside a `rounded-3xl` card |
| Application | Centered `max-w-2xl` card. Dynamic fields. Textareas, file inputs, portfolio, and LinkedIn span both columns from `md` |

Required career labels show a red asterisk. Other forms rely on the browser `required` tooltip. There are no per-field error strings.

## FAQ

`ServiceFaqs` is a stack of white `rounded-2xl` rows. The question is a full-width button. The open row shows `−`; closed rows show `+`. The first question starts open. Used on service and solution detail.

## Motion

- GSAP entrance and scroll reveals on services, solutions, and legal pages (`data-hero`, `data-reveal`, `data-card`).
- Framer Motion on the company journey.
- CSS float/entrance on the contact hero.
- Hover lifts are 300ms. Color and opacity transitions are about 200ms.
- When `prefers-reduced-motion: reduce` matches, the GSAP wrappers and the engineering-impact animation do not run. The contact hero also has a reduced-motion media query.

Do not add bounce, continuous flash, or large parallax.

## Responsive

Breakpoints are Tailwind defaults. The nav switches at `lg`.

| Width | Behavior |
| --- | --- |
| Phone (~375) | One column. Hero CTAs stack full width. Mobile nav panel. Forms are one column |
| Tablet (`md`, 768) | Card grids become two columns. Footer becomes four columns. Several heroes become two columns. Form name fields sit side by side |
| Desktop (`lg`, 1024) | Horizontal nav. Contact panel splits. Product grids stay two columns. Service and solution grids become three |

Check 375, 768, and 1280 when changing layout.

## States

| State | UI |
| --- | --- |
| Detail loading | Pulse blocks in `bg-technic-bg` under the navbar |
| Detail route error | Centered heading and a gradient Try Again button |
| Missing service or solution | Centered heading, short explanation, gradient link back to the catalog |
| Services or solutions fetch error | Bordered card: “Unable to load services.” or “Unable to load solutions.” plus Try Again |
| Careers fetch error | “Open positions could not be loaded” |
| Careers empty | “No open positions right now” |
| Blog empty or failed | “No published articles yet” |
| Products empty or failed | The grid is simply empty |
| Form submitting | Button label changes and the button is disabled |
| Form success | Green panel or green text. Main contact form offers “Send another message” |
| Form error | Red alert with the API message. Fields stay filled |

## Accessibility

- Navbar logo link has an accessible name. The menu button sets `aria-expanded` and an open/close label.
- Active nav links set `aria-current="page"`.
- Form fields have `<label>` elements. Success and error regions use `role="status"` and `role="alert"`.
- FAQ buttons set `aria-expanded`.
- Decorative gradients and footer icons are `aria-hidden`.
- Images that are content have `alt` text. Service and solution heroes use the title.

## Role-based UI

There is none. Every screen is public. Do not add hidden admin actions to these pages.

## Assets

- Logo: `/Assest/logo-brand.png`
- Services hero: `/Assest/service.png`
- About: `/Assest/about2.png`
- Legal heroes: `/Assest/privacy policy.png`, `/Assest/tremand condtions.png` (the filename is spelled that way)
- Solutions: files under `/Solution/`, chosen by slug when the API image is missing
- `lib/publicImage.ts` hides a local image path when the file is not in `public/`

`next/image` may optimize local files and URLs on `res.cloudinary.com` or `www.transparenttextures.com`. Other remote hosts are not allow-listed.
