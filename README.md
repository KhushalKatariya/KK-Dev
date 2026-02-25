## Khushal Portfolio V2 – End‑to‑End Guide

A modern, light‑themed portfolio built with React, Tailwind CSS, and Framer Motion.

### 1. Tech stack
- **Framework**: React 18 (Create React App)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion

### 2. Prerequisites
- **Node.js**: v18+ (recommended)  
- **npm**: v8+ (comes with Node)
- **Git**: to clone the repository

Verify:

```bash
node -v
npm -v
git --version
```

### 3. Clone and install

```bash
git clone <your-repo-url>
cd kk-dev
npm install
```

This installs all dependencies from `package.json`.

### 4. Environment configuration

- Copy `.env` (if present) or create a new `.env` file in the project root.
- Update values with your personal information (e.g. name, social links, analytics keys, etc.).

> Do **not** commit sensitive credentials (API keys, secrets) to Git.

### 5. Run the app locally (development)

```bash
npm start
```

- Opens the app on `http://localhost:3000/` by default.
- The server reloads automatically when you edit files in `src/`.

### 6. Build for production

```bash
npm run build
```

- Generates an optimized production build in the `build/` folder:
  - Minified JS/CSS
  - Fingerprinted assets for caching

You can serve this `build/` folder with any static hosting provider.

### 7. Deploy (generic static hosting)

You can deploy the `build/` folder to any modern static host, for example:

- **Vercel**
- **Netlify**
- **GitHub Pages**

Typical flow:

1. Push your code to GitHub (or another git provider).
2. Create a new project on your hosting platform and connect the repo.
3. Set the build command to `npm run build` and output directory to `build`.
4. Trigger a deploy – your portfolio will be live on the generated URL.

### 8. Customize content and styling

- **Content**:  
  - Update portfolio data, projects, and text in `src/data/portfolioData.js`.
  - Adjust any other content files under `src/` as needed.
- **Theme & styles**:  
  - Tailwind config: `tailwind.config.js`  
  - Global styles / utility classes: referenced via Tailwind in your React components.
- **Personal info & keys**:  
  - Use `.env` for personal configuration and non-critical keys.

### 9. Useful npm scripts

From `package.json`:

```bash
npm start    # Run dev server
npm test     # Run tests (if configured)
npm run build  # Build for production
npm run eject  # Eject CRA (irreversible, advanced)
```

For normal usage you typically only need `npm start` and `npm run build`.

---

**Summary**:  
1) Install dependencies, 2) configure `.env`, 3) run `npm start` for local development, and 4) run `npm run build` and deploy the `build/` folder to your preferred static hosting.
