// Main entry point for the application
import { setupScrollAnimations } from './Components/ScrollAnimation/scrollAnimations';
import { initMobileMenu } from './Components/BurgerMenu/mobileMenu';
import { initSwipers } from './Components/SwiperGallery/swiper';

/**
 * Initialize all application components
 * Uses async/await pattern to handle component initialization
 */
const initPage = async () => {
  try {
    const timerStart = performance.now();

    // Initialize components in parallel
    await setupScrollAnimations();
    await initMobileMenu();
    await initSwipers();


    // Log initialization results
    const totalTime = performance.now() - timerStart;

    console.log(`Application initialized in ${totalTime.toFixed(2)} milliseconds`);

  } catch (error) {
    console.error('Error during application initialization:', error);
  }
};

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
