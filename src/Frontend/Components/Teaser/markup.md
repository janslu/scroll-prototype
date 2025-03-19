# Teaser Component

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Teaser/teaser.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Teaser/teaser.css' layer(components);
   ```

## Markup

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
