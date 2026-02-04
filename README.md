# AI4Business Solutions

A premium, high-trust, high-converting web design & development website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Neumorphism/Soft UI Design** - Modern, premium aesthetic with soft shadows and subtle depth
- ⚡ **Next.js 14 App Router** - Latest React framework with server components
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎭 **Framer Motion Animations** - Subtle, purposeful animations
- 🔍 **SEO Optimized** - Built-in metadata, Open Graph, and semantic HTML
- 🌙 **Dark Mode Ready** - System-based dark mode support
- ♿ **Accessible** - ARIA labels and semantic markup
- 🚀 **Performance Focused** - Optimized for Lighthouse 90+

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd premium-web-studio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── services/          # Services page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # Reusable UI components
└── ...
```

## Pages

- **Home** - Hero, benefits, services overview, testimonials, CTAs
- **Services** - Detailed service offerings with process timeline
- **About** - Company story, values, philosophy, journey
- **Contact** - Contact form, contact info, FAQ

## Design System

### Colors

- **Brand:** Blue gradient (#0c8ee6)
- **Accent:** Purple gradient (#d946ef)
- **Neumorphism Base:** Light gray (#e8eef3)

### Shadows (Neumorphism)

- `shadow-neu-flat` - Standard raised effect
- `shadow-neu-pressed` - Inset/pressed effect
- `shadow-neu-sm/lg` - Size variations

### Components

- Button (primary, secondary, ghost variants)
- Card (flat, pressed, hover variants)
- Input & Textarea (neumorphic style)
- SectionHeader (with gradient highlight)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy

## Customization

### Updating Content

- Edit page files in `src/app/` directories
- Update contact info in Header and Footer components
- Modify testimonials and stats in `src/app/page.tsx`

### Updating Styles

- Colors and shadows in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles in respective component files

## License

MIT License - feel free to use for your own projects.

---

Built with ❤️ for businesses that value quality.
# ai4business-solution
