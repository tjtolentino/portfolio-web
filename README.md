# Thristan "TJ" Jericho Tolentino — Portfolio Website

[![Runtime](https://img.shields.io/badge/Runtime-Bun%20v1.4+-black?logo=bun)](https://bun.com)
[![Styling](https://img.shields.io/badge/Styling-SCSS%20%2B%20Tailwind%20CSS-blue?logo=sass)](https://sass-lang.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-ESNext-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Status-Active%20Development-success)](#)

Personal portfolio web application for **Thristan Jericho Tolentino** — Infrastructure Administrator & Full Stack Developer. This site showcases professional background, technical competencies, featured projects, and direct contact channels in a clean, modern, and responsive interface.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [CSS Compilation & Watching](#css-compilation--watching)
  - [CSS Validation](#css-validation)
  - [Serving Locally](#serving-locally)
- [Workflow & Helper Scripts](#workflow--helper-scripts)
- [Cross-Browser Compatibility](#cross-browser-compatibility)
- [Contact](#contact)

---

## Overview

Designed with clean typography, responsive layouts, and modern design aesthetics, this portfolio bridges the worlds of cloud infrastructure, systems administration, and end-to-end web engineering.

- **Developer**: Thristan Jericho Tolentino
- **Role**: Infrastructure Administrator / Full Stack Developer
- **Location**: Quezon City, Philippines

---

## Key Features

- **Floating Glassmorphic Header**: Sticky top navigation with backdrop-blur frosted glass effect, profile avatar, identity branding, and social shortcuts.
- **Section Background Watermarks**: Oversized contextual typography layered smoothly behind each section for a contemporary aesthetic.
- **Responsive Skills Matrix**: Structured CSS grid highlighting skills across frontend, backend, DevOps, database management, and server administration.
- **Projects Showcase**: Section highlighting project achievements, development work, and real-world solutions.
- **Integrated Contact Section**: Clean contact form accompanied by direct contact links (Email, Phone, LinkedIn, GitHub).
- **Cross-Browser Engineered**: Optimized layout tested for identical layout behavior and centering across Chrome, Firefox, Safari, and Edge.

---

## Tech Stack

- **Markup & Logic**: HTML5, Modern JavaScript / TypeScript (`index.ts`, `tsconfig.json`)
- **Runtime & Package Manager**: [Bun](https://bun.com)
- **CSS Preprocessor**: [Dart Sass](https://sass-lang.com) (modular SCSS architecture)
- **Utility CSS**: [Tailwind CSS v4](https://tailwindcss.com) (in-browser compilation engine)
- **Icons**: [Font Awesome 6](https://fontawesome.com)
- **Reset**: Custom CSS Reset (`css/reset.css`)

---

## Project Structure

```text
portfolio-web/
├── .vscode/               # VS Code workspace settings
├── ai-logs/               # Development logs, implementation plans, and walkthroughs
├── css/
│   ├── main.css           # Compiled CSS output
│   ├── main.css.map       # Source map (when enabled)
│   └── reset.css          # Global CSS reset stylesheet
├── images/
│   └── picture.jpg        # Profile picture & media assets
├── scripts/
│   ├── script.js          # Client-side JavaScript
│   └── validate.js        # CSS rule-by-rule parity validation script
├── scss/
│   ├── _about.scss        # About section styles
│   ├── _base.scss         # Global base styles & variables
│   ├── _contact.scss      # Contact section & form styles
│   ├── _header.scss       # Header, navigation, & contact list styles
│   ├── _projects.scss     # Projects section styles
│   ├── _sections.scss     # Section container layout & watermark titles
│   ├── _skills.scss       # Skills grid card layout
│   └── main.scss          # Primary SCSS entry point (aggregates modules)
├── index.html             # Primary single-page portfolio layout
├── index.ts               # Bun TypeScript entry point
├── package.json           # Project metadata, scripts, and dependencies
├── bun.lock               # Bun dependency lockfile
├── tsconfig.json          # TypeScript configuration
├── sass-start.cmd         # Windows batch runner for Sass watch & compress
├── git-save.cmd           # Windows batch runner for Git add, commit, and push
└── README.md              # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed:

```bash
# Verify Bun installation
bun --version
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/tjtolentino/portfolio-web.git
cd portfolio-web
bun install
```

### CSS Compilation & Watching

The stylesheet architecture uses SCSS partials compiled into `css/main.css`.

- **One-time Build**:
  ```bash
  bun run build:css
  ```

- **Live Watch Mode**:
  ```bash
  bun run watch:css
  ```

- **Quick Batch Launcher (Windows)**:
  Run `sass-start.cmd` directly to watch and compress SCSS on the fly:
  ```cmd
  sass-start.cmd
  ```

### CSS Validation

To compare and validate compiled CSS rule declarations against original references:

```bash
bun run validate:css
```

### Serving Locally

Open `index.html` in your browser or run a lightweight local static server:

```bash
# Using Bun to run a local dev server (or Live Server in VS Code)
bun x serve .
```

Then visit `http://localhost:3000` (or the port indicated in your console).

---

## Workflow & Helper Scripts

Convenience scripts are provided in the repository root for streamlined development on Windows:

| Script / Command | Description |
|---|---|
| `sass-start.cmd` | Starts `bun x sass --watch scss\main.scss css\main.css --style=compressed` in an active terminal window. |
| `git-save.cmd "<message>"` | Stages all modified files (`git add .`), creates a commit with the provided message, and pushes to remote `origin`. |
| `bun run build:css` | Compiles `scss/main.scss` into `css/main.css` without source maps. |
| `bun run watch:css` | Monitors changes to all `.scss` files and auto-compiles to `css/main.css`. |
| `bun run validate:css` | Executes `scripts/validate.js` to run normalization and rule-by-rule CSS verification. |

---

## Cross-Browser Compatibility

The site has been audited and validated across modern browser engines:
- **Chrome / Chromium**: Standard grid/flex alignments and smooth transitions.
- **Firefox**: Centered main section wrappers (`display: grid; place-items: center; margin-inline: auto;`).
- **Safari**: Sticky navigation header with `-webkit-backdrop-filter: blur(12px)` for glassmorphism styling.
- **Edge**: Full feature parity with Chromium rendering.

---

## Contact

- **Name**: Thristan "TJ" Jericho Tolentino
- **Email**: [tj@tolentino.email](mailto:tj@tolentino.email)
- **LinkedIn**: [@thristanjericho](https://linkedin.com/in/thristanjericho/)
- **GitHub**: [@tjtolentino](https://github.com/tjtolentino)
- **Location**: Quezon City, Philippines
