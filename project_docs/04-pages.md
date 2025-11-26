# Page Structure

## Route Organization

Next.js App Router uses file-based routing where folders in `app/` directory become routes.

---

## Main Category Routes

### Marketing Routes (`/Marketing/`)

- `/Marketing/best-crm-software` - CRM software comparisons
- `/Marketing/best-email-marketing-services` - Email marketing tools
- `/Marketing/best-website-building-platform` - Website builder comparisons
- `/Marketing-solutions` - General marketing solutions page

**Purpose**: Help businesses find marketing tools and services

---

### Sales Routes (`/Sales/`)

- `/Sales/best-crm-software` - Sales-focused CRM comparisons
- `/Sales/best-call-center-management-software` - Call center solutions
- `/Sales/best-project-management-software` - Project management tools

**Purpose**: Assist with sales team tools and customer engagement solutions

---

### Technology Routes (`/Technology/`)

- `/Technology/best-employee-management-software` - HR and employee management
- `/Technology/best-payroll-system` - Payroll solutions
- `/Technology/Business-phone-systems` - Business phone system comparisons
- `/Technology/gps-fleet-management-software` - GPS fleet tracking
- `/Technology/gps-fleet-management-software/get-free-quotes` - Quote request page
- `/Technology` - Technology category overview

**Purpose**: Help businesses with operational technology solutions

---

### Resources Routes (`/Resources/`)

- `/Resources/Blogs` - Blog articles and posts
- `/Resources/Whitepaper` - Whitepaper library listing
- `/Resources/Whitepaper/[slug]` - Dynamic whitepaper detail pages

**Purpose**: Educational content and resources for businesses

**Note**: `[slug]` indicates dynamic routing - pages are generated based on whitepaper data

---

### Contact Routes (`/Contact-us/`)

- `/Contact-us/Contact` - Main contact form page
- `/Contact-us/About-us` - About the company
- `/Contact-us/Careers` - Career opportunities

**Purpose**: User engagement and company information

---

## Business Solution Routes

### Primary Business Categories

- `/BusinessPayroll` - Payroll solutions overview
- `/BusinessPhoneSystem` - Phone system overview
- `/BusinessPlanning` - Business planning resources
- `/GPSFleetTracking` - GPS fleet tracking overview
- `/HumanResources` - HR solutions overview
- `/StartABusiness` - Resources for starting a business

**Purpose**: Category landing pages for specific business needs

---

## Legal & Policy Routes

### Compliance Pages

- `/PrivacyPolicy` - Privacy policy and data handling
- `/TermsOfUse` - Terms of service
- `/CopyrightPolicy` - Copyright information
- `/DonotSellMyInfo` - CCPA compliance option
- `/LimitTheUse` - Usage restrictions
- `/Accessibility` - Accessibility statement
- `/AdvertisingDisclosure` - Advertising and affiliate disclosure
- `/EditorialProcess` - Editorial guidelines and process
- `/Advertise` - Advertising information

**Purpose**: Legal compliance, transparency, and user rights

---

## Homepage

### Route: `/` (`app/page.jsx`)

**Content Sections** (typical homepage structure):
- Hero section with main value proposition
- Featured categories or comparisons
- Testimonials or social proof
- Newsletter subscription form
- Call-to-action sections
- Latest blog posts or resources

---

## Page Patterns

### Comparison Pages

**Typical Structure**:
1. **Hero Section** - Title, description, key benefits
2. **Table of Contents** - Navigation for long content (if applicable)
3. **Introduction Section** - Overview and context
4. **Product Comparison Section** - Side-by-side comparisons
5. **Key Features Section** - Important features highlighted
6. **How to Choose Section** - Selection guide
7. **FAQ Section** - Common questions answered
8. **Lead Generation Form** - Capture business inquiries
9. **Recommendations Section** - Expert picks
10. **Related Content** - Links to related pages

**Example Pages**: 
- `/Marketing/best-crm-software`
- `/Sales/best-project-management-software`
- `/Technology/best-payroll-system`

---

### Content Pages

**Structure**:
- Simple header with title
- Content sections
- Consistent footer/navigation
- No complex forms or comparisons

**Example Pages**:
- `/Contact-us/About-us`
- `/PrivacyPolicy`
- `/StartABusiness`

---

### Dynamic Pages

**Structure**:
- Content loaded from data files
- Dynamic routing with `[slug]` or `[id]`
- Metadata generated dynamically

**Example Pages**:
- `/Resources/Whitepaper/[slug]` - Dynamic whitepaper pages
- Content loaded from `whitepaperData.js`

**Implementation**:
```javascript
// app/Resources/Whitepaper/[slug]/page.jsx
export async function generateStaticParams() {
  // Generate static params from data
}

export async function generateMetadata({ params }) {
  // Generate metadata from data
}
```

---

## Route File Structure

### Static Route
```
app/
  Marketing/
    best-crm-software/
      page.jsx
```

### Nested Route
```
app/
  Contact-us/
    Contact/
      page.jsx
    About-us/
      page.jsx
```

### Dynamic Route
```
app/
  Resources/
    Whitepaper/
      [slug]/
        page.jsx
      page.jsx
```

---

## Page Metadata

### Root Layout Metadata
Defined in `app/layout.js`:
- Site-wide title and description
- Favicon configuration
- Font loading

### Page-Level Metadata
Can be added per page using Next.js metadata API:
```javascript
export const metadata = {
  title: "Page Title",
  description: "Page description",
};
```

---

## Navigation Structure

### Main Navigation (Navbar)
- Home
- Marketing (dropdown)
- Sales (dropdown)
- Technology (dropdown)
- Resources (dropdown)
- Contact Us (dropdown)

### Footer Navigation
- Quick links to categories
- Legal pages
- Contact information
- Social links

---

## URL Conventions

### Naming Patterns
- **kebab-case**: `/best-crm-software`
- **PascalCase folders**: `/Contact-us/` (route becomes lowercase)
- **Descriptive**: Clear, keyword-rich URLs for SEO

### SEO Considerations
- URLs include relevant keywords
- Short, descriptive paths
- Consistent structure across categories

---

**Previous**: [Component Structure](./03-components.md) | **Next**: [Data Management](./05-data.md)



