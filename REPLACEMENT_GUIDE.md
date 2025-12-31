# D&E P.T. Website - Replacement Guide

This document lists all the placeholder content that needs to be replaced with actual content.

## Images to Replace

### Home Page (`src/pages/Home.jsx`)
1. **Hero Background Image** (Line ~15)
   - Current: Generic fitness photo from Unsplash
   - Replace with: Actual photo of your studio or training session
   - CSS Location: `src/pages/Home.css` (line ~18)

2. **Luke Edwards Profile Photo** (Line ~28)
   - Current: `https://via.placeholder.com/400x400/1a1a1a/dc143c?text=Luke+Edwards`
   - Replace with: Professional photo of Luke Edwards

3. **Kyle Douglas Profile Photo** (Line ~57)
   - Current: `https://via.placeholder.com/400x400/1a1a1a/dc143c?text=Kyle+Douglas`
   - Replace with: Professional photo of Kyle Douglas

4. **Our Story Image** (Line ~101)
   - Current: `https://via.placeholder.com/600x400/1a1a1a/dc143c?text=D%26E+P.T.+Story`
   - Replace with: Photo of Luke and Kyle together (NIU days or recent)

5. **Gallery Images** (Lines ~114-149)
   - 6 placeholder images total
   - Replace with:
     - Studio interior photos
     - Training session photos
     - Client transformation photos (with permission)
     - Equipment photos

### Contact Page (`src/pages/Contact.jsx`)
1. **Hero Background Image**
   - CSS Location: `src/pages/Contact.css` (line ~12)
   - Current: Generic gym photo
   - Replace with: Studio or training photo

### Resources Page (`src/pages/Resources.jsx`)
1. **Hero Background Image**
   - CSS Location: `src/pages/Resources.css` (line ~12)
   - Current: Generic fitness photo
   - Replace with: Training or education-themed photo

2. **Resource Thumbnails** (Lines ~9-78)
   - 9 placeholder images for programs and videos
   - Replace with actual thumbnails for each resource

## Contact Information to Update

### Contact Page (`src/pages/Contact.jsx`)
- **Email**: Line ~170 - Change `info@dept.com` to your actual email
- **Phone**: Line ~175 - Change `(555) 123-4567` to your actual phone number

### Footer (`src/components/Footer.jsx`)
- **Email**: Line ~33 - Change `info@dept.com`
- **Phone**: Line ~37 - Change `(555) 123-4567`
- **Location**: Line ~41 - Change `Your City, State` to actual location

## Social Media Links to Add

### Footer (`src/components/Footer.jsx`)
Lines 16-31 - Replace `#instagram`, `#facebook`, `#youtube`, `#twitter` with:
- Your actual Instagram profile URL
- Your actual Facebook page URL
- Your actual YouTube channel URL
- Your actual Twitter/X profile URL

## Google Form Integration (Optional)

### Contact Page (`src/pages/Contact.jsx`)
Currently using a React form. To integrate Google Forms:

1. Create a Google Form at https://forms.google.com
2. Get the form URL or prefilled link
3. Either:
   - **Option A**: Replace the entire form section with an iframe:
     ```jsx
     <iframe 
       src="YOUR_GOOGLE_FORM_URL" 
       width="100%" 
       height="800px" 
       frameborder="0"
     >
       Loading...
     </iframe>
     ```
   - **Option B**: Add a link to the form (see commented code around line 189)

## Resource Download Links

### Resources Page (`src/pages/Resources.jsx`)
Lines 9-78 - Update the `downloadLink` property for each resource:
- Replace `#download-beginner-program`, `#video-squat-form`, etc.
- Add actual URLs to:
  - PDF downloads
  - Video hosting platforms (YouTube, Vimeo)
  - Google Drive links
  - Cloud storage links

## Text Content to Personalize

### About Us Bios (`src/pages/Home.jsx`)
- **Luke Edwards Bio** (Lines ~37-43): Personalize with actual experience and specialties
- **Kyle Douglas Bio** (Lines ~66-72): Personalize with actual experience and specialties
- **Specialty Badges**: Update based on actual areas of expertise

### Our Story Section (`src/pages/Home.jsx`)
Lines ~84-97 - Enhance with more specific details:
- Specific memories from NIU
- How your training philosophy developed
- Why you started D&E P.T.
- Your mission and vision

## Color Scheme

The current theme uses:
- **Primary Red**: `#dc143c` (Crimson Red)
- **Dark Background**: `#1a1a1a`
- **White Background**: `#ffffff`

To adjust colors globally, search and replace the hex values in all CSS files.

## Deployment

The site is already configured for GitHub Pages deployment:
```bash
npm run deploy
```

This will build and deploy to: `https://lukedwards99.github.io/de-pt-web/`

## Development

To run locally:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## Next Steps

1. ✅ Replace all placeholder images with actual photos
2. ✅ Update contact information (email, phone, location)
3. ✅ Add social media links
4. ✅ Personalize trainer bios and story
5. ✅ Add actual resource download links
6. ⚪ (Optional) Integrate Google Form
7. ⚪ Test all links and forms
8. ⚪ Deploy to GitHub Pages

---

Built with React + Vite
