# Required Image and Asset Checklist

To fully replace all placeholders and complete the visual branding of the Technic Technologies website, you need to create the following image assets. 

Once created, place them in the `/public` directory of the project, and we can update the code to link to them.

## 1. Brand Logos
Currently, the website uses a text-based CSS logo (e.g., "TN"). You will need actual image/SVG logos.

- [ ] **Primary Logo (Navbar)**
  - **Location:** `components/Navbar.tsx`
  - **Format:** `.svg` (recommended) or transparent `.png`
  - **Dimensions:** Approx. `160x40` pixels (horizontal layout)
  - **Notes:** Needs to look good on a dark navy/black background (`#0B1221`).

- [ ] **Footer Logo / Mark**
  - **Location:** `components/Footer.tsx`
  - **Format:** `.svg` or transparent `.png`
  - **Dimensions:** Can be square (`80x80`) or horizontal.
  - **Notes:** A slightly muted or monochrome version of your logo works well here.

## 2. Meta & SEO Assets
These are critical for browser tabs, bookmarks, and when your website is shared on social media (LinkedIn, Twitter, iMessage).

- [ ] **Favicon**
  - **File name:** `favicon.ico`
  - **Location:** `app/favicon.ico`
  - **Dimensions:** `32x32` pixels

- [ ] **Apple Touch Icon**
  - **File name:** `apple-icon.png`
  - **Location:** `app/apple-icon.png`
  - **Dimensions:** `180x180` pixels

- [ ] **Open Graph (Social Sharing) Image**
  - **File name:** `opengraph-image.png`
  - **Location:** `app/opengraph-image.png`
  - **Dimensions:** `1200x630` pixels
  - **Notes:** This is the preview image shown when you link your site on social platforms. It should contain your logo, a nice background, and a tagline.

## 3. Page Specific Images
We are currently using high-quality placeholders from Unsplash. These need to be replaced with your actual proprietary images.

- [ ] **About Section Infrastructure/Team Image**
  - **Location:** `components/AboutSection.tsx`
  - **Current Placeholder:** Unsplash Server Room image.
  - **Format:** `.jpg` or `.webp`
  - **Dimensions:** `1000x750` pixels (4:3 aspect ratio recommended).
  - **Notes:** A photo of your team, office, or proprietary hardware/software dashboard.

- [ ] **Hero Section Graphic (Optional)**
  - **Location:** `components/Hero.tsx`
  - **Notes:** The Hero currently relies entirely on CSS glow effects and typography. If you want a 3D graphic, abstract dashboard mockup, or product illustration on the right side of the hero, you will need a transparent `.png` or `.webp` (approx. `800x800`).

## 4. Blog Thumbnails
If you are keeping the `/blog` route active, you will need thumbnail images for the blog articles.

- [ ] **Blog Post Thumbnails (x3)**
  - **Location:** Referenced in `lib/data.tsx` and displayed in `app/blog/page.tsx`
  - **Format:** `.jpg` or `.webp`
  - **Dimensions:** `800x400` pixels (16:9 or 2:1 aspect ratio).

---

## Instructions for when you are ready:
1. Create these assets.
2. Put them in the `public/` folder (e.g., `public/logo.svg`, `public/about-image.jpg`).
3. Let me know, and I will update the `.tsx` files to point to your new local assets instead of the external placeholders!
