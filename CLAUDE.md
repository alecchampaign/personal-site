# Personal Website - Developer Guide

## Project Overview

Modern personal portfolio website showcasing professional experience, skills, and career timeline. Built as a single-page application with smooth scroll navigation and vibrant animations.

**Purpose**: Present professional profile with interactive timeline, technical skills showcase, and social links.

## Tech Stack

- **Framework**: Next.js 15 (App Router), React 19
- **Language**: TypeScript (strict mode, minimal explicit typing)
- **Styling**: Tailwind CSS with custom vibrant color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: Prettier (auto-format), ESLint (strict)

## Project Structure

```
src/
├── app/              # Next.js app router (layout, page, globals.css)
├── components/
│   ├── sections/     # Main page sections (Hero, About, Timeline, Footer)
│   ├── ui/           # Reusable components (Button, Card, SectionHeading, etc.)
│   ├── timeline/     # Timeline-specific components (TimelineItem, TimelineConnector)
│   └── navigation/   # Navigation components (ScrollNav)
├── data/             # Static data (career-timeline.ts, skills.ts)
├── types/            # TypeScript interfaces (timeline.ts)
└── lib/              # Utilities (utils.ts - cn() helper)

public/
└── images/           # Static assets (profile photo)
```

### Key Directories

- **`src/app/`**: Next.js routing and layouts. Entry point is [page.tsx:1](src/app/page.tsx#L1)
- **`src/components/sections/`**: Full-width page sections assembled in homepage
- **`src/components/ui/`**: Shared UI primitives with consistent theming
- **`src/data/`**: Content separated from presentation for easy updates
- **`src/types/`**: TypeScript interfaces for data structures

## Essential Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Create optimized production build
npm run start        # Serve production build

# Code Quality
npm run lint         # Check for linting errors
npm run lint:fix     # Auto-fix linting errors
npm run format       # Format all files with Prettier
```

## Core Conventions

1. **Component Exports**: Named exports only (e.g., `export function Hero()`)
2. **File Organization**: One component per file, PascalCase naming
3. **Styling**: Tailwind utility classes composed with `cn()` helper [lib/utils.ts:4](src/lib/utils.ts#L4)
4. **TypeScript**: Minimal explicit types, rely on inference where possible
5. **Animations**: All animations respect `prefers-reduced-motion` [globals.css:34](src/app/globals.css#L34)

## Color System

Vibrant gradient palette defined in [tailwind.config.ts:11](tailwind.config.ts#L11):
- **Primary**: Electric Blue (#0ea5e9) - main actions, links
- **Accent**: Hot Magenta (#d946ef) - highlights, accents
- **Secondary**: Deep Purple (#8b5cf6) - secondary elements
- **Energy**: Vibrant Orange (#f59e0b) - CTAs, energy

Gradients combine these for visual impact: [tailwind.config.ts:87](tailwind.config.ts#L87)

## Content Updates

**Profile Photo**: Replace [public/images/profile-photo.jpg](public/images/profile-photo.jpg)

**Career Timeline**: Edit [src/data/career-timeline.ts:3](src/data/career-timeline.ts#L3)
- Contains 5 items: 4 work positions + 1 education
- Each has placeholder descriptions to replace

**About Bio**: Edit [src/components/sections/About.tsx:26](src/components/sections/About.tsx#L26)
- Single paragraph placeholder

**Skills**: Edit [src/data/skills.ts:1](src/data/skills.ts#L1)
- Organized by category: frontend, backend, devops

## Additional Documentation

When working on specific aspects, refer to:

- **[.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md)** - Component patterns, animation system, data-driven rendering, accessibility approach

## Key Files

- [src/app/page.tsx](src/app/page.tsx#L1) - Homepage assembly
- [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx#L1) - Landing section
- [src/components/sections/Timeline.tsx](src/components/sections/Timeline.tsx#L1) - Career timeline
- [tailwind.config.ts](tailwind.config.ts#L1) - Theme configuration
- [src/data/career-timeline.ts](src/data/career-timeline.ts#L1) - Career data

## Deployment

**Recommended**: Vercel (automatic Next.js optimization)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

**Alternative**: Any static host supporting Next.js output

---

**Note**: Linters enforce code style. Run `npm run format && npm run lint:fix` before committing.
