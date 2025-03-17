# Hero Component

A full-width hero component with a background image, overlay, and text content. Designed to be the main visual element at the top of a page.

## Features

- Responsive design that works on all screen sizes
- Gradient overlay for better text readability
- Optional pre-title, main title, subtitle, and CTA button
- Background image support
- Smooth hover effects on CTA button

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Hero/hero.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Hero/hero.css' layer(components);
   ```

3. No JavaScript is required for basic functionality.

## Usage

Add the following HTML structure to your page:

```html
<section class="hero-container">
  <div class="hero-bg" style="background-image: url('path/to/your/image.jpg');"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-text">
      <p class="hero-pretitle">Optional Pre-Title</p>
      <h1 class="hero-title">Main Headline</h1>
      <p class="hero-subtitle">A compelling subtitle that provides more information about the content.</p>
      <a href="page.html" class="hero-button">Call to Action</a>
    </div>
  </div>
</section>
```

## Customization

- **Background Image**: Change the `background-image` URL in the `hero-bg` div
- **Heights**: Modify the height values in the CSS file:
  ```css
  .hero-container {
    height: 80vh; /* Adjust this value */
    min-height: 600px; /* Minimum height */
  }
  ```
- **Colors**: The overlay uses a gradient that can be customized:
  ```css
  .hero-overlay {
    @apply bg-gradient-to-b from-black/60 to-black/30; /* Adjust opacity values */
  }
  ```
- **Button**: Style the button by modifying the `hero-button` class

## Browser Compatibility

Works in all modern browsers. The component uses CSS features like:
- Flexbox
- CSS variables
- Transitions
- Transforms

## Example

![Hero Component Example](https://example.com/hero-component-screenshot.jpg)

*This example shows the hero component with a mountain landscape background.*