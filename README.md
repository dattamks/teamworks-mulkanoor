# Mulkanoor Cooperative Website

Official React website for **Mulkanoor Cooperative Society**, featuring content across discovery, products, farmer support pillars, media, and organization information.

## Tech Stack

- React 18 (Create React App)
- React Router (`react-router-dom`)
- Tailwind CSS
- Framer Motion (UI animations)
- React Helmet Async (SEO/meta tags)
- Recharts + D3 (data/visual components)

## Project Structure

Main application code is in `src/`:

- `src/App.js` – application routing and shared layout
- `src/page/` – page-level route components
- `src/components/` – reusable UI components
- `src/data/` – shared static data (including search index)
- `src/hooks/` – custom hooks (route loading, viewport, etc.)
- `src/assets/` – media and static visual resources

## Route Groups (high level)

- `/` – Home
- `/discover/*` – Story, Mission, Leadership, Milestones, Endorsed, Organization
- `/product/*` – Product, Rice, Paddy, Cotton
- `/pillars/*` – Financial, Agri Inputs, Extension, Values, Insurance, Welfare
- `/media/*` – Videos, Gallery, Articles, Paper
- Other pages: `/awards`, `/farmer`, `/winning`, `/marketing`, `/processing`, `/consumer`, `/contact`, `/cta`, `/report`, `/anniversary`

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm start
```

App runs at `http://localhost:3000`.

## Available Scripts

- `npm start` – run in development mode
- `npm run build` – create production build in `build/`
- `npm test` – run tests in watch mode
- `npm run eject` – eject CRA config (irreversible)

## Deployment

### Railway.app

A `railway.json` is included for one-click Railway deployment:

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) and create a **New Project → Deploy from GitHub repo**
3. Select this repository — Railway auto-detects `railway.json`
4. The app will build (`CI=false npm run build`) and serve the static output on the assigned port

The `railway.json` config uses [Nixpacks](https://nixpacks.com) builder and serves the production build with `npx serve -s build`.

### Vercel

A `vercel.json` is also included for Vercel deployment:

1. Import the repo at [vercel.com](https://vercel.com)
2. Vercel auto-detects Create React App and deploys

### Manual / Other Platforms

```bash
CI=false npm run build
npx serve -s build
```

The `build/` folder contains the static production output ready for any hosting provider.
