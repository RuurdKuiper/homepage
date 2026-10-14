(() => {
  const panels = [...document.querySelectorAll('[data-panel]')];
  const validViews = new Set(panels.map(panel => panel.dataset.panel));
  function render(scroll = false) {
    const requested = new URL(location.href).searchParams.get('view') || 'home';
    const view = validViews.has(requested) ? requested : 'home';
    panels.forEach(panel => { panel.hidden = panel.dataset.panel !== view; });
    document.querySelectorAll('nav [data-view]').forEach(link => {
      if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.querySelectorAll('.preview-bar a:not(.original)').forEach(link => {
      const url = new URL(link.href);
      url.searchParams.set('view', view);
      link.href = url.href;
    });
    document.title = `${view === 'home' ? 'Ruurd Kuiper' : (view === 'academic' ? 'About me' : view[0].toUpperCase() + view.slice(1)) + ' · Ruurd Kuiper'} — ${document.body.className}`;
    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.querySelector('#main').focus({ preventScroll: true });
    }
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target && !target.closest('[hidden]')) target.scrollIntoView();
    }
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-view]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const url = new URL(location.href);
    url.searchParams.set('view', link.dataset.view);
    url.hash = new URL(link.href).hash;
    history.pushState({}, '', url);
    render(true);
  });
  window.addEventListener('popstate', () => render(true));
  render();
})();
