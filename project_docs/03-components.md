# Component Structure

## Core Layout Components

### Navbar (`components/Navbar.jsx`)

**Purpose**: Main site navigation with dropdown menus

**Features**:
- Responsive mobile menu
- Dropdown navigation for categories
- Scroll effects (changes on scroll)
- Active state management
- Click outside to close functionality

**Dependencies**: 
- `Dropdown.jsx` component
- `Navbar.css` for styling
- Next.js `Link` for navigation

**Key Functionality**:
- Mobile/desktop responsive behavior
- Dropdown menu state management
- Active route highlighting

---

### Footer (`components/Footer.jsx`)

**Purpose**: Site footer with links and information

**Sections**:
- Quick links to main categories
- Contact information
- Legal pages (Privacy, Terms, etc.)
- Social media links (if applicable)
- Copyright information

---

### WideDiv (`components/WideDiv.jsx`)

**Purpose**: Appears across all pages (CTA or promotional banner)

**Usage**: Likely contains call-to-action or promotional content that appears site-wide

---

## Feature Components

### CRM Components (`components/CRM/`)

Specialized components for CRM comparison pages:

#### `CRMHeroSection.jsx`
- Hero section with title and description
- Visual elements and CTAs
- Used at top of CRM pages

#### `CRMProductCard.jsx`
- Individual product display card
- Shows product image, name, score
- Links to product details

#### `CRMProductListSection.jsx`
- Grid/list of product cards
- Sorting and filtering (if applicable)
- Product comparison view

#### `CRMComparison.jsx`
- Comparison table/matrix
- Side-by-side feature comparison
- Score visualization

#### `CRMKeyFeaturesSection.jsx`
- Highlights key features
- Feature descriptions
- Visual representations

#### `CRMHowToChooseSection.jsx`
- Selection guide for users
- Decision-making criteria
- Recommendations

#### `CRMWhatIsSection.jsx`
- Definition and explanation
- Educational content
- Core functionality overview

#### `CRMRecommendationsSection.jsx`
- Expert recommendations
- Best for scenarios
- Use case matching

#### `CRMToolsDetailSection.jsx`
- Detailed tool information
- Deep dive into features
- Technical specifications

#### `CRMFindNewSoftwareSection.jsx`
- Software discovery interface
- Search functionality
- Category filtering

---

### Form Components

#### `CRMForm.jsx`
- CRM lead generation form
- Collects business information
- Redirects to vendor pages

#### `EmailMarketingForm.jsx`
- Email marketing tool inquiry form
- Lead capture for email services

#### `CallCenterForm.jsx`
- Call center software inquiry form
- Business contact information

#### `BusinessPhoneSystemForm.jsx`
- Business phone system lead form
- Phone requirements collection

#### `PayrollForm.jsx`
- Payroll system inquiry form
- Employee count and needs

#### `GPSFleetForm.jsx`
- GPS fleet tracking inquiry form
- Fleet size and requirements

#### `Employeeform.jsx`
- Employee management inquiry form
- HR software needs

#### `WebsiteBuildingForm.jsx`
- Website builder inquiry form
- Website requirements

#### `WhitePaperForm.jsx`
- Whitepaper download form
- Gated content access
- Email delivery

**Common Form Pattern**:
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  // ... other fields
});
const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);
```

---

### Content Components

#### `PhoneSystemContent.jsx`
- Phone system article content
- Comparison information
- Feature explanations

#### `EmailMarketingContent.jsx`
- Email marketing service content
- Service comparisons
- Best practices

#### `CallCenterContent.jsx`
- Call center software content
- Feature overview
- Selection guide

#### `GPSFleetContent.jsx`
- GPS fleet tracking content
- Solution comparisons
- Implementation guide

#### `ProjectManagementContent.jsx`
- Project management tool content
- Methodology support
- Feature highlights

#### `EmployeeManagementWebpage.jsx`
- Employee management content
- HR software comparisons
- Implementation tips

---

### Utility Components

#### `FAQ.jsx`
- Frequently Asked Questions component
- Accordion-style display
- Expandable answers
- Supports array or string answers

#### `TableOfContents.jsx`
- Article table of contents
- Auto-generated from headings
- Anchor links for navigation
- Sticky positioning

#### `ArticleLayoutCommon.jsx`
- Common article layout wrapper
- Consistent structure
- Shared styling

#### `Modal.jsx`
- Modal dialog component
- Overlay and close functionality
- Flexible content rendering

#### `Dropdown.jsx`
- Dropdown menu component
- Used in Navbar
- Keyboard navigation support

#### `CookieConsent.jsx`
- Cookie consent banner
- GDPR compliance
- User preference storage

#### `WhitepaperCard.jsx`
- Whitepaper card display
- Preview information
- Download CTA

#### `WhitepaperDetail.jsx`
- Whitepaper detail view
- Full content display
- Form integration

---

## Component Patterns

### Client Components

**When to use**: Interactive features requiring client-side JavaScript

**Directive**: `'use client'` at top of file

**Use cases**:
- Form handling and validation
- State management with hooks
- Animations and interactions
- Event handlers
- Browser APIs (localStorage, etc.)

**Example**:
```javascript
'use client';

import { useState } from 'react';

const InteractiveComponent = () => {
  const [state, setState] = useState(null);
  // ... component logic
};
```

---

### Server Components

**When to use**: Static content, data fetching, SEO-optimized content

**Default behavior**: No directive needed

**Use cases**:
- Static page rendering
- Data fetching
- Metadata generation
- SEO optimization
- No interactivity needed

**Example**:
```javascript
// No 'use client' directive
const StaticComponent = ({ data }) => {
  return <div>{data}</div>;
};
```

---

## Component Organization Best Practices

1. **Single Responsibility**: Each component has one clear purpose
2. **Props Interface**: Define clear prop types and defaults
3. **Reusability**: Extract common patterns into reusable components
4. **Naming**: Use descriptive, PascalCase names
5. **Location**: Place components near where they're used, or in shared folder if reused
6. **Documentation**: Comment complex logic within components

---

**Previous**: [Architecture](./02-architecture.md) | **Next**: [Page Structure](./04-pages.md)



