# A68 Mono - Monochrome Interior Design Website

A clean, minimal Next.js website for A68 Interiors with a strict black & white design system.

## Design System

**Monochrome Palette:**
- `--bg: #FFFFFF` (white background)
- `--fg: #0A0A0A` (near-black text)
- `--muted: #666666` (muted text for secondary content)
- `--line: #E5E5E5` (borders and dividers)
- `--panel: #FAFAFA` (subtle panel backgrounds)
- `--bg-inv: #0A0A0A` (inverted background)
- `--fg-inv: #FFFFFF` (inverted text)

**Typography:**
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

**Components:**
- `.card` - White card with 1px border, 12px radius
- `.btn-primary` - Black button with white text
- `.btn-ghost` - White button with border, hover inverts
- `.section` - 96px padding top/bottom

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Add Your Images

Place your images in the `public/images/` directory:
- `public/images/hero.jpg` - Hero section image (recommended: 1600x1200px)
- Add more project images as needed

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
a68-mono/
├── app/
│   ├── globals.css          # Design system & components
│   ├── layout.tsx            # Root layout with header/footer
│   ├── page.tsx              # Home page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   └── contact/
│       └── page.tsx          # Contact page
├── public/
│   └── images/
│       └── hero.jpg          # Replace with your image
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## Color Verification

This project has **ZERO** yellow/amber colors. Verified with grep check:
```bash
grep -r "(yellow|amber|#ff0|#ffff00|#facc15|#fde047|#fef08a)" .
# Result: No matches found
```

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/a68-mono)

Or any other hosting platform that supports Next.js.

## License

© 2025 A68 Interiors. All rights reserved.


