# Createk

A modern, high-performance website for **Createk** — a supplier of aftermarket parts for heavy-duty and large vehicles. Built as a single-page application with smooth animations and multi-language support.

## Overview

Createk specializes in supplying quality aftermarket components for large vehicles, including engine spare parts, electrical components, transmission and drivetrain parts, suspension systems, rubber parts, and friction materials.

This website serves as the company's digital presence, featuring a product catalog, company information, news updates, and contact capabilities.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [GSAP](https://greensock.com/gsap/) | Scroll-triggered and entrance animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling |
| Vanilla JS | SPA routing, components, and page modules |

## Pages

- **Home** — Hero banner, product category highlights, company overview
- **About** — Company story, mission, values
- **Products** — Categorized product catalog with detail views
- **News** — Company news and industry updates
- **Contact** — Contact form, address, and location info
- **Privacy Policy / Terms** — Legal pages

## Features

- Hash-based client-side SPA routing
- Scroll-triggered reveal animations (fade, slide, parallax, counters)
- Smooth scrolling with Lenis + GSAP integration
- Multi-language support (English / Vietnamese)
- CMS-driven content via API
- Responsive design with mobile navigation
- Accessible, shadcn/ui-inspired component system

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
git clone https://github.com/your-org/createk.git
cd createk
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with hot reload.

### Production Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview Build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.js              # App shell, Lenis/GSAP init, route registration
├── router.js            # Hash-based SPA router
├── animations.js        # GSAP ScrollTrigger animation system
├── style.css            # Tailwind directives + component classes
├── api/                 # API client and data fetching modules
├── components/          # Shared components (header, footer, loading)
├── i18n/                # Internationalization (en, vi)
└── pages/               # Page modules (home, about, products, news, contact, etc.)
public/
└── logo.png             # Brand assets
```

## Deployment

Deployed to **Cloudflare Workers** as a static site. Production builds are served from the `dist/` directory.

## License

All rights reserved. This is proprietary software for Createk.