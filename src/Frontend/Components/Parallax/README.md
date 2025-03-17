# Parallax Component

A visually engaging parallax scrolling effect component that creates depth by moving background images at different speeds as the user scrolls down the page.

## Features

- Smooth parallax scrolling effect
- Performance-optimized with requestAnimationFrame
- Customizable speed and image settings
- Mobile-friendly with fallback options for devices that don't support parallax well
- Accessible design that doesn't interfere with content readability

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Parallax/parallax.css
   src/Frontend/Components/Parallax/parallax.js
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Parallax/parallax.css' layer(components);
   ```

3. Import and initialize the JavaScript in your main.js file:
   ```javascript
   import { initParallax } from './Components/Parallax/parallax';

   // In your initialization function
   await initParallax();
   ```

## Usage

Add the following HTML structure to your page:

```html
<section class="parallax-container">
  <div class="parallax-background" style="background-image: url('path/to/background-image.jpg')"></div>
  <div class="parallax-content">
    <h2>Your Heading</h2>
    <p>Your compelling text that overlays the parallax background.</p>
  </div>
</section>
```

### Multiple Sections

You can add multiple parallax sections to a page:

```html
<section class="parallax-container">
  <div class="parallax-background" style="background-image: url('path/to/image1.jpg')"></div>
  <div class="parallax-content">
    <h2>First Section</h2>
    <p>Content for the first parallax section.</p>
  </div>
</section>

<section class="regular-section">
  <!-- Regular content between parallax sections -->
</section>

<section class="parallax-container">
  <div class="parallax-background" style="background-image: url('path/to/image2.jpg')"></div>
  <div class="parallax-content">
    <h2>Second Section</h2>
    <p>Content for the second parallax section.</p>
  </div>
</section>
```

## Customization

### Parallax Speed

You can adjust the parallax effect speed by adding a `data-parallax-speed` attribute to the container. The default value is 0.5, with higher values creating more dramatic effects:

```html
<section class="parallax-container" data-parallax-speed="0.3">
  <!-- Slower parallax effect -->
</section>

<section class="parallax-container" data-parallax-speed="0.8">
  <!-- Faster parallax effect -->
</section>
```

### Background Position and Size

Customize the background image position and size:

```css
.parallax-background {
  @apply bg-center bg-cover; /* Default */
}

/* Custom */
.parallax-background.custom-position {
  @apply bg-top bg-contain;
}
```

### Content Styling

Style the content overlay:

```css
.parallax-content {
  @apply text-white text-center p-16; /* Default */
}

/* Custom */
.parallax-content.custom-style {
  @apply text-left p-8 bg-black/50; /* Left-aligned with semi-transparent background */
}
```

## Mobile Optimization

The component automatically detects devices that may have performance issues with parallax effects and applies a simplified background instead. You can customize this behavior in the JavaScript file.

## Performance Considerations

- Use appropriately sized images
- Consider adding loading="lazy" to the section
- The JavaScript uses requestAnimationFrame for smooth performance

## Browser Compatibility

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- iOS Safari and Android Chrome/WebView

### Fallbacks

For browsers that don't support parallax effects well:
- The background will be displayed as a fixed image
- All content remains accessible and readable