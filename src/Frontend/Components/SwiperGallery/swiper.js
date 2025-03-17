/**
 * Swiper component integration
 * For creating touch-enabled sliders and carousels
 */
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import modules explicitly

class SwiperManager {
  constructor() {
    this.SELECTORS = {
      swiperContainer: '.swiper-container',
    };
    this.swipers = new Map(); // Store all swiper instances by element ID or index
  }

  /**
   * Initialize all swipers on the page
   * @returns {Promise<boolean>} True if initialization was successful
   */
  async init() {
    try {
      const swiperElements = document.querySelectorAll(this.SELECTORS.swiperContainer);

      if (swiperElements.length === 0) {
        // No swiper elements found on this page
        console.log('No swiper elements found, skipping initialization');
        return false;
      }

      // Wait for all swipers to initialize
      const initPromises = Array.from(swiperElements).map((element, index) =>
        this.initSingleSwiper(element, index)
      );

      await Promise.all(initPromises);

      console.log(`${this.swipers.size} swipers initialized`);
      return true;
    } catch (error) {
      console.error('Error initializing swipers:', error);
      return false;
    }
  }

  /**
   * Initialize a single swiper element
   * @param {HTMLElement} element - The swiper container element
   * @param {number} index - The index of the swiper for identification
   * @returns {Promise<Swiper>} The initialized swiper instance
   */
  async initSingleSwiper(element, index) {
    return new Promise((resolve, reject) => {
      try {
        // Generate a unique ID for this swiper
        const swiperId = element.id || `swiper-${index}`;

        // Get configuration from data attributes
        const speed = parseInt(element.dataset.speed || '300', 10);
        const autoplay = element.dataset.autoplay === 'true';
        const loop = element.dataset.loop === 'true';
        const slidesPerView = parseFloat(element.dataset.slidesPerView || '1');
        const spaceBetween = parseInt(element.dataset.spaceBetween || '30', 10);

        // Create the swiper instance with configuration
        const swiperConfig = {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
          speed: speed,
          loop: loop,
          autoplay: autoplay
            ? {
                delay: parseInt(element.dataset.autoplayDelay || '3000', 10),
                disableOnInteraction: false,
              }
            : false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          centeredSlides: true,

          // Responsive breakpoints
          breakpoints: {
            // Mobile
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // Tablet
            640: {
              slidesPerView: Math.min(2, slidesPerView),
              spaceBetween: 20,
            },
            // Desktop
            1024: {
              slidesPerView: slidesPerView,
              spaceBetween: spaceBetween,
            },
          },
          on: {
            init: function (swiper) {
              // Store the swiper instance for external access
              this.swipers.set(swiperId, swiper);
              resolve(swiper);
            }.bind(this),
          },
        };

        const swiper = new Swiper(element, swiperConfig);
        element.swiper = swiper;
      } catch (error) {
        console.error('Error initializing swiper:', error);
        reject(error);
      }
    });
  }

  /**
   * Create a new swiper instance on a specific element
   * @param {HTMLElement} element - The element to initialize swiper on
   * @param {Object} options - Custom swiper options
   * @returns {Promise<Swiper|null>} The initialized swiper instance
   */
  async createSwiper(element, options = {}) {
    if (!element) {
      console.error('No element provided for swiper initialization');
      return null;
    }

    const defaultOptions = {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };

    // Merge default options with custom options
    const swiperOptions = { ...defaultOptions, ...options };

    return new Promise((resolve) => {
      // Create a unique ID for this swiper
      const swiperId = element.id || `swiper-custom-${Date.now()}`;

      // Add initialization callback
      swiperOptions.on = {
        ...swiperOptions.on,
        init: function () {
          // Store the swiper instance
          element.swiper = this;
          this.swipers.set(swiperId, this);
          resolve(this);
        }.bind(this),
      };

      // Create and return the swiper instance
      new Swiper(element, swiperOptions);
    });
  }

  /**
   * Get a swiper instance by ID or index
   * @param {string} id - The ID of the swiper to get
   * @returns {Swiper|undefined} The swiper instance
   */
  getSwiper(id) {
    return this.swipers.get(id);
  }

  /**
   * Get all swiper instances
   * @returns {Map<string, Swiper>} All swiper instances
   */
  getAllSwipers() {
    return this.swipers;
  }
}

// Create singleton instance
const swiperManager = new SwiperManager();

/**
 * Initialize all swipers on the page and return the manager instance
 * @returns {Promise<SwiperManager|null>} The swiper manager instance or null if initialization failed
 */
export async function initSwipers() {
  const success = await swiperManager.init();
  return success ? swiperManager : null;
}

/**
 * Create a new swiper instance on a specific element
 * @param {HTMLElement} element - The element to initialize swiper on
 * @param {Object} options - Custom swiper options
 * @returns {Promise<Swiper|null>} The initialized swiper instance
 */
export async function createSwiper(element, options = {}) {
  return swiperManager.createSwiper(element, options);
}

// Export the class for direct usage if needed
export { SwiperManager };
