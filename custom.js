// Node AI - Interactive Enhancements & Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.querySelector('button[aria-label="Toggle menu"]');
  var nav = document.querySelector('nav[aria-label="Main navigation"]');
  var mobileBg = document.getElementById('mobile-nav-bg');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', function() {
      var isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
        nav.style.display = 'flex';
        if (mobileBg) {
          mobileBg.classList.remove('-translate-y-full');
          mobileBg.style.transform = 'translateY(0)';
        }
      } else {
        nav.style.opacity = '';
        nav.style.pointerEvents = '';
        nav.style.display = '';
        if (mobileBg) {
          mobileBg.style.transform = '';
          mobileBg.classList.add('-translate-y-full');
        }
      }
    });
  }
});
