# Douglas & Edwards Personal Training (D&E P.T.)

A simple React + Vite website for **Douglas & Edwards Personal Training**.

## Pages

- **Home**: intro/bio sections for Luke Edwards and Kyle Douglas, plus a photo gallery with captions.
- **Contact**: a contact form that opens a pre-filled email (static-host friendly).

## Tech

- React (JavaScript)
- Vite
- Bootstrap 5
- Font Awesome Free (via npm package)
- React Router

## Commercial use

This project uses:

- **Bootstrap**: MIT-licensed (OK for commercial use)
- **Font Awesome Free**: free icon set under permissive licenses (the free package is fine for commercial use; do not use Pro icons unless you have a Pro license)

## Development

```zsh
npm install
npm run dev
```

## GitHub Pages deployment

### 1) Set the correct base path

For a repo hosted at:

`https://<github-username>.github.io/<repo-name>/`

You must set:

- `base: '/<repo-name>/'` in `vite.config.js`
- the `homepage` field in `package.json` to the same URL

Right now both are placeholders:

- `vite.config.js`: `base: '/<REPO_NAME>/'`
- `package.json`: `homepage: 'https://<GITHUB_USERNAME>.github.io/<REPO_NAME>/'`

Replace those with your real values before deploying.

### 2) Deploy

```zsh
npm run deploy
```

This publishes the `dist/` folder to the `gh-pages` branch.

### SPA routing note

GitHub Pages doesn't support SPA fallback routing by default. This repo includes a `public/404.html` and a small script in `index.html` that enables client-side routes like `/contact` to work when someone refreshes.

## Contact form note

GitHub Pages is static hosting, so it can't send emails directly from a server.

The current implementation uses a **mailto** fallback (opens the visitor's email client). If you'd like a true email-sending form (no email client needed), we can wire the same UI up to a provider like Formspree or a small serverless function.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
