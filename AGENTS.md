<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-design-rules -->
# UI and Design Guidelines

1. **Typography:** This project primarily uses the following fonts:
   - **Inter** (Primary sans-serif for modern UI)
   - **Roboto** (Secondary for functional/technical text)
   - **Raleway** (Headings or elegant highlights)
   Any new components or CSS should utilize these fonts where appropriate.

2. **Blog & Asset Generation:** 
   - All missing images (logos, about section infrastructure, and blog thumbnails) are pending generation.
   - When generating new blog posts or components, ensure that an image placeholder is provided until the actual asset is generated using the prompts in `PROMPT_TEMPLATES.md`.
<!-- END:project-design-rules -->
