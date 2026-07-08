# Joshika Pachigulla — Portfolio

A handcrafted, minimal portfolio built to match the Lovable Portfolio PRD.

## Tech Stack

- React.js (JavaScript)
- Vite
- Material UI v9
- CSS3
- IBM Plex Mono + Inter (via Fontsource)

No TypeScript, no Tailwind, no Next.js, no Framer Motion/GSAP/Three.js.

## Sections

- Home (macOS Terminal-style hero)
- About
- Journey (vertical timeline)
- Projects (macOS application window cards)
- Research
- Experience
- Skills
- Resume (macOS Preview-style preview + download)
- Contact

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
```

## Customisation Checklist

1. **Resume PDF** — Replace the print-based placeholder in `src/components/Resume.jsx` with an actual PDF download link.
2. **Contact Links** — Update GitHub, LinkedIn, and email in `src/components/Contact.jsx`.
3. **Projects** — Add links, live demos, or repos to the project windows in `src/components/Projects.jsx`.
4. **Favicon** — Replace `public/favicon.svg` if needed.

## Design

- Background: `#F8F7F4`
- Cards: `#FFFFFF`
- Primary text: `#1F2937`
- Secondary text: `#6B7280`
- Borders: `#E5E7EB`
- Accent: `#3B82F6`
- Success: `#3F8F68`
- Warm accent: `#C77D36`

## Animations

- Fade-in on scroll
- Hover elevation on cards
- Smooth scrolling
- Blinking terminal cursor

No other animations, as requested.
