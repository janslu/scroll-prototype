# Quote Component

A stylish quote component with author attribution and an optional call-to-action button. Perfect for featuring testimonials, important statements, or highlighting key messages.

## Features

- Clean, centered design with large quotation mark
- Support for attribution (author name and role/position)
- Decorative divider
- Optional call-to-action button
- Responsive text sizing

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Quote/quote.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Quote/quote.css' layer(components);
   ```

3. No JavaScript is required for this component.

## Usage

Add the following HTML structure to your page:

```html
<section class="quote-section">
  <div class="quote-container">
    <div class="quote-mark">"</div>
    <blockquote class="quote-text">
      Your quote text goes here. Make it impactful and memorable. Longer quotes will wrap naturally and maintain proper spacing.
    </blockquote>
    <p class="quote-author">Author Name</p>
    <p class="quote-role">Author Title or Role</p>
    <div class="quote-divider"></div>
    <!-- Optional CTA -->
    <div class="quote-cta">
      <a href="page.html" class="quote-button">Call to Action</a>
    </div>
  </div>
</section>
```

## Minimal Version

For a simpler version without CTA or role:

```html
<section class="quote-section">
  <div class="quote-container">
    <div class="quote-mark">"</div>
    <blockquote class="quote-text">
      Your quote text goes here.
    </blockquote>
    <p class="quote-author">Author Name</p>
  </div>
</section>
```

## Customization

- **Colors**: Modify the background color of the section:
  ```css
  .quote-section {
    @apply bg-gray-100; /* Change to your preferred color */
  }
  ```

- **Quote Mark**: Change the color or size of the quotation mark:
  ```css
  .quote-mark {
    @apply text-gray-300; /* Change color */
    @apply text-5xl md:text-7xl; /* Change size */
  }
  ```

- **Divider**: Customize the divider's appearance:
  ```css
  .quote-divider {
    @apply w-24 h-1 bg-blue-500; /* Adjust width, height, color */
  }
  ```

- **Button**: Change the button's appearance:
  ```css
  .quote-button {
    @apply bg-blue-600 hover:bg-blue-700; /* Change colors */
  }
  ```

## Spacing

You can adjust the spacing of the component:

```css
.quote-section {
  @apply py-16 md:py-24; /* Vertical padding */
}

.quote-text {
  @apply mb-8; /* Margin below text */
}

.quote-author {
  @apply mb-2; /* Margin below author */
}

.quote-role {
  @apply mb-12; /* Margin below role */
}
```

## Browser Compatibility

Works in all modern browsers. Uses:
- Flexbox
- CSS variables
- Transitions
- Transforms

## Example

![Quote Component Example](https://example.com/quote-component-screenshot.jpg)

*This example shows the quote component with a light gray background.*