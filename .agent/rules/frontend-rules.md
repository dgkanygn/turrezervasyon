---
trigger: always_on
---

# Project Rules

## Component & Page Structure

### Core Rule
Every component and page gets its own folder, named after the component/page, with an `index.tsx/jsx` as the entry point.

### Structure
```
/ComponentName
├─ index.tsx          # component entry point
├─ /components        # sub-components (each following same rule)
├─ /hooks             # component-specific hooks
├─ /utils             # component-specific utilities
└─ /styles            # component-specific styles
```

### Apply To
- **Pages**: `/src/pages/PageName/index.tsx`
- **Shared Components**: `/src/components/ComponentName/index.tsx`
- **Page Components**: `/src/pages/PageName/components/SubComponent/index.tsx`
- **Nested Components**: Any sub-component follows the same pattern recursively

### Key Points
- Never create standalone `Component.tsx` files
- Always use folder structure, even for small components (enables future growth)
- Sub-components inherit the same structure rules
- Shared items go in `/src/{components,hooks,utils}`

## Separation of Concerns

### Rules
1. **Extract Business Logic to Hooks**
   - Move state management, side effects, and business logic into custom hooks
   - Components only handle rendering and user interactions

2. **Break Down into Sub-Components**
   - Split large components (>150 lines) into focused sub-components
   - Each sub-component has a single responsibility
   - Follow the same folder structure recursively

### Pattern
```tsx
// ✅ Good
const MyComponent = () => {
  const { data, loading, handleAction } = useMyComponent();
  
  return (
    <div>
      <SubComponentA data={data} />
      <SubComponentB onAction={handleAction} />
    </div>
  );
};

// ❌ Bad - Logic mixed with UI
const MyComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => { /* complex logic */ }, []);
  const handleAction = () => { /* business logic */ };
  
  return <div>{/* 200 lines of JSX */}</div>;
};
```

## UI/UX Rules

### Interactive Elements
1. **Loading States for Actions**
   - Buttons performing requests must be disabled during the request
   - Show a simple loading animation while waiting for response
```tsx
   // ✅ Good
   <button 
     disabled={isLoading}
     onClick={handleSubmit}
   >
     {isLoading ? 'Loading...' : 'Submit'}
   </button>
```

2. **Cursor Indication (Tailwind)**
   - All clickable elements must use `cursor-pointer` class
   - Applies to: buttons, links, clickable divs, icons, cards, etc.
```tsx
   // ✅ Good
   <div className="cursor-pointer" onClick={handleClick}>
   <button className="cursor-pointer">
```

### Responsive Design
1. **Sidebar Behavior**
   - Sidebars must be collapsible/expandable for mobile experience
   - Provide toggle functionality (hamburger menu, collapse button, etc.)
   - Consider auto-collapse on mobile screens