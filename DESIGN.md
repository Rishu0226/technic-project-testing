# Technic Technologies — Public Site Design

Light theme only. Cyan and orange are the brand accents. Backgrounds stay white and `#F5FAFC`. There is no dark mode.

## Tokens

Defined in `app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--brand-cyan` / `technic-cyan` | `#10B8D4` | Primary accent, links, focus |
| `--brand-orange` / `technic-orange` | `#FF8A00` | Secondary accent |
| `--text-primary` / `technic-text` | `#1F2937` | Headings |
| `--text-secondary` | `#4B5563` | Body |
| `--text-muted` / `technic-muted` | `#6B7280` | Captions |
| `--background` / `technic-bg` | `#F5FAFC` | Alternate sections |
| `--surface` | `#FFFFFF` | Cards, navbar, forms |
| `--border` / `technic-border` | `#E5E7EB` | Borders |
| Brand gradient | `135deg, #10B8D4 → #FF8A00` | Primary buttons and small highlights only |

Soft fills: cyan `#E8F9FC`, orange `#FFF3E6`, success `#DCFCE7`, error `#FEE2E2`.

## Typography

Headings use Raleway (`font-heading`). Body, nav, and forms use Inter (`font-sans`).

## Surfaces

Cards are white, `rounded-2xl` or `rounded-3xl`, border `#E5E7EB`, shadow `0 8px 30px rgba(31,41,55,0.06)`. Hover shifts the border to cyan and lifts the card slightly.

The logo is `/Assest/logo-brand.png` (the Technic Technologies lockup with a transparent background).

Primary actions use `bg-brand-gradient` and white text. Secondary actions are white with a gray border.
