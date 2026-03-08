

# AI Resume & Cover Letter Generator — Full Frontend

## Brand & Design System
- Color palette: Primary blue (#0d6efd), charcoal (#222), soft gray (#f5f5f5), white
- Typography: Inter font, clean hierarchy (48px hero → 14px body)
- Micro-animations on buttons, cards, and transitions
- Consistent spacing, rounded corners, professional feel

## Pages to Build

### 1. Landing Page (/)
- **Hero**: "Your Resume, Perfected by AI" with illustration/gradient background, two CTAs
- **Features**: 4 cards (AI Tailored Content, ATS Optimization, Industry Templates, Cover Letter + LinkedIn)
- **How It Works**: 3-step visual guide (Input → AI Suggestion → Export)
- **Testimonials**: Carousel with avatar, name, role, quote
- **SEO content section**: Career advice blurb
- **Newsletter signup** strip

### 2. Templates Page (/templates)
- **25 fully coded HTML/CSS resume templates** rendered with sample placeholder data
- Filter bar: Style (Classic, Modern, Creative, Technical, Executive) + Level (Entry, Mid, Senior, Executive)
- Grid of template preview cards with hover effects
- Click to open modal with full-size live preview + "Use This Template" CTA

### 3. Resume Builder (/builder)
- **Left panel**: Form inputs (Name, Title, Contact, Experience, Education, Skills, Certifications, optional Job Description)
- **Right panel**: Live preview rendering selected template with entered data
- Template selector dropdown/carousel at top
- Drag-and-drop section reordering
- Simulated AI buttons: "Rewrite", "Expand", "Shorten", "Tailor" (UI only, no backend)
- ATS Score gauge (mock score based on field completion)
- Export buttons (PDF, Word, Plain Text) — PDF via browser print, others as UI placeholders

### 4. AI Tools Page (/ai-tools)
- Content rewriting interface with mode selector (Formal, Concise, Creative, Technical)
- Input textarea + output preview side-by-side
- Mock AI suggestions for demo purposes

### 5. Pricing Page (/pricing)
- 3 tiers: Free, Premium ($9.99/mo), Pro ($19.99/mo)
- Monthly/Yearly toggle with discount badge
- Feature comparison table
- CTA buttons per tier

### 6. About Page (/about)
- Mission & vision section
- Team member cards with photos/placeholders
- Press mentions / trust badges

### 7. Contact Page (/contact)
- Contact form (Name, Email, Subject, Message) with validation
- FAQ accordion
- Email and social links

### 8. Auth Pages (/signin, /signup)
- Sign in / Sign up forms (UI only, no backend)
- Google & LinkedIn OAuth buttons (visual only)

## Shared Components
- **Header**: Logo + nav links + "Sign In" button, mobile hamburger menu
- **Footer**: Quick links columns, social icons, newsletter input, privacy/terms links
- **Mobile-responsive** throughout with Tailwind breakpoints

## The 25 Templates
Each template will be a React component that accepts props (name, title, summary, experience, education, skills, projects) and renders a distinct resume layout. Templates will use placeholder content for preview and accept real data in the builder.

Templates span: Classic, Modern, Creative, Technical, Academic, Executive, Minimalist, Sidebar, Functional, Multi-language, Finance, Marketing, Sales, Engineering, Scientific, Portfolio, and more — as listed in the spec.

## Technical Approach
- React Router for all pages
- Tailwind CSS for styling with custom color variables
- Inter font via Google Fonts
- Lucide icons throughout
- Recharts for any score visualizations
- All data is local/mock — no backend calls
- Modular component architecture for easy future backend integration

