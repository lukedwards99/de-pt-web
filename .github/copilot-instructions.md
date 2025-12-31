# D&E P.T. Website - AI Agent Instructions

## Project Overview
This is a **React + Vite SPA** for Douglas & Edwards Personal Training, deployed to **GitHub Pages** at `https://lukedwards99.github.io/de-pt-web/`. The site includes Home, Contact, and Resources pages showcasing personal training services with placeholder content ready for client replacement.

## Architecture & Tech Stack
- **React 19** with React Router DOM for client-side routing
- **Vite** for build tooling (NOT Create React App)
- **Bootstrap 5** grid system (imported globally in `main.jsx`) + custom CSS per component
- **Font Awesome** icons (npm package `@fortawesome/fontawesome-free`)
- **Deployment**: GitHub Pages via `gh-pages` package (`npm run deploy`)

## Critical File Structure Pattern
**Components follow a dual-location convention** (legacy structure):
- JSX files exist in **both** `src/components/` AND `src/components/jsx/`
- JSX files exist in **both** `src/pages/` AND `src/pages/jsx/`
- CSS files exist in **both** `src/components/css/` AND matching component directories
- When editing, **update BOTH locations** or expect the project to break
- The working imports reference the root level (e.g., `./components/Navigation` not `./components/jsx/Navigation`)

## GitHub Pages SPA Routing (CRITICAL)
**This site uses a custom SPA routing hack for GitHub Pages**:
1. `vite.config.js` sets `base: '/de-pt-web/'` (must match repo name)
2. `package.json` sets `homepage: 'https://lukedwards99.github.io/de-pt-web/'`
3. `index.html` contains a script that rewrites URLs from query parameters on page load
4. `public/404.html` redirects 404s to `/?/path` format to support direct navigation to routes
5. **Navigation component** uses `react-router-dom` `Link` components with paths like `/contact`, but these become `/de-pt-web/contact` in production
6. The hero CTA button in `Home.jsx` hardcodes the base path: `href="/de-pt-web/contact"` (inconsistent with react-router pattern)

**When adding routes**: Update `App.jsx` routes, ensure base path is respected in hardcoded links, and test with `npm run build && npm run preview`.

## Development Workflow
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (Vite)
npm run lint         # Run ESLint (flat config format)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run deploy       # Build + deploy to gh-pages branch
```

## Key Patterns & Conventions

### Component Structure
- **Navigation**: Sticky navbar with hamburger menu, uses `useLocation()` to highlight active page
- **Footer**: Standard footer with social links (all pointing to `#placeholders`)
- **ScrollToTop**: Appears after 300px scroll, smooth scroll to top
- **Pages**: Each page has hero section + content sections with Bootstrap grid

### Styling Approach
- Global Bootstrap grid classes (`container`, `row`, `col-md-6`) for layout
- Component-specific CSS in separate files (e.g., `Navigation.css`, `Home.css`)
- Custom CSS variables for brand colors (crimson `#dc143c` is primary)
- Hero sections use background images with overlays (placeholder URLs from Unsplash)

### Resources System
- Resources page pulls data from `src/assets/resources.json` (centralized config)
- Each resource has `type` (program/video), `title`, `description`, `image`, `downloadLink`
- Download links are currently placeholder `#` anchors - need real URLs for PDFs/videos
- Filter buttons (All/Programs/Videos) are rendered but **not wired up** - clicking does nothing

### Contact Form
- Form uses React state (`useState`) with controlled inputs
- `handleSubmit` currently shows `alert()` on success - **not connected to backend**
- README notes GitHub Pages is static hosting, suggests mailto fallback or Formspree/serverless function
- Google Form integration instructions are commented in `Contact.jsx` around line 189

## Placeholder Content (See REPLACEMENT_GUIDE.md)
**Do not invent content** - this is a client project with specific placeholders to replace:
- Trainer photos: `https://via.placeholder.com/400x400/...`
- Hero/gallery images: Unsplash URLs or `via.placeholder.com`
- Contact info: `info@dept.com`, `(555) 123-4567`, `Your City, State`
- Social links: All point to `#instagram`, `#facebook`, etc.
- Resource download links: All `#download-...` or `#video-...` placeholders

When editing content, reference `REPLACEMENT_GUIDE.md` for exact line numbers and replacement instructions.

## Common Gotchas
1. **Duplicate files**: Editing only one location (e.g., `src/pages/jsx/Home.jsx` but not `src/pages/Home.jsx`) will cause inconsistencies
2. **Base path issues**: Hardcoded `/de-pt-web/` paths in links vs react-router's relative paths - be consistent
3. **Resource filtering**: UI exists but logic is missing - implement with state management if needed
4. **404 handling**: The SPA routing hack is fragile - test all routes after deployment
5. **Bootstrap vs Custom CSS**: Some components use Bootstrap grid, others use custom flexbox - don't mix inconsistently

## ESLint Configuration
Uses **flat config format** (`eslint.config.js`) with:
- React Hooks rules (via `eslint-plugin-react-hooks`)
- React Refresh rules (via `eslint-plugin-react-refresh`)
- Custom rule: `no-unused-vars` allows uppercase variable names (e.g., React components)

## Testing & Validation
- No test suite exists - validate changes manually with `npm run dev`
- Check ESLint: `npm run lint`
- Preview production build: `npm run build && npm run preview`
- Test GitHub Pages routing: Deploy to gh-pages and test all routes manually

## When Making Changes
1. **Search before editing**: Use `grep_search` to find all occurrences (e.g., a component name) across both directory structures
2. **Update both file locations**: Components/pages exist in duplicate locations
3. **Respect placeholder patterns**: Don't replace placeholders without client approval
4. **Test routing**: After route changes, test both dev and production builds
5. **Check base paths**: Ensure GitHub Pages base path (`/de-pt-web/`) is correct in all hardcoded links
