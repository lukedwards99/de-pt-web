# D&E P.T. Website - Project Summary

## ✅ Completed Features

### 1. **Home Page** (`src/pages/Home.jsx`)
The homepage includes all requested sections:

#### Hero Banner
- Full-width hero section with overlay
- D&E P.T. branding
- Call-to-action button linking to Contact page
- Background image placeholder (ready to be replaced)

#### About Us Section
- **Luke Edwards Profile**
  - Professional photo placeholder
  - Bio highlighting experience and expertise
  - Specialty badges (Strength Training, Bodybuilding, Nutrition)
  
- **Kyle Douglas Profile**
  - Professional photo placeholder
  - Bio highlighting experience and expertise
  - Specialty badges (Athletic Performance, Body Composition, Functional Training)

#### Our Story Section
- Narrative about meeting at Northern Illinois University in 2019
- Story of roommate relationship and Kyle introducing Luke to bodybuilding
- Journey to founding D&E P.T.
- Companion image placeholder

#### Gallery Section
- 6 placeholder images ready for:
  - Studio interior photos
  - Training session photos
  - Client transformation photos

### 2. **Contact Page** (`src/pages/Contact.jsx`)
Professional contact form for coaching inquiries:

#### Features
- Hero banner with motivational messaging
- Full contact form with fields for:
  - Name
  - Email
  - Phone
  - Fitness goals (dropdown)
  - Training experience level (dropdown)
  - Additional message/info
- Form validation
- Success message on submission
- Alternative contact methods (email, phone)
- Instructions for Google Form integration (commented in code)

### 3. **Resources Page** (`src/pages/Resources.jsx`)
Store-like layout for free downloadable resources:

#### Features
- 9 placeholder resources including:
  - Training programs (Beginner, Hypertrophy, Fat Loss, Home Workouts, Nutrition)
  - Educational videos (Squat Form, Deadlift, Bench Press, Supplements)
- Each resource card displays:
  - Thumbnail image
  - Title and description
  - "FREE" price tag
  - Download button
- Filter buttons for All/Programs/Videos
- Call-to-action section linking to coaching

### 4. **Navigation Component** (`src/components/Navigation.jsx`)
Professional navigation bar:

#### Features
- Sticky navigation that stays at top while scrolling
- D&E P.T. branding logo
- Links to all three pages
- Active page highlighting
- Mobile-responsive hamburger menu
- Smooth animations

### 5. **Footer Component** (`src/components/Footer.jsx`)
Comprehensive footer section:

#### Features
- Company information and description
- Social media links (Instagram, Facebook, YouTube, Twitter)
- Quick navigation links
- Contact information (email, phone, location)
- Copyright notice
- Mobile-responsive layout

### 6. **Scroll to Top Button** (`src/components/ScrollToTop.jsx`)
User experience enhancement:

#### Features
- Appears after scrolling down 300px
- Smooth scroll animation back to top
- Red circular button with hover effects
- Mobile-friendly positioning

## 🎨 Design Implementation

### Color Scheme
As requested: **Red and Black with White Background**

- **Primary Red**: `#dc143c` (Crimson)
- **Dark Black**: `#1a1a1a`
- **Background**: `#ffffff` (White)
- **Accent Dark**: `#2d2d2d`
- **Text Colors**: `#1a1a1a`, `#333`, `#555`, `#666`

### Typography
- Clean, modern sans-serif fonts
- Bold, uppercase headings for impact
- Professional letter-spacing and line-height
- Responsive font sizes

### Visual Effects
- Hover animations on cards and buttons
- Smooth transitions throughout
- Box shadows for depth
- Gradient overlays on hero sections
- Image zoom effects on hover

## 📱 Responsive Design

All pages are fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

Features:
- Mobile hamburger menu
- Flexible grid layouts
- Adjusted typography sizes
- Touch-friendly button sizes
- Optimized image displays

## 🔧 Technical Stack

- **React** 19.2.0
- **React Router DOM** 7.11.0 (already configured)
- **Vite** 7.2.4 (build tool)
- **Bootstrap** 5.3.8 (utility classes)
- **Font Awesome** 7.1.0 (icons)

## 📂 File Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Navigation.css
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── ScrollToTop.jsx
│   └── ScrollToTop.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Resources.jsx
│   └── Resources.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Visit: http://localhost:5173/de-pt-web/

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```
Live at: https://lukedwards99.github.io/de-pt-web/

## 📝 Next Steps - Content Replacement

See **REPLACEMENT_GUIDE.md** for detailed instructions on:

1. **Images** (16 placeholders total)
   - Trainer photos
   - Studio photos
   - Gallery images
   - Resource thumbnails

2. **Contact Information**
   - Email addresses
   - Phone numbers
   - Physical location

3. **Links**
   - Social media profiles
   - Resource download URLs
   - Optional Google Form integration

4. **Text Content**
   - Personalize trainer bios
   - Enhance the story section
   - Update specialty badges

## ✨ Additional Notes

### Placeholder Images
All placeholder images are marked with clear comments in the code:
```jsx
{/* PLACEHOLDER IMAGE - Replace with actual photo of Luke */}
```

### Google Form Integration
The Contact page includes instructions for integrating a Google Form:
- Can embed via iframe
- Can link to external form
- Current React form is fully functional as-is

### Color Customization
To change the color scheme:
1. Search for `#dc143c` (red) and `#1a1a1a` (black) across all CSS files
2. Replace with your preferred colors
3. All styling will update automatically

### SEO Ready
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images
- Meta tags can be added to `index.html`

## 🎯 Features Delivered

✅ Three-page website (Home, Contact, Resources)
✅ Hero banner on homepage
✅ About Us section with Luke and Kyle profiles
✅ NIU 2019 story section
✅ Gallery section
✅ Contact form (React-based, Google Form ready)
✅ Resources page with store-like layout
✅ Free downloadable resources structure
✅ Red and black color scheme with white background
✅ Placeholder images clearly marked
✅ Professional, modern design
✅ Fully responsive
✅ Smooth animations and transitions
✅ Navigation with mobile menu
✅ Footer with social links
✅ Scroll to top button

## 📞 Support

For questions about replacing content or making changes, refer to:
- `REPLACEMENT_GUIDE.md` - Detailed content replacement instructions
- Code comments - All placeholders are clearly marked
- React Router docs - For adding additional pages

---

**Built for D&E P.T. - Douglas & Edwards Personal Training**
