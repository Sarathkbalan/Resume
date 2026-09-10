# Sarath K Balan — Interactive Portfolio & Digital Resume

A high-performance, creative, interactive developer portfolio and digital resume built for **Sarath K Balan** (MERN Stack Developer).

Built strictly using his verified professional resume as the **single source of truth** — covering his professional software engineering experience at TrackGenesis, 3 flagship full-stack & Web3 projects, 6 industry certifications, verified technical skills, and academic background.

---

## ⚡ Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Glassmorphism, CSS Design Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion (60fps spring transitions, staggered reveals, tilt cards)
- **Backgrounds**: HTML5 Constellation Canvas (zero heavy 3D dependencies)
- **Deployment**: Vercel-ready with `vercel.json` SPA configuration

---

## ✨ Features & Micro-Interactions

1. **Centralized Data Layer (`src/data/resume.ts`)**:
   - All website text, projects, skills, and links are managed from a single file. Zero content is hardcoded across components.
2. **Interactive Constellation Canvas**:
   - High-performance, mouse-interactive particle background running at 60fps with automatic pause on reduced motion.
3. **Command Palette (`Ctrl + K` / `Cmd + K`)**:
   - Modern developer spotlight search allowing instant section jumping, theme toggling, terminal launching, and contact copying.
4. **Developer Terminal Easter Egg**:
   - Simulated Unix developer terminal supporting interactive commands (`help`, `bio`, `experience`, `skills`, `projects`, `contact`, `clear`, `exit`).
5. **Digital Resume Modal & Direct PDF Download**:
   - Built-in PDF previewer modal with inline viewing (`/resume.pdf`), download button, and new-tab launcher.
6. **Project Deep-Dive Modals & Abstract Visuals**:
   - Dedicated modals for each flagship project with domain-specific abstract graphics (Neural AI Matrix, Sepolia Web3 Blocks, Enterprise .NET/SQL architecture).
7. **Filterable Technical Skills Wall**:
   - Tabbed filtering across Frontend, Backend, Database, Languages, AI/LLM, Tools, and Blockchain. Includes live instant search.
8. **Polished Dark / Light Mode**:
   - Native toggle with persistent `localStorage` preference and smooth theme transitions.
9. **Desktop Custom Cursor**:
   - Magnetic dual-ring cursor with expanding radius over interactive targets, auto-disabled on touch devices.
10. **Accessibility & SEO**:
    - Semantic HTML5 landmark structure, JSON-LD Person structured data, Open Graph tags, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```
d:/Resume/
├── public/
│   ├── resume.pdf                # Official vector PDF resume
│   └── favicon.svg               # Stylized geometric logo
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   └── About.tsx         # Storytelling summary & 4 engineering pillars
│   │   ├── certifications/
│   │   │   └── Certifications.tsx # Certification wall (AWS, IBM, Google, KBA)
│   │   ├── contact/
│   │   │   └── Contact.tsx       # Quick copy, mailto dispatch, social links
│   │   ├── education/
│   │   │   └── Education.tsx     # CET & Kerala Blockchain Academy credentials
│   │   ├── experience/
│   │   │   └── Experience.tsx    # TrackGenesis timeline & expandable scope
│   │   ├── hero/
│   │   │   ├── Hero.tsx          # Name, title, CTAs, availability status
│   │   │   └── ParticleCanvas.tsx # 60fps constellation canvas
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky glass navbar with active spy
│   │   │   ├── MobileNav.tsx     # Slide-over mobile drawer
│   │   │   └── Footer.tsx        # Minimal footer with back-to-top
│   │   ├── projects/
│   │   │   ├── Projects.tsx      # Flagship project grid & filters
│   │   │   ├── ProjectCard.tsx   # Interactive 3D tilt card
│   │   │   ├── ProjectModal.tsx  # Architectural deep-dive modal
│   │   │   └── ProjectVisual.tsx # Abstract generative domain SVGs
│   │   ├── resume/
│   │   │   └── ResumeModal.tsx   # Embedded PDF viewer modal
│   │   └── ui/
│   │       ├── CommandPalette.tsx # Spotlight command palette
│   │       ├── CustomCursor.tsx  # Magnetic desktop cursor
│   │       ├── ScrollProgress.tsx # Top gradient scroll indicator
│   │       ├── SectionHeader.tsx # Technical section index header
│   │       ├── TerminalEasterEgg.tsx # Interactive developer CLI
│   │       └── Toast.tsx         # Clipboard copy notification
│   ├── context/
│   │   └── ThemeContext.tsx      # Theme state & DOM synchronization
│   ├── data/
│   │   └── resume.ts             # Centralized source of truth
│   ├── hooks/
│   │   ├── useActiveSection.ts   # Scroll spy for active navigation
│   │   └── useScrollProgress.ts  # Reading progress percentage
│   ├── styles/
│   │   └── index.css             # Tailwind base & glassmorphism utilities
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app assembler
│   └── main.tsx                  # React DOM entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                   # Vercel deployment & routing config
└── README.md
```

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ☁️ Vercel Deployment

This project includes a pre-configured `vercel.json` file ensuring proper SPA client-side routing, caching, and security headers.

### Option 1: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub / GitLab / Bitbucket
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sarath K Balan portfolio"
   git branch -M main
   git remote add origin https://github.com/Sarathkbalan/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

---

## 🛠️ Customization Guide

### 1. How to Update Resume Content
Edit:
```ts
src/data/resume.ts
```
All sections (Experience, Projects, Education, Certifications, Skills, Contact, and Personal Bio) will automatically reflect the updated data across all components and modals.

### 2. How to Update the Resume PDF
Replace the file at:
```
public/resume.pdf
```
Ensure the filename remains `resume.pdf` so the "View Resume" modal and "Download Resume" buttons continue to target it properly.

### 3. How to Customize Theme & Accent Colors
- **Tailwind Tokens**: In `tailwind.config.js`, modify `colors.primary` (default `#06b6d4`) or `colors.accent`.
- **CSS Variables**: In `src/styles/index.css`, customize the `--color-bg`, `--color-surface`, and `--color-border` values for dark and light modes.
