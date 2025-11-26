# Data Management

## Static Data Files

All static data is stored in the `src/data/` directory as JavaScript files that export arrays or objects.

---

## CRM Data Files

### `crmData.js`
**Purpose**: Product data and details for CRM software

**Structure**:
```javascript
{
  id: Number,
  name: String,
  image: String,              // Path to product image
  alt: String,                // Alt text for image
  expertScore: Number,        // Rating (typically 0-5)
  bestFor: String,            // Best use case description
  visitUrl: String,           // URL slug for vendor
  keyFeatures: Array<String>, // List of main features
  freeTrial: Boolean,         // Has free trial
  freeVersion: Boolean        // Has free version
}
```

**Example**:
```javascript
{
  id: 1,
  name: "HubSpot Sales Hub",
  image: "/images/hub.png",
  alt: "HubSpot Sales Hub",
  expertScore: 4.5,
  bestFor: "Best for integrations",
  visitUrl: "hubspot",
  keyFeatures: [
    "AI-driven lead scoring",
    "Bidirectional scoring",
    "Pipeline management"
  ],
  freeTrial: true,
  freeVersion: true
}
```

---

### `crmProducts.js`
**Purpose**: Product listings and summaries

**Usage**: Used for product grids and lists

---

### `crmSystems.js`
**Purpose**: System information and specifications

**Usage**: Detailed system comparisons

---

### `crmContents.js`
**Purpose**: Content data for CRM pages

**Usage**: Text content, descriptions, articles

---

### `crmArticles.js`
**Purpose**: Article data for CRM-related content

**Usage**: Blog posts, guides, tutorials

---

### `crmFaqData.js`
**Purpose**: Frequently Asked Questions data

**Structure**:
```javascript
{
  question: String,
  answer: String | Array<String>  // Can be string or array of strings
}
```

**Example**:
```javascript
{
  question: "What is CRM software?",
  answer: "CRM (Customer Relationship Management) software helps businesses manage customer interactions, track sales, and improve customer relationships."
}

// Or with array answer:
{
  question: "What features should I look for?",
  answer: [
    "Contact management",
    "Sales pipeline tracking",
    "Email integration",
    "Reporting and analytics"
  ]
}
```

---

### `crmTestimonials.js`
**Purpose**: Customer testimonials and reviews

**Usage**: Social proof on CRM pages

---

## Whitepaper Data

### Location: `components/whitepaperData.js`

**Purpose**: Whitepaper metadata for resource library

**Structure** (typical):
```javascript
{
  slug: String,              // URL-friendly identifier
  title: String,             // Whitepaper title
  description: String,       // Summary or excerpt
  pdfPath: String,           // Path to PDF file
  image: String,             // Preview image
  category: String,          // Category/topic
  date: String,              // Publication date
  downloadCount: Number      // Popularity metric
}
```

**Usage**: 
- Whitepaper listing page (`/Resources/Whitepaper`)
- Dynamic whitepaper detail pages (`/Resources/Whitepaper/[slug]`)

---

## Data Access Patterns

### Importing Data
```javascript
import crmData from '@/data/crmData';
import { faqData } from '@/data/crmFaqData';
```

### Using in Components
```javascript
'use client';

import crmData from '@/data/crmData';

const ProductList = () => {
  return (
    <div>
      {crmData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### Using in Server Components
```javascript
// No 'use client' needed
import crmData from '@/data/crmData';

export default function ProductsPage() {
  return (
    <div>
      {crmData.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

---

## Data Validation

### Type Checking
Currently using JavaScript (not TypeScript), so:
- Manual validation recommended
- Use consistent structure across similar data files
- Document expected structure in comments

### Example with Validation
```javascript
const validateProduct = (product) => {
  if (!product.id || !product.name) {
    console.error('Invalid product data');
    return false;
  }
  return true;
};
```

---

## Data Updates

### Adding New Products
1. Open relevant data file (e.g., `crmData.js`)
2. Add new object following existing structure
3. Ensure all required fields are present
4. Test on relevant pages

### Modifying Existing Data
1. Locate object in data file
2. Update required fields
3. Ensure consistency with other entries
4. Test affected pages

### Best Practices
- Keep data files organized
- Use consistent naming conventions
- Add comments for complex structures
- Version control all data changes

---

## Future Enhancements

### Potential Improvements
- [ ] Move to JSON files for easier editing
- [ ] Add TypeScript types for data structures
- [ ] Implement data validation layer
- [ ] Create admin interface for data management
- [ ] Add API endpoints for dynamic data
- [ ] Implement content management system (CMS)

---

## Data File Locations

```
src/
├── data/
│   ├── crmData.js
│   ├── crmProducts.js
│   ├── crmSystems.js
│   ├── crmContents.js
│   ├── crmArticles.js
│   ├── crmFaqData.js
│   └── crmTestimonials.js
└── components/
    └── whitepaperData.js
```

---

**Previous**: [Page Structure](./04-pages.md) | **Next**: [Styling Guide](./06-styling.md)





