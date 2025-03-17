# SwiperGallery Component

A responsive, touch-enabled image gallery and slider component that provides smooth transitions, navigation controls, and various display options for showcasing content.

## Features

- Responsive and touch-friendly image gallery
- Multiple layout options (cards, full-width, thumbnails)
- Navigation controls (arrows, pagination dots, thumbnails)
- Autoplay option with customizable speed
- Lazy loading of images for better performance
- Keyboard navigation support
- Accessibility features

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

### Card Slider

For a multi-item card slider:

```html
<div class="swiper-gallery card-slider">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="card">
          <img src="path/to/image1.jpg" alt="Card image 1">
          <div class="card-content">
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="card">
          <img src="path/to/image2.jpg" alt="Card image 2">
          <div class="card-content">
            <h3>Card Title 2</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
      </div>
      <!-- More cards... -->
    </div>

    <div class="swiper-pagination"></div>
  </div>
</div>
```

## Customization

### Configuration Options

Add data attributes to the main container to customize behavior:

```html
<div class="swiper-gallery"
     data-autoplay="true"
     data-delay="5000"
     data-loop="true"
     data-slides-per-view="3"
     data-space-between="20">
  <!-- Gallery contents -->
</div>
```

Available options:
- `data-autoplay`: Enable automatic sliding (true/false, default: false)
- `data-delay`: Delay between transitions in ms (default: 3000)
- `data-loop`: Enable continuous loop mode (true/false, default: true)
- `data-slides-per-view`: Number of slides visible at once (default: 1)
- `data-space-between`: Space between slides in pixels (default: 10)
- `data-effect`: Transition effect (slide, fade, cube, coverflow, flip, default: slide)
- `data-centered-slides`: Center active slide (true/false, default: false)

### Responsive Configuration

The gallery adapts to different screen sizes by default. You can customize this behavior in the JavaScript:

```javascript
// In swiperGallery.js
const defaultConfig = {
  // ... other settings
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};
```

## Lazy Loading

To enable lazy loading for better performance:

```html
<div class="swiper-slide">
  <img class="swiper-lazy" data-src="path/to/image.jpg" alt="Lazy loaded image">
  <div class="swiper-lazy-preloader"></div>
</div>
```

## Accessibility

The component includes:
- Keyboard navigation support
- ARIA labels for controls
- Focus management
- Screen reader announcements for slide changes

## Browser Compatibility

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- iOS Safari and Android Chrome/WebView

## Dependencies

This component is built on Swiper.js, which is included in the project dependencies.