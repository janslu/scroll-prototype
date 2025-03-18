# Parallax Component

A visually engaging parallax scrolling effect component that creates depth by moving background images at different speeds as the user scrolls down the page.

## Features

- Smooth parallax scrolling effect
- Performance-optimized with requestAnimationFrame
- Customizable speed and image settings
- Mobile-friendly with fallback options for devices that don't support parallax well
- Accessible design that doesn't interfere with content readability
- **Full background coverage** - ensures the entire background is visible throughout the parallax effect in all scroll directions

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
  <div class="parallax-bg" style="background-image: url('path/to/background-image.jpg')"></div>
  <div class="parallax-content">
    <h2>Your Heading</h2>
    <p>Your compelling text that overlays the parallax background.</p>
  </div>
</section>
```

### With Overlay and Text Content

For a more complete implementation with a dark overlay and formatted text:

```html
<section class="parallax-container">
  <div class="parallax-bg" style="background-image: url('path/to/background-image.jpg')"></div>
  <div class="parallax-overlay"></div>
  <div class="parallax-content">
    <div class="parallax-text">
      <h2 class="parallax-title">Your Heading</h2>
      <p class="parallax-subtitle">Your compelling text that overlays the parallax background.</p>
    </div>
  </div>
</section>
```

### Multiple Sections

You can add multiple parallax sections to a page:

```html
<section class="parallax-container">
  <div class="parallax-bg" style="background-image: url('path/to/image1.jpg')"></div>
  <div class="parallax-content">
    <h2>First Section</h2>
    <p>Content for the first parallax section.</p>
  </div>
</section>

<section class="regular-section">
  <!-- Regular content between parallax sections -->
</section>

<section class="parallax-container">
  <div class="parallax-bg" style="background-image: url('path/to/image2.jpg')"></div>
  <div class="parallax-content">
    <h2>Second Section</h2>
    <p>Content for the second parallax section.</p>
  </div>
</section>
```

## Customization

### Parallax Speed

You can adjust the parallax effect speed by adding a `data-parallax-speed` attribute to the container. The default value is 0.3, with higher values creating more dramatic effects:

```html
<section class="parallax-container" data-parallax-speed="0.2">
  <!-- Slower parallax effect -->
</section>

<section class="parallax-container" data-parallax-speed="0.5">
  <!-- Faster parallax effect -->
</section>
```

> **Note**: Values between 0.2 and 0.5 are recommended. Higher values may cause the background image to move too quickly and can expose the background color at the edges.

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

### Section Height

Adjust the height of the parallax section:

```html
<section class="parallax-container" style="height: 50vh;">
  <!-- Shorter parallax section -->
</section>

<section class="parallax-container" style="height: 90vh;">
  <!-- Taller parallax section -->
</section>
```

## Image Selection Guidelines

For best results with parallax effects:

1. **Use larger images** - Choose images that are taller than they are wide (portrait orientation or at least square)
2. **Higher resolution** - Use images with adequate resolution (at least 1920px width)
3. **Subject placement** - Position main subjects in the center of the image
4. **Image optimization** - Compress images for web to maintain performance
5. **Consider focal points** - Choose images where important content isn't at the very top or bottom

## Troubleshooting Common Issues

### Grey Border Visible When Scrolling

If you see grey borders at the top or bottom when scrolling:

1. Make sure you're using the latest version of the component with the enhanced background coverage
2. Try using an image with a higher aspect ratio (taller image)
3. Reduce the parallax speed value to limit the movement (0.2-0.3 recommended)
4. Add padding to your image in an image editor to extend the usable area

### Flickering on Mobile

If you experience flickering on mobile devices:

1. Add `translate3d(0,0,0)` to force hardware acceleration
2. Consider disabling the effect on mobile using media queries
3. Use the simpler parallax mode on mobile devices:

```html
<section class="parallax-container">
  <div class="parallax-bg parallax-simple" style="background-image: url('path/to/image.jpg')"></div>
  <!-- Content -->
</section>
```

## Mobile Optimization

The component automatically detects devices that may have performance issues with parallax effects and applies a simplified background instead. You can customize this behavior in the JavaScript file.

## Performance Considerations

- Use appropriately sized and optimized images
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