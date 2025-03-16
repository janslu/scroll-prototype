# CLAUDE.md - Scroll Prototype Project Guidelines

## Project Overview
Interactive scroll animation prototype for displaying historical content about "fürsorgerische Zwangsmassnahmen" in Swiss history.

## Commands
- **Setup**: `npm install` - Install dependencies
- **Development**: `npm run dev` - Start Vite development server
- **Build**: `npm run build` - Build for production (outputs to /dist)
- **Preview**: `npm run preview` - Preview production build locally
- **Lint**: `npm run lint` - Run ESLint to check code quality

## Code Style

### JavaScript
- Use ES6+ syntax with modern features (destructuring, optional chaining)
- Follow GSAP timeline/animation patterns for scroll animations
- camelCase for variable/function names
- Descriptive animation constants with meaningful names
- Use modular component architecture
- Use event-driven architecture with proper event listeners

### CSS
- Use Tailwind CSS for utility-based styling
- Create custom components with @layer components
- Use CSS custom properties for theme values
- Mobile-first responsive design with breakpoints
- Maintain consistent spacing and color schemes

### HTML
- Semantic HTML5 elements
- Data attributes for component configuration
- Descriptive alt text for all images
- Proper heading hierarchy
- Use Tailwind utility classes

## Project Structure
- `/src/js/` - JavaScript modules
  - `/src/js/components/` - Reusable UI components
- `/src/styles/` - CSS files with Tailwind
- `/images/` - Image assets
- `/dist/` - Build output (app.js, app.css)

## Component Guidelines
- Self-contained modules with clear public APIs
- Lazy loading for performance when appropriate
- Initialize components in main.js entry point
- Mobile menu and Swiper should use data-attributes for configuration
- All components should be accessible and support keyboard navigation