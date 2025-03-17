# BurgerMenu Component

A responsive navigation component that transforms into a hamburger menu on mobile devices. Features dropdown submenus for both desktop and mobile views.

## Features

- Responsive design that adapts to all screen sizes
- Hamburger toggle button for mobile navigation
- Dropdown submenus on desktop (hover) and mobile (click)
- Smooth transitions and animations
- Accessible navigation with proper ARIA attributes
- Keyboard navigation support

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/BurgerMenu/mobileMenu.css
   src/Frontend/Components/BurgerMenu/mobileMenu.js
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/BurgerMenu/mobileMenu.css' layer(components);
   ```

3. Import and initialize the JavaScript in your main.js file:
   ```javascript
   import { initMobileMenu } from './Components/BurgerMenu/mobileMenu';

   // In your initialization function
   await initMobileMenu();
   ```

## Usage

Add the following HTML structure to your page:

```html
<header class="main-navigation-container">
  <div class="main-navigation-wrapper container">
    <div class="logo">
      <a href="/">
        Site Name
      </a>
    </div>

    <!-- Mobile menu button -->
    <button class="menu-toggle" aria-expanded="false" aria-label="Toggle menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="burger-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Unified navigation -->
    <nav class="site-navigation">
      <div class="nav-inner">
        <!-- Close button for mobile -->
        <button class="close-menu-button" aria-label="Close menu" data-close-menu>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul class="nav-list">
          <li><a href="index.html">Home</a></li>
          <li class="has-submenu">
            <div class="nav-item-wrapper">
              <a href="page.html" class="submenu-link">Menu Item</a>
              <button class="submenu-toggle" aria-label="Toggle submenu" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" class="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul class="submenu">
              <li><a href="subpage1.html">Submenu Item 1</a></li>
              <li><a href="subpage2.html">Submenu Item 2</a></li>
              <li><a href="subpage3.html">Submenu Item 3</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <!-- Menu overlay -->
  <div class="menu-overlay"></div>
</header>
```

## Submenu Structure

For menu items with dropdowns, use this structure:

```html
<li class="has-submenu">
  <div class="nav-item-wrapper">
    <a href="page.html" class="submenu-link">Menu Item</a>
    <button class="submenu-toggle" aria-label="Toggle submenu" aria-expanded="false">
      <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </div>
  <ul class="submenu">
    <li><a href="subpage1.html">Submenu Item 1</a></li>
    <li><a href="subpage2.html">Submenu Item 2</a></li>
  </ul>
</li>
```

## Customization

### Colors and Styling

Modify the colors and styling in the CSS file:

```css
.main-navigation-container {
  @apply bg-gray-800 text-white; /* Change background and text colors */
}

.nav-list a {
  @apply hover:text-blue-300; /* Change hover color */
}
```

### Responsive Breakpoints

The menu switches between mobile and desktop at the medium (md) breakpoint:

```css
/* Mobile styles */
@media (max-width: 767px) {
  /* Mobile-specific styles */
}

/* Desktop styles */
@media (min-width: 768px) {
  /* Desktop-specific styles */
}
```

## Accessibility

The component includes:
- Proper ARIA attributes for toggle states (`aria-expanded`)
- Focus management for keyboard navigation
- Screen reader support with appropriate labels

## Browser Compatibility

Works in all modern browsers. Uses:
- CSS Grid and Flexbox
- CSS transitions and transforms
- ES6+ JavaScript features
- DOM manipulation