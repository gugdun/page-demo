# ✈️ Lunair — Animated Landing Page

A single-page **scroll-driven animated landing** for a fictitious airline company.  
Built with [Preact](https://preactjs.com/), [GSAP](https://gsap.com/), and [Vite](https://vitejs.dev/).

## 🚀 Features

- ⚡️ Powered by **Preact** for minimal footprint
- 🎬 Scroll-driven animations with **GSAP**
- 📦 Bundled & fast development with **Vite**
- 🌐 Static build ready for deployment

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/gugdun/page-demo.git
cd page-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📂 Project Structure

```
.
├── public/         # Static assets
├── src/
│   ├── animations/ # Helper functions
│   ├── assets/     # Assets to use in Preact
│   ├── components/ # Reusable UI components
│   ├── hooks/      # Custom hooks
│   ├── scenes/     # Per scene layouts, timelines and styles
│   ├── styles/     # Misc stylesheets
│   ├── types/      # TypeScript types
│   ├── App.tsx     # Main component
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## 📜 License

This project is for demonstration purposes only and not affiliated with any real airline.
Feel free to fork, adapt, and experiment.
Licensed under the [MIT License](LICENSE).
