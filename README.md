# SynapseAI - AI-Powered Vertical SaaS Landing Page

A modern, visually stunning, and highly interactive landing page for SynapseAI, a fictional AI-powered vertical SaaS platform. Built with vanilla JavaScript, CSS3, and GSAP animations for a premium user experience.

### 🔗 Live Demo  
👉 [Click here to view the live site](https://synapseaico.netlify.app/)

## 🚀 Features

### Core Functionality
- **Interactive Dashboard Preview** - Real-time dashboard customization based on user selections
- **Dynamic Configuration Wizard** - Multi-step configuration with industry selection, focus toggles, and team size slider
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Dark Mode Toggle** - Complete dark theme with smooth transitions and preference persistence
- **GSAP Animations** - Professional scroll-triggered animations and smooth transitions
- **Smooth Scrolling** - GSAP-powered smooth scroll navigation

### Sections
- **Hero Section** - Interactive personalization demo with dynamic dashboard preview
- **How It Works** - 4-step visual storytelling with animated cards
- **Features Showcase** - Interactive feature cards with live demos (Analytics, Automation, Collaboration)
- **Testimonials** - Customer testimonials with trust badges
- **Pricing** - Three-tier pricing with monthly/annual toggle and Indian Rupee formatting
- **CTA Section** - Final call-to-action with gradient background
- **Footer** - Comprehensive footer with links and social media icons

### Technical Features
- **Accessibility** - Skip links, ARIA labels, semantic HTML, keyboard navigation
- **Performance** - Optimized animations, lazy loading, efficient event handling
- **SEO Optimized** - Meta tags, semantic structure, proper heading hierarchy
- **Cross-browser Compatible** - Works on all modern browsers

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)** - Vanilla JS with modern features
- **GSAP 3.12.5** - Professional animations (ScrollTrigger, ScrollToPlugin)
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SynapseeAi.git
   cd SynapseeAi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Key Features in Detail

### Dark Mode
- Toggle button with animated sun/moon icons
- Complete dark theme for all sections
- Preference saved to localStorage
- Respects system preference on first visit
- Smooth transitions between themes

### GSAP Animations
- **Hero Section**: Sequential fade-in animations
- **Scroll Animations**: Elements animate as they enter viewport
- **Stagger Effects**: Cards animate in sequence
- **Parallax**: Hero interactive element parallax effect
- **Navbar**: Fade-in on load, background changes on scroll
- **Smooth Scroll**: GSAP-powered anchor link scrolling

### Interactive Dashboard
- Real-time dashboard updates based on:
  - Industry selection (General, Interior Design, Urban Farming, Healthcare, Finance, Education)
  - Primary focus (Analytics, Automation, Collaboration)
  - Team size (1-100 users)
- Dynamic widget generation
- Smooth transitions between dashboard states

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: ≤ 768px
  - Tablet: 769px - 1024px
  - Desktop: ≥ 1025px
- Touch-optimized interactions
- Mobile menu with smooth animations

## 📁 Project Structure

```
SynapseeAi/
├── index.html          # Main HTML file
├── styles.css          # All styles (responsive, dark mode, animations)
├── script.js           # JavaScript functionality
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── postcss.config.js   # PostCSS configuration
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎯 Usage

### Development
```bash
npm run dev
```
Opens the development server at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Code Quality
```bash
npm run lint      # Check for linting errors
npm run format    # Format code with Prettier
```

## 🌟 Highlights

### Performance
- Optimized animations with `will-change` properties
- Throttled scroll events
- Efficient event delegation
- Lazy loading for images (if added)
- 
### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Scheme

### Light Mode
- Primary: `#6366F1` (Indigo)
- Accent: `#EC4899` (Pink)
- Background: `#FFFFFF` / `#F9FAFB`
- Text: `#1F2937` / `#6B7280`

### Dark Mode
- Primary: `#818CF8` (Light Indigo)
- Accent: `#EC4899` (Pink)
- Background: `#0F172A` / `#1E293B`
- Text: `#F1F5F9` / `#CBD5E1`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Configuration

### Vite
The project uses Vite for fast development and optimized builds. Configuration is in `vite.config.js`.

### PostCSS
PostCSS is configured for autoprefixing and CSS processing.

### ESLint
ESLint is configured for JavaScript code quality. Rules can be adjusted in `.eslintrc.json`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- GSAP for amazing animation library
- Vite for fast build tooling
- Inter font family for beautiful typography

**Note**: This is a fictional project created for demonstration purposes. SynapseAI is not a real product.

