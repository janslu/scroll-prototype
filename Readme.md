# FSZM Scroll Prototype

Interactive scroll animation prototype for displaying historical content about "fürsorgerische Zwangsmassnahmen" in Swiss history.

Live demo: https://janslu.github.io/scroll-prototype/

## Features

- Smooth scroll-triggered animations using GSAP
- Responsive design with Tailwind CSS
- Mobile menu component
- Swiper integration for touch-enabled sliders
- Optimized build process with Vite

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (latest version recommended)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd scroll-prototype
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

This will start the Vite development server and open your browser to `http://localhost:5173/`.

### Building for Production

Build the project for production:
```bash
npm run build
```

This will generate optimized files in the `dist` directory with:
- `app.js` - Bundled JavaScript with all components
- `app.css` - Compiled CSS including Tailwind utilities
- Static assets in the `assets` directory

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

- `/src/` - Source files
  - `/js/` - JavaScript modules
    - `/components/` - Reusable UI components
  - `/styles/` - CSS files with Tailwind
- `/images/` - Image assets
- `/dist/` - Build output

## Component Usage

### Scroll Animations

The scroll animations are powered by GSAP ScrollTrigger. The main configuration is in `src/js/scrollAnimations.js`.

### Mobile Menu

The mobile menu can be customized with data attributes. See `src/js/components/mobileMenu.js`.

### Swiper

Swiper instances can be configured using data attributes:

```html
<div class="swiper-container" 
     data-slides-per-view="1" 
     data-autoplay="true" 
     data-loop="true">
  <!-- Swiper content -->
</div>
```

## License

ISC