# Quick Start Guide

## Installation

The project requires Node.js 18+ and npm/pnpm.

### Option 1: Using npm (recommended if pnpm not installed)

```bash
npm install --legacy-peer-deps
npm run dev
```

### Option 2: Using pnpm (if installed)

```bash
pnpm install
pnpm dev
```

## Troubleshooting

### If you get "next is not recognized"
- Make sure you've run `npm install` or `pnpm install` first
- Dependencies need to be installed before running dev server

### If you get dependency conflicts
- Use `npm install --legacy-peer-deps` flag
- Or update to Node.js 18+ if using older version

### If installation takes a long time
- This is normal - Next.js and dependencies are large
- Be patient, first install can take 2-5 minutes
- Ensure stable internet connection

## After Installation

Once dependencies are installed, you can:

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Note on Next.js Version

If Next.js 16 is not available, the package.json uses Next.js 15.1.0 which is fully compatible with all features in this project.
