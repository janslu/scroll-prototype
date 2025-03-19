# Parallax Component

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

## Markup

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

You can add multiple parallax sections to a page

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
