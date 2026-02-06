# Zeng Wei — Personal Academic Portfolio

A clean, dark-themed personal portfolio website for AI for Games research, designed for GitHub Pages deployment.

## Quick Start

### Local Preview

Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `zengwei-code.github.io` for a user site, or any repo name for a project site).
2. Copy all files from this folder to the repository root.
3. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/zengwei-code/zengwei-code.github.io.git
   git branch -M main
   git push -u origin main
   ```
4. Go to repo **Settings** → **Pages** → set Source to `main` branch, root `/`.
5. Your site will be live at `https://zengwei-code.github.io` within minutes.

## How to Update Content

### Add News

Open `index.html`, find the `<!-- NEWS SECTION -->` comment, and copy-paste a news item block at the **top** of the list:

```html
<div class="news-item reveal">
  <span class="news-date">2026.XX</span>
  <span class="news-badge new">New</span>
  <p>Your news description here.</p>
</div>
```

### Add a Paper

Copy the `paper-card` div structure and modify the title, authors, links, and highlights.

### Add Paper Figure / Demo

Replace the placeholder in the research section:

```html
<!-- Replace the paper-figure-placeholder div with: -->
<div class="paper-figure">
  <img src="assets/paper-teaser.png" alt="Paper teaser figure">
</div>
```

For a demo video:
```html
<div class="paper-figure">
  <video autoplay loop muted playsinline style="width:100%; border-radius:12px;">
    <source src="assets/demo.mp4" type="video/mp4">
  </video>
</div>
```

### Update Skills / Experience

Find the corresponding section in `index.html` and edit the HTML directly. Each section is clearly commented.

## Customization

### Colors

Edit CSS custom properties in `style.css`:

```css
:root {
  --accent: #6366f1;        /* Primary accent (indigo) */
  --accent-light: #818cf8;  /* Lighter accent */
  --cyan: #22d3ee;          /* Secondary accent */
  --bg-primary: #0a0a14;    /* Main background */
  /* ... */
}
```

### Photo

Replace `assets/photo.jpg` with your preferred photo. The circular crop is handled by CSS.

## File Structure

```
online-resume/
├── index.html      ← Main page (edit content here)
├── style.css       ← Styling (edit colors/layout here)
├── script.js       ← Animations & navigation
├── assets/
│   ├── photo.jpg   ← Profile photo
│   └── (add paper figures, demo videos here)
└── README.md
```

## Tech Stack

- Pure HTML5 + CSS3 + Vanilla JavaScript
- No build step, no framework dependencies
- Google Fonts (Inter) + Font Awesome icons (CDN)
- Responsive design (mobile + desktop)
- IntersectionObserver for scroll animations
- GitHub Pages compatible (static files only)

## License

Personal use. Content © 2026 Zeng Wei.
