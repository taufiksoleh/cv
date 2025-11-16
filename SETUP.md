# Quick Setup Guide

This guide will help you customize your portfolio website with your personal information.

## 🎯 Essential Steps

### 1. Update Your Personal Information

Open `data/cv-data.ts` and update the following:

#### Personal Info
```typescript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Job Title",
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+XX XXX-XXXX-XXXX",
  linkedin: "https://linkedin.com/in/your-username",
  github: "https://github.com/your-username",
  description: `Write a compelling description about yourself...`,
};
```

#### Work Experience
Update the `experience` array with your actual work history:
```typescript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "Start Year - End Year",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  // Add more experiences...
];
```

#### Education
```typescript
export const education = [
  {
    id: 1,
    institution: "University Name",
    degree: "Your Degree",
    duration: "Year - Year",
    description: "Brief description",
  },
];
```

#### Skills
Adjust skill levels (0-100) based on your proficiency:
```typescript
export const skills = {
  frontend: [
    { name: "React", level: 90 },
    // Add or modify skills...
  ],
  backend: [
    { name: "Node.js", level: 85 },
    // Add or modify skills...
  ],
  tools: [
    { name: "Git", level: 90 },
    // Add or modify skills...
  ],
};
```

#### Projects
Add your actual projects:
```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "What the project does...",
    image: "/projects/project1.jpg",
    technologies: ["React", "Node.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project",
    featured: true,
  },
];
```

### 2. Add Project Images

1. Add your project images to `public/projects/`
2. Name them: `project1.jpg`, `project2.jpg`, etc.
3. Update the `image` field in each project to match the filename

### 3. Update Social Links

In `data/cv-data.ts`, update the `socialLinks` object:
```typescript
export const socialLinks = {
  linkedin: "https://linkedin.com/in/your-username",
  github: "https://github.com/your-username",
  twitter: "https://twitter.com/your-username",
  email: "mailto:your.email@example.com",
};
```

### 4. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    // Change these hex values to your preferred colors
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### 5. Test Your Website

```bash
npm run dev
```

Visit `http://localhost:3000` to see your changes!

### 6. Deploy

#### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your website will be live in minutes!

## 🎨 Advanced Customization

### Add Google Analytics
1. Get a tracking ID from Google Analytics
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Setup Contact Form with EmailJS
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Get your credentials
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Update `components/Contact.tsx` to use EmailJS

### Modify 3D Elements
- Edit files in `components/3d/` to customize 3D objects
- Change colors, sizes, and animation speeds
- Add new 3D elements by creating new components

## 📋 Checklist

- [ ] Updated personal info (name, title, location)
- [ ] Updated contact details (email, phone)
- [ ] Added work experience
- [ ] Added education
- [ ] Updated skills and levels
- [ ] Added projects with descriptions
- [ ] Added project images
- [ ] Updated social media links
- [ ] Tested locally with `npm run dev`
- [ ] Customized colors (optional)
- [ ] Set up analytics (optional)
- [ ] Set up contact form backend (optional)
- [ ] Deployed to Vercel or hosting platform

## 🆘 Need Help?

- Check the main [README.md](README.md) for more details
- Open an issue on GitHub
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

**Good luck with your portfolio! 🚀**
