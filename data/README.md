# CV/Resume Data Configuration

This directory contains all centralized data for the CV/Resume website.

## Files

- **`cv-data.ts`** - Main data file containing all professional information
- **`types.ts`** - TypeScript type definitions for type safety
- **`README.md`** - This documentation file

## How to Update Your CV Data

All CV/resume data is centralized in `cv-data.ts`. Simply edit this file to update any information across the entire website.

### Sections

#### 1. Site Configuration
```typescript
export const siteConfig
```
- Website metadata
- SEO information
- Meta keywords

#### 2. Personal Information
```typescript
export const personalInfo
```
- Name, title, location
- Contact information (email, phone)
- Professional summary
- Description

#### 3. Professional Experience
```typescript
export const experience
```
Array of work experiences, each containing:
- Company name
- Position/role
- Duration
- Location
- Description (array of achievements)
- Technologies used
- Projects (optional sub-projects)

#### 4. Education
```typescript
export const education
```
Array of educational background:
- Institution name
- Degree
- Duration
- Description

#### 5. Skills
```typescript
export const skills
```
Skills organized by category:
- **languages** - Programming languages (Kotlin, Java, etc.)
- **mobile** - Mobile development (Android, Flutter)
- **backend** - Backend frameworks (Spring Boot, Rails, etc.)
- **architecture** - Architecture patterns (MVVM, Clean Architecture)
- **tools** - Development tools (Git, Jenkins, Firebase)
- **database** - Database systems (PostgreSQL, MySQL, MongoDB)
- **other** - Other skills (Leadership, Agile, Documentation)

Each skill has:
- `name` - Skill name
- `level` - Proficiency level (0-100)

#### 6. Portfolio Projects
```typescript
export const projects
```
Array of portfolio projects:
- Title
- Description
- Image path
- Technologies used
- URLs (live, GitHub)
- Featured flag

#### 7. Certifications
```typescript
export const certifications
```
Array of certifications:
- Name
- Issuer
- Date

#### 8. Social Links
```typescript
export const socialLinks
```
- LinkedIn
- GitHub
- Twitter
- Email

## Type Safety

All data structures are typed using TypeScript interfaces defined in `types.ts`. This ensures:
- Type checking at compile time
- Better IDE autocomplete
- Easier maintenance
- Fewer runtime errors

## Best Practices

1. **Keep data clean** - Remove placeholder data before deployment
2. **Update contact info** - Replace example email/phone with real data
3. **Add real projects** - Update portfolio projects with actual work
4. **Maintain consistency** - Follow the existing format for new entries
5. **Test locally** - Run `npm run dev` to preview changes before committing

## Example: Adding a New Job

```typescript
{
  id: 9, // Increment the ID
  company: "New Company Name",
  position: "Your Position",
  duration: "Jan 2024 - Present",
  location: "City, Country",
  description: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2",
    "Achievement or responsibility 3",
  ],
  technologies: ["Tech1", "Tech2", "Tech3"],
}
```

## Example: Adding a New Skill

```typescript
// In the appropriate category (languages, mobile, backend, etc.)
{ name: "New Technology", level: 85 }
```

## Deployment

After updating data:
1. Save changes to `cv-data.ts`
2. Test locally: `npm run dev`
3. Commit changes: `git add . && git commit -m "Update CV data"`
4. Push to GitHub: `git push`
5. GitHub Pages will automatically deploy the updates

## ATS-Friendly

The data structure is optimized for Applicant Tracking Systems (ATS):
- Clear section separation
- Structured data format
- Keyword-rich descriptions
- Standard terminology
- Chronological order

## Need Help?

- Check the component files in `/components` to see how data is used
- Review existing entries for formatting examples
- Ensure all required fields are filled
- Validate TypeScript types before committing
