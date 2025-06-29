# Prashant Ambati - Personal Portfolio

A highly interactive, animated, and premium-quality multi-page personal portfolio website for Prashant Ambati, a Data and AI/ML Engineer from Raipur, India.

## ✨ Features

- **Modern Design**: Inspired by Apple, Meta, and Google design guidelines
- **Smooth Animations**: GSAP and Framer Motion powered animations
- **Glassmorphism UI**: Beautiful glass-like effects throughout
- **Responsive Design**: Optimized for desktop and mobile
- **Floating Navigation**: Modern bottom navigation bar
- **Interactive Elements**: Hover effects, micro-interactions, and smooth transitions
- **Multi-Page Structure**: 6 comprehensive pages showcasing skills and projects

## 🚀 Pages

1. **Home** - Hero section with floating stats and CTA buttons
2. **About** - Bio and animated skill cards with progress visualizations
3. **Projects** - Showcase of 4 main projects with detailed descriptions
4. **Experience** - Professional highlights and leadership experience
5. **Education** - Academic background and achievements
6. **Contact** - Contact form with animated submission feedback

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **GSAP** for advanced animations
- **Lucide React** for icons
- **React Router** for navigation
- **React Intersection Observer** for scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

### Animations
- Smooth scroll-based animations
- Parallax transitions
- Fluid micro-interactions
- Hover effects and scale animations
- Loading screen with animated icons

### UI Components
- Glassmorphism cards with backdrop blur
- Gradient text effects
- Floating navigation bar
- Animated skill cards
- Interactive project showcases
- Responsive contact form

### Color Scheme
- Dark theme with slate backgrounds
- Primary blue gradient accents
- Glass-like transparency effects
- Consistent color palette throughout

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📄 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🎯 Key Projects Showcased

1. **AlexNet-CNN**: CNN Image Classification (95% accuracy)
2. **LLaVA Implementation**: Multimodal AI (85% accuracy)
3. **COVID Economic Dashboard**: Data Analysis & Visualization
4. **Transcriptocast**: Multilingual AI Transcription (95% accuracy, 70% latency reduction)

## 📞 Contact Information

- **Email**: prashantambati12@gmail.com
- **Location**: Raipur, India
- **LinkedIn**: [linkedin.com/in/prashant-ambati-a9b030229](https://linkedin.com/in/prashant-ambati-a9b030229)
- **GitHub**: [github.com/Prashant-ambati](https://github.com/Prashant-ambati)

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
    900: '#0c4a6e',
  }
}
```

### Animations
Customize animations in `src/index.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Content
Update personal information in the respective page components:
- `src/pages/Home.tsx` - Hero content
- `src/pages/About.tsx` - Bio and skills
- `src/pages/Projects.tsx` - Project details
- `src/pages/Contact.tsx` - Contact information

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Prashant Ambati 