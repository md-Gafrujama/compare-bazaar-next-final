# Styling Guide

## Tailwind CSS

Tailwind CSS 4.x is the primary styling framework used throughout the project.

### Why Tailwind?
- **Utility-first approach**: Style directly in JSX
- **Rapid development**: No context switching
- **Consistent design**: Predefined spacing, colors, etc.
- **Small bundle size**: Only used utilities are included
- **Responsive design**: Built-in breakpoint system

---

## Custom CSS Files

### Location: `src/styles/`

#### `Home.css`
- Homepage-specific styles
- Custom animations or effects
- Overrides for homepage components

#### `Navbar.css`
- Navigation-specific styles
- Dropdown menu styling
- Mobile menu styles
- Scroll effects

#### `Dropdown.css`
- Dropdown component styling
- Menu positioning
- Animation effects

### Usage
```javascript
import '../styles/Navbar.css';
import '../styles/Home.css';
```

---

## Design System

### Colors

#### Primary Color
- **Dark Blue**: `#000e54`
- Used for: Headers, CTAs, primary buttons, links

#### Color Usage
```javascript
// In Tailwind classes
className="bg-[#000e54] text-white"
className="text-[#000e54]"

// Or define in tailwind.config if needed
```

#### Tailwind Default Palette
- Use standard Tailwind colors: `bg-blue-500`, `text-gray-800`, etc.
- Semantic colors: `bg-white`, `bg-gray-100`, etc.

---

### Typography

#### Font Family
- **Quicksand** (Google Fonts)
- Weights: 400, 500, 600, 700
- Applied globally via CSS variable: `--font-quicksand`

#### Font Configuration
Located in `app/layout.js`:
```javascript
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});
```

#### Usage in CSS
```css
body {
  font-family: var(--font-quicksand);
}
```

#### Typography Classes
```javascript
// Font weights
className="font-normal"  // 400
className="font-medium"  // 500
className="font-semibold" // 600
className="font-bold"    // 700

// Font sizes
className="text-sm"      // 0.875rem
className="text-base"    // 1rem
className="text-lg"      // 1.125rem
className="text-xl"      // 1.25rem
className="text-2xl"     // 1.5rem
className="text-3xl"     // 1.875rem
className="text-4xl"     // 2.25rem
```

---

## Responsive Breakpoints

Tailwind's default breakpoint system:

| Prefix | Min Width | Description |
|--------|-----------|-------------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

### Usage Examples
```javascript
// Mobile-first approach
<div className="
  text-sm          // Mobile: small text
  md:text-base     // Tablet+: base text
  lg:text-lg       // Desktop+: large text
">
  Content
</div>

// Grid layouts
<div className="
  grid
  grid-cols-1      // Mobile: 1 column
  md:grid-cols-2   // Tablet+: 2 columns
  lg:grid-cols-3   // Desktop+: 3 columns
">
  Items
</div>
```

---

## Common Patterns

### Container Patterns

#### Max Width Container
```javascript
className="max-w-6xl mx-auto"
```
- Centers content
- Max width: 72rem (1152px)
- Horizontal margin auto

#### Full Width with Padding
```javascript
className="w-full px-4 py-8"
className="w-full px-4 py-8 md:px-8 lg:px-16"
```

---

### Spacing

#### Padding
```javascript
className="p-4"        // All sides
className="px-4 py-8"  // Horizontal, vertical
className="pt-4 pb-8"  // Top, bottom
```

#### Margin
```javascript
className="m-4"        // All sides
className="mx-auto"    // Horizontal auto (centering)
className="mb-8"       // Bottom margin
```

---

### Rounded Corners
```javascript
className="rounded"      // 0.25rem
className="rounded-lg"   // 0.5rem
className="rounded-xl"   // 0.75rem
className="rounded-2xl"  // 1rem
className="rounded-full" // Full circle
```

---

### Shadows
```javascript
className="shadow-sm"    // Small shadow
className="shadow"       // Default shadow
className="shadow-md"    // Medium shadow
className="shadow-lg"    // Large shadow
className="shadow-xl"    // Extra large shadow
```

---

### Flexbox Patterns
```javascript
// Flex container
className="flex flex-col"           // Column layout
className="flex flex-row"           // Row layout
className="flex items-center"       // Vertical center
className="flex justify-between"    // Space between
className="flex gap-4"              // Gap between items

// Responsive flex
className="flex-col md:flex-row"    // Column on mobile, row on desktop
```

---

### Grid Patterns
```javascript
// Basic grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Auto-fit grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
```

---

## Component-Specific Styling

### Buttons
```javascript
// Primary button
<button className="
  bg-[#000e54] 
  text-white 
  px-6 py-3 
  rounded-lg 
  font-semibold
  hover:bg-[#001a7a]
  transition-colors
">
  Click Me
</button>

// Secondary button
<button className="
  bg-white 
  text-[#000e54] 
  border-2 
  border-[#000e54]
  px-6 py-3 
  rounded-lg 
  font-semibold
  hover:bg-gray-50
">
  Click Me
</button>
```

---

### Cards
```javascript
<div className="
  bg-white 
  rounded-xl 
  shadow-lg 
  p-6 
  hover:shadow-xl 
  transition-shadow
">
  Card Content
</div>
```

---

### Forms
```javascript
<input className="
  w-full 
  px-4 py-2 
  border 
  border-gray-300 
  rounded-lg 
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#000e54]
" />

<textarea className="
  w-full 
  px-4 py-2 
  border 
  border-gray-300 
  rounded-lg 
  resize-none
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#000e54]
" />
```

---

## Dark Mode (Future)

Currently not implemented, but can be added:

```javascript
// In tailwind.config.js
darkMode: 'class',

// Usage
className="bg-white dark:bg-gray-800"
```

---

## Custom Utilities

### Creating Custom Classes
If needed, add to `globals.css`:

```css
@layer utilities {
  .custom-gradient {
    background: linear-gradient(to right, #000e54, #001a7a);
  }
}
```

---

## Performance Tips

1. **Use Tailwind's purge**: Automatically removes unused CSS
2. **Avoid inline styles**: Use Tailwind classes instead
3. **Extract repeated patterns**: Create reusable components
4. **Optimize images**: Use Next.js Image component
5. **Lazy load styles**: CSS is automatically optimized by Next.js

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Last 2 versions typically supported
- Tailwind CSS handles vendor prefixes automatically

---

**Previous**: [Data Management](./05-data.md) | **Next**: [API Integration](./07-api.md)



