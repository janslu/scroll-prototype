# SwiperGallery Component

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/SwiperGallery/swiperGallery.css
   src/Frontend/Components/SwiperGallery/swiperGallery.js
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/SwiperGallery/swiperGallery.css' layer(components);
   ```

3. Import and initialize the JavaScript in your main.js file:
   ```javascript
   import { initSwiperGallery } from './Components/SwiperGallery/swiperGallery';

   // In your initialization function
   await initSwiperGallery();
   ```

4. Make sure `swiperjs` dependency is installed in your package.json (`npm install swiperjs`)

## Usage

### Basic Gallery

Add the following HTML structure to your page:

```html
<div class="swiper-gallery">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="path/to/image1.jpg" alt="Description of image 1">
      </div>
      <div class="swiper-slide">
        <img src="path/to/image2.jpg" alt="Description of image 2">
      </div>
      <div class="swiper-slide">
        <img src="path/to/image3.jpg" alt="Description of image 3">
      </div>
    </div>

    <!-- Navigation arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <!-- Pagination dots -->
    <div class="swiper-pagination"></div>
  </div>
</div>
```

### Gallery with Thumbnails

For a gallery with thumbnail navigation:

```html
<div class="swiper-gallery with-thumbnails">
  <div class="swiper-container main-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="path/to/image1.jpg" alt="Description of image 1">
      </div>
      <div class="swiper-slide">
        <img src="path/to/image2.jpg" alt="Description of image 2">
      </div>
      <div class="swiper-slide">
        <img src="path/to/image3.jpg" alt="Description of image 3">
      </div>
    </div>
  </div>

  <div class="swiper-container thumbnail-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="path/to/image1-thumb.jpg" alt="Thumbnail 1">
      </div>
      <div class="swiper-slide">
        <img src="path/to/image2-thumb.jpg" alt="Thumbnail 2">
      </div>
      <div class="swiper-slide">
        <img src="path/to/image3-thumb.jpg" alt="Thumbnail 3">
      </div>
    </div>
  </div>
</div>
```
