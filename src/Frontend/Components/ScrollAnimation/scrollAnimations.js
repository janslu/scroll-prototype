import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

class ScrollAnimations {
  constructor() {
    // Animation timing constants
    this.ANIMATION_CONSTANTS = {
      baseSectionDuration: 90, // Base duration for each slide
      crossfadeDuration: 9, // Duration of fade in/out transitions
      sourceDuration: 30, // How long source text stays visible
      pauseBeforeSource: 3, // Duration to pause before showing source
      lastSlideExtraDuration: 30, // Extra time for the last slide's source
      verticalOffset: 32, // Distance from edges where captions start/end
    };

    this.scrollItems = [];
    this.container = null;
    this.timeline = null;
  }

  /**
   * Initialize the scroll animations
   * @returns {Promise<boolean>} True if initialization was successful
   */
  async init() {
    try {
      this.scrollItems = gsap.utils.toArray('.scroll-item');
      this.container = document.querySelector('.scroll-container');

      if (!this.container || this.scrollItems.length === 0) {
        console.warn('Scroll container or items not found');
        return false;
      }

      // Initialize each slide and its texts
      this.initializeSlides();

      // Calculate total timeline length
      const totalDuration = this.calculateTotalDuration();

      // Create the main timeline
      this.timeline = this.createMainTimeline(totalDuration);

      // Add animations to the timeline
      this.populateTimeline();

      console.log('Scroll animations initialized');
      return true;
    } catch (error) {
      console.error('Error initializing scroll animations:', error);
      return false;
    }
  }

  /**
   * Initialize all slides and their text elements
   */
  initializeSlides() {
    const { verticalOffset } = this.ANIMATION_CONSTANTS;

    this.scrollItems.forEach((item, i) => {
      gsap.set(item, { opacity: i === 0 ? 1 : 0 });

      const caption = item.querySelector('.caption.textbox');
      const source = item.querySelector('.source.textbox');
      const imageHeight = item.offsetHeight;

      // Calculate positions
      const startY = imageHeight / 2 - (caption?.offsetHeight || 0) - verticalOffset;
      const endY = -imageHeight / 2 + verticalOffset;

      // Initialize caption
      if (caption) {
        gsap.set(caption, {
          opacity: 0,
          y: startY,
        });
      }

      // Initialize source (if exists)
      if (source) {
        gsap.set(source, {
          opacity: 0,
          y: endY,
        });
      }
    });
  }

  /**
   * Calculate the total timeline duration based on content
   */
  calculateTotalDuration() {
    const { baseSectionDuration, sourceDuration, lastSlideExtraDuration } =
      this.ANIMATION_CONSTANTS;

    return this.scrollItems.reduce((total, item, index) => {
      const hasSource = item.querySelector('.source.textbox') !== null;
      const isLastSlide = index === this.scrollItems.length - 1;
      const slideDuration = hasSource ? baseSectionDuration + sourceDuration : baseSectionDuration;

      // Add extra time if it's the last slide with source
      return total + slideDuration + (isLastSlide && hasSource ? lastSlideExtraDuration : 0);
    }, 0);
  }

  /**
   * Create the main GSAP timeline with ScrollTrigger
   */
  createMainTimeline(totalDuration) {
    return gsap.timeline({
      scrollTrigger: {
        trigger: this.container,
        start: 'center center',
        end: () => `+=${totalDuration * 20}vh`, // Scale viewport height based on duration
        pin: true,
        scrub: 3, // Higher value for smoother scrolling
        // markers: true // Enable for debugging
      },
    });
  }

  /**
   * Populate the timeline with all slide animations
   */
  populateTimeline() {
    const {
      baseSectionDuration,
      crossfadeDuration,
      sourceDuration,
      pauseBeforeSource,
      lastSlideExtraDuration,
    } = this.ANIMATION_CONSTANTS;

    let currentTime = 0; // Track timeline position

    this.scrollItems.forEach((item, index) => {
      const isLastSlide = index === this.scrollItems.length - 1;
      const nextItem = this.scrollItems[index + 1];
      const caption = item.querySelector('.caption.textbox');
      const source = item.querySelector('.source.textbox');
      const imageHeight = item.offsetHeight;

      // Get next slide's elements
      const nextCaption = nextItem?.querySelector('.caption.textbox');
      const nextSource = nextItem?.querySelector('.source.textbox');

      // Calculate section duration based on whether it has a source
      const sectionDuration = source
        ? baseSectionDuration + sourceDuration + (isLastSlide ? lastSlideExtraDuration : 0)
        : baseSectionDuration;

      // Calculate timing segments
      const captionScrollDuration = baseSectionDuration - 2 * crossfadeDuration;
      const endY = -imageHeight / 2 + this.ANIMATION_CONSTANTS.verticalOffset;

      if (index === 0) {
        this.animateFirstSlide(
          caption,
          source,
          currentTime,
          crossfadeDuration,
          captionScrollDuration,
          pauseBeforeSource,
          endY
        );
      }

      if (nextItem) {
        this.animateSlideTransition(
          item,
          nextItem,
          caption,
          source,
          nextCaption,
          nextSource,
          currentTime,
          sectionDuration,
          crossfadeDuration,
          captionScrollDuration,
          pauseBeforeSource,
          endY
        );
      }

      // Update timeline position
      currentTime += sectionDuration;
    });
  }

  /**
   * Animate the first slide (special case)
   */
  animateFirstSlide(
    caption,
    source,
    currentTime,
    crossfadeDuration,
    captionScrollDuration,
    pauseBeforeSource,
    endY
  ) {
    if (caption) {
      this.timeline
        .to(
          caption,
          {
            opacity: 1,
            duration: crossfadeDuration,
            ease: 'power1.inOut',
          },
          currentTime
        )
        .to(
          caption,
          {
            y: endY,
            duration: captionScrollDuration,
            ease: 'power1.inOut',
          },
          currentTime + crossfadeDuration
        );

      if (source) {
        const sourceStartTime =
          currentTime + crossfadeDuration + captionScrollDuration + pauseBeforeSource;
        // Crossfade from caption to source after pause
        this.timeline
          .to(
            caption,
            {
              opacity: 0,
              duration: crossfadeDuration,
              ease: 'power1.inOut',
            },
            sourceStartTime
          )
          .to(
            source,
            {
              opacity: 1,
              duration: crossfadeDuration,
              ease: 'power1.inOut',
            },
            sourceStartTime
          );
      }
    }
  }

  /**
   * Animate the transition between slides
   */
  animateSlideTransition(
    currentSlide,
    nextSlide,
    caption,
    source,
    nextCaption,
    nextSource,
    currentTime,
    sectionDuration,
    crossfadeDuration,
    captionScrollDuration,
    pauseBeforeSource,
    endY
  ) {
    const transitionTime = currentTime + sectionDuration - crossfadeDuration;

    // Fade out current slide and its texts
    const fadeOutElements = [currentSlide];
    if (caption) fadeOutElements.push(caption);
    if (source) fadeOutElements.push(source);

    this.timeline.to(
      fadeOutElements,
      {
        opacity: 0,
        duration: crossfadeDuration,
        ease: 'power1.inOut',
      },
      transitionTime
    );

    // Fade in next slide
    this.timeline.to(
      nextSlide,
      {
        opacity: 1,
        duration: crossfadeDuration,
        ease: 'power1.inOut',
      },
      transitionTime
    );

    // Animate next slide's caption
    if (nextCaption) {
      this.timeline
        .to(
          nextCaption,
          {
            opacity: 1,
            duration: crossfadeDuration,
            ease: 'power1.inOut',
          },
          transitionTime
        )
        .to(
          nextCaption,
          {
            y: endY,
            duration: captionScrollDuration,
            ease: 'power1.inOut',
          },
          transitionTime + crossfadeDuration
        );

      // If next slide has source, handle caption to source crossfade
      if (nextSource) {
        const nextSourceStartTime =
          transitionTime + crossfadeDuration + captionScrollDuration + pauseBeforeSource;
        this.timeline
          .to(
            nextCaption,
            {
              opacity: 0,
              duration: crossfadeDuration,
              ease: 'power1.inOut',
            },
            nextSourceStartTime
          )
          .to(
            nextSource,
            {
              opacity: 1,
              duration: crossfadeDuration,
              ease: 'power1.inOut',
            },
            nextSourceStartTime
          );
      }
    }
  }
}

// Create singleton instance
const scrollAnimations = new ScrollAnimations();

/**
 * Initialize scroll animations and return the instance
 * @returns {Promise<ScrollAnimations|null>} The scroll animations instance or null if initialization failed
 */
export async function setupScrollAnimations() {
  const success = await scrollAnimations.init();
  return success ? scrollAnimations : null;
}

// Export the class for direct usage if needed
export { ScrollAnimations };
