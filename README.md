# 🌌 Essenciarabe

**Essenciarabe** is a premium perfume catalog built with [Astro](https://astro.build/) and JavaScript. Designed with a minimalist, high-end aesthetic inspired by Apple's design language, it focuses on showcasing luxury fragrances through elegant typography, glassmorphism, and smooth interactive experiences.

## ✨ Key Features

- **Apple-Inspired Design**: Clean layouts, San Francisco-style typography, and a refined color palette.
- **Ultra-Fast Performance**: Leverages Astro's "islands architecture" for lightning-fast load times.
- **Glassmorphic UI**: Subtle frosted glass effects and refined shadows.
- **Responsive Mastery**: Seamless experience across all devices, from mobile to desktop.
- **Interactive Catalog**: A smooth, fluid scrolling experience to explore fragrances.

## 🚀 Architectural Principles

- **Astro**: Primary framework for optimal performance and developer experience.
- **Vanilla CSS**: Used for maximum styling control and to achieve a custom premium look.
- **Component-Driven**: Modular design using Astro components for reusability.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd essenciarabe

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

## 📦 Content Management

The project uses Astro's **Content Collections** to manage fragrances. Data is stored in `src/content/`:

- **Decants** (`src/content/decants/`): Individual fragrance samples with updated pricing and accurate descriptions.
- **Perfumes** (`src/content/perfumes/`): Full bottle collection information.

Each item is a Markdown file with structured frontmatter including name, brand, price, image, and description.

## 🚀 Deployment

### Deploying to Vercel (Recommended)

1.  **Push to GitHub**: Ensure your latest changes are pushed to a GitHub repository.
2.  **Import to Vercel**:
    - Log in to [Vercel](https://vercel.com).
    - Click "Add New" > "Project".
    - Import your `essenciarabe` repository.
3.  **Configure**:
    - Vercel automatically detects Astro.
    - Click "Deploy".
4.  **Automatic Updates**: Every push to your `main` branch will trigger an automatic redeploy.

## 🎨 Design Philosophy

Our design follows the **Apple Aesthetic**:
1. **Less is More**: Stripping away unnecessary elements to let the product shine.
2. **Precision Typography**: Intentional use of weight and spacing.
3. **Motion with Purpose**: Subtle transitions that guide the user rather than distract.

## 🔄 Recent Updates

- **Price Optimization**: All decant prices synchronized with official pricing images.
- **Description Review**: Corrected and updated all fragrance descriptions to be more accurate and include high-quality clonic/inspiration references.
- **Improved Metadata**: Added missing fragrances to the decants collection for a more complete catalog.

---

*Diseñado con pasión por la perfumería y la excelencia digital.*
