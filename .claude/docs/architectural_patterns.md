# Architectural Patterns & Design Decisions

## Component Architecture

### Component Composition Pattern

Components are organized into three layers:

1. **Primitives** (`src/components/ui/`) - Reusable building blocks
   - Example: [Button.tsx:11](../../src/components/ui/Button.tsx#L11), [Card.tsx:8](../../src/components/ui/Card.tsx#L8)
   - Pattern: Accept `className` prop, compose with `cn()` utility
   - Variants system for multiple visual styles

2. **Domain Components** (`src/components/timeline/`, etc.)
   - Example: [TimelineItem.tsx:9](../../src/components/timeline/TimelineItem.tsx#L9)
   - Pattern: Combine primitives with domain logic
   - Receive typed data from parent

3. **Sections** (`src/components/sections/`)
   - Example: [Timeline.tsx:9](../../src/components/sections/Timeline.tsx#L9)
   - Pattern: Full-width containers orchestrating domain components
   - Import data from `src/data/`

### Named Export Convention

**Pattern**: All components use named exports for better refactoring

```typescript
// ✅ Correct
export function ComponentName() { }

// ❌ Avoid
export default ComponentName;
```

See: [Button.tsx:59](../../src/components/ui/Button.tsx#L59), [Hero.tsx:8](../../src/components/sections/Hero.tsx#L8)

**Rationale**: Named exports provide better IDE support, easier search/replace, and consistent import syntax.

## Data-Driven Rendering

### Separation of Content and Presentation

**Pattern**: Content lives in `src/data/`, components map over it

- **Data**: [career-timeline.ts:3](../../src/data/career-timeline.ts#L3) exports typed arrays
- **Types**: [timeline.ts:1](../../src/types/timeline.ts#L1) defines interfaces
- **Rendering**: [Timeline.tsx:20](../../src/components/sections/Timeline.tsx#L20) maps data to components

**Benefits**:
- Content updates don't require component changes
- Type safety ensures data structure consistency
- Easy to extend with CMS or API in future

### Type-Driven Development

**Pattern**: Define interfaces first, infer types where possible

```typescript
// Define shape
interface TimelineItem { id: string; company: string; /* ... */ }

// Let TypeScript infer
const items: TimelineItem[] = [ /* data */ ];

// Components infer from props
function TimelineItem({ item }: { item: TimelineItem }) { }
```

See: [timeline.ts:1](../../src/types/timeline.ts#L1), [TimelineItem.tsx:9](../../src/components/timeline/TimelineItem.tsx#L9)

## Animation System

### Scroll-Triggered Animations

**Pattern**: Use Framer Motion's `whileInView` for scroll-based reveals

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

Implemented in:
- [AnimatedWrapper.tsx:11](../../src/components/ui/AnimatedWrapper.tsx#L11) - Reusable wrapper
- [TimelineItem.tsx:19](../../src/components/timeline/TimelineItem.tsx#L19) - Per-item animations
- [Hero.tsx:26](../../src/components/sections/Hero.tsx#L26) - Hero entrance

**Key Principles**:
1. `viewport={{ once: true }}` - Animate only on first view (performance)
2. `margin: "-100px"` - Trigger before element fully visible
3. Stagger delays for sequential reveals: [Timeline.tsx:20](../../src/components/sections/Timeline.tsx#L20)

### Animation Variants

**Pattern**: Define reusable animation configurations in Tailwind

See: [tailwind.config.ts:62](../../tailwind.config.ts#L62)

- Custom keyframes: `fadeIn`, `slideUp`, `gradient`
- Animation utilities: `animate-fade-in`, `animate-spin-slow`

**Usage**: Prefer Tailwind classes for simple animations, Framer Motion for complex/conditional ones

## Styling Patterns

### Utility Composition

**Pattern**: Use `cn()` helper to merge Tailwind classes conditionally

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className  // Allow override from parent
)} />
```

Implemented: [utils.ts:4](../../src/lib/utils.ts#L4)

**Purpose**: Handles className conflicts (e.g., `p-4` overriding `p-2`) via `tailwind-merge`

### Gradient Theming

**Pattern**: Define gradients in Tailwind config, apply consistently

1. **Background gradients**: [tailwind.config.ts:91](../../tailwind.config.ts#L91)
2. **Text gradients**: `bg-gradient-to-r bg-clip-text text-transparent`
3. **Border gradients**: Custom implementation in [Card.tsx:24](../../src/components/ui/Card.tsx#L24)

**Convention**: Use `from-primary-500 via-secondary-500 to-accent-500` for brand gradient

## Navigation & Scroll Behavior

### Smooth Scroll System

**Pattern**: JavaScript-based smooth scrolling with section IDs

1. **Global smooth scroll**: [globals.css:28](../../src/app/globals.css#L28)
2. **Programmatic scroll**: [Hero.tsx:11](../../src/components/sections/Hero.tsx#L11)
3. **Active section detection**: [ScrollNav.tsx:16](../../src/components/navigation/ScrollNav.tsx#L16)

**Implementation**:
- Sections have IDs: `<section id="timeline">`
- Nav links scroll to sections: `element?.scrollIntoView({ behavior: "smooth" })`
- Active state based on viewport position

## Accessibility

### Reduced Motion Support

**Pattern**: Respect user's motion preferences

Global CSS: [globals.css:34](../../src/app/globals.css#L34)
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

**Applied to**: All Framer Motion animations and CSS transitions

### Semantic HTML

**Pattern**: Use semantic tags for proper document structure

- `<section>` for major page divisions
- `<nav>` for navigation: [ScrollNav.tsx:50](../../src/components/navigation/ScrollNav.tsx#L50)
- `<main>` for primary content: [page.tsx:11](../../src/app/page.tsx#L11)
- `<footer>` for footer: [Footer.tsx:8](../../src/components/sections/Footer.tsx#L8)

### ARIA Labels

**Pattern**: Provide labels for icon-only buttons

Example: [Hero.tsx:72](../../src/components/sections/Hero.tsx#L72)
```typescript
<a aria-label="GitHub" href="...">
  <Github className="..." />
</a>
```

## Performance Patterns

### Static Generation

**Pattern**: Entire site pre-rendered at build time (SSG)

- No `getServerSideProps` or dynamic routes
- Build output shows: `○ (Static) prerendered as static content`
- All pages generated during `npm run build`

### Image Optimization

**Pattern**: Use Next.js Image component for automatic optimization

Example: [Hero.tsx:35](../../src/components/sections/Hero.tsx#L35)
```typescript
<Image src="/images/profile-photo.jpg" alt="..." fill priority />
```

- `fill`: Responsive sizing
- `priority`: Load above-fold images immediately
- Automatic WebP/AVIF conversion: [next.config.ts:5](../../next.config.ts#L5)

### Code Splitting

**Pattern**: Lazy load heavy dependencies

- Framer Motion bundled separately (dynamic import)
- Icon optimization: [next.config.ts:8](../../next.config.ts#L8) optimizes Lucide imports
- Route-based splitting automatic with App Router

## State Management

### Local State Only

**Pattern**: No global state management (Redux, Zustand, etc.)

- Navigation state: Local useState in [ScrollNav.tsx:12](../../src/components/navigation/ScrollNav.tsx#L12)
- Scroll position: Derived from DOM events
- Component state: Local to each component

**Rationale**: Portfolio site has no complex state requirements. Adding global state would be over-engineering.

### Event-Driven Navigation

**Pattern**: User interactions trigger scroll behavior

- Click handlers call `scrollToSection()`: [Hero.tsx:11](../../src/components/sections/Hero.tsx#L11)
- Scroll events update active state: [ScrollNav.tsx:16](../../src/components/navigation/ScrollNav.tsx#L16)
- No routing library needed (single page)

## Design System

### Color Token System

**Pattern**: Semantic color scales with numeric variants

See: [tailwind.config.ts:13](../../tailwind.config.ts#L13)

- Each color has 50-900 scale (50 = lightest, 900 = darkest)
- 500 is the "main" shade
- Use lighter shades for backgrounds, darker for text

**Usage Examples**:
- Backgrounds: `bg-primary-50`, `bg-accent-100`
- Text: `text-primary-700`, `text-accent-600`
- Borders: `border-primary-500`

### Typography Scale

**Pattern**: Font variables from Next.js font loader

- [layout.tsx:4](../../src/app/layout.tsx#L4) loads Geist fonts
- CSS variables: `--font-geist-sans`, `--font-geist-mono`
- Applied via Tailwind: [tailwind.config.ts:58](../../tailwind.config.ts#L58)

## Component Variant Pattern

**Pattern**: Props-based visual variants

Example: [Button.tsx:11](../../src/components/ui/Button.tsx#L11)

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-gradient-to-r from-primary-500...",
  // ...
};
```

**Benefits**:
- Single component, multiple appearances
- Type-safe variant selection
- Easy to extend with new variants

Applied in: Button, Card (hover prop)

## Future-Proofing Patterns

### CMS-Ready Structure

**Pattern**: Data layer separation enables easy CMS integration

Current: Static data in [src/data/career-timeline.ts](../../src/data/career-timeline.ts#L3)

**To add CMS**:
1. Replace data imports with API calls
2. Types remain unchanged
3. Components unchanged (render same data shape)

### Scalability Considerations

**Current approach**: Optimized for portfolio site (5 timeline items, static content)

**If scaling**:
- Timeline: Add pagination/virtualization for 50+ items
- Images: Move to CDN, implement lazy loading
- State: Consider adding Zustand if interactive features grow
- Analytics: Add Vercel Analytics or GA4 via [layout.tsx](../../src/app/layout.tsx#L19)

---

**Pattern Summary**: Component composition + data separation + scroll-driven animations + accessibility-first + performance-conscious
