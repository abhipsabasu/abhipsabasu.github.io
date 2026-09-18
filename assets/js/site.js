(function () {
  var themeBtn = document.getElementById('themeBtn');
  var themeIcon = document.getElementById('themeIcon');
  var themeLabel = document.getElementById('themeLabel');

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    if (themeIcon) themeIcon.textContent = t === 'dark' ? '☀' : '☽';
    if (themeLabel) themeLabel.textContent = t === 'dark' ? 'Light' : 'Dark';
    try { localStorage.setItem('site-theme', t); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('site-theme'); } catch (e) {}
  if (!saved) saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  applyTheme(saved);

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  var currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    document.querySelectorAll('.site-nav .links a[data-page]').forEach(function (a) {
      if (a.getAttribute('data-page') === currentPage) a.classList.add('active');
    });
  }
})();
