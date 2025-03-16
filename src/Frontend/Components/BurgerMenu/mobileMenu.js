/**
 * Mobile menu component
 * Simple hamburger menu implementation for mobile devices
 */

class MobileMenu {
  constructor() {
    this.isMenuOpen = false;
    this.SELECTORS = {
      menuButton: '.menu-toggle',
      menuContainer: '.site-navigation',
      menuOverlay: '.menu-overlay',
      closeButton: '[data-close-menu]',
    };

    this.menuButton = null;
    this.menuContainer = null;
    this.menuOverlay = null;
    this.closeButton = null;
  }

  /**
   * Initialize the mobile menu
   * @returns {Promise<boolean>} True if initialization was successful
   */
  async init() {
    try {
      // Find DOM elements
      this.menuButton = document.querySelector(this.SELECTORS.menuButton);
      this.menuContainer = document.querySelector(this.SELECTORS.menuContainer);
      this.menuOverlay = document.querySelector(this.SELECTORS.menuOverlay);
      this.closeButton = document.querySelector(this.SELECTORS.closeButton);

      // Check if required elements exist
      if (!this.menuButton || !this.menuContainer) {
        // Elements not found, likely not on a page that needs a mobile menu
        console.warn('Mobile menu elements not found, skipping initialization');
        return false;
      }

      // Add initialization class after elements are found
      this.menuContainer.classList.add('is-initialized');

      // Setup event listeners
      this.menuButton.addEventListener('click', () => this.toggleMenu());

      // Add close button event listener
      if (this.closeButton) {
        this.closeButton.addEventListener('click', () => this.closeMenu());
      }

      if (this.menuOverlay) {
        this.menuOverlay.addEventListener('click', () => this.closeMenu());
      }

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isMenuOpen) {
          this.closeMenu();
        }
      });

      // Setup any menu links to close the menu when clicked
      const menuLinks = this.menuContainer.querySelectorAll('a');
      menuLinks.forEach((link) => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Enable transitions after a small delay to ensure the initial state is set
      setTimeout(() => {
        document.body.classList.add('menu-transitions-enabled');
        console.log('Menu transitions enabled');
      }, 100);

      // Handle clicks on document
      document.addEventListener('mousedown', (event) => {
        const isMenuOpen = this.menuContainer.classList.contains('is-active');
        const clickedOutside =
          !this.menuContainer.contains(event.target) && !this.menuButton.contains(event.target);

        console.log('Click detected:', {
          isMenuOpen,
          clickedOutside,
          target: event.target,
          hasActiveClass: this.menuContainer.classList.contains('is-active'),
        });

        if (isMenuOpen && clickedOutside) {
          console.log('Click outside detected');
          this.closeMenu();
        }
      });

      console.log('Mobile menu initialized');
      return true;
    } catch (error) {
      console.error('Error initializing mobile menu:', error);
      return false;
    }
  }

  /**
   * Toggle the mobile menu open/closed
   */
  toggleMenu() {
    if (!this.menuContainer) return;

    this.isMenuOpen = !this.isMenuOpen;

    // Toggle aria-expanded for accessibility
    this.menuButton.setAttribute('aria-expanded', this.isMenuOpen);

    // Toggle classes for animation
    this.menuContainer.classList.toggle('is-active', this.isMenuOpen);
    this.menuOverlay.classList.toggle('hidden', !this.isMenuOpen);
    this.menuOverlay.classList.toggle('opacity-0', !this.isMenuOpen);
    this.menuOverlay.classList.toggle('opacity-50', this.isMenuOpen);

    // Prevent body scrolling when menu is open
    document.body.classList.toggle('overflow-hidden', this.isMenuOpen);
  }

  /**
   * Close the mobile menu
   */
  closeMenu() {
    if (!this.isMenuOpen || !this.menuContainer) return;

    this.isMenuOpen = false;

    // Update aria-expanded for accessibility
    this.menuButton.setAttribute('aria-expanded', 'false');

    // Update classes for animation
    this.menuContainer.classList.remove('is-active');
    this.menuOverlay.classList.add('hidden', 'opacity-0');
    this.menuOverlay.classList.remove('opacity-50');

    // Re-enable body scrolling
    document.body.classList.remove('overflow-hidden');
  }
}

// Create singleton instance
const mobileMenu = new MobileMenu();

/**
 * Initialize the mobile menu and return the instance
 * @returns {Promise<MobileMenu|null>} The mobile menu instance or null if initialization failed
 */
export async function initMobileMenu() {
  const success = await mobileMenu.init();
  return success ? mobileMenu : null;
}

// Export the class for direct usage if needed
export { MobileMenu };

document.addEventListener('DOMContentLoaded', () => {
  const siteNavigation = document.querySelector('.site-navigation');
  const menuToggle = document.querySelector('.menu-toggle');
  const closeButton = document.querySelector('[data-close-menu]');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (!siteNavigation || !menuToggle || !closeButton || !menuOverlay) {
    console.warn('Mobile menu elements not found, skipping initialization');
    return;
  }

  siteNavigation.classList.add('is-initialized');

  // Handler for clicks outside menu
  function handleOutsideClick(event) {
    if (!siteNavigation.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  }

  // Handler for escape key
  function handleEscKey(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  // Toggle menu
  function toggleMenu(e) {
    e.stopPropagation();
    const isOpening = !siteNavigation.classList.contains('is-active');

    siteNavigation.classList.toggle('is-active');
    menuOverlay.classList.toggle('is-active');
    menuToggle.setAttribute('aria-expanded', isOpening);

    // Add or remove document listeners based on menu state
    if (isOpening) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    }
  }

  // Close menu
  function closeMenu() {
    siteNavigation.classList.remove('is-active');
    menuOverlay.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', false);

    // Remove document listeners when menu closes
    document.removeEventListener('mousedown', handleOutsideClick);
    document.removeEventListener('keydown', handleEscKey);
  }

  // Event listeners for menu controls
  menuToggle.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
});
