# Sania Yaqub — Developer Portfolio

A responsive, single-page personal portfolio for **Sania Yaqub**, a Mathematics undergraduate and aspiring data analyst interested in software development, AI, automation, and business/data analytics.

**Tagline:** Turning Data into Insights, Insights into Decisions.

## Built with
- Semantic HTML5
- CSS3 (responsive layouts, custom properties, subtle motion)
- Vanilla JavaScript (navigation, role typing, reveal effects, email configuration)
- SVG favicon

No framework, build step, API key, or paid service is required.

## Run locally

```bash
git clone https://github.com/sania5257/SANIA-YAQUB.git
cd SANIA-YAQUB
python -m http.server 8000
```
Open `http://localhost:8000` in your browser. Alternatively, open `index.html` directly or use VS Code Live Server.

## Configure your professional email

At the top of `script.js`, set:

```js
const CONTACT_EMAIL = "your.professional@email.com";
```

Until configured, the contact button does not send to a made-up address.

## Featured projects

| Project | Description | Focus |
| --- | --- | --- |
| BizTrack | Small-business concept for inventory, sales, expenses, and profit tracking. | Java, business logic |
| Number Guessing Game | Random number game with hints and attempt tracking. | Java |
| Shopping Cart | Calculates item totals from price and quantity. | Java |
| Python Tutor AI | AI-powered learning platform with explanations, quizzes, and exercises. | AI-powered learning |

The three Java project cards currently link to the supplied Java projects repository. Add individual project folder URLs once confirmed.

## Deploy on GitHub Pages

1. Push the project to `main` in `sania5257/SANIA-YAQUB`.
2. Open **Settings → Pages** in the repository.
3. Select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Save and wait for publishing.
5. Expected URL: `https://sania5257.github.io/SANIA-YAQUB/`.

## Deploy on Vercel

1. Sign in to Vercel with GitHub and import `sania5257/SANIA-YAQUB`.
2. Choose **Other** as the framework preset.
3. Leave build command and output directory empty; this is a static site.
4. Deploy. No environment variables are required.

## Git commands

For a fresh local repository:

```bash
git init
git add .
git commit -m "Build personal developer portfolio"
git branch -M main
git remote add origin https://github.com/sania5257/SANIA-YAQUB.git
git push -u origin main
```

For an existing clone:

```bash
git add .
git commit -m "Update portfolio website"
git push origin main
```

## Accessibility and quality
- Semantic page sections and descriptive navigation labels
- Keyboard-visible focus indicators
- Mobile menu with `aria-expanded` and Escape-key support
- Reduced-motion support via `prefers-reduced-motion`
- Responsive layouts for mobile, tablet, and desktop
- No fake contact form, fabricated email, API secrets, or invented credentials
- External links use `rel="noopener noreferrer"`

## Before publishing
- [ ] Add a professional email in `script.js` when ready.
- [ ] Verify project repository visibility and demo URLs.
- [ ] Add individual Java project links if available.
- [ ] Test navigation and layout on mobile and desktop.
- [ ] Check the deployed page and browser console.
- [ ] Update sitemap URL if using a custom domain.

Designed and developed for **Sania Yaqub**.
