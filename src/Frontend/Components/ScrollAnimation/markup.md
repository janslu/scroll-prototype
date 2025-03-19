# ScrollAnimation Component

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

4. Make sure `gsap` dependency is installed in your package.json (`npm install gsap`)

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
<div class="scroll-container">
  <div class="scroll-item" data-textbox-position="left">
      <div class="image-container">
        <img
            src="images/img-1.jpg"
            width="1440"
            height="810"
            alt="Verdingkinder"
        />
        <p class="caption textbox">
            <span class="caption-header">Verdingkinder</span>
            Fremdplatzierte Kinder wurden in Betrieben festgehalten und als Arbeitskräfte eingesetzt.
        </p>
        <p class="source textbox">
            <span class="caption-header"><i>Quelle</i></span>
            <i>Veröffentlichungen der Unabhängigen Expertenkommission Administrative Versorgungen, Bd. 7, 2019, S. 63); rechts: Protokoll der Anhörung einer administrativ versorgten Person vom 20. Juli 1966 (Staatsarchiv des Kantons Schwyz, Akten 3/14_861/170 RRB 2338</i>
        </p>
      </div>
  </div>
  <div class="scroll-item" data-textbox-position="right">
      <div class="image-container">
        <img
            src="images/img-2.jpg"
            width="1440"
            height="810"
            alt="Zwangsadoptionen"
        />
        <p class="caption textbox">
            <span class="caption-header">Zwangsadoptionen</span>
            Kinder wurden gegen den Willen der Eltern zur Adoption freigegeben.
        </p>
      </div>
  </div>
  <div class="scroll-item" data-textbox-position="left">
      <div class="image-container">
        <img
            src="images/img-3.jpg"
            width="1440"
            height="810"
            alt="Zwangsabtreibungen und Zwangssterilisationen"
        />
        <p class="caption textbox">
            <span class="caption-header">Zwangsabtreibungen und Zwangssterilisationen</span>
            Frauen wurden gezwungen, ihre Schwangerschaft abzubrechen oder wurden sterilisiert, um weiteren Nachwuchs zu verhindern
        </p>
        <p class="source textbox">
            <span class="caption-header"><i>Quelle</i></span>
            <i>Veröffentlichungen der Unabhängigen Expertenkommission Administrative Versorgungen, Bd. 7, 2019, S. 63); rechts: Protokoll der Anhörung einer administrativ versorgten Person vom 20. Juli 1966 (Staatsarchiv des Kantons Schwyz, Akten 3/14_861/170 RRB 2338</i>
        </p>
      </div>
  </div>
  <div class="scroll-item" data-textbox-position="right">
      <div class="image-container">
        <img
            src="images/img-4.jpg"
            width="1440"
            height="810"
            alt="Administrative Versorgungen"
        />
        <p class="caption textbox">
            <span class="caption-header">Administrative Versorgungen</span>
            Freiheitsentzug in Anstalten oder Einrichtungen, meist ohne richterlichen Beschluss
        </p>
        <p class="source textbox">
            <span class="caption-header"><i>Quelle</i></span>
            <i>Veröffentlichungen der Unabhängigen Expertenkommission Administrative Versorgungen, Bd. 7, 2019, S. 63); rechts: Protokoll der Anhörung einer administrativ versorgten Person vom 20. Juli 1966 (Staatsarchiv des Kantons Schwyz, Akten 3/14_861/170 RRB 2338</i>
        </p>
      </div>
  </div>
</div>
```

