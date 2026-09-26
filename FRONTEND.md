# Technic Technologies — Frontend

This document describes the **current public website** in `technic-technologies`. It was written from the source code. Where an older document disagrees with the code, the code is the source of truth and the conflict is called out.

This is a public marketing site. It has no login, no roles, and no admin UI. Content for products, services, solutions, blogs, careers, and contact details comes from the separate backend API.

---

## A. Project Overview

| Item | Actual implementation |
| --- | --- |
| Project name | `technic-technologies` (`package.json` version `0.1.0`, private) |
| Purpose | Marketing site for Technic Technologies: proprietary products, engineering services, industry solutions, company story, insights, careers, and contact |
| Business domain | Software products and technology services (SaaS, cloud, AI, web, mobile, enterprise engineering) |
| Frontend framework | Next.js `16.2.10` App Router |
| Language | TypeScript `^5`, React `19.2.4`, React DOM `19.2.4` |
| UI library | No component kit (no shadcn, MUI, or Radix). UI is custom components plus [Lucide React](https://lucide.dev) icons |
| CSS | Tailwind CSS `^4` via `@tailwindcss/postcss`. Tokens live in `app/globals.css` |
| State management | React `useState` in client components. Server Components fetch on each request. `React.cache` dedupes service and solution detail lookups inside one request. No Redux, Zustand, React Query, or Context store |
| Form library | None. Native `<form>` plus `FormData` |
| Validation library | None. HTML `required`, `type="email"`, and `type="tel"` only |
| API layer | `lib/api.ts` `ApiClient` (`fetch` wrapper) and a few direct `fetch` calls to the same base URL |
| Authentication | None. No tokens, cookies, sessions, or `Authorization` header |
| Build / dev | `next dev -p 3005`, `next build`, `next start -p 3005`, `eslint` with `eslint-config-next` `16.2.10` |
| Rendering | Root layout sets `export const dynamic = "force-dynamic"`. API reads use `cache: "no-store"` |

Important libraries that are actually imported:

| Package | Use |
| --- | --- |
| `next` | App Router, `Image`, `Link`, `Metadata`, `notFound`, sitemap, robots |
| `react` / `react-dom` | UI |
| `lucide-react` | Icons |
| `gsap` | Scroll and entrance motion on services, solutions, legal pages, and engineering impact |
| `framer-motion` | Company journey animation in `components/About/CompanyJourney.tsx` |
| `tailwindcss` | Styling |

Not present: axios, React Query / TanStack Query, Redux, Zustand, React Hook Form, Zod, a toast library, a modal library, an auth provider, WebSocket, or SSE.

---

## B. Project Structure

```text
technic-technologies/
├── app/
│   ├── layout.tsx                 # Root HTML, fonts, default metadata, force-dynamic
│   ├── page.tsx                   # Home
│   ├── globals.css                # Brand tokens, Tailwind theme, .tn-input, .tn-prose
│   ├── robots.ts                  # /robots.txt
│   ├── sitemap.ts                 # /sitemap.xml
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── career/page.tsx
│   ├── career/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── services/page.tsx
│   ├── services/[slug]/          # page, layout, loading, error, not-found
│   ├── solutions/page.tsx
│   ├── solutions/error.tsx
│   ├── solutions/[slug]/         # page, layout, loading, error, not-found
│   ├── privacy-policy/page.tsx
│   └── terms-of-service/page.tsx
├── components/
│   ├── Navbar.tsx, Footer.tsx, Hero.tsx, HeroVisual.tsx, BackgroundLights.tsx
│   ├── IconMapper.tsx, ProcessSection.tsx, ProductsSection.tsx, ServicesSection.tsx
│   ├── ProductServicesRelationship.tsx, CareerApplicationForm.tsx
│   ├── About/                    # About section, journey, stats, engineering impact
│   ├── Contact/                  # Contact hero and contact form
│   ├── Services/                 # Services page, service detail, FAQs, contact form
│   ├── solutions/                # Solutions page, detail, cards, contact form
│   └── legal/                    # Shared legal layout and static copy
├── lib/
│   ├── api.ts                    # API_BASE_URL + ApiClient
│   ├── data.tsx                  # Navigation items only
│   ├── service.ts                # PublicService type + default process steps
│   ├── getService.ts             # Published service + related services
│   ├── getSolution.ts            # Published solution + related solutions
│   ├── markdown.ts               # Blog markdown/HTML renderer
│   └── publicImage.ts            # Local public-file existence check
├── types/solution.ts
├── public/Assest/                # Brand images and hero video
├── public/Solution/              # Industry solution images
├── AGENTS.md                     # Agent rules (Next.js note + design system)
├── DESIGN.md                     # Design tokens and UI rules
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json                 # Path alias @/* → ./*
└── package.json
```

There is no `middleware.ts`, no `app/api` route handlers, and no `hooks/` or `store/` directory.

| Path | Responsibility |
| --- | --- |
| `app/` | File-based routes, metadata, loading / error / not-found for services and solutions |
| `components/` | Page sections and shared chrome. Several data sections are async Server Components |
| `lib/api.ts` | Single HTTP client. Always `cache: "no-store"` and `Content-Type: application/json` |
| `lib/data.tsx` | `navItems` for the navbar. It does not supply products or services |
| `lib/getService.ts`, `lib/getSolution.ts` | Detail fetches. A `Draft` record is treated as not found |
| `lib/markdown.ts` | Turns blog `content` into HTML. Strips `<script>` if the content is already HTML |
| `lib/publicImage.ts` | Returns a public path only if the file exists under `public/`. Remote `http(s)` URLs are returned as-is |
| `types/solution.ts` | Solution response shape used by the solutions UI |

Older docs (`PROJECT_DOCUMENTATION.md`, `PROJECT_DEEP_ANALYSIS.md`) still describe a folder named `technic-project-testing`, glassmorphism, and “no API calls.” Those statements do not match this codebase.

---

## 4. Route inventory

Every page is public. There is no authentication and no role check.

| Route | Page file | Purpose | Authentication | Role | APIs used |
| --- | --- | --- | --- | --- | --- |
| `/` | `app/page.tsx` | Home: hero, product/service story, products, services, process, about, contact | Public | None | `GET /api/products`, `GET /api/services`, `GET /api/settings`, `POST /api/contact` (via sections and footer) |
| `/about` | `app/about/page.tsx` | Company journey and about section | Public | None | Footer only: `GET /api/services`, `GET /api/products` |
| `/products` | `app/products/page.tsx` | Product hero plus product cards. Cards link to `/contact`, not a product detail page | Public | None | `GET /api/products` plus footer |
| `/services` | `app/services/page.tsx` | Services marketing page. Core cards come from the API | Public | None | `GET /api/services`, `POST /api/contact` (services form), footer |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Published service detail | Public | None | `GET /api/services/:slug`, `GET /api/services` (related), footer |
| `/solutions` | `app/solutions/page.tsx` | Industry solutions page and inquiry form | Public | None | `GET /api/solutions`, `GET /api/settings`, `POST /api/contact`, footer |
| `/solutions/[slug]` | `app/solutions/[slug]/page.tsx` | Published solution detail | Public | None | `GET /api/solutions/:slug`, `GET /api/solutions` (related), footer |
| `/blog` | `app/blog/page.tsx` | Insights list | Public | None | `GET /api/blogs`, footer |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Article. `notFound()` when the API fails or the slug is missing | Public | None | `GET /api/blogs/:slug`, footer |
| `/career` | `app/career/page.tsx` | Open positions | Public | None | `GET /api/careers`, footer |
| `/career/[slug]` | `app/career/[slug]/page.tsx` | Job detail and application form | Public | None | `GET /api/careers/:slug`, `POST /api/careers/:slug/applications`, footer |
| `/contact` | `app/contact/page.tsx` | Contact hero and inquiry form | Public | None | `GET /api/settings`, `GET /api/services`, `GET /api/products`, `POST /api/contact`, footer |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Static privacy copy. Contact email from settings | Public | None | `GET /api/settings`, footer |
| `/terms-of-service` | `app/terms-of-service/page.tsx` | Static terms copy. Contact email from settings | Public | None | `GET /api/settings`, footer |
| `/coming-soon` | `app/coming-soon/page.tsx` | Placeholder for a named page that is not built yet | Public | None | Footer |
| `/sitemap.xml` | `app/sitemap.ts` | Static sitemap. See gaps below | Public | None | None |
| `/robots.txt` | `app/robots.ts` | Allow all, point at the sitemap | Public | None | None |

Supporting route files (not extra URLs):

| File | Behavior |
| --- | --- |
| `app/services/[slug]/layout.tsx` | Loads the service again. Missing or draft calls `notFound()` |
| `app/services/[slug]/loading.tsx` | Pulse skeleton with navbar |
| `app/services/[slug]/error.tsx` | “Unable to load this service.” and a Try Again button that calls `reset()` |
| `app/services/[slug]/not-found.tsx` | “Service Not Found” and a link to `/services` |
| `app/solutions/error.tsx` | “Unable to load solutions.” and Try Again |
| `app/solutions/[slug]/layout.tsx` | Same draft/missing check as services |
| `app/solutions/[slug]/loading.tsx` | Pulse skeleton |
| `app/solutions/[slug]/error.tsx` | “Unable to load solutions.” and Try Again |
| `app/solutions/[slug]/not-found.tsx` | “Solution Not Found” and a link to `/solutions` |
| `app/blog/[slug]/not-found.tsx` | “Article not found” and a link to `/blog` |
| `app/career/[slug]/not-found.tsx` | “Job not found” and a link to `/career` |
| `app/not-found.tsx` | “Page not found” for any other unknown address, with a link home |

Blog and career pages call `notFound()` when the slug is missing. That renders the matching `not-found.tsx` above.

In-page anchors that are not routes: `#products`, `#services`, `#about`, `#contact`, `#industries`, `#apply`.

Navbar (`lib/data.tsx`): Home, Products, Services, Solutions, About, Insights (`/blog`), Careers, Contact, plus a “Let’s Talk” link to `/contact`.

Sitemap currently lists only `/`, `/about`, `/blog`, `/contact`, `/products`, `/services`. It does **not** list `/solutions`, `/career`, `/privacy-policy`, `/terms-of-service`, or any dynamic slug.

---

## 5. User flows

There is no login, register, logout, forgot password, OTP, email verification, refresh token, or role redirect.

### Browse the site

```text
Request any page
      ↓
Root layout (Inter, Raleway, Roboto, force-dynamic)
      ↓
Page Server Component
      ↓
Fetch public API data where that page needs it (cache: no-store)
      ↓
Render Navbar + page + Footer
      ↓
Footer fetches services and products for link columns
```

A failed footer fetch is logged and the column falls back to “View services” or “View products”.

### Mobile navigation

```text
Viewport below lg
      ↓
Hamburger toggles a full-width panel under the fixed navbar
      ↓
Choosing a link closes the panel
```

Desktop nav (`lg` and up) is a horizontal link row. Active state: exact path, or a path that starts with the item href. Hash links such as `/#...` are never marked active. The current `navItems` do not use hash hrefs.

### Service detail

```text
Open /services/[slug]
      ↓
Layout and page both call GET /api/services/:slug (deduped with React.cache)
      ↓
404 or status "Draft" → not-found page
      ↓
Other HTTP failure → error boundary (“Unable to load this service.”)
      ↓
Published service renders hero, optional sections, related services (up to 3)
```

Solution detail follows the same pattern with `/api/solutions/:slug`.

### Blog article

```text
Open /blog/[slug]
      ↓
GET /api/blogs/:slug
      ↓
Failure or empty → notFound()
      ↓
Render title, excerpt, optional image, markdown/HTML body, tags, gallery, video link
```

The list page does not separate an API failure from an empty list. Both show “No published articles yet.”

### Career application

```text
Open /career
      ↓
GET /api/careers
      ↓
Failure → “Open positions could not be loaded”
Empty array → “No open positions right now”
      ↓
Open /career/[slug]
      ↓
GET /api/careers/:slug
      ↓
Missing → notFound()
      ↓
If applicationFields is empty → email instructions (job.applicationEmail or careers@technic.dev)
Else → render active fields and POST /api/careers/:slug/applications
```

---

## 6. Business flows

### Home

1. Entry: `/`.
2. Static hero, product/service relationship, and process sections render without an API.
3. `ProductsSection` and `ServicesSection` fetch catalogs. `ContactSection` fetches settings, services, and products, then can submit an inquiry.
4. No client validation beyond HTML attributes on the form.
5. Loading: server render waits on the fetches. There is no home-page skeleton.
6. Success: cards and contact details render.
7. Error: product and service sections log the error and render an empty grid. Contact details stay hidden if settings fail. The form still renders with interest option “Other Inquiry”.
8. Product card CTA and “Request Platform Demo” go to `/contact`. Service cards go to `/services/[slug]`.

### Products

1. Entry: `/products`.
2. Hero is static. Cards come from `GET /api/products`.
3. Fields shown: `icon`, `name`, `tagline`, `description`, `features[]`.
4. There is no product detail route, search, filter, sort, or pagination.
5. Empty or failed fetch: the grid is empty. No empty or error message on this page.
6. Every “Explore {name}” link goes to `/contact`.

### Services catalog

1. Entry: `/services`.
2. Hero, capabilities, process, technology groups, and reasons are static (`components/Services/servicesData.ts`).
3. “Our Core Services” cards come from `GET /api/services`.
4. Failure: “Unable to load services.” with a Try Again link that reloads `/services`.
5. Success with an empty array: an empty grid. No separate empty copy.
6. Each card links to `/services/[slug]`.
7. The page contact form posts to `POST /api/contact`. Its service dropdown is the **static** `coreServices` titles, not the API list.

### Service detail

1. Entry: `/services/[slug]`.
2. Draft or 404: not-found page.
3. Sections render only when the API supplied data: benefits, overview, key capabilities, process (falls back to `defaultProcess` in `lib/service.ts`), technologies, use cases, FAQ accordion, CTA, related services.
4. Primary CTA goes to `/contact`. “View Our Work” goes to `/#products`.
5. Related services: `GET /api/services`, drop the current slug, take 3. A failed related fetch returns `[]` and the related block is omitted.

### Solutions catalog

1. Entry: `/solutions`.
2. Advantages, why-points, process, and technology chips are static (`solutionsContent.ts`).
3. Industry cards come from `GET /api/solutions`.
4. Card image: uploaded `cardImage` or `heroImage` if that public file exists, otherwise a local image matched by slug in `solutionImages.ts`.
5. Failure: “Unable to load solutions.” Empty success: empty grid.
6. Email and phone in the closing section come from `GET /api/settings`. A settings failure leaves them blank.
7. Inquiry form posts to `POST /api/contact`.

### Solution detail

Same shape as service detail: benefits, overview, capabilities, process, technologies, use cases, metrics, FAQ, CTA to `/solutions#contact`, up to 3 related solutions. Draft or 404 becomes the solution not-found page.

### Contact inquiry

Used from `/`, `/contact`, `/services`, and `/solutions`.

```text
User fills the form
      ↓
Browser required/email checks
      ↓
status = submitting, button disabled
      ↓
POST /api/contact as JSON
      ↓
Success → green message, form reset
      ↓
Error → red alert with API message, form values kept
```

The main contact form replaces the form with a success panel and a “Send another message” button. The services and solutions forms replace the form with the success text only. There is no toast and no redirect.

### Blog

1. Entry: `/blog`, then `/blog/[slug]`.
2. List fields: `featuredImage`, `category`, `publishedAt` or `createdAt`, `title`, `excerpt`, `author`, `slug`.
3. No search, filter, sort, or pagination. The API array is rendered as returned.
4. Article body uses `markdownToHtml`. If the string already looks like HTML, scripts are stripped and the rest is injected. Otherwise headings, lists, bold, italic, code, and `http(s)` links are converted.
5. Optional `tags`, `gallery`, and `video` (external link, `target="_blank"`).

### Careers

Documented in section 5. Job detail shows department, location, employment type, and optional experience and salary. Responsibilities, requirements, and skills render when present.

Application submit:

```text
Prevent double submit
      ↓
Copy FormData into a plain object
      ↓
POST JSON to /api/careers/:slug/applications
      ↓
Success → green panel, form reset (no second-application button)
Error → red alert, form kept
```

If a field `type` is `file`, an `<input type="file">` is rendered, but the client still `JSON.stringify`s the body. A `File` does not survive that. Binary upload is not implemented.

### Legal pages

1. Entry: `/privacy-policy` or `/terms-of-service`.
2. Section copy is static in `components/legal/legalContent.ts`. The privacy page says the copy is a draft and needs legal review.
3. `GET /api/settings` supplies the email used in the contact CTA. Failure leaves the email blank.
4. Sidebar highlights the section near a reading line of 140px. Clicking a section sets it active until scroll catches up.
5. Updated date in the UI is the constant `legalUpdated` (`September 25, 2026`).

---

## 7. API inventory

Base URL: `process.env.NEXT_PUBLIC_API_URL` or `http://localhost:3001`.

Every call is unauthenticated. `ApiClient` sets `Content-Type: application/json` and `cache: "no-store"`. Direct `fetch` calls set `cache: "no-store"` and no custom auth header.

`ApiClient.put` and `ApiClient.delete` exist and are not called anywhere.

| Method | Endpoint | Purpose | Called from | Auth | Request | Response used by the UI | Error handling |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GET | `/api/services` | Service list | `Footer`, `ServicesSection`, `ContactSection`, `app/services/page.tsx`, `lib/getService.ts` (`getRelatedServices`) | None | None | Array of service objects. Footer uses `title`, `slug`. Contact uses `title`. Home cards use `_id`, `title`, `description`, `icon`, `slug`. Services page uses `PublicService` | Footer, home section, and contact log and continue. Services page sets `loadFailed`. Related helper returns `[]` |
| GET | `/api/services/:slug` | One service | `lib/getService.ts` via service layout, page, and metadata | None | Path `slug` | `PublicService` | HTTP 404 or `status === "Draft"` → `null` → not-found. Other failures throw → error boundary |
| GET | `/api/products` | Product list | `Footer`, `ProductsSection`, `ContactSection` | None | None | Array. UI uses `_id`, `name`, `tagline`, `description`, `features`, `icon` | Logged. Footer shows fallback link. Product grid can be empty. Contact interest list omits products |
| GET | `/api/solutions` | Solution list | `app/solutions/page.tsx`, `lib/getSolution.ts` (`getRelatedSolutions`) | None | None | `Solution[]` | Page sets `loadFailed`. Related helper returns `[]` |
| GET | `/api/solutions/:slug` | One solution | `lib/getSolution.ts` via solution layout, page, and metadata | None | Path `slug` | `Solution` | Same draft/404/error split as services |
| GET | `/api/settings` | Company contact details | `ContactSection`, `app/solutions/page.tsx`, privacy page, terms page | None | None | `companyName`, `address`, `email`, `phone`, `whatsapp` | Contact hides the details block. Other pages leave email/phone empty |
| GET | `/api/blogs` | Published insights | `app/blog/page.tsx` | None | None | Array of posts (`_id`, `slug`, `title`, `excerpt`, `author`, `category`, `featuredImage`, `publishedAt`, `createdAt`) | Catch shows the empty-state copy |
| GET | `/api/blogs/:slug` | One article | `app/blog/[slug]/page.tsx` | None | Path `slug` | Post plus `seo`, `content`, `tags`, `gallery`, `video` | Catch returns `null` → `notFound()` |
| GET | `/api/careers` | Open jobs | `app/career/page.tsx` | None | None | Array. UI uses `_id`, `slug`, `title`, `department`, `location`, `employmentType` | `loadFailed` message, distinct from empty |
| GET | `/api/careers/:slug` | One job | `app/career/[slug]/page.tsx` (metadata and page, two calls) | None | Path `slug` | Job detail and `applicationFields` | Catch → `notFound()` |
| POST | `/api/contact` | Inquiry | `ContactSection`, `ServicesContact`, `SolutionsContact` | None | JSON body below | `{ message?: string }` | Inline error from `error`, `message`, or status text |
| POST | `/api/careers/:slug/applications` | Job application | `CareerApplicationForm` | None | JSON body of dynamic fields | `{ message?: string }` | Inline error |

No upload endpoint, download endpoint, PATCH, or query-string API is used.

---

## 8. API details

### GET `/api/services` and GET `/api/services/:slug`

Purpose: drive the home services grid, the services page, service pages, footer links, and contact interest labels.

Authentication: none.

Request: no query, no body. Slug is a path segment.

Response fields the UI reads (`lib/service.ts`): `_id`, `title`, `slug`, `description`, `shortDescription`, `icon`, `image`, `heroImage`, `heroEyebrow`, `heroTitle`, `heroDescription`, `benefits[]`, `overview`, `features[]`, `technologies[]`, `process[]`, `deliverables[]`, `useCases[]`, `faqs[]`, `cta`, `seo`, `order`, `status` (`"Draft"` | `"Published"`), `updatedAt`.

Frontend behavior:

- List pages do not filter `Draft` in the client. Only the detail helper hides drafts.
- Services page failure is visible. Home `ServicesSection` failure is only a console error.
- Related list is client-filtered to other slugs and sliced to 3.
- SEO on the detail page uses `seo.metaTitle`, `seo.metaDescription`, `seo.keywords`, and a canonical URL from `NEXT_PUBLIC_SITE_URL`.

### GET `/api/products`

Purpose: product cards and footer names. Contact builds interest options as `Product: {name}`.

Request: none.

Response fields used: `_id`, `name`, `tagline`, `description`, `features` (string array), `icon`.

No empty-state UI on the products page. No detail page.

### GET `/api/solutions` and GET `/api/solutions/:slug`

Purpose: industry cards, solution pages, and the solutions inquiry dropdown.

Request: none, or path `slug`.

Response: `types/solution.ts` — `_id`, `title`, `slug`, `shortDescription`, `description`, `icon`, `industry`, `cardImage`, `heroImage`, `heroTitle`, `heroDescription`, `overview`, `overviewImage`, `benefits`, `features`, `useCases`, `process`, `technologies`, `metrics`, `faqs`, `cta`, `seo`, `order`, `status`.

Draft handling matches services. Card images that are local paths are dropped by `publicImage` when the file is missing, then a slug fallback from `solutionImages.ts` is tried.

### GET `/api/settings`

Purpose: show company name, address, email, phone, and WhatsApp.

Request: none.

Response fields used: `companyName`, `address`, `email`, `phone`, `whatsapp`.

WhatsApp becomes `https://wa.me/{digits}`. Phone becomes a `tel:` link with spaces removed. Email becomes `mailto:`.

### GET `/api/blogs` and GET `/api/blogs/:slug`

Purpose: insights list and article.

List response fields used: `_id`, `slug`, `title`, `excerpt`, `author`, `category`, `featuredImage`, `publishedAt`, `createdAt`.

Detail also uses `seo.title`, `seo.description`, `content`, `tags`, `gallery`, `video`.

Dates render with `en-US` month/day/year. Invalid or missing dates become “Recently published” on the list and are omitted on the article.

Images use a plain `<img>`, not `next/image`, so they are not limited by `images.remotePatterns`.

### GET `/api/careers` and GET `/api/careers/:slug`

Purpose: job list and job page.

List fields: `_id`, `slug`, `title`, `department`, `location`, `employmentType`.

Detail also uses `description`, `experience`, `salary`, `responsibilities[]`, `requirements[]`, `skills[]`, `applicationFields[]`, `experienceOptions[]`, `applicationEmail`.

`applicationFields` items use `name`, `label`, `type`, `required`, `active`. Fields with `active === false` are hidden.

Metadata description is `description` sliced to 160 characters.

### POST `/api/contact`

Purpose: send a sales or project inquiry.

Authentication: none.

Headers: `Content-Type: application/json`.

Body from the main contact form (`ContactSection`):

| Field | Required in the browser | Notes |
| --- | --- | --- |
| `firstName` | Yes | Text |
| `lastName` | Yes | Text |
| `email` | Yes | `type="email"` |
| `phone` | No | `type="tel"` |
| `interest` | No HTML `required` | Select. Options are `Service: {title}`, `Product: {name}`, then `Other Inquiry` |
| `message` | Yes | Textarea |

Body from `ServicesContact`:

| Field | Source |
| --- | --- |
| `firstName` / `lastName` | Split on whitespace from `name`. Missing last name becomes `"—"` |
| `email` | Work email, required |
| `phone` | Optional |
| `interest` | Static service `<select>`, required |
| `message` | `Company: {company}\n\n{details}`. Company is optional. Details are required |

Body from `SolutionsContact`: same name split and company/details message. `phone` is always the string `"—"`. `interest` is an API solution title or `Other Inquiry`.

Success: `result.message`, or a local fallback sentence. Form resets.

Error: `Error` message from `ApiClient` (`data.error`, then `data.message`, then status text, then `"An error occurred during the request"`).

No retry button other than submitting again. No cache to invalidate.

### POST `/api/careers/:slug/applications`

Purpose: submit an application for that job slug.

Body: every current form field name/value. Field set is defined by the job payload, not by this repository.

Known UI rules:

- `type === "textarea"` renders a textarea.
- `type === "select"` and `name === "experience"` renders `experienceOptions`.
- `type === "file"`, or name `portfolio` or `linkedin`, spans both columns on `md`.
- Other types are passed through to `<input type={field.type}>`.
- `required` is the field’s `required` flag.

The body is JSON, not `multipart/form-data`. File inputs do not upload a file.

Success and error match the contact form pattern. Success copy fallback: “Application submitted successfully. We will review it shortly.”

---

## 9. API grouping

```text
Catalog
  GET /api/services
  GET /api/services/:slug
  GET /api/products
  GET /api/solutions
  GET /api/solutions/:slug

Content
  GET /api/blogs
  GET /api/blogs/:slug

Careers
  GET /api/careers
  GET /api/careers/:slug
  POST /api/careers/:slug/applications

Site contact
  GET /api/settings
  POST /api/contact
```

There is no frontend auth, user, order, notification, report, or upload group.

---

## 10. Forms

| Form | Page | Purpose | Fields | Validation | API | Success | Error |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Contact | `/` and `/contact` (`#contact`) | General inquiry | First name*, last name*, email*, phone, interest, message* | HTML `required` and `type="email"` / `type="tel"`. No schema | `POST /api/contact` | Green panel, reset, “Send another message” | Red `role="alert"`, values kept |
| Services inquiry | `/services` (`#contact`) | Project inquiry | Name*, work email*, company, phone, service*, project details* | HTML required/email/tel | `POST /api/contact` | Green text replaces the form | Red alert |
| Solutions inquiry | `/solutions` (`#contact`) | Solution inquiry | Full name*, work email*, company, solution*, project details* | HTML required/email. Phone is not collected | `POST /api/contact` with `phone: "—"` | Green text replaces the form | Red alert |
| Job application | `/career/[slug]` (`#apply`) | Apply | Dynamic from `applicationFields` | HTML `required` when the field says so. Experience select has a blank first option | `POST /api/careers/:slug/applications` | Green panel, reset. No “apply again” control | Red alert |

\* Required in the browser.

Defaults:

- Contact interest starts as `["Other Inquiry"]` until services and products load.
- Services `<select>` defaults to the first static core service title.
- Solutions `<select>` defaults to the first loaded solution title, or `"Other Inquiry"`.
- No form has a reset button. Success calls `form.reset()`.
- Submit buttons disable while `status === "submitting"` and ignore a second submit.
- Labels: “Submitting...”, “Sending...”, “Submitting Application...”.

There is no client-side length, pattern, or file-type check.

---

## 11. Tables and lists

There are no data tables, row actions, or bulk actions.

| List | Source | What is shown | Pagination / search / filter / sort | Empty | Loading | Error | Navigation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home products | `GET /api/products` | Name, tagline, description, feature chips | None. API order | Empty grid, no message | Server wait, no skeleton | Console only | `/contact` |
| Home services | `GET /api/services` | Title, description | None | Empty grid | Server wait | Console only | `/services/[slug]` |
| Products page | Same | Same cards | None | Empty grid | Server wait | Console only | `/contact` |
| Services core cards | `GET /api/services` | Order, icon, title, short description, up to 3 technology names | None | Empty grid | Server wait | “Unable to load services.” | `/services/[slug]` |
| Solution cards | `GET /api/solutions` | Image, industry, order, title, short description | None | Empty grid | Server wait | “Unable to load solutions.” | `/solutions/[slug]` |
| Blog cards | `GET /api/blogs` | Image, category, date, title, excerpt, author | None | “No published articles yet” (also used on failure) | Server wait | Same as empty | `/blog/[slug]` |
| Jobs | `GET /api/careers` | Title, department, location, employment type | None | “No open positions right now” | Server wait | “Open positions could not be loaded” | `/career/[slug]` |
| Footer services | `GET /api/services` | Title | None | “View services” | Server wait | Fallback link | `/services/[slug]` or `/services` |
| Footer products | `GET /api/products` | Name | None | “View products” | Server wait | Fallback link | Always `/products` |
| Related services / solutions | List endpoint, then filter | Up to 3 other items | Client slice only | Section omitted | Included in page render | Section omitted | Detail routes |

---

## 12. Modals, drawers, and popups

No modal or drawer library is installed.

| Overlay | Trigger | Content | API | Confirm / cancel |
| --- | --- | --- | --- | --- |
| Mobile nav panel | Menu button below `lg` | Same `navItems` plus “Let’s Talk” | None | Link navigates and closes. Button toggles closed. Escape is not handled |

FAQ blocks (`ServiceFaqs`) are inline accordions, not dialogs. The first item starts open. Clicking the open item sets the index to `-1` and collapses all.

---

## 13. Roles and permissions

No roles, permissions, route guards, or conditional admin actions exist in this frontend.

| Feature | Public visitor |
| --- | --- |
| View every page | Yes |
| Submit contact and applications | Yes |
| Create, edit, or delete content | No UI |

Unauthorized and forbidden handling: not implemented. The API client does not attach credentials and does not special-case 401 or 403.

---

## 14. State management

| State | Where | Purpose | Initial | Persistence |
| --- | --- | --- | --- | --- |
| `isScrolled`, `mobileMenuOpen` | `Navbar` | Shrink the bar after 20px scroll; toggle the mobile panel | `false`, `false` | Memory only |
| Contact `status`, `message`, `settings`, `interests` | `ContactSection` | Form lifecycle and contact sidebar | `idle`, `""`, `null`, `["Other Inquiry"]` | Memory only |
| Services / solutions form `status`, `message` | Those forms | Submit lifecycle | `idle`, `""` | Memory only |
| Application `status`, `message` | `CareerApplicationForm` | Submit lifecycle | `idle`, `""` | Memory only |
| FAQ `open` | `ServiceFaqs` | Which answer is visible | `0` | Memory only |
| Legal `activeSection` | `useActiveSection` | Sidebar highlight | First section id | Memory only |

No `localStorage`, `sessionStorage`, or auth cookie is read or written by this app.

Server data is not cached by the app: `force-dynamic` and `cache: "no-store"`. `React.cache` only dedupes the service or solution slug fetch inside a single render (layout + page + metadata).

URL state is not used for filters. `usePathname` only marks the active nav item.

---

## 15. Component architecture

### Layout and navigation

- `app/layout.tsx` — fonts and metadata only. It does not render `Navbar` or `Footer`. Each page composes them.
- `Navbar` — client component. Logo `/Assest/logo-brand.png`.
- `Footer` — async server component. Dynamic service and product columns plus static company links.

### Marketing sections

- `Hero`, `HeroVisual`, `BackgroundLights` — reusable hero. Used on home and products. The about and contact heroes in `page.tsx` are commented out.
- `ContactHero` — contact-only animated hero.
- `ProductServicesRelationship`, `ProcessSection` — static home sections.
- `ProductsSection`, `ServicesSection` — async API sections on the home page. Products also used on `/products`.

### Services

- `ServicesContent` — full `/services` page body.
- `ServicesMotion` — GSAP wrapper. Honors `prefers-reduced-motion`.
- `ServiceDetail` — detail layout.
- `ServiceFaqs` — accordion shared with solution detail.
- `ServicesContact` — inquiry form.
- `servicesData.ts` — static capabilities, process, stack, reasons, and form options.

### Solutions

- `SolutionsView`, `SolutionsMotion`, `IndustrySolutionCard`, `SolutionVisual`, `SolutionDetail`, `SolutionsContact`.
- `solutionsContent.ts` and `solutionImages.ts` — static copy and local image map.

### About

- `CompanyJourney` — Framer Motion story on `/about`.
- `AboutSection`, `CompanyStats` — used on home and about. Stats are hardcoded (`500+`, `50+`, `10+`, `99%`).
- `AboutGrid` re-exports `EngineeringImpact`. `AboutSection` renders it under the stats, so the engineering cards appear on `/` and `/about`. Copy is static in `engineeringData.ts` (five cards, CTA to `/services`). Motion is GSAP and skips when reduced motion is requested.

### Legal

- `LegalLayout` composes breadcrumb, hero, sidebar, sections, and CTA.
- Copy is `legalContent.ts`. `publicImage` hides a hero image whose file is missing.

### Shared

- `IconMapper` maps a string from the API to a Lucide icon. Unknown names fall back inside that component.
- `CareerApplicationForm` — client form.

---

## 16. Design system

Tokens are defined once in `app/globals.css` `:root` and exposed as Tailwind colors. Do not invent a second palette.

| Token | Value | Tailwind class |
| --- | --- | --- |
| `--brand-cyan` | `#10b8d4` | `technic-cyan` |
| `--brand-cyan-deep` | `#0797b2` | `technic-cyan-deep` |
| `--brand-orange` | `#ff8a00` | `technic-orange` |
| `--brand-orange-deep` | `#e86f00` | `technic-orange-deep` |
| `--text-primary` | `#1f2937` | `technic-text` |
| `--text-secondary` | `#4b5563` | `technic-secondary` |
| `--text-muted` | `#6b7280` | `technic-muted` |
| `--background` | `#f5fafc` | `technic-bg` |
| `--surface` | `#ffffff` | `technic-surface` |
| `--border` | `#e5e7eb` | `technic-border` |
| `--success` / `--success-soft` | `#16a34a` / `#dcfce7` | `technic-success` / `technic-success-soft` |
| `--error` / `--error-soft` | `#dc2626` / `#fee2e2` | `technic-error` / `technic-error-soft` |
| `--cyan-soft` | `#e8f9fc` | `technic-cyan-soft` |
| `--orange-soft` | `#fff3e6` | `technic-orange-soft` |
| `--neutral-soft` | `#f3f4f6` | `technic-neutral-soft` |
| `--header` | `#f8fafc` | `technic-header` |
| `--brand-gradient` | `135deg, cyan → orange` | `bg-brand-gradient` |
| `--focus-ring` | cyan at 20% | Used by `.tn-input` and selection |

`color-scheme: light`. There is no dark theme.

Fonts, loaded in `app/layout.tsx`:

| Family | CSS variable | Class | Use |
| --- | --- | --- | --- |
| Inter | `--font-inter` | `font-sans` | Body, nav, forms |
| Raleway | `--font-raleway` | `font-heading` | Headings |
| Roboto | `--font-roboto` | `font-technical` | Available for small labels. `--font-mono` also points at Roboto |

Shadows: `shadow-tn-sm`, `shadow-tn-md`, `shadow-tn-lg`, `shadow-tn-card` (values in `globals.css`).

Radius in use: `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-[2rem]`, `rounded-full` for buttons and chips.

Inputs: class `tn-input` (full width, 1rem radius, 1rem/1.25rem padding, cyan focus ring).

Buttons:

- Primary: `bg-brand-gradient text-white rounded-full` (some forms use `rounded-2xl` on the full-width submit).
- Secondary: white, `border-technic-border`, hover cyan border.

Icons: Lucide, usually `h-4`–`h-7` inside a `rounded-2xl` soft well.

Focus: global `:focus-visible` outline in cyan, 2px, offset 2px.

Motion: GSAP on services, solutions, legal, and engineering impact. Framer Motion on the company journey. CSS animation on the contact hero. These wrappers return early when `prefers-reduced-motion: reduce` matches.

Logo: `/Assest/logo-brand.png`.

`next/image` remote hosts in `next.config.ts`: `www.transparenttextures.com` and `res.cloudinary.com`. Other remote URLs will fail in `next/image`. Blog images avoid that by using `<img>`.

---

## 17. Responsive behavior

Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

| Area | Behavior |
| --- | --- |
| Navbar | Links and “Let’s Talk” hidden below `lg`. Hamburger panel instead. Bar padding tightens after scroll |
| Page width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Articles use `max-w-4xl` or `max-w-3xl` |
| Top offset | `pt-32` (some heroes use `pt-28` or `md:pt-40`) so content clears the fixed nav |
| Heroes | Stack vertically, then `lg:flex-row`. Buttons become full width on the smallest screens (`w-full sm:w-auto`) |
| Cards | 1 column, then `md:grid-cols-2`, often `lg:grid-cols-3` or `xl:grid-cols-3` / `xl:grid-cols-4` |
| Contact | Sidebar above the form until `lg`, then a 2/5 and 3/5 split |
| Forms | Two-column field grids from `md` |
| Footer | 1 column, then `md:grid-cols-4`. Copyright stacks until `md` |
| Legal | Hero is one column until `md:grid-cols-2`. Sidebar is part of `LegalLayout` |
| Job meta | Wraps with `flex-wrap` |
| Tables | None |

---

## 18. Error, loading, and empty states

| State | How it appears |
| --- | --- |
| Loading | Service and solution **detail** routes: pulse skeleton (`loading.tsx`). Other pages wait on the server with no skeleton |
| Success | Normal page or a green success panel/text (`role="status"`) |
| Empty list | Blog and careers have copy. Products, home services, services cards, and solution cards render an empty grid |
| Error list | Services and solutions pages, and careers, have visible copy. Blog failure uses the empty copy. Home product/service failures are console-only |
| Not found | Custom pages for missing/draft services and solutions. Blog and career use `notFound()` without a custom file |
| Route error | Service detail: “Unable to load this service.” Solution list and detail: “Unable to load solutions.” Both offer Try Again (`reset()`) |
| Validation | Browser tooltip for `required` / email. No custom field messages |
| Unauthorized / forbidden | Not implemented |
| Network / API failure on forms | Red alert with the thrown message |

---

## 19. File upload and download

No download, export, or generated-file flow exists.

Career applications can render `type="file"` when the API says so. The submit path JSON-encodes the body, so the file bytes are not sent. There is no progress, preview, or delete-upload UI.

Blog `featuredImage` and `gallery` are remote or absolute URLs displayed as images, not uploads from this site.

---

## 20. Search, filter, sort, and pagination

Not implemented on any page.

Lists render the full array from the API in the order received. The only client trimming is related services and solutions: exclude the current slug and `slice(0, 3)`.

No debounce, no query parameters, no page size.

---

## 21. Notifications

No toast library and no notification API.

Success and error are inline regions:

- Success: `bg-technic-success-soft text-technic-success`, `role="status"`.
- Error: `bg-technic-error-soft text-technic-error`, `role="alert"`.

Nothing redirects after a message. The user stays on the same page.

Footer social SVGs are decorative `<span>` elements. They are not links and they do not open a notification.

---

## 22. Integrations

| Service | Purpose | Entry | Auth from this app | Failure |
| --- | --- | --- | --- | --- |
| Technic backend REST | Catalogs, settings, blogs, jobs, inquiries | `API_BASE_URL` | None | Per the API section |
| Google fonts | Inter, Raleway, Roboto via `next/font/google` | `app/layout.tsx` | None | Next font loading |
| WhatsApp | `https://wa.me/{digits}` when settings include `whatsapp` | `ContactSection` | None | Link omitted |
| Email / phone | `mailto:` and `tel:` from settings | Contact, solutions, legal CTA | None | Block omitted |
| Cloudinary | Allowed as a `next/image` remote host when API image URLs use it | `next.config.ts` | None | Image optimization error if the host is not allow-listed |
| transparenttextures.com | Allowed remote image host | `next.config.ts` | None | Same |
| GSAP / Framer Motion | Motion only | Services, solutions, legal, about | None | Reduced-motion skips GSAP setups |

`RESEND_API_KEY` and `CONTACT_EMAIL` appear in `.env.example` and in `CONTACT_FORM_SETUP_PLAN.md`. **This frontend never reads them.** Mail delivery, if any, is a backend concern. Do not treat those variables as part of the browser app.

---

## 23. Environment variables

Do not commit secret values. Names and purpose only.

| Name | Read by this frontend | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Yes, `lib/api.ts` | Backend origin. Default `http://localhost:3001` |
| `NEXT_PUBLIC_SITE_URL` | Yes, metadata, sitemap, robots | Canonical site origin. Code fallbacks differ: `http://localhost:3005` on several pages, `https://technic.dev` in sitemap and robots |
| `RESEND_API_KEY` | No | Listed in `.env.example`. Unused here |
| `CONTACT_EMAIL` | No | Listed in `.env.example`. Unused here |

`.env.example` does not list `NEXT_PUBLIC_SITE_URL`.

Dev server port is `3005` (`package.json`), not the sitemap fallback host.

---

## 24. Security

What exists:

- No auth token storage, because there is no auth.
- All routes are public by absence of middleware.
- API calls send JSON only. No `Authorization` header and no cookies (`credentials` is not set, so the default `same-origin` behavior applies to the Next server calling the API origin).
- Blog HTML: `markdownToHtml` escapes text in the markdown path and strips `<script>` blocks when the content is already HTML. Other HTML in that branch is passed through to `dangerouslySetInnerHTML`.
- External blog and WhatsApp links use `rel="noreferrer"` or `rel="noopener noreferrer"`.
- Forms rely on browser constraints. There is no extra sanitizer before POST.
- Career file inputs are not uploaded as files.

What is not implemented: CSRF tokens, route guards, role checks, a content security policy in this repo, and client-side file-type validation.

`PRODUCTION_READINESS_REPORT.md` mentions Resend configuration. That does not match the current frontend, which posts inquiries to the backend.

---

## 25. Dependencies that shape the app

| Package | Why it is here |
| --- | --- |
| `next@16.2.10` | App Router, image, metadata, sitemap |
| `react@19.2.4`, `react-dom@19.2.4` | UI |
| `lucide-react` | Icons, including API-driven names via `IconMapper` |
| `gsap` | Section motion |
| `framer-motion` | Company journey |
| `tailwindcss@4`, `@tailwindcss/postcss` | Styling |
| `typescript` | Types |
| `eslint`, `eslint-config-next` | Lint |

---

## 26. Data flow

```text
Browser
  ↓
Next.js App Router page (Server Component, force-dynamic)
  ↓
ApiClient.get / fetch (NEXT_PUBLIC_API_URL, cache: no-store)
  ↓
Backend REST API
  ↓
JSON
  ↓
Page or section props
  ↓
HTML

Interactive forms:
Browser form
  ↓
useState status
  ↓
ApiClient.post JSON
  ↓
Inline success or error
```

Client components (`Navbar`, forms, FAQ, legal sidebar, motion wrappers) do not own the catalog data except `ContactSection`, which fetches settings and interest options after mount.

---

## 27. Feature matrix

| Feature | Route | Main components | APIs | State | Roles | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Home | `/` | `Hero`, relationship, products, services, process, about, contact | Products, services, settings, contact | Contact form | Public | Implemented |
| Products | `/products` | `Hero`, `ProductsSection` | `GET /api/products` | None | Public | Implemented. No detail page |
| Services catalog | `/services` | `ServicesContent`, `ServicesContact` | Services, contact | Form | Public | Implemented. Dropdown is static |
| Service detail | `/services/[slug]` | `ServiceDetail`, `ServiceFaqs` | Service by slug, service list | FAQ | Public | Implemented. Draft hidden |
| Solutions catalog | `/solutions` | `SolutionsView`, `SolutionsContact` | Solutions, settings, contact | Form | Public | Implemented |
| Solution detail | `/solutions/[slug]` | `SolutionDetail` | Solution by slug, solution list | FAQ | Public | Implemented. Draft hidden |
| About | `/about` | `CompanyJourney`, `AboutSection` | Footer only | Motion | Public | Implemented. Page hero is commented out |
| Blog list | `/blog` | Page cards | `GET /api/blogs` | None | Public | Implemented. Error looks like empty |
| Blog article | `/blog/[slug]` | Page article | `GET /api/blogs/:slug` | None | Public | Implemented |
| Careers list | `/career` | Page cards | `GET /api/careers` | None | Public | Implemented |
| Job detail and apply | `/career/[slug]` | Page, `CareerApplicationForm` | Career by slug, applications POST | Form | Public | Implemented. File fields are not real uploads |
| Contact | `/contact` | `ContactHero`, `ContactSection` | Settings, services, products, contact | Form | Public | Implemented |
| Privacy | `/privacy-policy` | `LegalLayout` | Settings email | Sidebar | Public | Static draft copy |
| Terms | `/terms-of-service` | `LegalLayout` | Settings email | Sidebar | Public | Static copy |
| SEO files | `/sitemap.xml`, `/robots.txt` | `sitemap.ts`, `robots.ts` | None | None | Public | Partial. Several routes omitted from the sitemap |
| Footer catalogs | Every page with `Footer` | `Footer` | Services, products | None | Public | Implemented |

---

## 28. API to page mapping

| Endpoint | Method | Pages | Purpose |
| --- | --- | --- | --- |
| `/api/services` | GET | `/`, `/services`, `/services/[slug]`, `/contact`, and every page that renders `Footer` | Lists and related links |
| `/api/services/:slug` | GET | `/services/[slug]` | Detail and metadata |
| `/api/products` | GET | `/`, `/products`, `/contact`, footer | Cards, interest labels, footer names |
| `/api/solutions` | GET | `/solutions`, `/solutions/[slug]` | Cards, form options, related |
| `/api/solutions/:slug` | GET | `/solutions/[slug]` | Detail and metadata |
| `/api/settings` | GET | `/`, `/contact`, `/solutions`, `/privacy-policy`, `/terms-of-service` | Email, phone, address, WhatsApp |
| `/api/blogs` | GET | `/blog` | Insights list |
| `/api/blogs/:slug` | GET | `/blog/[slug]` | Article |
| `/api/careers` | GET | `/career` | Jobs |
| `/api/careers/:slug` | GET | `/career/[slug]` | Job |
| `/api/contact` | POST | `/`, `/contact`, `/services`, `/solutions` | Inquiries |
| `/api/careers/:slug/applications` | POST | `/career/[slug]` | Applications |

---

## 29. Page to API mapping

| Page | APIs |
| --- | --- |
| `/` | `GET /api/products`, `GET /api/services`, `GET /api/settings`, `POST /api/contact`, plus footer repeats of products and services |
| `/about` | Footer: `GET /api/services`, `GET /api/products` |
| `/products` | `GET /api/products`, footer |
| `/services` | `GET /api/services`, `POST /api/contact`, footer |
| `/services/[slug]` | `GET /api/services/:slug`, `GET /api/services`, footer |
| `/solutions` | `GET /api/solutions`, `GET /api/settings`, `POST /api/contact`, footer |
| `/solutions/[slug]` | `GET /api/solutions/:slug`, `GET /api/solutions`, footer |
| `/blog` | `GET /api/blogs`, footer |
| `/blog/[slug]` | `GET /api/blogs/:slug`, footer |
| `/career` | `GET /api/careers`, footer |
| `/career/[slug]` | `GET /api/careers/:slug`, `POST /api/careers/:slug/applications`, footer |
| `/contact` | `GET /api/settings`, `GET /api/services`, `GET /api/products`, `POST /api/contact`, footer |
| `/privacy-policy` | `GET /api/settings`, footer |
| `/terms-of-service` | `GET /api/settings`, footer |
| `/sitemap.xml`, `/robots.txt` | None |

---

## Conflicts with older documents

| Document | Claim | Current code |
| --- | --- | --- |
| `PROJECT_DEEP_ANALYSIS.md` | No API calls; data comes from `lib/data.tsx`; no env vars | API client and many `fetch` calls exist. `lib/data.tsx` is navigation only |
| `PROJECT_DOCUMENTATION.md` | Glassmorphism; repo name `technic-project-testing`; blog has no detail route | Light corporate theme. Blog detail exists. Solutions, legal pages, and service/solution slugs exist |
| `CONTACT_FORM_SETUP_PLAN.md` / `PRODUCTION_READINESS_REPORT.md` | This app sends mail with Resend using `RESEND_API_KEY` | The frontend posts JSON to the backend `/api/contact`. It does not call Resend |
| `sitemap.ts` vs routes | Sitemap is the public URL list | `/solutions`, `/career`, legal pages, and dynamic slugs are routable and absent from the sitemap |

Preserve the privacy-page statement that its copy is a draft pending legal review. That text is in `legalContent.ts`, not only in an old doc.

---

## Gaps that could not be verified from this frontend

- Exact backend validation rules and full JSON schemas beyond the fields this UI reads or sends.
- Whether list endpoints already omit `Draft` records. The client only checks draft status on service and solution **detail**.
- Whether `GET /api/careers` returns only open jobs. The page labels the array “published” in a variable name but does not filter.
- Email delivery after `POST /api/contact` or an application. Not visible in this repo.
- Real file-upload support. The UI can show a file input; the request is JSON.
- Social icons in the footer have no URLs.
