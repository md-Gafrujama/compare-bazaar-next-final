# Architecture

## File Structure

```
compare-bazaar-next-final/
├── public/                    # Static assets
│   ├── images/               # All image assets
│   └── [favicons]            # Favicon files
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.js        # Root layout with metadata
│   │   ├── page.jsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   └── [routes]/        # Route-specific pages
│   ├── components/           # React components
│   │   ├── CRM/            # CRM-specific components
│   │   └── [components]    # Reusable components
│   ├── data/                # Static data files
│   ├── assets/              # Project assets
│   └── styles/              # CSS module files
├── project_docs/            # Project documentation
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
└── README.md                # Main README
```

## Architecture Patterns

### 1. App Router Structure

The project uses Next.js 15 App Router, which provides:

- **Server Components by Default**: Better performance and SEO
- **Client Components When Needed**: For interactivity with `'use client'` directive
- **Route-based File System**: Files in `app/` directory become routes
- **Metadata API**: Built-in SEO support per route

### 2. Component Organization

#### Page Components
- Located in `app/[route]/page.jsx`
- Define routes and page structure
- Can be Server or Client Components

#### Reusable Components
- Located in `components/` directory
- Shared across multiple pages
- Follow single responsibility principle

#### Category-Specific Components
- Grouped in folders (e.g., `components/CRM/`)
- Domain-specific functionality
- Can be imported by page components

#### Layout Components
- **Navbar**: Site-wide navigation
- **Footer**: Site-wide footer
- **WideDiv**: Appears across all pages (CTA/banner)

### 3. Data Flow

#### Static Data
- JSON/JavaScript files in `src/data/`
- Imported directly into components
- No API calls needed for static content

#### Form Submissions
- Client-side form handling
- Direct API calls to EmailJS/Web3Forms
- No backend server required

#### State Management
- React hooks (`useState`, `useEffect`)
- Local component state
- URL state for shareable links

## Design Principles

### Separation of Concerns
- **UI Logic**: Components handle presentation
- **Data Logic**: Separate data files for content
- **Styling**: Tailwind CSS + CSS modules
- **Routing**: Handled by Next.js App Router

### Component Reusability
- Generic components for common patterns
- Props-based configuration
- Composition over inheritance

### Performance Optimization
- Server Components for static content
- Client Components only when needed
- Next.js Image optimization
- Code splitting by route

## Key Architectural Decisions

### Why Next.js App Router?
- Modern React Server Components
- Built-in SEO optimization
- Excellent developer experience
- Automatic code splitting

### Why Tailwind CSS?
- Rapid development
- Consistent design system
- Small bundle size
- Utility-first approach

### Why Static Data Files?
- No database overhead
- Faster page loads
- Easy content updates
- Version controlled content

---

**Previous**: [Overview](./01-overview.md) | **Next**: [Component Structure](./03-components.md)


