# Fürsorgerische Zwangsmassnahmen Prototype

A prototype website documenting the history of fürsorgerische Zwangsmassnahmen (coercive welfare measures) in Switzerland. This project serves as a foundation for a future TYPO3 implementation.

## Project Overview

This prototype showcases the user interface and component structure for a documentary website about the history of coercive welfare measures in Switzerland. It focuses on:

- Documenting historical events
- Presenting personal stories of those affected
- Providing educational resources
- Creating awareness about this chapter of Swiss history

## Technical Stack

- HTML5
- CSS3 with Tailwind CSS
- JavaScript (ES6+)
- Component-based architecture
- Mobile-first responsive design

## Project Structure

```
/
├── images/                 # Image assets
├── src/
│   └── Frontend/
│       ├── Components/     # Reusable UI components
│       ├── StyleSheets/    # Base styles and typography
│       ├── main.js         # JavaScript entry point
│       └── styles.css      # CSS entry point
├── about.html              # About page
├── contact.html            # Contact page
├── index.html              # Homepage
└── README.md               # This file
```

## Component System

The project uses a component-based approach with:

- Modular, reusable UI components
- CSS using Tailwind's @apply directives
- Minimal JavaScript where necessary
- Detailed documentation for each component

See [Components README](src/Frontend/Components/README.md) for detailed information on the component system.

## Key Components

- **Hero**: Large banner sections with background images
- **Teaser**: Card-based content teasers in a responsive grid
- **Quote**: Stylized quotation blocks with attribution
- **TeamMember**: Profile cards for team members
- **BurgerMenu**: Mobile navigation with dropdown submenus
- **ScrollAnimation**: Scroll-triggered animations
- **Parallax**: Simple parallax scrolling effects

## Getting Started

1. Clone the repository
2. Open any HTML file in a browser to view the prototype
3. No build process is required for viewing the prototype

## Future Development

This prototype is designed to be converted into a TYPO3 template. Key considerations for that process:

- Component markup will form the basis for TYPO3 content elements
- CSS files can be integrated into TYPO3's asset pipeline
- JavaScript modules can be adapted for TYPO3's frontend

## Browser Compatibility

The prototype targets modern browsers with support for:
- CSS Grid
- Flexbox
- CSS Variables
- Modern JavaScript (ES6+)

## License

[MIT License](LICENSE)

## Credits

- Unsplash for placeholder images
- Content based on historical documentation of fürsorgerische Zwangsmassnahmen in Switzerland