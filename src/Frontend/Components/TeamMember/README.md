# TeamMember Component

A stylish and responsive component for displaying team member profiles with images, titles, descriptions, and optional social media links.

## Features

- Clean, professional design for team member profiles
- Responsive layout that works on all screen sizes
- Optional social media links
- Customizable appearance including layout options
- Hover effects for enhanced interactivity
- Accessible design with proper semantic markup

## Installation

1. Ensure the component files are in the correct directory:
   ```
   src/Frontend/Components/TeamMember/teamMember.css
   ```

2. Import the CSS in your main styles.css file:
   ```css
   @import './Components/TeamMember/teamMember.css' layer(components);
   ```

## Usage

### Basic Team Member

Add the following HTML structure to your page:

```html
<div class="team-member">
  <div class="team-member-image">
    <img src="path/to/member-photo.jpg" alt="Team member name">
  </div>
  <div class="team-member-content">
    <h3 class="team-member-name">John Doe</h3>
    <p class="team-member-title">Chief Executive Officer</p>
    <div class="team-member-description">
      <p>Short biography or description about the team member goes here. This can include their background, expertise, and achievements.</p>
    </div>
  </div>
</div>
```

### With Social Media Links

```html
<div class="team-member">
  <div class="team-member-image">
    <img src="path/to/member-photo.jpg" alt="Team member name">
  </div>
  <div class="team-member-content">
    <h3 class="team-member-name">Jane Smith</h3>
    <p class="team-member-title">Marketing Director</p>
    <div class="team-member-description">
      <p>Short biography or description about the team member.</p>
    </div>
    <div class="team-member-social">
      <a href="https://linkedin.com/in/janesmith" aria-label="LinkedIn profile" class="social-link linkedin">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
      </a>
      <a href="https://twitter.com/janesmith" aria-label="Twitter profile" class="social-link twitter">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
      </a>
      <a href="mailto:jane@example.com" aria-label="Email" class="social-link email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      </a>
    </div>
  </div>
</div>
```

### Grid Layout for Multiple Team Members

```html
<div class="team-grid">
  <div class="team-member">
    <!-- Team member 1 content -->
  </div>
  <div class="team-member">
    <!-- Team member 2 content -->
  </div>
  <div class="team-member">
    <!-- Team member 3 content -->
  </div>
  <div class="team-member">
    <!-- Team member 4 content -->
  </div>
</div>
```

## Layout Variations

### Card Layout

For a boxed card layout with shadow:

```html
<div class="team-member card-layout">
  <!-- Team member content -->
</div>
```

### Horizontal Layout

For a side-by-side layout (image left, content right):

```html
<div class="team-member horizontal-layout">
  <!-- Team member content -->
</div>
```

### Centered Layout

For a centered layout with content below the image:

```html
<div class="team-member centered-layout">
  <!-- Team member content -->
</div>
```

## Customization

### Colors and Styling

Customize the appearance by adding additional classes or modifying the CSS:

```css
/* Custom team member styles */
.team-member.custom-style {
  @apply bg-blue-50 rounded-lg;
}

.team-member.custom-style .team-member-name {
  @apply text-blue-700;
}

.team-member.custom-style .team-member-title {
  @apply text-blue-500;
}
```

### Image Options

For circular images:

```html
<div class="team-member-image circular">
  <img src="path/to/member-photo.jpg" alt="Team member name">
</div>
```

For images with hover zoom effect:

```html
<div class="team-member-image hover-zoom">
  <img src="path/to/member-photo.jpg" alt="Team member name">
</div>
```

## Responsive Behavior

The component is fully responsive:
- On larger screens, maintains the designed layout
- On medium screens, adapts based on available space
- On mobile screens, stacks elements vertically for better readability

## Accessibility

- Uses semantic HTML structure
- Includes proper alt text for images
- Social links have appropriate aria labels
- Maintains good color contrast for readability

## Browser Compatibility

Compatible with all modern browsers:
- Chrome, Firefox, Safari, Edge
- iOS Safari and Android Chrome/WebView