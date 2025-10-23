# 📚 Mechnova Machines Catalog

<div align="center">
  <img src="public/logo.png" alt="Mechnova Machines" width="200" height="100">
  
  **Interactive Digital Catalog Platform for Industrial Equipment**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
</div>

---

## 🌟 Overview

A modern, responsive digital catalog platform built for Mechnova Machines to showcase industrial equipment with an immersive, interactive experience. Features include a flipbook-style viewer for desktop, mobile-optimized layouts, and comprehensive catalog management.

### ✨ Key Features

- 📖 **Interactive Flipbook** - Desktop users enjoy a realistic page-turning experience
- 📱 **Mobile Responsive** - Optimized layouts for all device sizes
- 🔍 **Advanced Navigation** - Progress bars, thumbnails, and keyboard shortcuts
- 🎨 **Modern UI/UX** - Dark theme with smooth animations
- 📤 **Social Sharing** - Share catalogs with current page tracking
- 🖨️ **Print & Download** - Direct PDF access for offline viewing
- ⚡ **Performance Optimized** - Fast loading with image optimization
- 🔧 **SEO Ready** - Complete metadata and structured data

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center"><img src="https://skillicons.dev/icons?i=nextjs" width="50"><br><strong>Next.js 15</strong></td>
    <td align="center"><img src="https://skillicons.dev/icons?i=react" width="50"><br><strong>React 18</strong></td>
    <td align="center"><img src="https://skillicons.dev/icons?i=tailwind" width="50"><br><strong>Tailwind CSS v4</strong></td>
    <td align="center"><img src="https://skillicons.dev/icons?i=javascript" width="50"><br><strong>JavaScript</strong></td>
  </tr>
</table>

### 📦 Dependencies

- **react-pageflip** - Interactive flipbook functionality
- **framer-motion** - Smooth animations and transitions
- **react-icons** - Comprehensive icon library
- **postcss** - CSS processing and optimization

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nakul-Jaglan/bm-catalog.git
   cd bm-catalog/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── api/
│   │   └── catalogs/          # API routes for catalog data
│   ├── catalog/
│   │   └── [slug]/           # Dynamic catalog viewer pages
│   ├── favicon.ico
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.js            # Root layout with SEO optimization
│   └── page.js              # Homepage
├── components/
│   └── SearchBar.js         # Search functionality component
├── data/
│   ├── data.json           # Catalog metadata
│   └── data_backup.json   # Backup catalog data
├── public/
│   ├── pages/              # Catalog page images
│   ├── pdf/               # PDF files for download
│   ├── manifest.json      # PWA manifest
│   └── robots.txt        # SEO robots file
└── package.json
```

---

## 🎯 Features Deep Dive

### 📖 Catalog Viewer
- **Desktop**: Immersive flipbook experience with realistic page turns
- **Mobile**: Optimized single-page view with touch-friendly navigation
- **Zoom Controls**: Adjustable zoom levels for detailed viewing
- **Fullscreen Mode**: Distraction-free viewing experience

### 🔍 Navigation & Discovery
- **Progress Bar**: Click-to-jump navigation with visual progress
- **Thumbnail Grid**: Quick page overview and jumping
- **Keyboard Shortcuts**: Arrow keys for page navigation
- **URL Integration**: Shareable links with page numbers

### 📤 Sharing & Export
- **Social Media**: Direct sharing to Twitter, Facebook, LinkedIn, WhatsApp
- **Email Sharing**: mailto links with catalog information
- **PDF Download**: Direct access to original PDF files
- **Print Support**: Optimized printing functionality

---

## 🎨 Design System

### Color Palette
- **Primary**: `#989b2e` (Bonhoeffer Green)
- **Secondary**: `#1f2937` (Dark Gray)
- **Background**: `#0f172a` to `#1e293b` (Gradient)
- **Text**: `#ffffff` (White) / `#d1d5db` (Light Gray)

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Font Display**: Swap for optimal loading

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://catalog.mechnovamachines.com
```

### Tailwind CSS v4
The project uses the latest Tailwind CSS v4 with updated configuration in `postcss.config.mjs`.

---

## 📈 Performance Optimizations

- **Image Optimization**: WebP format with responsive sizing
- **Font Loading**: Optimized with `font-display: swap`
- **Code Splitting**: Automatic by Next.js
- **Lazy Loading**: Images loaded on demand
- **Caching**: Efficient browser and CDN caching strategies

---

## 🔍 SEO Features

- **Structured Data**: JSON-LD for organization and website
- **Meta Tags**: Comprehensive Open Graph and Twitter Cards
- **Sitemap**: Auto-generated for search engines
- **Robots.txt**: Proper crawling instructions
- **PWA Support**: Installable web app experience

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Alternative Platforms
- **Netlify**: Connect Git repository for automatic deployments
- **Railway**: Docker-based deployment platform
- **DigitalOcean App Platform**: Managed deployment solution

---

## 📄 License

This project is proprietary and confidential. All rights reserved by Mechnova Machines.

---

## 📞 Support

For questions, issues, or feature requests:

- 📧 **Email**: [jaglan.nakul@gmail.com](mailto:jaglan.nakul@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Nakul-Jaglan/bm-catalog/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/Nakul-Jaglan/bm-catalog/discussions)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React PageFlip](https://nodlik.github.io/react-pageflip/) for the flipbook functionality

---

<div align="center">
  <sub>Made with ❤️ by <a href="mailto:jaglan.nakul@gmail.com">Nakul</a></sub>
</div>
