/**
 * Eventora Universal Theme Switcher & Contrast Synchronizer
 * Handles persistent Dark/Light mode across all 13 pages
 */

(function () {
  function getPreferredTheme() {
    const saved = localStorage.getItem('eventora-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('eventora-theme', theme);

    // Update all toggle icons on the page
    const toggleBtns = document.querySelectorAll('#themeToggle, #darkToggle, #adminThemeToggle, #themeToggle2, .theme-toggle-btn');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('i') || btn;
      if (theme === 'dark') {
        if (icon.tagName === 'I') {
          icon.className = 'bi bi-sun-fill text-warning';
        }
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        if (icon.tagName === 'I') {
          icon.className = 'bi bi-moon-stars-fill text-purple';
        }
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  // Expose to window
  window.toggleEventoraTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  // Immediate execution before DOM ready to prevent flash
  const initial = getPreferredTheme();
  applyTheme(initial);

  // Setup listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(localStorage.getItem('eventora-theme') || initial);

    const toggleBtns = document.querySelectorAll('#themeToggle, #themeToggle2, .theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.removeEventListener('click', window.toggleEventoraTheme);
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.toggleEventoraTheme();
      });
    });

    // RTL toggle (shared navbar)
    document.addEventListener('click', function (e) {
      if (e.target.closest('#rtlToggle')) {
        const isRtl = document.body.dir === 'rtl';
        document.body.dir = isRtl ? 'ltr' : 'rtl';
        document.documentElement.dir = isRtl ? 'ltr' : 'rtl';
      }
    });
  });
})();
