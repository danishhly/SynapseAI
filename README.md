# SynapseAI Landing Page

A visually stunning and highly interactive frontend design for SynapseAI, a fictional AI-powered vertical SaaS platform.

## Project Structure

```
SynapseeAi/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and animations
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite build configuration
├── postcss.config.js   # PostCSS configuration
├── .prettierrc         # Code formatting rules
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Features

- **Hero Section** with interactive configuration wizard
- **Dynamic Dashboard Preview** that adapts to user selections
- **How It Works** section with animated step cards
- **Feature Showcase** with interactive elements
- **Social Proof** section with testimonials and trust badges
- **Responsive Design** for all screen sizes
- **Smooth Animations** and scroll effects
- **Modern Build Process** with Vite for fast development

## Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** (comes with Node.js)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

Or if you prefer yarn or pnpm:
```bash
yarn install
# or
pnpm install
```

### 2. Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

This will:
- Start a local development server (usually at `http://localhost:3000`)
- Automatically open your browser
- Enable hot module replacement (changes reflect instantly)
- Provide source maps for debugging

### 3. Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy.

### 4. Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## How to Use

1. **Interactive Configuration Wizard**: 
   - Select different industries from the dropdown
   - Toggle between Analytics, Automation, and Collaboration
   - Adjust team size with the slider
   - Watch the dashboard preview update in real-time!

2. **Explore Sections**:
   - Scroll through the page to see smooth animations
   - Hover over feature cards for interactive effects
   - Toggle the analytics chart in the Real-Time Analytics card

3. **Navigation**:
   - Use the top navigation to jump to different sections
   - Click CTA buttons to interact with the page

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366F1;
    --secondary-color: #8B5CF6;
    --accent-color: #EC4899;
    /* ... */
}
```

### Dashboard Templates
Add or modify dashboard templates in `script.js`:
```javascript
const dashboardTemplates = {
    yourIndustry: {
        title: "Your Dashboard",
        widgets: [/* ... */]
    }
}
```

## Development Workflow

1. **Make Changes**: Edit `index.html`, `styles.css`, or `script.js`
2. **See Changes Instantly**: The dev server automatically refreshes
3. **Format Code**: Run `npm run format` before committing
4. **Build**: Run `npm run build` when ready to deploy

## Customization Guide

### Modifying Styles

Edit `styles.css` - changes will hot-reload in development mode. The CSS uses CSS variables for easy theming:

```css
:root {
    --primary-color: #6366F1;
    --secondary-color: #8B5CF6;
    --accent-color: #EC4899;
    /* Modify these to change the color scheme */
}
```

### Adding New Dashboard Templates

Edit `script.js` and add to the `dashboardTemplates` object:

```javascript
const dashboardTemplates = {
    yourIndustry: {
        title: "Your Dashboard Name",
        widgets: [
            { 
                title: "Widget Title", 
                description: "Widget description", 
                stats: ["Value", "Label", "Trend"] 
            }
        ]
    }
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add styles in `styles.css`
3. Add any interactive functionality in `script.js`

## Deployment

### Option 1: Static Hosting (Recommended)

Build and deploy the `dist/` folder:

```bash
npm run build
# Then upload the dist/ folder to:
# - Netlify (drag & drop)
# - Vercel (connect GitHub repo)
# - GitHub Pages
# - Any static hosting service
```

### Option 2: GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Option 3: Vercel/Netlify

Both platforms can automatically detect Vite projects:
- Connect your GitHub repository
- They'll automatically build and deploy
- No configuration needed!

## Next Steps

1. **Install Dependencies**: `npm install`
2. **Start Development**: `npm run dev`
3. **Make Your Changes**: Edit the files as needed
4. **Commit to GitHub**: 
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SynapseAI landing page"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
5. **Deploy**: Use the deployment options above

## License

This is a demonstration project. Feel free to use and modify as needed.

