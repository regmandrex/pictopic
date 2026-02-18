# Fix Installation Issues

## Current Error
`Error: Cannot find module 'styled-jsx/package.json'`

## Solution

The `styled-jsx` package is missing. Here's how to fix it:

### Option 1: Clean Install (Recommended)

1. Delete `node_modules` folder and `package-lock.json`:
   ```bash
   rmdir /s /q node_modules
   del package-lock.json
   ```

2. Reinstall all dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

### Option 2: Install Missing Package Only

```bash
npm install styled-jsx@^5.1.1 --legacy-peer-deps
```

### Option 3: If Network Issues Persist

Try using a different registry or wait and retry:
```bash
npm install styled-jsx@^5.1.1 --legacy-peer-deps --registry https://registry.npmjs.org/
```

## After Installation

Once `styled-jsx` is installed, try running:
```bash
npm run dev
```

## Note on Next.js 16

If Next.js 16.0.0 is not available (it may still be in beta/RC), you can use Next.js 15.1.6 which is fully compatible:

Change in `package.json`:
- `"next": "^15.1.6"`
- `"eslint-config-next": "^15.1.6"`

Then run `npm install --legacy-peer-deps` again.
