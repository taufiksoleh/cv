# Taufik Soleh - 3D Animated Portfolio

A stunning personal portfolio website featuring 3D animations, interactive elements, and smooth transitions built with modern web technologies.

## 🚀 Features

- **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Using Framer Motion for seamless transitions
- **Responsive Design** - Fully responsive across all devices
- **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized** - Fast loading and smooth 60fps animations
- **Clean UI/UX** - Intuitive navigation and beautiful gradient designs

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Your Personal Information

Edit the file `data/cv-data.ts` to update:

- Personal info (name, title, email, phone, etc.)
- Work experience
- Education
- Skills and proficiency levels
- Projects and portfolio items
- Certifications
- Social media links

### Example:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### Add Your Projects

Update the `projects` array in `data/cv-data.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-username/project",
    featured: true,
  },
  // Add more projects
];
```

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-color',
    // ... more shades
  },
}
```

## 📁 Project Structure

```
cv/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page component
├── components/
│   ├── 3d/                   # 3D components
│   │   ├── FloatingCube.tsx
│   │   ├── FloatingSphere.tsx
│   │   ├── AnimatedTorus.tsx
│   │   ├── ParticleField.tsx
│   │   └── Scene3D.tsx
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form
│   ├── Experience.tsx        # Experience timeline
│   ├── Footer.tsx            # Footer
│   ├── Hero.tsx              # Hero section with 3D
│   ├── Navigation.tsx        # Navigation bar
│   ├── Projects.tsx          # Projects showcase
│   └── Skills.tsx            # Skills visualization
├── data/
│   └── cv-data.ts            # Your CV data (EDIT THIS!)
└── public/
    └── projects/             # Add your project images here
```

## 🎯 Sections

1. **Hero** - Eye-catching 3D animated introduction
2. **About** - Personal introduction and statistics
3. **Experience** - Timeline of work experience
4. **Skills** - Interactive skill bars with categories
5. **Projects** - Portfolio showcase with project cards
6. **Contact** - Contact form and information

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Build for Production

```bash
npm run build
npm start
```

## 📝 To-Do After Setup

- [ ] Update all personal information in `data/cv-data.ts`
- [ ] Add your profile photo/avatar
- [ ] Add your actual project images in `public/projects/`
- [ ] Update social media links
- [ ] Set up EmailJS or contact form backend
- [ ] Add your actual email and phone number
- [ ] Customize colors to match your brand
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## 🎨 3D Elements

The website features several 3D elements:

- **Floating Cubes** - Rotating metallic cubes
- **Spheres** - Pulsating spherical objects
- **Torus** - Wireframe animated torus
- **Particle Field** - Rotating particle system
- **Auto-rotating Camera** - Smooth camera movements

All 3D elements are optimized for performance and work smoothly on most devices.

## 📱 Responsive Design

The website is fully responsive and tested on:

- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance

- Optimized 3D rendering
- Lazy loading for components
- Smooth 60fps animations
- Efficient bundle size
- Fast page loads

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contact

For questions or collaboration:

- Email: taufik@example.com
- LinkedIn: [linkedin.com/in/taufiksoleh](https://id.linkedin.com/in/taufiksoleh)
- GitHub: [github.com/taufiksoleh](https://github.com/taufiksoleh)

---

**Made with ❤️ using Next.js, Three.js, and Framer Motion**
