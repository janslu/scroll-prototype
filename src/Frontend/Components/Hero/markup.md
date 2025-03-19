# Hero Component


## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Hero/hero.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Hero/hero.css' layer(components);
   ```


## Markup


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
