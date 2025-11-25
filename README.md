# Compare Bazaar

A modern, comprehensive business tools comparison platform built with Next.js. Compare Bazaar helps businesses make informed decisions by providing detailed comparisons, expert reviews, and recommendations for various business software and services.

## 🌟 Features

### Core Functionality
- **Software Comparisons**: Detailed side-by-side comparisons of business tools
- **Expert Reviews**: Comprehensive reviews with scoring and recommendations
- **Lead Generation Forms**: Integrated forms for collecting business leads
- **Resource Library**: Blogs and whitepapers for business insights
- **Contact & Support**: Multiple contact channels and career opportunities

### Comparison Categories
- **Sales & CRM**: Best CRM software comparisons
- **Marketing**: Email marketing services, website builders, marketing solutions
- **Technology**: Employee management, payroll systems, GPS fleet tracking, business phone systems
- **Project Management**: Best project management software reviews
- **Call Centers**: Call center management software comparisons

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd compare-bazaar-next-final
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
compare-bazaar-next-final/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── Marketing/          # Marketing-related pages
│   │   ├── Sales/              # Sales tools pages
│   │   ├── Technology/         # Technology solutions pages
│   │   ├── Resources/          # Blogs and whitepapers
│   │   ├── Contact-us/         # Contact pages
│   │   └── page.jsx            # Homepage
│   ├── components/             # React components
│   │   ├── CRM/               # CRM-specific components
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Footer.jsx         # Footer component
│   │   └── ...                # Other components
│   ├── data/                   # Data files and constants
│   ├── assets/                 # Static assets
│   └── styles/                 # CSS files
├── public/                     # Public static files
│   └── images/                 # Image assets
├── package.json
├── next.config.mjs
└── README.md
```

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 15.3.4 (App Router)
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4.x
- **Font**: Google Fonts (Quicksand)

### Key Dependencies
- **Icons**: 
  - Font Awesome (Free Brands & Solid icons)
  - Lucide React
- **Animations**: Framer Motion
- **Forms**: EmailJS for form submissions
- **Charts**: Recharts for data visualization
- **SEO**: Next.js built-in metadata support
- **Analytics**: Google reCAPTCHA integration

### Development Tools
- **Linting**: ESLint with Next.js config
- **Build Tool**: Next.js with Turbopack (dev mode)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production-ready application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Key Pages & Routes

### Main Categories
- `/` - Homepage with featured comparisons
- `/Marketing/best-crm-software` - CRM software comparisons
- `/Marketing/best-email-marketing-services` - Email marketing tools
- `/Sales/best-crm-software` - Sales CRM comparisons
- `/Sales/best-project-management-software` - Project management tools
- `/Technology/best-employee-management-software` - Employee management
- `/Technology/best-payroll-system` - Payroll solutions
- `/Technology/gps-fleet-management-software` - GPS fleet tracking

### Support Pages
- `/Contact-us/Contact` - Contact form
- `/Contact-us/About-us` - About page
- `/Contact-us/Careers` - Career opportunities
- `/Resources/Blogs` - Blog articles
- `/Resources/Whitepaper` - Whitepaper library

### Legal Pages
- `/PrivacyPolicy` - Privacy policy
- `/TermsOfUse` - Terms of service
- `/CopyrightPolicy` - Copyright information
- `/Accessibility` - Accessibility statement

## 🔧 Configuration

### Environment Variables
Make sure to configure the following environment variables (if needed):
- Web3Forms API key for form submissions
- EmailJS configuration
- Google reCAPTCHA keys

### Next.js Configuration
The project uses default Next.js configuration. Custom settings can be added in `next.config.mjs`.

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy on Vercel
The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Other Deployment Options
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

For more information about the team, visit the [About Us](/Contact-us/About-us) page.

## 📞 Support

- **Contact**: Visit [Contact Us](/Contact-us/Contact) page
- **Careers**: Check [Careers](/Contact-us/Careers) page for opportunities

## 📚 Documentation

For detailed project documentation, see [PROJECT_DOCS.md](./PROJECT_DOCS.md)

---

**Built with ❤️ using Next.js**
