# Quote Component

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/Quote/quote.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/Quote/quote.css' layer(components);
   ```

## Markup

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
