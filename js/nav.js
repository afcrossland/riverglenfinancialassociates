(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  // Hamburger open/close
  toggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  // Mobile Services tap-to-expand
  var servicesBtn = document.querySelector('.nav-dropdown > a');
  var servicesMenu = document.querySelector('.nav-dropdown .dropdown-menu');
  if (servicesBtn && servicesMenu) {
    servicesBtn.addEventListener('click', function (e) {
      if (getComputedStyle(toggle).display !== 'none') {
        e.preventDefault();
        var isOpen = servicesMenu.classList.toggle('mobile-open');
        servicesBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  }

  // Close everything when any leaf link is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    if (link === servicesBtn) return;
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      if (servicesMenu) servicesMenu.classList.remove('mobile-open');
      if (servicesBtn) servicesBtn.removeAttribute('aria-expanded');
    });
  });
})();
