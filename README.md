# 🖥️ PRAYAG_SAHU — Terminal Portfolio

<div align="center">

```
██████╗ ██████╗  █████╗ ██╗   ██╗ █████╗  ██████╗
██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗██╔════╝
██████╔╝██████╔╝███████║ ╚████╔╝ ███████║██║  ███╗
██╔═══╝ ██╔══██╗██╔══██║  ╚██╔╝  ██╔══██║██║   ██║
██║     ██║  ██║██║  ██║   ██║   ██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝
```

**A production-grade developer portfolio built with a retro terminal aesthetic**

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion_(Framer)-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

</div>

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Design System](#-design-system)
  - [Color Tokens (CSS Variables)](#-color-tokens-css-variables)
  - [Typography & Fonts](#-typography--fonts)
  - [Shared UI Primitives](#-shared-ui-primitives)
  - [Animations & Keyframes](#-animations--keyframes)
- [Page Sections](#-page-sections)
- [Component Catalog](#-component-catalog)
  - [Layout Components](#-layout-components)
  - [Section Components](#-section-components)
  - [UI Utilities](#-ui-utilities)
  - [Providers](#-providers)
- [Theme System](#-theme-system)
- [Key Features](#-key-features)
- [Dependencies](#-dependencies)
- [Dev Setup](#-dev-setup)
- [Environment & Deployment](#-environment--deployment)
- [.gitignore Coverage](#-gitignore-coverage)
- [Context for AI Tools & Senior Devs](#-context-for-ai-tools--senior-devs)

---

## 📌 Project Overview

This is a **single-page developer portfolio** for **Prayag Sahu**, a Full Stack Developer (MERN Stack) from Jabalpur, MP, India. The entire design follows a **retro CRT terminal aesthetic** — every card, panel, and widget mimics a computer terminal window with macOS-style traffic light buttons, mono-spaced text, scanline overlays, corner accents, and glitch animations.

The site is fully responsive, has a dual **Dark / Light** theme toggle backed by `localStorage`, and features rich micro-animations including glitch effects, typewriter text, velocity-driven scroll animations, parallax tilt cards, animated contribution heatmaps, and scroll-triggered counters.

> **Live Goal:** Showcase projects, education, skills, certifications, and achievements while making the visitor feel like they are inside a real developer terminal.

---

## ⚙️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | **Next.js** | `^16.1.6` |
| UI Library | **React** | `^19.2.4` |
| Styling | **Tailwind CSS** | `^3.4.18` |
| Animation | **Motion (Framer)** | `^12.29.0` |
| Icons | **Lucide React** + **React Icons** + **FontAwesome** | Latest |
| Email | **EmailJS Browser** | `^4.4.1` |
| PDF | **jsPDF** + **jsPDF AutoTable** | `^3.0.4` |
| Charts | **Recharts** | `^3.5.1` |
| Language | **JavaScript (JSX)** + **TypeScript (tsx)** | Mixed |
| CSS Post-processing | **PostCSS** + **Autoprefixer** | Latest |
| Linting | **ESLint** with `eslint-config-next` | `16.0.5` |

---

## 📁 Folder Structure

```
📦 github-repo-portfolio/
│
├── 📂 app/
│   ├── globals.css          # ← MASTER CSS: all tokens, animations, utilities
│   ├── layout.jsx           # ← Root layout: ThemeProvider, Navbar, Footer, CursorBubble
│   ├── page.jsx             # ← Main page: assembles all sections in order
│   └── icon.png             # ← Favicon
│
├── 📂 components/
│   │
│   ├── 📂 layout/           # ← App shell: Navbar & Footer
│   │   ├── Navbar.jsx       # Fixed top bar, mobile drawer, active section tracking
│   │   ├── Footer.jsx       # 3-column footer: brand panel, links, terminal log
│   │   └── ClientLayout.jsx # Client-side wrapper for SplashScreen gate
│   │
│   ├── 📂 providers/        # ← React Context providers
│   │   └── ThemeProvider.jsx # Dark/Light theme context, localStorage persistence
│   │
│   ├── 📂 sections/         # ← All page content sections (the main portfolio content)
│   │   ├── HeroSection.jsx       # Full-screen hero: 3-column dashboard, profile card, typewriter
│   │   ├── AboutSections.jsx     # About me: bio, stats, expertise accordion, qualities
│   │   ├── Education.jsx         # Education timeline with image lightbox gallery
│   │   ├── Education2.jsx        # Certifications: infinite scroll cards + popup gallery
│   │   ├── ProjectCard.jsx       # Projects: tabbed, filterable, full-detail modal
│   │   ├── AchievementCard.jsx   # Achievements: animated counters, category tabs
│   │   ├── SkillCard.jsx         # Skills matrix + GitHub heatmap + stats
│   │   ├── ContactSection.jsx    # Contact form with EmailJS, terminal-style inputs
│   │   ├── CTA.jsx               # Call to action section (currently disabled in page.jsx)
│   │   └── About.css             # Extra CSS scoped to the About section
│   │
│   └── 📂 ui/               # ← Reusable UI utilities
│       ├── CursorBubble.jsx      # Custom animated glowing cursor follower (desktop only)
│       ├── SplashScreen.jsx      # Boot screen with progress bar and terminal logs
│       └── ParallaxSection.tsx   # Generic parallax wrapper
│
├── tailwind.config.js       # Tailwind: CSS var-based semantic color tokens + custom fonts
├── next.config.ts           # Next.js config (currently default)
├── postcss.config.js        # PostCSS: Tailwind + Autoprefixer
├── package.json             # All dependencies & npm scripts
├── tsconfig.json            # TypeScript config
├── eslint.config.mjs        # ESLint config
└── .gitignore               # Node, env, build, editor, OS artifacts ignored
```

---

## 🎨 Design System

### 🎨 Color Tokens (CSS Variables)

All colors are defined as **CSS custom properties** in `app/globals.css` and are consumed site-wide. This means a single value change in globals.css updates the color across every component.

#### 🌑 Dark Mode (Default — applied to `:root`)

| Variable | Value | Purpose |
|---|---|---|
| `--bg` | `#010409` | Main page background (near-black) |
| `--surface` | `#0d1117` | Card/panel background |
| `--surface-2` | `#010409` | Secondary surface (footer, nav) |
| `--border` | `#1a2332` | Primary border color |
| `--border-dim` | `#30363d` | Secondary border / dim dividers |
| `--text-primary` | `#ffffff` | Main body text |
| `--text-muted` | `#a1a1aa` | Subdued text, labels |
| `--text-dim` | `#ffffff` | Overridden by visibility rule |
| `--accent` | `#39d353` | Primary accent — Neon Green |
| `--accent-glow` | `rgba(57, 211, 83, 0.25)` | Glow/shadow for accent elements |
| `--accent-blue` | `#00e5ff` | Secondary accent — Cyan |
| `--accent-amber` | `#f59e0b` | Tertiary accent — Amber |
| `--accent-purple` | `#a855f7` | Quaternary accent — Purple |
| `--accent-red` | `#ff5f56` | Error / alert color |
| `--scanline-color` | `rgba(0,0,0,0.05)` | CRT scanline texture opacity |
| `--bg-transparent` | `rgba(1,4,9,0.88)` | Glassmorphism navbar bg |
| `--bg-subtle` | `rgba(255,255,255,0.03)` | Very subtle card tint |
| `--window-header-bg` | `var(--bg-subtle)` | Terminal window chrome background |
| `--window-header-text` | `var(--text-muted)` | Terminal window chrome filename color |
| `--transition` | `background-color 0.25s ease, color 0.2s ease, border-color 0.25s ease` | Global theme transition |

#### ☀️ Light Mode (Applied with `.light` class on `<html>`)

> Light mode uses the **Retro Pastel Palette** — inspired by a vintage sunset palette with warm sandy beiges and ocean teal.

| Variable | Value | Name |
|---|---|---|
| `--bg` | `#E2D8A5` | Hampton (Light Beige) |
| `--surface` | `#E2D8A5` | Same as bg |
| `--surface-2` | `#DEC484` | Calico (Warm Yellow) |
| `--text-primary` | `#152024` | Very Dark Teal |
| `--text-muted` | `#2A4048` | Dark Teal |
| `--text-dim` | `#416370` | Medium Teal |
| `--accent` | `#C76C27` | Rust Orange (Darkened Harvest Gold) |
| `--accent-glow` | `rgba(199, 108, 39, 0.15)` | Rust glow |
| `--accent-blue` | `#325A68` | Darkened Smalt Blue |
| `--accent-amber` | `#B59345` | Darkened Calico |
| `--accent-purple` | `#467673` | Darkened Sea Nymph |
| `--bg-subtle` | `#DEC484` | Calico |
| `--window-header-bg` | `#577E89` | Smalt Blue (Terminal Headers) |
| `--window-header-text` | `#F7F5F0` | Ivory (High-contrast header text) |

#### How the Light Mode Palette Maps to Named Colors

```
E1A36F (Harvest Gold) → used as accent-tinted badges
DEC484 (Calico)       → subtle backgrounds, cards
E2D8A5 (Hampton)      → main page background
6F9F9C (Sea Nymph)    → accent-purple / secondary highlights
577E89 (Smalt Blue)   → window chrome headers, accent-blue
```

---

### 🔤 Typography & Fonts

The site uses **two distinct typefaces** that are registered in both Tailwind and `globals.css`:

| Font | Usage | Tailwind Class |
|---|---|---|
| **`'Courier New', Courier, monospace`** | ALL terminal-themed UI text — headings, labels, buttons, nav links, code, status badges | `font-mono` |
| **`Inter, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`** | Body default / fallback | `font-sans` |
| **`Anton`** (Google Font) | Large outline hero typography via `.outline-text` | — |

> **Note:** `Courier New` is the primary font used throughout 95%+ of the site to reinforce the terminal theme. `Inter` is the fallback body default.

**Typography Scale Used (pixel-level):**

```
9px  → micro labels, timestamps
10px → tags, compact status text
11px → window chrome filenames, nav links, badges
12px → secondary body, card subtitles
13px → primary body text, README blocks
14px → section descriptions
17px → card name headings
18px → navbar logo
24px–32px → stat numbers, counter values
3xl–5xl (30-48px) → section headings (glitch-animated)
clamp(3rem, 7vw, 5.5rem) → Hero "FULL STACK" title (fluid)
```

**Letter Spacing Used:**
- `tracking-[0.3em]` — Module labels (`SYSTEM_MODULE / ABOUT`)
- `tracking-[0.2em]` — Most labels and status pills
- `tracking-[0.18em]` — Nav links and window filenames
- `tracking-widest` — Small uppercase status badges

---

### 🧩 Shared UI Primitives

Every section file locally defines these three micro-components (not shared via import — each section is self-contained by design):

#### `<ScanlineOverlay />`
A repeating CSS gradient overlay that mimics a CRT monitor's scanline effect.
```jsx
<div style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--scanline-color) 2px, var(--scanline-color) 4px)" }} />
```
*Light mode reduces this opacity significantly via `.light .scanline-overlay` in `globals.css`.*

#### `<CornerAccent color? />`
Four small L-shaped corner borders at each corner of a card. Defaults to `var(--accent)` but accepts any color prop.
```jsx
// Creates: ┌────┐ / └────┘ corner bracket effect
<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" />
// ...plus 3 more corners
```

#### `<WindowChrome filename status? statusColor? />`
The macOS-style title bar at the top of every card:
- **Left:** Three colored dots (🔴 `#ff5f56`, 🟡 `#ffbd2e`, 🟢 `#27c93f`) + monospace filename
- **Right:** Animated pulse dot + pill-shaped status badge (e.g., `LIVE`, `ONLINE`, `LOADED`)
- **Background:** `var(--window-header-bg)` — in dark mode is nearly transparent; in light mode is Smalt Blue `#577E89`
- **Text color:** `var(--window-header-text)` — Ivory in light mode

#### `<Cursor />`
An inline animated blinking block cursor (`█`). Used in headings and terminal text to simulate a real terminal cursor.

---

### 🎬 Animations & Keyframes

All keyframes are defined in `app/globals.css`:

| Animation | Class / Keyframe | Description |
|---|---|---|
| **Float** | `.animate-float` / `float 4s ease-in-out infinite` | Gentle vertical float for profile card |
| **FadeInUp** | `.animate-fade-in-up` / `fadeInUp 0.6s ease-out` | Entrance animation — fades in from below |
| **ScaleIn** | `.animate-scale-in` / `scaleIn 0.35s ease-out` | Dropdown menus (CV download) |
| **BubblePulse** | `.status-dot` / `bubblePulse 1.8s infinite` | Live status indicator pulse |
| **ScanMove** | `.scan-line` / `scanMove 3s linear infinite` | Hero image CRT scan line sweep |
| **ScrollDot** | `scroll-dot 2s infinite` | Scroll indicator inner dot bounce |
| **PhonePulse** | `phone-pulse 2.5s infinite` | CALL button glow ripple |
| **Glitch** | Inline via `useState` + `translate-x` | Random 100ms horizontal offset on headings — triggers every 5–9 seconds |
| **Typewriter** | `setInterval` character-by-character | Hero role titles, bio heading, contribution counter |
| **CertScroll** | `cert-scroll 32s linear infinite` | Infinite horizontal certificate cards loop |
| **CardHover** | `.card-hover:hover` | Border turns accent + glow shadow on card hover |
| **TextRotate** | `.text-rotate` / `transform: translateY` | Navbar CTA button text slide animation on hover |

---

## 📄 Page Sections

Assembled in `app/page.jsx` in this order:

```jsx
<AboutSection />        // #about
<EducationSection />    // #education  (Timeline + lightbox gallery)
<ProjectsSection />     // #projects   (Tabbed, filterable projects)
<AchievementsSection /> // #achievements (Counters, awards)
<EducationSection2 />   // #about (Certifications infinite scroll)
<SkillsSection />       // #skills (Skills matrix + GitHub heatmap)
<ContactSection />      // #contact (EmailJS form)
```

> **Note:** `<HeroSection />` and `<CTA />` are currently commented out in `page.jsx` but the components are fully built and production-ready.

---

## 🗂️ Component Catalog

### 🏗️ Layout Components

#### `Navbar.jsx` — `components/layout/Navbar.jsx`
- **Fixed** to top of page, full-width, `z-50`
- **Dual layout:** Desktop (`md:block`) and Mobile (`md:hidden`) headers
- **Desktop features:**
  - Avatar image (`/images/icon.png`) with glowing accent border
  - `PRAYAG_SAHU` logo with glitch animation (triggers every 8s)
  - Nav links inside a terminal-styled bordered container with corner accents
  - Active section tracking via `IntersectionObserver` (25% threshold)
  - `▸` arrow prefix on active link + animated underline on hover
  - `AVAILABLE` live status pill with pulsing dot
  - `ThemeToggle` button (Sun/Moon icon)
  - `$ CONTACT →` CTA button with fill-on-hover effect
- **Mobile features:**
  - Compact avatar + `PRAYAG_SAHU` branding
  - Animated hamburger/X toggle
  - Slide-down drawer with terminal header bar (`NAVIGATION.sh`)
  - `MobileLink` with active highlight + pulsing dot
  - Contact CTA button at bottom of drawer
  - Terminal footer: `$ nav --open _ █`
- **Scroll behavior:** On scroll > 20px, adds solid background + border
- **Custom hooks:** `useActiveSection()` — tracks which section is visible

---

#### `Footer.jsx` — `components/layout/Footer.jsx`
- **3-column 12-col grid** (5 + 4 + 3)
- **Brand Panel (col 5):** Profile card with name, tagline, README bio, status chips (STATUS/BASE/MODE), 4 social buttons (GitHub, LinkedIn, Twitter, Email)
- **Links Column (col 4):** Two terminal boxes — `$ ls ./portfolio/` (Projects, Achievements, Education) and `$ ls ./connect/` (Contact, About, Resume)
- **Terminal Log (col 3):** Interactive terminal showing `$ whoami`, `$ location`, `$ role`, `$ email`, `$ commits` with colored output + blinking cursor
- **Bottom Bar:** Copyright year, version tag `footer --v1.0`, ALL_SYSTEMS_ONLINE status
- **Effects:** Background grid, ambient glow, gradient top border, scanline overlay, glitch on name every 9s

---

#### `ClientLayout.jsx` — `components/layout/ClientLayout.jsx`
- Client-side wrapper that gates the entire app behind `<SplashScreen />`
- Once splash finishes → mounts children (the full portfolio)

---

### 📐 Section Components

#### `HeroSection.jsx` — `components/sections/HeroSection.jsx`
> **Currently commented out in page.jsx — built but not active**

- **Full-screen 3-column layout** (desktop) / single column (mobile)
- **Left panel:** Intro terminal box (`$ whoami`), "FULL STACK / STACK" giant monospace heading, typewriter role selector (`FULL_STACK_DEVELOPER → MERN_STACK_SPECIALIST → UI/UX_DESIGNER → OPEN_SOURCE_CONTRIBUTOR`), 3-stat grid (Projects, Clients, Commits), Download CV button (dropdown with RESUME.pdf and CV.pdf), Contact terminal CTA
- **Center panel:** `ProfileCard` — 3D tilt on mouse hover (`perspective(900px) rotateX/Y`), profile photo with scan line + overlay effects, stats row, expandable social links
- **Right panel:** `IconScrollVelocity` — tech icon scroll strip that accelerates based on scroll velocity (using `motion/react` spring physics), README bio box, giant "DEVELOPER" text, core skills chips with hover accent, OPEN_TO_WORK availability badge
- **Scroll indicator:** Animated mouse SVG with bouncing dot + ArrowDown

**Key custom hooks/components in HeroSection:**
- `useElementWidth(ref)` — responsive scroll track width
- `IconScrollVelocity` — velocity-aware infinite icon scroll using `useVelocity`, `useSpring`, `useAnimationFrame`
- `ProfileCard` — mouse-tilt card with `useState({ x, y })` tracking

---

#### `AboutSections.jsx` — `components/sections/AboutSections.jsx`
- **Section ID:** `#about`
- **Header panel:** `ABOUT_ME.txt` window with `PRAYAG_SAHU` heading + glitch, 6 color-coded tag badges (DEVELOPER AT GHOTUL, 8+ MONTHS WORK EXP, 2+ INTERNSHIPS, 2x IIT TOPPER TAG, 15+ PROJECTS, 4 HACKATHONS) with `color-mix()` tinted backgrounds
- **Two-panel layout:**
  - **Left (320px):** Profile photo panel with 4 stat cells (STATUS, CGPA 8.35/10, BASE, DEGREE)
  - **Right:** Bio panel — `$ whoami` prompt, typewriter name, "FULL STACK DEVELOPER · MERN STACK SPECIALIST" tagline, README.md text block with highlighted tech terms
- **Below panels:** Two toggle accordions:
  - `EXPERTISE_MATRIX` — 6 skills: React/Next.js, Node.js & Express, MongoDB & PostgreSQL, REST API Design, Git & GitHub, Figma
  - `CORE_QUALITIES` — 4 traits: Analytical Thinking, Clean Code Culture, Fast Learner, Team Collaboration
- **TypewriterText:** Local custom component in this file — character-by-character reveal with blinking cursor

---

#### `Education.jsx` — `components/sections/Education.jsx`
- **Section ID:** `#education`
- **Data:** 5 education entries:
  1. B.Tech CSE — LNCT Group (2022–2026, CGPA 8.35)
  2. 12th Grade — SJPM School (2021–2022, 84.8%)
  3. 10th Grade — SJPM School (2019–2020, 85.6%)
  4. NASSCOM MERN Internship (2026)
  5. Other Activities / Extracurricular
- **Certificate gallery lightbox:** click any image to open full-screen lightbox with prev/next navigation
- **Layout:** masonry/columns image grid in a popup overlay with accent-colored scrollbar
- **Popup:** blurred backdrop, scrollable grid, `[ESC] CLOSE` button

---

#### `Education2.jsx` — `components/sections/Education2.jsx`
- **Section ID:** `#about` (certification archive section)
- **9 certification cards in infinite horizontal scroll** (32s animation, pauses on hover)
  - InterviewBit (11 DSA Badges)
  - NPTEL DBMS – IIT Kharagpur Silver+Elite, Top 5%
  - NPTEL Computer Networks – Top 2%
  - freeCodeCamp Web Dev (2 certs)
  - Cisco Networking & Python (23 files)
  - NASSCOM MERN Stack Internship
  - TITANS Nagpur Pre-Placement Training (60 hours)
  - Hackathon Champion (SIH + BRAHMAX 1.0)
  - Best Student Award 2023
- **Each card:** Image slideshow with auto-advance + dot indicators, tag pill, `$ EXPLORE_NOW →` button
- **Popup gallery:** Full-screen masonry grid of all images for that cert + full lightbox with prev/next
- **Footer:** Terminal command + quick-jump buttons for each CERT_XX ID
- **Stat headers:** TOTAL_CERTS: 11+, BADGES: 30+, PLATFORMS: 06, YEAR_RANGE: 2023–26

---

#### `ProjectCard.jsx` — `components/sections/ProjectCard.jsx`
- **Section ID:** `#projects`
- **Largest component: 51KB / 1000+ lines**
- **Tabbed filtering** (likely by category/tech stack)
- **Project detail modals** with full project info
- **Each card:** macOS WindowChrome, tech stack badges, live link, GitHub link, description, preview image
- **Card hover:** `card-hover` class — accent border + glow shadow

---

#### `AchievementCard.jsx` — `components/sections/AchievementCard.jsx`
- **Section ID:** `#achievements`
- **AnimatedCounter component** — `IntersectionObserver` triggers count-up animation on scroll using `easeOutExpo` easing over 5 seconds
- **Lucide icons used:** Trophy, Award, GraduationCap, Star, Code, Medal, Zap, Target, Flame, Crown, BookOpen, Cpu, Globe, ChevronRight
- **Category tabs** for filtering achievements
- **WindowChrome** on each card

---

#### `SkillCard.jsx` — `components/sections/SkillCard.jsx`
- **Section ID:** `#skills`
- **Two-panel layout:**
  - **GitHub Data Panel:** Username `prayag29-sahu`, 5,095+ contributions counter (typewriter), repos count, commits count, contribution heatmap grid (52 weeks × 7 days)
  - **Skills Matrix Panel:** 7 categories with shield.io badge images
- **Skills categories:**
  1. Languages & Core Web: C, C++, JavaScript, Java, HTML5, CSS3
  2. Frontend: React.js, Tailwind CSS, Framer Motion, React Native
  3. Backend: Node.js, Express.js, REST API, JWT, Razorpay
  4. Database: MongoDB, PostgreSQL, Firebase
  5. Core Concepts: DSA, OOP, DBMS
  6. DevOps & Tools: Git, GitHub, VS Code, Postman, Vercel, Netlify, Nginx, Linux, npm, Figma, Canva, Hostinger VPS
  7. Currently Learning: System Design, React Native, Backend Security, DevOps & Scaling
- **Heatmap:** `generateHeatmap()` generates pseudo-realistic data — recent weeks (>40) get higher activity levels (3-4), older weeks get lower
- **HeatmapCell:** 5 color levels from `var(--surface)` → `var(--accent)` at 15/35/65/100% opacity

---

#### `ContactSection.jsx` — `components/sections/ContactSection.jsx`
- **Section ID:** `#contact`
- **EmailJS integration:** `service_c1lcmym` / `template_3d23n3n` / public key `iDnsyeNW2wHQtj5-7`, auto-reply template `template_w2i2syl`
- **TerminalInput component:** Custom input with:
  - `$` prefix that changes to `>` on focus
  - Left accent bar appears on focus
  - Glow box-shadow on focus: `0 0 12px var(--accent-glow)`
  - Label color shifts to accent on focus
- **Form fields:** Name, Email, Subject, Message (textarea)
- **Status states:** Sending (Loader spinner), Success (CheckCircle), Error (XCircle)
- **Contact info cards:** Email, Phone, Location with respective Lucide icons
- **Social links:** GitHub, LinkedIn, Twitter
- **Motion animations:** `motion` from `motion/react` for form entrance

---

#### `CTA.jsx` — `components/sections/CTA.jsx`
> **Currently commented out in page.jsx — built but not active**

- **Trust cards:** Clients & Teams, Satisfaction, Commitment
- **Feature cards:** On-Time Delivery, Production Ready, Long-Term
- **Terminal animation:** Simulated terminal command output lines
- **Animated counters:** Using `IntersectionObserver` with `setInterval`
- **CTA buttons:** "Hire Me" and "Get In Touch"

---

### 🎛️ UI Utilities

#### `CursorBubble.jsx` — `components/ui/CursorBubble.jsx`
- **Desktop only** (hidden on ≤768px via `@media (max-width: 768px) { display: none !important }`)
- Tracks `mousemove` and uses `requestAnimationFrame` for a **smooth lagging follow** at `speed = 0.80`
- Updates `#cursor-bubble` div's `transform: translate(x, y)` each frame
- The `#cursor-bubble` div is rendered in `layout.jsx` and styled in `globals.css`:
  - **Dark mode:** `rgba(190, 255, 120, 0.9)` — Yellow-green glow
  - **Light mode:** `var(--accent)` — Rust orange glow (uses `var(--accent-glow)`)

---

#### `SplashScreen.jsx` — `components/ui/SplashScreen.jsx`
- **Full-screen boot loader** with `z-[9999]`
- **Three phases:** `loading` → `ready` → `exit` (total ~3.8s)
- **Progress bar:** Simulated random increment every 200ms
- **Terminal logs:** 7 sequential log lines appear every 400ms:
  ```
  INITIALIZING SYSTEM KERNEL...
  LOADING MERN STACK MODULES...
  CONNECTING TO DATABASE_CLUSTERS...
  FETCHING ASSETS FROM EDGE_NODES...
  AUTHENTICATING DEVELOPER: PRAYAG_SAHU
  OPTIMIZING REACT_DOM_ARCHITECTURE...
  SYSTEM_READY: 100% OPERATIONAL
  ```
- **Animations:** `motion/react` `AnimatePresence` for entrance/exit fade + scale
- **Background:** Dark `#010409` with subtle grid + green glow orb + scanline overlay
- **Title:** "PRAYAG SAHU" with gradient clip text

---

#### `ParallaxSection.tsx` — `components/ui/ParallaxSection.tsx`
- Generic parallax scrolling wrapper component
- TypeScript file

---

### 🔌 Providers

#### `ThemeProvider.jsx` — `components/providers/ThemeProvider.jsx`
- React Context with `ThemeContext` providing `{ theme, toggleTheme }`
- **Default:** `'dark'`
- **Persistence:** `localStorage` key `'portfolio-theme'`
- **Mechanism:** Toggles `.light` / `.dark` class on `document.documentElement`
- **Hydration protection:** Returns `null` until `mounted === true` (prevents SSR/client mismatch)
- **`useTheme()` hook:** Exported for consumption in Navbar and anywhere else

---

## 🌗 Theme System

```
┌─────────────────────────────────────────────────────┐
│  ThemeProvider (Context)                            │
│  ├── Reads localStorage: 'portfolio-theme'          │
│  ├── Sets html.classList → 'light' OR 'dark'        │
│  └── Exposes { theme, toggleTheme }                 │
│                                                     │
│  globals.css                                        │
│  ├── :root { ... }  ← Dark mode (default)           │
│  └── html.light { ... } ← Light mode overrides     │
│                                                     │
│  All components use:                                │
│  style={{ color: "var(--text-primary)" }}           │
│  style={{ background: "var(--surface)" }}           │
│  style={{ borderColor: "var(--border)" }}           │
└─────────────────────────────────────────────────────┘
```

**Theme switch location:** Navbar (Desktop: `ThemeToggle` button, Mobile: compact `ThemeToggle`)

**Transition:** All elements have `transition: background-color 0.25s ease, color 0.2s ease, border-color 0.25s ease` via the `*` selector in globals.css.

**Exception:** `.no-theme-transition` class suppresses transition for elements where it would cause jank.

---

## ✨ Key Features

| Feature | Implementation |
|---|---|
| **Terminal Aesthetic** | Every card = macOS window chrome + scanlines + corner accents |
| **Glitch Effect** | `setInterval` every 5–9s → `translate-x-[2–3px]` for 100–150ms |
| **Typewriter Text** | Custom `useEffect` + `setInterval` character reveal |
| **Velocity Scroll Icons** | `motion/react` `useVelocity`, `useSpring`, `useAnimationFrame` |
| **3D Tilt Card** | `onMouseMove` → `perspective(900px) rotateX/Y` |
| **Animated Counters** | `IntersectionObserver` + `easeOutExpo` easing |
| **GitHub Heatmap** | Pseudo-random 52×7 grid with weighted recency |
| **Infinite Cert Scroll** | CSS `animation: cert-scroll 32s linear infinite`, pauses on hover |
| **EmailJS Contact Form** | No backend, direct browser-to-email |
| **Lightbox Gallery** | Custom modal with prev/next navigation |
| **Splash Screen** | Boot sequence with progress + terminal logs |
| **Custom Cursor** | `requestAnimationFrame` lag-follower, desktop only |
| **Dark/Light Theme** | CSS variable swap + `localStorage` persistence |
| **Active Section Nav** | `IntersectionObserver` at 25% threshold |
| **Mobile Menu** | Animated slide-down drawer with terminal styling |
| **Scroll Indicator** | Animated mouse SVG in hero section |

---

## 📦 Dependencies

### Production

```json
{
  "@emailjs/browser": "^4.4.1",         // Contact form email sending
  "@fortawesome/free-brands-svg-icons": "^7.2.0",  // Tech brand icons
  "@fortawesome/free-solid-svg-icons": "^7.2.0",   // Solid icons
  "@fortawesome/react-fontawesome": "^3.1.1",       // FontAwesome React wrapper
  "gsap": "^3.14.2",                     // Animation library (imported, available)
  "jspdf": "^3.0.4",                     // PDF generation (CV download)
  "jspdf-autotable": "^5.0.2",           // PDF table plugin
  "lucide": "^0.562.0",                  // Lucide core
  "lucide-react": "^0.555.0",            // Lucide React components
  "motion": "^12.29.0",                  // Framer Motion (Motion.dev)
  "next": "^16.1.6",                     // Next.js framework
  "react": "^19.2.4",                    // React 19
  "react-dom": "^19.2.4",               // React DOM
  "react-fontawesome": "^1.7.1",         // Legacy FA wrapper
  "react-icons": "^5.5.0",              // React Icons (RI prefix used)
  "react-router-dom": "^7.9.6",          // Router (imported, available)
  "recharts": "^3.5.1"                   // Charts (imported, available)
}
```

### Development

```json
{
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "autoprefixer": "^10.4.22",
  "eslint": "^9",
  "eslint-config-next": "16.0.5",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.18",
  "typescript": "^5"
}
```

---

## 🚀 Dev Setup

```bash
# 1. Clone the repository
git clone https://github.com/prayag29-sahu/prayagsahuportfolio.git
cd prayagsahuportfolio

# 2. Install dependencies
npm install

# 3. Start development server (runs on http://localhost:3000)
npm run dev

# 4. Build for production
npm run build

# 5. Start production server
npm start

# 6. Lint
npm run lint
```

---

## 🌐 Environment & Deployment

- **Hosting:** Vercel (`.vercel` directory present)
- **EmailJS:** Credentials are hardcoded in `ContactSection.jsx` (public-key only, safe for client-side)
- **Images:** All images stored in `public/images/` (gitignored: `uploads/` only)
- **Resume/CV:** `public/Resume.pdf` and `public/CV.pdf` (publicly accessible)
- **No `.env` file required** for basic functionality

---

## 📋 .gitignore Coverage

| Category | Ignored Entries |
|---|---|
| Node | `node_modules/`, `npm-debug.log*`, `yarn-*.log` |
| Environment | `.env`, `.env.*.local`, `.env.local`, `.env.development`, `.env.production`, `.env.test` |
| Build Outputs | `.next/`, `out/`, `dist/`, `build/`, `.vite/` |
| Logs | `logs/`, `*.log`, `*.pid`, `*.seed` |
| macOS | `.DS_Store` |
| Editors | `.vscode/`, `.idea/`, `*.sublime-*` |
| OS | `Thumbs.db` |
| Uploads | `uploads/`, `shared/uploads/` |
| TypeScript | `*.tsbuildinfo` |
| Vercel | `.vercel` |
| Local overrides | `.local.env` |

---

## 🤖 Context for AI Tools & Senior Devs

> **This section is specifically for AI coding assistants (GitHub Copilot, Cursor, Claude, Gemini, etc.) and senior developers onboarding to this codebase.**

### Architecture Decisions

1. **No shared component library for primitives** — `ScanlineOverlay`, `CornerAccent`, `WindowChrome`, and `Cursor` are intentionally re-declared locally in each section file. This keeps each section 100% self-contained and independently deployable/removable without import chain concerns.

2. **CSS Variables over Tailwind values** — All theming is done via CSS custom properties. Tailwind is used for layout utilities (flex, grid, padding, margin) but all colors reference `var(--*)` directly via `style={{}}` prop inline styles, not Tailwind color classes. This is intentional for the dual theme system.

3. **`'use client'` on everything** — All section and UI components are client components. There is no server-side data fetching; all data is hardcoded in-file as JavaScript constants at the top of each file.

4. **Tailwind + Inline styles hybrid** — Structural/layout classes use Tailwind, visual/themed properties use inline `style={{}}` with CSS variables. Do NOT remove inline styles — they are load-bearing for theming.

5. **Light mode via `.light` class on `<html>`** — NOT via `prefers-color-scheme`. The class is controlled by `ThemeProvider.jsx`. To add light-mode overrides, use `html.light .your-class { }` in `globals.css`.

### Adding a New Section

1. Create `components/sections/NewSection.jsx` — copy `ScanlineOverlay`, `CornerAccent`, `WindowChrome` primitives locally.
2. Add `id="your-id"` to the root `<section>`.
3. Add the nav link in `Navbar.jsx` `navLinks` array.
4. Import and add to `app/page.jsx`.
5. All colors should reference CSS variables — never hardcode hex values in components.

### Modifying Colors

- **ALL theme color changes go in `app/globals.css` only.**
- Dark mode → edit `:root { }`
- Light mode → edit `html.light { }`
- Never hardcode colors in component files (exception: macOS traffic light dots `#ff5f56`, `#ffbd2e`, `#27c93f` — these are intentionally always fixed).

### Known Patterns

- `glitch` state: `const [glitch, setGlitch] = useState(false)` + `setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 5000–9000)` — Used in Navbar logo, About heading, Skills heading, Footer name.
- `card-hover` utility: Defined in `globals.css` — adds accent border + glow on hover. Apply as `className="card-hover"`.
- `section-py` utility: Consistent vertical padding for sections — `pt-20 md:pt-28`.
- Animated counters always use `IntersectionObserver` to trigger only on scroll-into-view.
- The `About.css` file is a standalone scoped CSS file for extra About section styles — imported directly in `AboutSections.jsx`.

---

<div align="center">

```
$ portfolio --status
→ OPERATIONAL
→ VERSION: 1.0.0
→ DEVELOPER: PRAYAG_SAHU
→ BUILT_WITH: Next.js + React + Tailwind + Motion
→ LAST_UPDATED: 2026
█
```

**Built with passion & clean architecture — Prayag Sahu**

</div>
