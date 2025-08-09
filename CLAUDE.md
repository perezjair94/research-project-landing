# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for a research project landing page, bootstrapped with `create-next-app` using TypeScript and Tailwind CSS v4. The project follows the modern Next.js App Router pattern.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Project Structure
- `app/` - Next.js App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global CSS
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles with CSS variables for theming
- `public/` - Static assets (SVG icons, images)
- Configuration files in project root

### Key Technologies
- **Next.js 15** with App Router
- **React 19.1.0** 
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with PostCSS integration
- **Geist fonts** (Sans and Mono variants from next/font/google)

### Styling System
- Uses CSS variables for theming (`--background`, `--foreground`)
- Tailwind CSS v4 with `@theme inline` configuration
- Dark mode support via `prefers-color-scheme: dark`
- Custom font variables: `--font-geist-sans`, `--font-geist-mono`

### TypeScript Configuration
- Path aliases: `@/*` maps to project root
- Strict type checking enabled
- Next.js plugin for enhanced TypeScript support

## Code Patterns

### Component Structure
- Functional components with TypeScript
- Default exports for page components
- Proper typing with React.ReactNode for children props

### Styling Conventions
- Tailwind utility classes for styling
- CSS variables for consistent theming
- Responsive design with sm: breakpoint modifiers
- Dark mode classes (dark:) for theme variations