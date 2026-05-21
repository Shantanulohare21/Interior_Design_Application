# Aangan Interiors 🏛️✨

Where Heritage Meets Elegance. A premium static website for an Indian luxury interior design company, targeting affluent customers in major metropolitan areas like Mumbai, Delhi, Bangalore, and Hyderabad.

## 🎨 Design Philosophy
The aesthetic is built on **Indian luxury**.
- **Colors**: Deep jewel tones (Burgundy `#6B1E2E`), Antique Gold (`#C9A84C`), Ivory (`#FAF6EE`), and Charcoal (`#1C1C1C`).
- **Typography**: `Cormorant Garamond` for elegant, opulent headings, balanced with `DM Sans` for clean, readable body text.
- **Motifs**: subtle Indian design elements like paisley and lotus SVG dividers, complemented with smooth scroll behavior, micro-animations, and gold shimmer effects.

## 🚀 Key Features
1. **Hero Section**: Full-height viewport with custom particle canvas background, staggered text animations, and an elegant image collage.
2. **About Us**: Blends heritage storytelling with modern layouts, showcasing experience via smooth animated statistical counters.
3. **Services & Portfolio**: Masonry layout portfolio with categorical filtering and dark-themed service cards highlighting uniquely Indian offerings like Vastu-compliance.
4. **Testimonials**: Auto-playing review carousel featuring custom UI and Indian names.
5. **Contact**: Detailed enquiry form and embedded Google Maps alongside direct contact information.
6. **Smart Integrations**:
   - Floating WhatsApp Call-to-Action.
   - **Aangan AI Assistant**: An integrated chat interface on the bottom left designed to instantly help customers with queries regarding pricing, locations, and Vastu.

## 🛠️ Technology Stack
- **React.js**: Functional UI components and state management.
- **Vite**: State-of-the-art fast frontend build tool.
- **Tailwind CSS v4**: For highly customized, responsive, utility-first styling with native CSS variables embedded via `@theme`.
- **Framer Motion**: Powering complex UI orchestrations (scroll reveals, staggered fade-ins, animated components).
- **react-intersection-observer**: For triggering high-performance animations purely based on viewport scroll depth.

## 📦 Running the Project Locally

To run this project on your local machine:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **View the Application**
   Open your browser and navigate to `http://localhost:5173/`. 

## 📁 Project Structure

```
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── components/         # Modular UI segments
│   │   ├── Navbar.jsx      
│   │   ├── Hero.jsx        
│   │   ├── About.jsx       
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── AIAssistant.jsx # Smart customer support bot
│   ├── App.jsx             # Main layout orchestrator
│   ├── index.css           # Tailwind v4 directives and custom global aesthetics
│   └── main.jsx            # React mounting point
├── index.html              # Main HTML entry containing custom SEO elements and Font imports
├── package.json            
└── vite.config.js          
```

## ✒️ Customizations
Modify the core theme directly inside `src/index.css` under the `@theme` block. Update the Unsplash image sources within `Hero.jsx`, `About.jsx`, and `Portfolio.jsx` to adapt the visual assets to standard corporate photography if moving to production.

---
*Built with modern web standards to deliver an opulent user experience.*
