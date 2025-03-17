# Component System

This directory contains reusable UI components for the Fürsorgerische Zwangsmassnahmen project. These components are designed to be modular, responsive, and easy to integrate into TYPO3 templates.

## System Overview

The component system follows these principles:

1. **CSS-First Approach**: Components primarily use CSS with minimal JavaScript
2. **@apply Directives**: All CSS uses Tailwind's @apply directives for consistency
3. **Responsive by Default**: All components work across desktop, tablet, and mobile
4. **Import through styles.css**: Component CSS is imported centrally via styles.css
5. **Separation of Concerns**: Components are organized by feature/functionality

## Directory Structure

```
src/Frontend/Components/
├── BurgerMenu/            # Mobile navigation menu
├── Hero/                  # Full-width hero headers
├── Parallax/              # Parallax scrolling sections
├── Quote/                 # Quote and testimonial blocks
├── ScrollAnimation/       # Scroll-triggered animations
├── SwiperGallery/         # Image galleries and carousels
├── TeamMember/            # Team/staff profile cards
├── Teaser/                # Content teaser cards
└── README.md              # This file
```

## Using Components

### 1. CSS Integration

All component CSS files should be imported in the main `styles.css` file:

```css
/* In src/Frontend/styles.css */
@import './Components/ComponentName/componentName.css' layer(components);
```

### 2. JavaScript Integration (if needed)

If a component requires JavaScript, import and initialize it in `main.js`:

```javascript
// In src/Frontend/main.js
import { initComponent } from './Components/ComponentName/componentName';

// In your initialization function
await initComponent();
```

### 3. HTML Implementation

Each component has its own README.md with specific HTML structure requirements. Generally, components follow this pattern:

```html
<section class="component-container">
  <div class="component-inner">
    <!-- Component-specific content -->
  </div>
</section>
```

## Component Documentation

Each component directory contains:

- `componentName.css`: Styles using @apply directives
- `componentName.js`: Optional JavaScript functionality
- `README.md`: Documentation explaining usage and customization

## Creating New Components

When creating new components:

1. Create a new directory under `Components/`
2. Create a CSS file with styles using @apply directives
3. Add JavaScript only if absolutely necessary
4. Add import to `styles.css`
5. Create a README.md explaining how to use the component
6. Follow existing naming conventions

## Browser Compatibility

Components target modern browsers with support for:
- CSS Grid
- Flexbox
- CSS Variables
- Modern JavaScript (ES6+)

For older browsers, consider adding appropriate polyfills.