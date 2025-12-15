# 🏥 Medical AI Landing Page

Modern, animated landing page for a medical AI company built with React, TypeScript, and GSAP.

## 🚀 Features

- **Smooth GSAP Animations** - Hero section with parallax effects and text scramble animations
- **TypeScript** - Full type safety throughout the application
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Architecture** - Clean component structure with separated concerns
- **Custom Animations** - Text scramble effect, gradient animations, and interactive elements

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/          # Custom fonts
│   └── svg/            # SVG icons and graphics
├── components/
│   ├── common/         # Shared components (Logo, Navigation)
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero)
│   └── UI/             # UI components (Buttons, Icons)
├── constants/
│   ├── animations.ts   # Animation configurations
│   ├── navigation.ts   # Navigation links
│   
├── hooks/
│   └── useBgParallax.ts # Custom parallax hook
├── pages/
│   └── HomePage.tsx    # Main page
├── types/
│   ├── button.ts       # Button types
│   ├── hero.ts         # Hero section types
│  
├── utils/
│   ├── parallax.ts     # Parallax calculations
│   ├── scrambleText.ts # Text scramble animation
│   
└── styles/
    └── index.css       # Global styles
```

## 🎨 Key Components

### Hero Section
- Animated entrance with staggered elements
- Interactive parallax background
- Gradient text animations
- Responsive layout

### Navigation
- Text scramble effect on hover
- Smooth transitions
- Mobile-friendly

### Buttons
- Custom SVG backgrounds
- Gradient text animations
- Hover effects with GSAP

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd medical-ai-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Animation Features

### Text Scramble Effect
```typescript
import { scrambleText } from '@/utils/scrambleText';

// Usage
onMouseEnter={(e) => scrambleText(e.currentTarget)}
```

### Parallax Effect
```typescript
import { calculateParallaxOffset } from '@/utils/parallax';

// Calculates mouse-based parallax offset
const { x, y } = calculateParallaxOffset(clientX, clientY, config);
```

## 🎨 Customization

### Animation Configuration

Edit `src/constants/animations.ts` to customize timing and easing:

```typescript
export const BUTTON_ANIMATION = {
  scale: 0.9,
  autoAlpha: 0,
  duration: 0.8,
};
```

### Navigation Links

Edit `src/constants/navigation.ts` to modify menu items:

```typescript
export const navigationLinks = [
  "Solutions",
  "Technology",
  "About",
  // ...
];
```

### Colors and Styles

Global styles and CSS variables are in `src/styles/index.css`

## 🔧 TypeScript

All components are fully typed. Main type definitions:

- `ButtonProps` - Button component props
- `HeroProps` - Hero section props
- `AnimationConfig` - GSAP animation configurations
- `ParallaxConfig` - Parallax effect settings

## 📦 Dependencies

### Core
- `react` - ^18.3.1
- `react-dom` - ^18.3.1
- `gsap` - Latest

### Dev Dependencies
- `typescript` - ~5.6.2
- `vite` - ^6.0.1
- `tailwindcss` - ^3.4.17
- `@types/react` - ^18.3.12

## 🐛 Known Issues

- None at the moment

## 📄 License

MIT

## 👥 Author

Yuliia Shevchuk

## 🙏 Acknowledgments

- GSAP for amazing animations
- Tailwind CSS for styling utilities
- React team for the fantastic framework

---

Made with ❤️ and lots of ☕