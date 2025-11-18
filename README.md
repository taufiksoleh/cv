# Personal Portfolio Website

A modern portfolio website featuring 3D animations and interactive elements, built with Next.js and Three.js.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animations**: Framer Motion, GSAP
- **Styling**: Tailwind CSS
- **Email**: EmailJS

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Configuration

### Personal Information

Edit `data/cv-data.ts` to update:

- Personal details (name, title, contact information)
- Work experience
- Education
- Skills
- Projects
- Certifications
- Social media links

### Styling

Modify `tailwind.config.ts` to customize the color scheme and design system.

## Project Structure

```
cv/
├── app/                    # Next.js app directory
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # React components
│   ├── 3d/                # 3D components (Three.js)
│   ├── AndroidStatusBar.tsx
│   └── Hero.tsx
├── data/
│   └── cv-data.ts         # Portfolio data
└── public/                # Static assets
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"
3. The site will be deployed automatically via GitHub Actions

Live URL: `https://<username>.github.io/cv/`

### Vercel

Alternatively, deploy to Vercel:

1. Import your repository on [Vercel](https://vercel.com)
2. Configure the build settings (automatic for Next.js)
3. Deploy

Note: For Vercel deployment, you may want to remove the `basePath` configuration from `next.config.js`.

## Features

- Samsung One UI inspired design
- Responsive layout
- 3D interactive elements
- Smooth animations and transitions
- Static site generation for optimal performance

## License

This project is open source and available under the MIT License.

## Contact

Taufik Soleh
- LinkedIn: [linkedin.com/in/taufiksoleh](https://id.linkedin.com/in/taufiksoleh)
- GitHub: [github.com/taufiksoleh](https://github.com/taufiksoleh)
