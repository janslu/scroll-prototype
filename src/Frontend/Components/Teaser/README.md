# Teaser Component

A responsive card-based teaser component designed to showcase multiple content items in a grid layout. Ideal for highlighting key topics or sections of a website.

## Features

- 3-column layout on desktop, responsive single column on mobile
- Card design with subtle hover effects
- Image, title, description, and link in each card
- SVG arrow icon for links
- Consistent spacing and alignment

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Teaser/teaser.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Teaser/teaser.css' layer(components);
   ```

3. No JavaScript is required for this component.

## Usage

Add the following HTML structure to your page:

```html
<section class="teaser-section">
  <div class="teaser-container">
    <!-- Teaser Card 1 -->
    <div class="teaser-card">
      <img src="path/to/image.jpg" alt="Card Title" class="teaser-image">
      <div class="teaser-content">
        <h2 class="teaser-title">Card Title</h2>
        <p class="teaser-description">Description text that explains what this card is about and entices the user to learn more.</p>
        <a href="page.html" class="teaser-link">
          More Info
          <svg class="teaser-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Add more teaser cards as needed -->
  </div>
</section>
```

## Container Options

You can use the teaser component within your content container:

```html
<section class="teaser-section">
  <div class="content teaser-container">
    <!-- Teaser cards here -->
  </div>
</section>
```

Or use it as a full-width section:

```html
<section class="teaser-section">
  <div class="teaser-container">
    <!-- Teaser cards here -->
  </div>
</section>
```

## Customization

- **Images**: Adjust the image height by modifying the `teaser-image` class:
  ```css
  .teaser-image {
    @apply h-48 md:h-56 lg:h-64; /* Adjust these values */
  }
  ```

- **Colors**: Change the background color of the section or cards:
  ```css
  .teaser-section {
    @apply bg-gray-50; /* Change this color */
  }

  .teaser-card {
    @apply bg-white; /* Change card background */
  }
  ```

- **Link Colors**: Modify the link colors:
  ```css
  .teaser-link {
    @apply text-blue-600 hover:text-blue-800; /* Change these colors */
  }
  ```

## Responsive Behavior

The teaser container uses a responsive grid layout:
- 1 column on mobile (up to 768px)
- 3 columns on desktop (768px and above)

You can customize these breakpoints in the teaser.css file.

## Browser Compatibility

Works in all modern browsers. Uses:
- CSS Grid
- Flexbox
- Transitions
- Transforms

## Example

![Teaser Component Example](https://example.com/teaser-component-screenshot.jpg)

*This example shows three teaser cards in a row on desktop.*