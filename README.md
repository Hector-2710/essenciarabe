# 🌌 Essenciarabe

**Essenciarabe** is a premium perfume catalog built with [Astro](https://astro.build/). Designed with a minimalist, inspired by Apple's design, it focuses on showcasing luxury fragrances through elegant typography, glassmorphism, and smooth interactive experiences.

## ✨ Key Features

- **Ultra-Fast Performance**: Leverages Astro's "islands architecture" for lightning-fast load times.
- **Shopping Cart**: Interactive cart system with persistent storage using Nanostores.
- **Responsive Mastery**: Seamless experience across all devices, from mobile to desktop.
- **Interactive Catalog**: A smooth, fluid scrolling experience to explore fragrances.


## 🚀 Architectural Principles

- **Astro**: Primary framework for optimal performance and developer experience.
- **TypeScript**: Full type safety and enhanced developer experience.
- **Tailwind CSS v4**: Advanced styling framework for rapid UI development and consistency.
- **Nanostores**: Lightweight state management for cart functionality.
- **Component-Driven**: Modular design using Astro components for reusability.
- **Content Collections**: Structured content management for fragrances and decants.


## 🚀 Deployment

### Deployed on Vercel
This project is currently deployed and live on [Vercel](https://vercel.com) with automatic deployments enabled.

## � Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Cart.astro      # Shopping cart drawer component
│   ├── Navbar.astro    # Navigation component
│   ├── PerfumeCard.astro # Product card component
│   └── TrustSignals.astro # Trust indicators
├── content/            # Content collections
│   ├── config.ts       # Content collection configuration
│   ├── decants/        # Individual fragrance samples
│   └── perfumes/       # Full bottle products  
├── layouts/            # Page layouts
│   └── MainLayout.astro
├── pages/              # Route pages
├── store/              # Nanostores for state management
│   └── cartStore.ts    # Cart state and logic
└── styles/             # Global styles
    └── global.css
```

## �🔄 Recent Updates (v2.0.0)

- **home improvements**: The homepage was modified to be of the newsletter type

---

*Designed with a passion for perfumery and digital excellence.*
