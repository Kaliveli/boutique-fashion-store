# Boutique Fashion Store 🛍️

A sophisticated eCommerce boutique fashion store built with Next.js, TypeScript, and Tailwind CSS. Features plus-size fashion, ethnic wear, and minimalist collections with advanced filtering, search, and a complete blog system.

## 🌟 Live Demo

**[View Live Demo](https://same-g0prto91b7t-latest.netlify.app)**

## ✨ Features

### 🛒 Comprehensive eCommerce Experience
- **50+ Premium Products** across multiple categories
- **Advanced Product Filtering** by size, color, brand, price, and occasion
- **Smart Search** functionality with real-time results
- **Dynamic Product Details** with image galleries and color variants
- **Shopping Cart** with persistent state
- **Checkout Process** with form validation

### 🎨 Design & User Experience
- **Luxury Sky Blue Theme** with premium aesthetics
- **Fully Responsive Design** optimized for all devices
- **Sophisticated Animations** using CSS transitions
- **Modern UI Components** built with shadcn/ui
- **Accessible Design** following WCAG guidelines

### 📝 Content Management
- **Fashion Blog System** with style guides and trends
- **Product Categories**:
  - Plus-Size Fashion
  - Ethnic Wear
  - Minimalist Collections
  - Accessories

### 🚀 Performance & SEO
- **Static Site Generation** for optimal performance
- **Image Optimization** with Next.js Image component
- **SEO Optimized** with proper meta tags and structure
- **Fast Loading** with optimized builds

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Netlify (Static Export)
- **Package Manager**: Bun

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- Bun (recommended) or npm/yarn

### 1. Clone the repository
```bash
git clone https://github.com/Kaliveli/boutique-fashion-store.git
cd boutique-fashion-store
```

### 2. Install dependencies
```bash
bun install
# or
npm install
```

### 3. Run the development server
```bash
bun dev
# or
npm run dev
```

### 4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
boutique-fashion-store/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Homepage
│   │   ├── shop/              # Shop page with filtering
│   │   ├── product/[id]/      # Dynamic product pages
│   │   ├── cart/              # Shopping cart
│   │   └── checkout/          # Checkout process
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   └── layout/           # Layout components
│   ├── data/                 # Static data and types
│   │   └── products.ts       # Product catalog data
│   └── lib/                  # Utility functions
├── public/                   # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🏗️ Build & Deployment

### Development Build
```bash
bun run build
bun start
```

### Static Export (for Netlify)
```bash
bun run build
```

The project is configured for static export and deployed on Netlify. The `netlify.toml` file contains the deployment configuration.

## 🎯 Key Components

### Product Catalog
- **50+ Products** with detailed information
- **Multiple Categories**: Plus-size, Ethnic wear, Minimalist
- **Advanced Filtering**: Size, color, brand, price range
- **Product Variants**: Multiple colors and sizes per product

### UI Components
- **Navigation Menu** with category dropdowns
- **Product Cards** with hover effects and quick actions
- **Filter Sidebar** with checkbox and range inputs
- **Responsive Grid Layout** adapting to screen sizes

### Shopping Experience
- **Add to Cart** functionality
- **Product Detail Views** with image galleries
- **Size and Color Selection**
- **Stock Management** display

## 🎨 Design Features

- **Sky Blue Luxury Theme** with carefully chosen color palette
- **Gradient Backgrounds** and subtle shadows
- **Smooth Transitions** on interactive elements
- **Typography** optimized for readability
- **Consistent Spacing** using Tailwind's design system

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality. The project uses static data.

### Customization
- **Colors**: Modify `tailwind.config.ts` for theme customization
- **Products**: Update `src/data/products.ts` to add/modify products
- **Layout**: Customize components in `src/components/layout/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Ensure responsive design on all screen sizes
- Test on multiple browsers before submitting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful UI components
- **Tailwind CSS** for the utility-first CSS framework
- **Next.js** for the powerful React framework
- **Radix UI** for accessible component primitives

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

**Made with ❤️ for fashion enthusiasts**