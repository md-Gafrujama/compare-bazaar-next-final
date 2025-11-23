# CRM Page Components Breakdown

The CRM page (`/app/Sales/Best-crm-software/page.jsx`) has been broken down into the following components:

## Components Created:

1. **CRMHeroSection.jsx** - Header section with title, description, and systems cards grid
2. **CRMWhatIsSection.jsx** - "What is CRM Software" section
3. **CRMRecommendationsSection.jsx** - Recommendations table with CRM data
4. **CRMFindNewSoftwareSection.jsx** - "Find your new CRM software" section with product listings
5. **CRMKeyFeaturesSection.jsx** - "Key CRM features to consider" section
6. **CRMHowToChooseSection.jsx** - "Choosing the right CRM" section

## Data Props Required:

- `systems` - Array of system objects for the hero section cards
- `crmData` - Array of CRM data for the recommendations table
- `toolsArray` - Array of tool objects for detailed tool descriptions
- `createRipple` - Function for button ripple effect
- `onCompareQuotesClick` - Function to handle modal opening
- `expandedSections` - State for expandable sections
- `toggleSection` - Function to toggle sections
- `openSections` - State for open sections
- `openItems` - State for open items
- `toggleItem` - Function to toggle items

## Usage:

Import and use these components in the main page.jsx file to replace the corresponding sections.

