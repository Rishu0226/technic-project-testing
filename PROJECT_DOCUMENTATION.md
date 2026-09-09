# Technic Project Testing (`technic-project-testing`) — Comprehensive Architecture & Code Documentation

> **Project Name:** Technic Technologies Client Portal & Marketing Website  
> **Repository Directory:** `technic-project-testing`  
> **Tech Stack:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, Lucide React  
> **Backend Integration:** REST API (`http://localhost:3001` or `NEXT_PUBLIC_API_URL`)  
> **Default Port:** `3005` (`npm run dev`)  

---

## Table of Contents
1. [Overview & Project Purpose](#1-overview--project-purpose)
2. [Complete Directory Structure](#2-complete-directory-structure)
3. [Folder-by-Folder Data & Code Explanation](#3-folder-by-folder-data--code-explanation)
   - [3.1. `app/` — Application Routes & Core Layouts](#31-app--application-routes--core-layouts)
     - [`app/layout.tsx`](#applayouttsx)
     - [`app/page.tsx`](#apppagetsx)
     - [`app/globals.css`](#appglobalscss)
     - [`app/sitemap.ts`](#appsitemapts)
     - [`app/robots.ts`](#approbotsts)
     - [`app/about/`](#appabout)
     - [`app/blog/`](#appblog)
     - [`app/career/` & `app/career/[slug]/`](#appcareer--appcareerslug)
     - [`app/contact/`](#appcontact)
     - [`app/products/`](#appproducts)
     - [`app/services/`](#appservices)
   - [3.2. `components/` — Reusable UI & Logic Components](#32-components--reusable-ui--logic-components)
     - [`Navbar.tsx`](#navbartsx)
     - [`Hero.tsx`](#herotsx)
     - [`ProductServicesRelationship.tsx`](#productservicesrelationshiptsx)
     - [`ProductsSection.tsx`](#productssectiontsx)
     - [`ServicesSection.tsx`](#servicessectiontsx)
     - [`ProcessSection.tsx`](#processsectiontsx)
     - [`AboutSection.tsx`](#aboutsectiontsx)
     - [`ContactSection.tsx`](#contactsectiontsx)
     - [`CareerApplicationForm.tsx`](#careerapplicationformtsx)
     - [`Footer.tsx`](#footertsx)
     - [`BackgroundLights.tsx`](#backgroundlightstsx)
     - [`IconMapper.tsx`](#iconmappertsx)
   - [3.3. `lib/` — Utilities, API Client & Data Models](#33-lib--utilities-api-client--data-models)
     - [`lib/api.ts`](#libapits)
     - [`lib/data.tsx`](#libdatatsx)
   - [3.4. `public/` — Static Media & Brand Assets](#34-public--static-media--brand-assets)
     - [`public/Assest/`](#publicassest)
     - [Root Public Icons & Vector Graphics](#root-public-icons--vector-graphics)
   - [3.5. Root Configuration Files](#35-root-configuration-files)
     - [`package.json`](#packagejson)
     - [`tsconfig.json`](#tsconfigjson)
     - [`next.config.ts`](#nextconfigts)
     - [`postcss.config.mjs` & `eslint.config.mjs`](#postcssconfigmjs--eslintconfigmjs)
4. [Data Flow & Backend API Architecture](#4-data-flow--backend-api-architecture)
5. [Design System, Aesthetics & Glassmorphism](#5-design-system-aesthetics--glassmorphism)
6. [Commands & Environment Setup](#6-commands--environment-setup)

---

## 1. Overview & Project Purpose

`technic-project-testing` is the modern, enterprise-grade web application representing **Technic Technologies**. Technic Technologies operates a dual-model software business:
1. **Proprietary Products Division:** Building SaaS platforms and AI automation systems (e.g., NicFlow AI ERP, TechGuard Sentinel).
2. **Enterprise IT Services Division:** Engineering bespoke full-stack applications, mobile apps, and Cloud DevOps infrastructure for global clients.

This frontend application delivers a modern glassmorphic visual presentation, lightning-fast Next.js 16 Server-Side Rendering (SSR), file-based routing, SEO crawlers optimization (sitemaps and robots), and real-time integration with the Technic Technologies backend API for dynamic product catalogs, service listings, live job openings, job application submissions, and contact inquiries.

---

## 2. Complete Directory Structure

```text
technic-project-testing/
├── app/                                 # Next.js 16 App Router (Routes & Layouts)
│   ├── about/
│   │   └── page.tsx                     # /about route (Company story & dual-model mission)
│   ├── blog/
│   │   └── page.tsx                     # /blog route (Insights & technical articles)
│   ├── career/
│   │   ├── [slug]/
│   │   │   └── page.tsx                 # /career/[slug] dynamic route (Job details & apply)
│   │   └── page.tsx                     # /career route (Job listings from API)
│   ├── contact/
│   │   └── page.tsx                     # /contact route (Connect & demo inquiry)
│   ├── products/
│   │   └── page.tsx                     # /products route (Proprietary software catalog)
│   ├── services/
│   │   └── page.tsx                     # /services route (Engineering services catalog)
│   ├── fabicon.ico                      # Website favicon icon
│   ├── globals.css                      # Global styles & Tailwind v4 theme configuration
│   ├── layout.tsx                       # Root Layout (Fonts, HTML shell, global metadata)
│   ├── page.tsx                         # Landing / Home page composite
│   ├── robots.ts                        # Dynamic robots.txt SEO rules
│   └── sitemap.ts                       # Dynamic sitemap.xml SEO generator
├── components/                          # Reusable UI & Feature Components
│   ├── AboutSection.tsx                 # Advantage overview & key metrics counters
│   ├── BackgroundLights.tsx             # Ambient animated glowing lights
│   ├── CareerApplicationForm.tsx        # Client-side dynamic job application form
│   ├── ContactSection.tsx               # Client-side interactive contact & demo form
│   ├── Footer.tsx                       # Global footer with navigation & copyright
│   ├── Hero.tsx                         # High-impact Hero section with video & CTA
│   ├── IconMapper.tsx                   # Dynamic Lucide icon renderer for API strings
│   ├── Navbar.tsx                       # Responsive sticky navigation bar with mobile drawer
│   ├── ProcessSection.tsx               # 5-step engineering methodology timeline
│   ├── ProductServicesRelationship.tsx  # Interactive hybrid model visualizer
│   ├── ProductsSection.tsx              # Server Component fetching products from API
│   └── ServicesSection.tsx              # Server Component fetching services from API
├── lib/                                 # Core Utilities, Types & Data Sources
│   ├── api.ts                           # Reusable HTTP ApiClient wrapper for backend API
│   └── data.tsx                         # Static navigation items & TypeScript definitions
├── public/                              # Static Public Files
│   ├── Assest/                          # Main brand media assets
│   │   ├── about.png                    # About section graphic
│   │   ├── hero.mp4                     # High-tech looping video for hero section
│   │   ├── logo.png                     # Primary horizontal brand logo
│   │   └── logo1.png                    # Alternate brand logo
│   ├── file.svg                         # Next.js starter icons
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs                    # ESLint configuration
├── next-env.d.ts                        # Next.js TypeScript declarations
├── next.config.ts                       # Next.js configuration (Remote image patterns)
├── package.json                         # Project dependencies, scripts & configuration
├── postcss.config.mjs                   # PostCSS configuration with @tailwindcss/postcss
└── tsconfig.json                        # TypeScript configuration and path aliases
```

---

## 3. Folder-by-Folder Data & Code Explanation

### 3.1. `app/` — Application Routes & Core Layouts

The `app/` folder is the core of the Next.js App Router. Every folder represents a route segment mapped directly to a URL in the browser.

#### `app/layout.tsx`
* **Data Contained:** Font configurations via `next/font/google` (Inter, Raleway, Roboto) and base SEO metadata (`template: "%s | Technic Technologies"`).
* **Code Explanation:**
  - Imports `globals.css`.
  - Configures CSS variables for typography: `--font-inter` (sans), `--font-raleway` (heading), and `--font-roboto` (technical).
  - Implements `RootLayout` which wraps every page with `<html className="... bg-[#0B1221] text-slate-300">` and `<body className="min-h-full flex flex-col">{children}</body>`.
  - Ensures seamless dark background consistency across page transitions.

#### `app/page.tsx`
* **Data Contained:** Component compositions and order of rendering for the primary homepage (`/`).
* **Code Explanation:**
  - Assembles the complete single-page landing journey:
    1. `<Navbar />` — Global header navigation.
    2. `<Hero />` — Main value proposition and animated video.
    3. `<ProductServicesRelationship />` — Explanation of Products + Services synergy.
    4. `<ProductsSection />` — Dynamic products list from API.
    5. `<ServicesSection />` — Dynamic services list from API.
    6. `<ProcessSection />` — 5-step engineering methodology.
    7. `<AboutSection />` — Company metrics and culture.
    8. `<ContactSection />` — Interactive inquiry form.
    9. `<Footer />` — Global footer.

#### `app/globals.css`
* **Data Contained:** Tailwind CSS v4 directives (`@import "tailwindcss";`), custom CSS color variables (`--background`, `--foreground`), and custom font family mappings.
* **Code Explanation:**
  - Uses `@theme inline` to register theme utilities:
    - `--font-sans: var(--font-inter)`
    - `--font-heading: var(--font-raleway)`
    - `--font-technical: var(--font-roboto)`
  - Controls default browser selections, text rendering, and background layers.

#### `app/sitemap.ts`
* **Data Contained:** Array of sitemap entries with priority, change frequencies, and URLs.
* **Code Explanation:**
  - Uses `MetadataRoute.Sitemap` to dynamically generate `/sitemap.xml`.
  - Resolves `baseUrl` from `process.env.NEXT_PUBLIC_SITE_URL` (fallback `https://technic.dev`).
  - Indexes routes: `/`, `/about`, `/blog`, `/contact`, `/products`, and `/services`.

#### `app/robots.ts`
* **Data Contained:** Crawler permissions and reference link to the sitemap.
* **Code Explanation:**
  - Returns `MetadataRoute.Robots`.
  - Sets `rules: { userAgent: '*', allow: '/' }` and links to `${baseUrl}/sitemap.xml`.

#### `app/about/`
* **Folder Route:** `/about`
* **File:** `page.tsx`
* **Data Contained:** Specific page metadata ("About Us | TechNic Technologies") and dedicated page hero props.
* **Code Explanation:**
  - Reuses `<Navbar />`, `<Hero />`, `<AboutSection />`, and `<Footer />`.
  - Configures `<Hero>` with dedicated story messaging: *"Dual-Threat Innovation"* and deep-dive call-to-actions.

#### `app/blog/`
* **Folder Route:** `/blog`
* **File:** `page.tsx`
* **Data Contained:** Array of article objects (`blogPosts`) containing `title`, `excerpt`, `date`, `author`, `readTime`, `category`, and `image`.
* **Code Explanation:**
  - Renders a magazine-style grid of technology insights (e.g., DevOps automation, Zero Trust security).
  - Uses `next/image` with gradient overlays and hover zoom animations (`group-hover:scale-110`).
  - Includes tags, authors, and read times with Lucide icons.

#### `app/career/` & `app/career/[slug]/`
* **Folder Route:** `/career` and `/career/[slug]`
* **Files:**
  - `app/career/page.tsx`:
    - **Data Contained:** Fetched job positions from backend endpoint `/api/careers`.
    - **Code Explanation:** An asynchronous React Server Component that executes `await ApiClient.get<any[]>('/api/careers')`. If positions exist, it maps them into clickable cards linking to `/career/${job.slug}`. Also details company culture benefits ("Innovation First", "Big Impact", "Exceptional Team"). Configured with `revalidate = 3600` for caching.
  - `app/career/[slug]/page.tsx`:
    - **Data Contained:** Individual job details (title, department, location, employmentType, description, responsibilities, requirements, application fields).
    - **Code Explanation:**
      - Exports `generateMetadata` to dynamically generate page title and OpenGraph metadata based on the job title.
      - Fetches job data via `ApiClient.get('/api/careers/' + params.slug)`.
      - Triggers `notFound()` if no matching job is returned.
      - Displays formatted role requirements and embeds `<CareerApplicationForm job={job} />`.

#### `app/contact/`
* **Folder Route:** `/contact`
* **File:** `page.tsx`
* **Data Contained:** Page title metadata and customized hero options for direct client engagement.
* **Code Explanation:**
  - Renders `<Hero>` with "Initiate Connect" badge and immediately flows into `<ContactSection />`.

#### `app/products/`
* **Folder Route:** `/products`
* **File:** `page.tsx`
* **Data Contained:** Dedicated products page metadata and customized hero banner.
* **Code Explanation:**
  - Focuses user attention on proprietary platforms by embedding `<ProductsSection />`.

#### `app/services/`
* **Folder Route:** `/services`
* **File:** `page.tsx`
* **Data Contained:** Dedicated services page metadata and customized hero banner.
* **Code Explanation:**
  - Focuses user attention on enterprise consulting and bespoke engineering by embedding `<ServicesSection />`.

---

### 3.2. `components/` — Reusable UI & Logic Components

The `components/` folder holds modular, encapsulated React components using Tailwind CSS and Lucide icons.

#### `Navbar.tsx`
* **Type:** Client Component (`"use client"`)
* **State Managed:**
  - `isScrolled` (boolean): Tracks window scroll offset (`window.scrollY > 20`) to toggle transparent vs. glassmorphic frosted background with blur (`backdrop-blur-xl bg-[#0B1221]/80`).
  - `mobileMenuOpen` (boolean): Opens/closes the slide-down mobile menu.
* **Code Logic:**
  - Imports `navItems` from `lib/data.tsx`.
  - Displays the brand logo (`/Assest/logo.png`) and title.
  - Features smooth scroll-to-top on logo click.
  - Renders desktop pill menu with subtle glowing hover effects.
  - Houses mobile hamburger button (`Menu`, `X`) and mobile drawer.

#### `Hero.tsx`
* **Type:** Server Component (reusable with custom props)
* **Props Interface:**
  - `badgeText`, `title`, `description`, `primaryActionText`, `primaryActionHref`, `secondaryActionText`, `secondaryActionHref`, `showBottomFade`.
* **Code Logic:**
  - Renders ambient background lights via `<BackgroundLights />`.
  - Applies a subtle cube pattern grid texture overlay (`mix-blend-overlay`).
  - Embeds the looping autoplay video: `/Assest/hero.mp4` with a drop-shadow glow.
  - Provides customizable CTA action buttons with arrow hover transitions.
  - Optionally renders a bottom gradient fade into the deep navy canvas (`#0B1221`).

#### `ProductServicesRelationship.tsx`
* **Type:** Client Component (`"use client"`)
* **Code Logic:**
  - Visualizes the core differentiator of Technic Technologies: **Products + Services = The Technic Advantage**.
  - Left card highlights "Products" (SaaS, Platforms, AI, Automation).
  - Center divider displays a glowing `+` icon.
  - Right card highlights "Services" (Software, Cloud, Mobile, APIs, Consulting).
  - Bottom summary explains how building internal products keeps engineering sharp, while building client solutions makes products battle-tested.

#### `ProductsSection.tsx`
* **Type:** Async Server Component
* **Data Sourced:** Fetches live product documents from backend `/api/products` via `ApiClient.get('/api/products')`.
* **Code Logic:**
  - Loops over products with alternating left/right layout (`idx % 2 === 0`).
  - Dynamically renders product names, taglines, long descriptions, key bullet points (`features`), and action buttons.
  - Employs fluid radial background glow effects behind each product card.

#### `ServicesSection.tsx`
* **Type:** Async Server Component
* **Data Sourced:** Fetches live service documents from backend `/api/services` via `ApiClient.get('/api/services')`.
* **Code Logic:**
  - Renders a 3-column responsive card grid.
  - Integrates `<IconMapper />` to resolve icon strings (e.g., `"Code"`, `"Server"`, `"Bot"`) into SVG icons.
  - Features hover spotlight flares that expand on mouse hover.

#### `ProcessSection.tsx`
* **Type:** Client Component (`"use client"`)
* **Data Contained:** Static 5-step engineering framework:
  1. `Discover` — Understand problem & analyze requirements.
  2. `Define` — Architecture & technical strategy.
  3. `Build` — Modern engineering & development.
  4. `Launch` — Production deployment & validation.
  5. `Scale` — Performance, reliability & capability enhancements.
* **Code Logic:**
  - Displays an interconnected timeline with connecting horizontal lines across steps on desktop viewports.

#### `AboutSection.tsx`
* **Type:** Server Component
* **Data Contained:** High-impact metric counters:
  - `500+` Deployments
  - `5` Proprietary Products
  - `50+` Engineers
  - `99%` Client Retention
* **Code Logic:**
  - 2-column layout: Left column contains the corporate narrative and metric cards; right column features glassmorphic illustration badges.

#### `ContactSection.tsx`
* **Type:** Client Component (`"use client"`)
* **State Managed:** `status` (`'idle' | 'submitting' | 'success' | 'error'`), `message` (string feedback).
* **Code Logic:**
  - Collects input fields: `firstName`, `lastName`, `email`, `phone`, `interest`, `message`.
  - Dispatches POST request via `ApiClient.post('/api/contact', data)`.
  - Displays instant visual success or error alerts without page refreshes.
  - Displays official headquarters location and direct email contacts.

#### `CareerApplicationForm.tsx`
* **Type:** Client Component (`"use client"`)
* **Props:** `{ job: any }`
* **Code Logic:**
  - Reads `job.applicationFields` (e.g., `fullName`, `email`, `portfolioUrl`, `resumeUrl`, `coverLetter`).
  - Renders inputs dynamically based on field types (`text`, `email`, `url`, `textarea`).
  - Posts application payload to `/api/careers/${job.slug}/applications`.
  - Renders custom confirmation UI upon successful submission.

#### `Footer.tsx`
* **Type:** Server Component
* **Code Logic:**
  - 4-column footer layout: Company bio with logo, Services directory, Products directory, and Company links.
  - Bottom bar with copyright info and links to Privacy Policy and Terms of Service.

#### `BackgroundLights.tsx`
* **Type:** Server Component
* **Code Logic:**
  - Positioned absolutely behind sections with `pointer-events-none`.
  - Generates 4 glowing radial blur discs:
    - Top-left: Orange glow (`bg-orange-600/20 blur-[130px]`)
    - Bottom-right: Rose glow (`bg-rose-600/20 blur-[130px]`)
    - Center-right: Blue glow (`bg-blue-500/10 blur-[120px]`)
    - Top-right: Amber glow (`bg-amber-500/15 blur-[100px]`)
  - Runs subtle staggered CSS pulses (`animate-pulse`).

#### `IconMapper.tsx`
* **Type:** Server Component
* **Props:** `name: string`, `className?: string`
* **Code Logic:**
  - Contains a lookup table `iconMap` mapping strings to Lucide React components (`Code`, `Server`, `ShieldCheck`, `Sparkles`, `Layers`, `Cpu`, `Bot`, `Layout`, `Smartphone`, `Terminal`, `Rocket`).
  - Returns the resolved icon or safely falls back to `<Code />` if the name is unrecognized.

---

### 3.3. `lib/` — Utilities, API Client & Data Models

The `lib/` folder contains shared libraries, helper classes, and shared static data.

#### `lib/api.ts`
* **Data Contained:** Backend API base URL definition:
  ```typescript
  export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  ```
* **Code Explanation:**
  - Exports static helper class `ApiClient`:
    - `fetch<T>(endpoint, options)`: Handles HTTP request headers (`Content-Type: application/json`), parses JSON responses, checks HTTP status codes, and formats clear error messages.
    - `get<T>(endpoint, options)`: Wrapper for `GET` requests.
    - `post<T>(endpoint, body, options)`: Wrapper for `POST` requests with JSON stringification.
    - `put<T>(endpoint, body, options)`: Wrapper for `PUT` requests.
    - `delete<T>(endpoint, options)`: Wrapper for `DELETE` requests.

#### `lib/data.tsx`
* **Data Contained:**
  - TypeScript types:
    - `NavItem`: `{ label: string; href: string; }`
    - `ServiceType`: `{ title: string; description: string; icon: React.ReactNode; }`
    - `ProductType`: `{ name: string; tagline: string; description: string; features: string[]; icon: React.ReactNode; }`
  - Exported array `navItems`: Defines main navigation destinations:
    - Home (`/`)
    - Products (`/products`)
    - Services (`/services`)
    - Solutions (`/#solutions`)
    - About (`/about`)
    - Insights (`/blog`)
    - Careers (`/career`)
    - Contact (`/contact`)

---

### 3.4. `public/` — Static Media & Brand Assets

The `public/` directory contains static files served directly from the domain root (`/`).

#### `public/Assest/`
* `logo.png`: Main brand logo used in the Navbar and Footer with custom height/width aspect ratios.
* `logo1.png`: Alternative variant of the brand logo.
* `about.png`: High-resolution graphic used in the About presentation.
* `hero.mp4`: Compressed MP4 video that autoplays silently in the `<Hero>` component to provide a dynamic tech visual.

#### Root Public Icons & Vector Graphics
* `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`: Vector assets used across components and default Next.js templates.

---

### 3.5. Root Configuration Files

#### `package.json`
* **Application Identity:** `"name": "technic-technologies"`, `"version": "0.1.0"`
* **Scripts:**
  - `"dev": "next dev -p 3005"` — Runs local dev server on port `3005`.
  - `"build": "next build"` — Compiles the optimized production bundle.
  - `"start": "next start -p 3005"` — Starts the production server on port `3005`.
  - `"lint": "eslint"` — Runs code quality and linting checks.
* **Key Dependencies:**
  - `next`: `16.2.10` (App Router SSR engine)
  - `react` & `react-dom`: `19.2.4` (React 19)
  - `lucide-react`: `^1.24.0` (Icon library)
  - `tailwindcss`: `^4` (Tailwind CSS v4 engine)
  - `@tailwindcss/postcss`: `^4` (PostCSS integration)
  - `typescript`: `^5` (Static type checker)

#### `tsconfig.json`
* Configures TypeScript with strict mode enabled, path alias `"@/*": ["./*"]` for clean module resolution, and React JSX runtime preservation.

#### `next.config.ts`
* Configures `remotePatterns` to safely load remote textures from `https://www.transparenttextures.com/**`.

#### `postcss.config.mjs` & `eslint.config.mjs`
* Standard PostCSS 8 configuration connecting Tailwind CSS v4 and Next.js Core Web Vitals ESLint rules.

---

## 4. Data Flow & Backend API Architecture

The application communicates with the backend service (`technic-technologies-backend`) running on port `3001`:

```text
┌────────────────────────────────────────────────────────┐
│               Browser / Client Device                  │
└──────────────────────────┬─────────────────────────────┘
                           │
             HTTP Requests │ (SSR & Client Actions)
                           ▼
┌────────────────────────────────────────────────────────┐
│         technic-project-testing (Port 3005)            │
│  Next.js 16 App Router (Server & Client Components)    │
└──────────────────────────┬─────────────────────────────┘
                           │
        lib/api.ts (ApiClient.get / ApiClient.post)
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│     technic-technologies-backend API (Port 3001)       │
├────────────────────────────────────────────────────────┤
│  GET  /api/products              -> Products list      │
│  GET  /api/services              -> Services list      │
│  GET  /api/careers               -> Active job list    │
│  GET  /api/careers/:slug         -> Job detail         │
│  POST /api/careers/:slug/app...  -> Submit application │
│  POST /api/contact               -> Submit inquiry     │
└────────────────────────────────────────────────────────┘
```

1. **Server-Side Fetching (Products, Services, Careers):**
   - Components like `ProductsSection.tsx`, `ServicesSection.tsx`, and `app/career/page.tsx` fetch data directly from the backend during server rendering.
   - Fast initial page load without client-side loading spinners.
2. **Client-Side Submissions (Contact & Careers):**
   - Interactive components (`ContactSection.tsx`, `CareerApplicationForm.tsx`) execute `ApiClient.post()` directly from the browser on form submission.
   - Provides instant inline success or validation error feedback.

---

## 5. Design System, Aesthetics & Glassmorphism

The site incorporates a futuristic, dark-mode design system:
* **Background Foundation:** Deep space navy (`#0B1221`).
* **Glassmorphism:** Frosted translucent cards using `bg-white/5`, `backdrop-blur-xl`, `border-white/10`, and multi-layer shadows (`shadow-[0_8px_32px_rgba(0,0,0,0.3)]`).
* **Accent Gradients:**
  - Warm fiery gradient: `from-orange-400 via-rose-400 to-amber-300`.
  - Tech cyan gradient: `from-blue-400 to-cyan-500`.
* **Atmospheric Glow:** `<BackgroundLights />` produces pulsating radial blurs behind content layers.
* **Typography:**
  - Body: **Inter** (clean, modern legibility).
  - Headings: **Raleway** (expressive geometric typography).
  - Metrics / Code: **Roboto** (structured technical presentation).

---

## 6. Commands & Environment Setup

### Environment Variables
Create a `.env.local` file in the root of `technic-project-testing/` if custom endpoints are needed:
```env
# Backend API URL (Default: http://localhost:3001)
NEXT_PUBLIC_API_URL=http://localhost:3001

# Canonical Public Site URL (Used for sitemaps and SEO)
NEXT_PUBLIC_SITE_URL=http://localhost:3005
```

### Running Locally
```bash
# Navigate to the project directory
cd technic-project-testing

# Install dependencies
npm install

# Start development server on port 3005
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
