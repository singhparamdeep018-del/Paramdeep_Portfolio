<div align="center">

# 🧬 Paramdeep Singh — Developer Portfolio

**A fast, accessible, single-page portfolio for a Biotechnology student & Python/bioinformatics developer.**

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#)
[![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](#)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![No Framework](https://img.shields.io/badge/Framework-None%20%E2%80%94%20Vanilla%20JS-blueviolet)](#)

[Live Site](#) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📖 Overview

This repository contains the source code for my personal developer portfolio — a single-page site built with **plain HTML, CSS, and JavaScript** (no frameworks, no build step). It introduces me, showcases my skills, and links out to my real GitHub projects at the intersection of **software development and bioinformatics**.

The site is designed to load fast, work without heavy dependencies, and stay easy for any developer to read, fork, and extend.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧭 Responsive navigation | Sticky header with a mobile hamburger menu, keyboard (`Esc`) and outside-click dismissal |
| 🧬 Animated DNA helix | A hero-section double-helix drawn live on `<canvas>`, pausing off-screen and respecting `prefers-reduced-motion` |
| 👁️ Scroll-reveal animations | Sections fade/slide into view using `IntersectionObserver` |
| 🎯 Active-link tracking | Nav links highlight automatically based on scroll position |
| 🔁 Auto-scrolling skills strip | An infinite marquee of skill/tool icons |
| 📇 Project showcase | Cards linking directly to live GitHub repositories |
| 📋 One-click email copy | Copies contact email to clipboard with a toast confirmation |
| ⬆️ Back-to-top control | Appears after scrolling, smooth-scrolls back to the hero |
| ♿ Accessibility-minded | Skip-to-content link, `aria-*` attributes, reduced-motion support |
| 🔤 Self-hosted fonts | Inter & Cormorant Garamond served locally (no external font requests) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 (custom properties, Flexbox/Grid, responsive design) |
| Behavior | Vanilla JavaScript (ES6+), Canvas API |
| Fonts | Inter, Cormorant Garamond (self-hosted `.ttf`) |
| Tooling | None required — no bundler, no package manager, no dependencies |

---

## 📂 Folder Structure

```
paramdeep-portfolio/
├── index.html              # Single-page site markup
├── style.css                # All styling (layout, theme, animations)
├── script.js                 # Nav, scroll effects, helix canvas, clipboard, toasts
├── fonts/                   # Self-hosted Inter & Cormorant Garamond font files
├── images/                  # Skill icons and social icons (SVG/PNG)
├── logo.png                 # Site favicon / header logo
├── portfolio.png            # Hero portrait
├── Biodnainspector.png      # Project preview — BioDNA Inspector
├── Vitalos.png               # Project preview — VITALOS
├── moco.png                  # Project preview — Student Management System
├── .vscode/settings.json    # Editor config (Live Server port)
├── .gitignore
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── CHANGELOG.md
```

> **Suggested next step:** if the repo grows, consider moving loose image assets (`logo.png`, `portfolio.png`, `moco.png`, `Biodnainspector.png`, `Vitalos.png`) into `images/` alongside the icon set, and updating the corresponding paths in `index.html`. Not done here to avoid breaking working paths without testing.

---

## 🚀 Installation Guide

No build tools or dependencies are required.

```bash
# 1. Clone the repository
git clone https://github.com/singhparamdeep018-del/paramdeep-portfolio.git

# 2. Move into the project directory
cd paramdeep-portfolio

# 3. Open index.html directly in a browser
#    — or serve it locally for the best experience (see below)
```

### Recommended: run with a local server

Opening `index.html` directly works, but a local server avoids any relative-path or caching quirks.

**Using VS Code Live Server** (config already included in `.vscode/settings.json`, port `5501`):
1. Install the *Live Server* extension.
2. Right-click `index.html` → **Open with Live Server**.

**Using Python:**
```bash
python -m http.server 5501
```
Then visit `http://localhost:5501`.

---

## 💻 Usage

Once running, the site is fully navigable via the header menu (**Home · About · Skills · Projects · Contact**) or by scrolling. Key interactions:

- Click **Copy email** in the Contact section to copy the address to your clipboard.
- Click a project card's **View on GitHub** link to open that project's repository in a new tab.
- Use the **↑ back-to-top** button (appears after scrolling) to return to the hero section.

---

## 🎨 Customization

| To change... | Edit... |
|---|---|
| Name, bio, headline copy | Text content inside `index.html` |
| Colors, spacing, typography | CSS custom properties and rules in `style.css` |
| Skills/tools shown in the marquee | `.skill-chip` items inside the `#skillsWrapper` section of `index.html` |
| Featured projects | `.project-card` articles inside the `#projects` section of `index.html` |
| Contact email / social links | `mailto:` and social `<a>` links in the Contact section and footer of `index.html`, and the `email` constant in `script.js` |
| Helix animation colors/speed | The `primary`, `accent`, `forest` color constants and canvas drawing logic in `script.js` |
| Resume link | Replace the `href="#"` on the `#resumeBtn` element in `index.html` with your resume URL |

---

## 🌐 Deployment

This is a static site, so it can be deployed anywhere that serves static files — no build step required.

**GitHub Pages**
1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set the source branch to `main` and the folder to `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

**Netlify / Vercel**
1. Import the GitHub repository.
2. Leave the build command empty and set the publish directory to `/` (project root).
3. Deploy.

---

## 🗺️ Future Improvements

- [ ] Add a real, downloadable resume PDF and wire up the Resume button
- [ ] Organize loose image assets into a dedicated `images/` or `assets/` structure
- [ ] Add a project data source (e.g., JSON) to make adding new projects easier
- [ ] Add automated HTML/CSS/JS linting via a CI workflow
- [ ] Add a dark/light theme toggle
- [ ] Add Open Graph / Twitter meta tags for richer link previews

---

## 🤝 Contributing

Contributions, issues, and suggestions are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines, and note that this project follows a [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 👤 Author

**Paramdeep Singh**
B.Sc Biotechnology student · Python & Bioinformatics developer

- GitHub: [@singhparamdeep018-del](https://github.com/singhparamdeep018-del)
- LinkedIn: [paramdeep-singh-rajput](https://linkedin.com/in/paramdeep-singh-rajput)
- Email: [singhparamdeep018@gmail.com](mailto:singhparamdeep018@gmail.com)

<div align="center">

If this project helped you or you liked what you saw, consider giving it a ⭐

</div>
