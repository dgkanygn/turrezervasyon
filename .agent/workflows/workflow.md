---
description: Complete these setup steps in order.
---

## Tailwind CSS Setup

### Installation
```bash
npm install tailwindcss @tailwindcss/vite
```

### Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### CSS Entry Point
```css
/* /src/index.css */
@import "tailwindcss";
```

## Required Packages

Install in the following order:
```bash
npm install react-router-dom
npm install react-icons
npm install react-hot-toast
```