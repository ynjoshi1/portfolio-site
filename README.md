# Mechanical Engineering Portfolio Website

A professional, high-performance portfolio website featuring an **Industrial Minimalism** aesthetic. Clean, high-contrast design optimized for showcasing engineering projects, CAD renders, and technical expertise.

## 🎯 Quick Customization Guide

**All your personal information is now in ONE file: `config.js`**

### Step 1: Edit `config.js`

Open `config.js` and update the following sections:

#### Personal Information
```javascript
personal: {
  name: "Your Name",
  university: "Your University",
  specialization: "Your Specialization Area",
  email: "your.email@university.edu",
  // ... other fields
}
```

#### Social Links
```javascript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resumePDF: "your-resume.pdf"
}
```

#### Projects
Add, remove, or edit projects in the `projects` array:

```javascript
projects: [
  {
    tag: "Project Category",      // e.g., "Lead Project", "FEA Analysis"
    title: "Project Title",
    shortDescription: "Brief description for the card",
    image: "images/your-image.jpg",
    technologies: ["Tech1", "Tech2", "Tech3"],
    
    // Detailed modal content
    overview: "Detailed project overview...",
    highlights: [
      { title: "Highlight 1", description: "Description..." },
      { title: "Highlight 2", description: "Description..." }
    ],
    results: "Project results and outcomes..."
  }
]
```

#### Toolbox (Skills)
```javascript
toolbox: [
  { icon: "🔧", name: "Skill Name" },
  // Add or remove as needed
]
```

#### Experience Timeline
```javascript
experience: [
  {
    date: "Month Year - Month Year",
    title: "Job Title",
    company: "Company Name",
    location: "City, State",
    description: "Detailed description of responsibilities and achievements..."
  }
]
```

### Step 2: Replace Project Images

1. Place your project images in the `images/` folder
2. Update the `image` field in each project in `config.js`
3. Recommended format: JPG or PNG, aspect ratio ~4:3

### Step 3: Add Your Resume

1. Place your resume PDF in the main folder
2. Update the filename in `config.js`: `resumePDF: "your-resume-name.pdf"`

## 📁 File Structure

```
Portfolio Site/
├── index.html          # Main HTML (rarely needs editing)
├── styles.css          # Design system (for advanced customization only)
├── script.js           # JavaScript logic (rarely needs editing)
├── config.js           # ⭐ EDIT THIS FILE for your info
├── your-resume.pdf     # Your resume
├── images/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
└── README.md           # This file
```

## 🚀 How to View Your Portfolio

### Option 1: Open Locally
Simply double-click `index.html` to open it in your browser.

### Option 2: Deploy Online

#### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from main branch"
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire folder
3. Your site will be live instantly

## 🎨 Design Features

- **Color Palette**: Slate gray, brushed silver, safety orange
- **Typography**: Inter + Roboto Mono for technical aesthetic
- **Responsive**: Works on desktop, tablet, and mobile
- **Animations**: Smooth scroll effects and hover interactions
- **SEO Optimized**: Semantic HTML and meta tags included

## ⚙️ Advanced Customization

### Changing Colors
Edit CSS variables in `styles.css` (lines 16-24):
```css
:root {
  --slate-900: #1a202c;
  --safety-orange: #ff6600;
  /* ... other colors */
}
```

### Adding More Projects
In `config.js`, add a new object to the `projects` array following the same structure.

### Removing Sections
If you don't want a section (e.g., Toolbox), you can:
1. Comment out or remove that section from `index.html`
2. Or leave it - it won't break anything

## 📝 Tips

✅ **DO:**
- Keep project descriptions concise and quantifiable
- Use high-quality images (at least 1200px wide)
- Update your resume PDF regularly
- Test on mobile devices

❌ **DON'T:**
- Edit `index.html` unless you know what you're doing
- Use very large image files (compress to <500KB each)
- Forget to update your contact information!

## 🐛 Troubleshooting

**Content not showing?**
- Make sure `config.js` is loaded before `script.js` in `index.html`
- Check browser console for errors (F12 → Console tab)

**Images not loading?**
- Verify image paths in `config.js` match actual file names
- Images should be in the `images/` folder

**Resume download not working?**
- Ensure your PDF file is in the same folder as `index.html`
- Check the filename matches exactly in `config.js`

## 📧 Questions?

This portfolio uses vanilla HTML, CSS, and JavaScript - no frameworks needed!

---

**Made with precision. Engineered for impact.** 🚀
