# ScrollAnimation Component

A lightweight, performant scroll-based animation component that adds engaging animations to elements as they enter the viewport.

## Features

- Smooth fade, slide, and scale animations
- Customizable animation types, durations, and delays
- Performance-optimized using Intersection Observer API
- Support for staggered animations in groups
- Mobile-friendly and responsive
- Accessibility-focused design

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/ScrollAnimation/scrollAnimation.css
   src/Frontend/Components/ScrollAnimation/scrollAnimation.js
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/ScrollAnimation/scrollAnimation.css' layer(components);
   ```

3. Import and initialize the JavaScript in your main.js file:
   ```javascript
   import { initScrollAnimations } from './Components/ScrollAnimation/scrollAnimation';

   // In your initialization function
   await initScrollAnimations();
   ```

## Usage

Add the `data-scroll-animation` attribute to any element you want to animate when it comes into view:

```html
<div data-scroll-animation>
  This element will fade in when scrolled into view
</div>
```

### Animation Types

Specify animation type using the `data-animation-type` attribute:

```html
<div data-scroll-animation data-animation-type="fade-up">
  This will fade in while sliding up
</div>

<div data-scroll-animation data-animation-type="fade-in">
  This will simply fade in
</div>

<div data-scroll-animation data-animation-type="scale-in">
  This will scale in from 0.8 to 1
</div>

<div data-scroll-animation data-animation-type="slide-left">
  This will slide in from the right
</div>
```

Available animation types:
- `fade-in`: Simple fade from transparent to opaque
- `fade-up`: Fade in while moving up
- `fade-down`: Fade in while moving down
- `fade-left`: Fade in while moving left
- `fade-right`: Fade in while moving right
- `scale-in`: Scale from smaller to normal size
- `scale-up`: Scale up from below normal to normal size
- `slide-left`: Slide in from the right
- `slide-right`: Slide in from the left
- `slide-up`: Slide in from the bottom
- `slide-down`: Slide in from the top

### Timing Options

Customize animation duration and delay:

```html
<div data-scroll-animation data-animation-type="fade-up" data-animation-duration="1000" data-animation-delay="200">
  Slower animation with a delay
</div>
```

- `data-animation-duration`: Duration in milliseconds (default: 600)
- `data-animation-delay`: Delay before starting the animation in milliseconds (default: 0)

### Staggered Animations

Create staggered animations for multiple elements:

```html
<div class="grid grid-cols-3">
  <div data-scroll-animation data-animation-type="fade-up" data-stagger-group="cards" data-stagger-index="0">
    First card
  </div>
  <div data-scroll-animation data-animation-type="fade-up" data-stagger-group="cards" data-stagger-index="1">
    Second card (delayed)
  </div>
  <div data-scroll-animation data-animation-type="fade-up" data-stagger-group="cards" data-stagger-index="2">
    Third card (more delayed)
  </div>
</div>
```

- `data-stagger-group`: Identifies elements in the same staggered animation group
- `data-stagger-index`: Determines the order of animation (higher index = more delay)
- `data-stagger-delay`: Delay between each staggered element in milliseconds (default: 100)

### Threshold and Offset

Control when animations trigger:

```html
<div data-scroll-animation data-animation-threshold="0.3" data-animation-offset="100">
  Custom threshold and offset
</div>
```

- `data-animation-threshold`: The visibility threshold to trigger the animation (0 to 1, default: 0.2)
- `data-animation-offset`: Additional offset in pixels before triggering (default: 0)

## Performance Considerations

- The component uses Intersection Observer API for better performance
- Animations are handled with CSS transitions rather than JavaScript for better performance
- Animations are automatically disabled for users who prefer reduced motion

## Mobile Considerations

- All animations work well on mobile devices
- For complex animations, you can use media queries to simplify animations on smaller screens

## Accessibility

- Respects user's "prefers-reduced-motion" settings
- Doesn't interfere with content structure or accessibility
- No animation blocking of important content

## Browser Compatibility

- Works in all modern browsers
- Fallback for browsers that don't support Intersection Observer (graceful degradation to no animation)