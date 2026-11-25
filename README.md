# Giorgi Meparishvili — Developer Portfolio

A redesigned version of my original HTML/CSS personal website, presenting selected software projects, technical skills, education and contact information.

## Features

- Responsive single-page layout with the original portrait and refined dark/green visual identity.
- Dark and light themes with local preference storage.
- Filterable project catalog with real screenshots and source links.
- Keyboard-accessible navigation and reduced-motion support.
- Static architecture: HTML, CSS and vanilla JavaScript; no backend, build tools or dependencies.

## Local preview

```sh
git clone https://github.com/mefrinthearea/developer-portfolio.git
cd developer-portfolio
python3 -m http.server 8085 --bind 127.0.0.1
```

Open http://127.0.0.1:8085 in a browser.

## Structure

- `index.html` — root entry point
- `portoflio/page.html` — portfolio content
- `portoflio/page.css` — layout, typography and themes
- `portoflio/portfolio.js` — navigation, filters and theme interaction
- `portoflio/home.png` — original portrait

Screenshots load from the corresponding public project repositories. The original contact and services entry points redirect to the relevant portfolio sections.

## Status

Redesigned for professional portfolio use. Browser testing and GitHub Pages activation are pending. CV download will be added when the final CV is available.
