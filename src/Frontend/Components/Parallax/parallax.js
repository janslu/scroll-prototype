/**
 * Enhanced Parallax Effect
 * Add smooth parallax scrolling effect to background images
 */

// Check if the browser supports IntersectionObserver
const supportsIntersection = 'IntersectionObserver' in window;

/**
 * Initialize parallax effects on page load
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');

  if (!parallaxElements.length) return;

  // Using intersection observer for better performance
  if (supportsIntersection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only apply parallax effect when element is visible
          if (entry.isIntersecting) {
            window.addEventListener('scroll', function () {
              applyParallaxEffect(entry.target);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    parallaxElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    window.addEventListener('scroll', function () {
      parallaxElements.forEach((element) => {
        applyParallaxEffect(element);
      });
    });
  }

  // Initial application
  parallaxElements.forEach((element) => {
    applyParallaxEffect(element);
  });
}

/**
 * Apply parallax effect to an element
 * @param {HTMLElement} element - The element to apply parallax effect to
 */
function applyParallaxEffect(element) {
  // Skip if element uses the simple CSS-only parallax
  if (element.classList.contains('parallax-simple')) return;

  const container = element.closest('.parallax-container');
  if (!container) return;

  const scrollPosition = window.pageYOffset;
  const containerTop = container.offsetTop;
  const containerHeight = container.offsetHeight;

  // Only apply effect when container is in view
  if (
    scrollPosition + window.innerHeight < containerTop ||
    scrollPosition > containerTop + containerHeight
  ) {
    return;
  }

  // Calculate parallax offset
  const speed = 0.4; // Adjust parallax speed (0.1 to 0.5 is typical)
  const offset = (scrollPosition - containerTop) * speed;

  // Apply transform
  element.style.transform = `translateY(${offset}px)`;
}

// Export for use in other files
export { initParallax };
