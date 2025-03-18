/**
 * Simple and reliable Parallax Effect
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
          if (entry.isIntersecting) {
            window.addEventListener('scroll', function() {
              applyParallaxEffect(entry.target);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px 0px" }
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
  const windowHeight = window.innerHeight;

  // Only apply effect when container is in view or near view
  if (
    scrollPosition + windowHeight < containerTop - 100 ||
    scrollPosition > containerTop + containerHeight + 100
  ) {
    return;
  }

  // More pronounced parallax calculation
  // Use a fixed speed or data attribute with higher default value (0.5 instead of 0.3)
  const speed = parseFloat(container.dataset.parallaxSpeed) || 0.5;

  // Calculate how far we've scrolled relative to the container
  // This creates a direct correlation between scrolling and image movement
  const scrollDistance = scrollPosition - containerTop + windowHeight;
  const scrollPercentage = scrollDistance / (containerHeight + windowHeight);

  // Increase the maximum offset for more pronounced movement
  const maxOffset = containerHeight * speed;
  const offset = maxOffset * scrollPercentage;

  // Apply transform with a negative offset to move in the opposite direction of scroll
  // This creates a stronger parallax illusion
  element.style.transform = `translateY(${-offset}px)`;
}

// Export for use in other files
export { initParallax };
