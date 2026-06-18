(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  // Close menu when any nav link is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    });
  });
})();
