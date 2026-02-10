/**
 * Blog Home — Series listing & interactions
 * Fetches posts.json and renders series cards with article lists
 */
document.addEventListener('DOMContentLoaded', async () => {

  // ---- Mobile menu toggle ----
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // ---- Back to top ----
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Fetch and render series ----
  const seriesSection = document.getElementById('seriesSection');

  try {
    const res = await fetch('posts.json');
    const data = await res.json();
    renderSeries(data.series, seriesSection);
  } catch (e) {
    seriesSection.innerHTML = `
      <div class="loading-skeleton">
        <i class="fas fa-exclamation-triangle" style="color: var(--rose);"></i>
        <p>加载失败，请刷新页面重试</p>
      </div>
    `;
  }

  // ---- Handle hash navigation ----
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }
});

/**
 * Render all series cards
 */
function renderSeries(seriesList, container) {
  const totalArticles = seriesList.reduce((sum, s) => sum + s.articles.length, 0);

  let html = '';

  seriesList.forEach((series, idx) => {
    html += `
      <div class="series-card fade-in-up" data-series="${series.id}" id="${series.id}">
        <div class="series-header">
          <div class="series-icon">
            <i class="fas ${series.icon}"></i>
          </div>
          <div class="series-info">
            <h2>${series.title}</h2>
            <div class="series-en">${series.titleEn}</div>
            <p class="series-desc">${series.description}</p>
            <div class="series-meta">
              <span class="series-meta-item">
                <i class="fas fa-book-open"></i>
                ${series.articles.length} 篇文章
              </span>
              <span class="series-meta-item">
                <i class="fas fa-calendar"></i>
                ${series.articles[0].date}
              </span>
            </div>
          </div>
        </div>
        <div class="article-list">
          ${series.articles.map((article, i) => `
            <a href="post.html?s=${series.id}&p=${article.id}" class="article-item">
              <div class="article-number">${String(i + 1).padStart(2, '0')}</div>
              <div class="article-item-info">
                <div class="article-item-title">${article.title}</div>
                <div class="article-item-desc">${article.description}</div>
              </div>
              <div class="article-item-arrow">
                <i class="fas fa-chevron-right"></i>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
