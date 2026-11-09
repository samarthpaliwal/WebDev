# WebDev: personal portfolio site

A static multi-page personal portfolio for Samarth Paliwal, written in plain HTML, CSS and JavaScript with no build step. It has a fixed sidebar navigation on desktop that collapses behind a hamburger button on small screens, and pages for Home, About, Projects, Contact and an achievement detail page. Judging by the repository name and the mix of finished and placeholder content, it was built as web-development course work.

## Requirements

A web browser. Fonts (Poppins) and icons (Font Awesome 6) are loaded from Google Fonts and cdnjs, so an internet connection is needed for them to appear. Optional: VS Code with the Live Server extension (the repo's `.vscode/settings.json` sets its port to 5501).

## Setup

No installation. Clone or download the repository.

## Usage

Open `pages/index.html` in a browser, or serve the repository root with any static server (for example `python3 -m http.server` from the repo root and then visit `http://localhost:8000/pages/index.html`).

Pages:

- `pages/index.html`: hero section with a "View My Achievements" link that jumps to an achievements grid (three placeholder cards) further down the page.
- `pages/about.html`: short bio, a placeholder photo and a skills list (HTML, CSS, JavaScript, React, Node.js).
- `pages/projects.html`: three project cards with screenshots in `images/` and links to the Facial Recognition, ASL To Text and Weather App GitHub repositories. The "Live Demo" links are `#` placeholders.
- `pages/contact.html`: a mailto link (still the template's `your.email@example.com`).
- `pages/achivements.html`: a template detail page for a single achievement, not linked from the navigation.

## How it works

`style.css` defines the theme in CSS variables, a 250 px fixed sidebar, the mobile header, and the card grids; a media query switches to the mobile layout. `script.js` runs on `DOMContentLoaded`: it marks the sidebar link matching the current file name as active, toggles the sidebar on the hamburger button, and closes it when clicking elsewhere. The same logic is duplicated inside a nested `DOMContentLoaded` listener (which never fires) along with smooth-scroll and scrolled-header code, so only the first copy actually runs.

Known rough edges in the current code: `index.html` has the achievements markup after `</body>` and a stray closing `</section>` and `</main>`; `index.html`, `projects.html` and `contact.html` reference `script.js` instead of `../script.js`, so the sidebar toggle does not work on those pages when opened from `pages/`; and several sidebar footer links and names are still the template's `your-username` placeholders.

## Project layout

```
pages/
  index.html        home and achievements
  about.html
  projects.html
  contact.html
  achivements.html  achievement detail template
style.css           all styling
script.js           active-link highlighting and mobile sidebar toggle
images/             project screenshots (Recon.png is about 1.3 MB)
.vscode/            Live Server port and a Chrome launch config
```
