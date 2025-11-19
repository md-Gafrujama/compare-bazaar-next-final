 "use client";

 import React, { useState, useEffect } from "react";
import PhoneSystemCardCommon from "../../../components/PhoneSystemCardCommon";
import Advice from "../../../components/Advice ";
import Modal from "../../../components/Modal";
import CRMForm from "../../../components/CRMForm";
import Article from "../../../components/ArticleLayoutCommon";
import Head from "next/head";
// import Feedback from './Feedback';
import {
  Home,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "../../../components/TableOfContents";
import FAQ from "../../../components/FAQ";

const BestPayrollSystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
     const [productSearch, setProductSearch] = useState("");
     const [filterBy, setFilterBy] = useState("Reviews");
     const [sortBy, setSortBy] = useState("Featured");
     const [itemsPerPage, setItemsPerPage] = useState("10 per page");
     const [expandedSections, setExpandedSections] = useState({});
     const [isMobile, setIsMobile] = useState(false);
     const [activeSection, setActiveSection] = useState(null);
     const [openSections, setOpenSections] = useState({});
     const [openItems, setOpenItems] = useState({});
     const [showMore, setShowMore] = useState(false);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const toggleSection = (sectionKey, labelKey = null) => {
       setExpandedSections((prev) => ({
         ...prev,
         [sectionKey]: !prev[sectionKey],
       }));
   
       if (labelKey) {
         setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
         setOpenSection((prev) => (prev === labelKey ? null : labelKey));
       }
   
       setOpenSections((prev) => ({
         ...prev,
         [sectionKey]: !prev[sectionKey],
       }));
     };
   
     const toggleItem = (index) => {
       setOpenItems((prev) => ({
         ...prev,
         [index]: !prev[index],
       }));
     };
   
     useEffect(() => {
       const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
       };
       checkMobile();
       window.addEventListener("resize", checkMobile);
       return () => window.removeEventListener("resize", checkMobile);
     }, []);
      const toolsContent = {
  ADP: {
    title: "ADP – Best Overall Payroll Solution",
    logo: "/images/adp.jpg",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.8/5" },
      { label: "Pricing", score: "4.2/5" },
      { label: "Ease of Use", score: "4.7/5" },
      { label: "Features", score: "4.9/5" },
      { label: "Customer Support", score: "4.6/5" },
    ],
    pros: [
      "Comprehensive payroll features for all business sizes",
      "Built-in compliance and tax filing",
      "Excellent integration with HR and benefits tools",
    ],
    cons: [
      "Pricing not transparent",
      "May be overwhelming for small businesses",
    ],
    why: {
      intro: `ADP is a market leader in payroll and HR services, offering end-to-end solutions suitable for businesses of all sizes.`,
      bullets: [
        "Automates payroll processing, tax filing, and year-end reporting.",
        "Integrates with time tracking, HR, benefits, and recruiting tools.",
      ],
      outro: `ADP's combination of reliability, scalability, and advanced features makes it a top-tier payroll provider for businesses looking for an all-in-one solution.`,
      extras: {
        "Key Features": (
          <>
            <h4 className="text-lg font-bold mb-2">Full-Service Payroll</h4>
            <p className="text-black mb-4">Includes automated tax filing, year-end W-2s, and direct deposit.</p>
            <h4 className="text-lg font-bold mb-2">Compliance Support</h4>
            <p className="text-black mb-4">Keeps up with federal, state, and local payroll laws.</p>
            <h4 className="text-lg font-bold mb-2">Mobile App</h4>
            <p className="text-black">Employees can access pay stubs, tax forms, and benefits.</p>
          </>
        ),
        Pricing: (
          <>
            <p className="text-black">Custom pricing based on company size and features selected. Contact ADP for a quote.</p>
          </>
        )
      },
    },
  },
  ZohoPayroll: {
    title: "Zoho Payroll – Best for Small Businesses in India",
    logo: "/images/zoho.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.6/5" },
      { label: "Pricing", score: "4.8/5" },
      { label: "Ease of Use", score: "4.7/5" },
      { label: "Features", score: "4.5/5" },
      { label: "Support", score: "4.3/5" },
    ],
    pros: [
      "Simple and clean user interface",
      "Affordable pricing with no hidden fees",
      "Best suited for Indian tax laws and payroll regulations",
    ],
    cons: [
      "Limited to Indian markets",
      "Fewer integrations than global players",
    ],
    why: {
      intro: `Zoho Payroll simplifies payroll management for small businesses in India by automating salary, compliance, and tax handling.`,
      bullets: [
        "Easy generation of payslips, Form 16, and tax calculations.",
        "Seamless integration with Zoho suite (Books, People).",
      ],
      outro: `With its affordable pricing and dedicated compliance support, Zoho Payroll is ideal for startups and SMEs operating in India.`,
      extras: {
        "Key Features": (
          <>
            <h4 className="text-lg font-bold mb-2">TDS and Tax Automation</h4>
            <p className="text-black mb-4">Handles TDS, Form 16, and tax declarations automatically.</p>
            <h4 className="text-lg font-bold mb-2">Employee Self-Service</h4>
            <p className="text-black">Allows employees to access payslips, tax documents, and leave balance.</p>
          </>
        ),
        Pricing: (
          <>
            <p className="text-black">Free for up to 10 employees. Paid plans start at ₹50/employee/month.</p>
          </>
        )
      },
    },
  },
  BambooHR: {
    title: "BambooHR – Best for HR Integration",
    logo: "/images/bomb.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.5/5" },
      { label: "Pricing", score: "4.0/5" },
      { label: "Ease of Use", score: "4.6/5" },
      { label: "Features", score: "4.7/5" },
      { label: "Support", score: "4.4/5" },
    ],
    pros: [
      "All-in-one HR and payroll",
      "Great employee experience tools",
      "Customizable reports",
    ],
    cons: [
      "Higher cost",
      "No native tax filing in some regions",
    ],
    why: {
      intro: `BambooHR is a popular HR platform that now offers integrated payroll features, making it ideal for teams that need more than just payroll.`,
      bullets: [
        "Built-in time tracking and employee records management.",
        "Simple workflows and a clean dashboard.",
      ],
      outro: `If you're looking for a combined HR + payroll platform with strong employee management tools, BambooHR is a great choice.`,
      extras: {
        "Key Features": (
          <>
            <h4 className="text-lg font-bold mb-2">Time Tracking</h4>
            <p className="text-black mb-4">Track time, PTO, and approvals directly within the platform.</p>
            <h4 className="text-lg font-bold mb-2">Full-Service Payroll</h4>
            <p className="text-black">Supports direct deposit, tax filing, and benefits integration.</p>
          </>
        ),
        Pricing: (
          <>
            <p className="text-black">Custom pricing based on organization size and modules selected.</p>
          </>
        )
      },
    },
  },
  OnPay: {
    title: "OnPay – Best for Growing Teams",
    logo: "/images/on.jpg",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.4/5" },
      { label: "Pricing", score: "4.7/5" },
      { label: "Ease of Use", score: "4.6/5" },
      { label: "Features", score: "4.5/5" },
      { label: "Support", score: "4.3/5" },
    ],
    pros: [
      "Flat-rate pricing",
      "All features included in base price",
      "Great for multi-state payroll",
    ],
    cons: [
      "Limited international capabilities",
      "No mobile app",
    ],
    why: {
      intro: `OnPay is a cost-effective payroll service designed to support growing businesses, especially those with multi-state operations.`,
      bullets: [
        "Unlimited payroll runs at no extra charge.",
        "Includes benefits, PTO tracking, and tax filing.",
      ],
      outro: `If you’re scaling and want straightforward payroll without add-on fees, OnPay delivers excellent value.`,
      extras: {
        "Key Features": (
          <>
            <h4 className="text-lg font-bold mb-2">Full-Service Payroll</h4>
            <p className="text-black mb-4">Includes federal, state, and local tax filings, W-2s and 1099s.</p>
            <h4 className="text-lg font-bold mb-2">Employee Self-Service</h4>
            <p className="text-black">Employees can view pay stubs, benefits, and tax info online.</p>
          </>
        ),
        Pricing: (
          <>
            <p className="text-black">$40/month + $6/employee/month. Includes all features.</p>
          </>
        )
      },
    },
  },
  QuickBooksPayroll: {
    title: "QuickBooks Payroll – Best for QuickBooks Users",
    logo: "/images/quick.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.3/5" },
      { label: "Pricing", score: "4.2/5" },
      { label: "Ease of Use", score: "4.5/5" },
      { label: "Features", score: "4.4/5" },
      { label: "Support", score: "4.1/5" },
    ],
    pros: [
      "Seamless QuickBooks integration",
      "Auto tax calculations and filings",
      "Great for accountants and bookkeepers",
    ],
    cons: [
      "Limited HR features",
      "Premium support requires higher plan",
    ],
    why: {
      intro: `QuickBooks Payroll is a natural choice for users already using QuickBooks for accounting, offering tight integration and streamlined processes.`,
      bullets: [
        "Runs payroll in minutes, syncs directly with QuickBooks accounts.",
        "Supports automated tax filing and year-end forms.",
      ],
      outro: `If you’re a QuickBooks user looking to integrate payroll into your workflow without switching platforms, this is your best pick.`,
      extras: {
        "Key Features": (
          <>
            <h4 className="text-lg font-bold mb-2">Automated Payroll</h4>
            <p className="text-black mb-4">Set it and forget it – QuickBooks handles payroll and taxes for you.</p>
            <h4 className="text-lg font-bold mb-2">Next-Day Direct Deposit</h4>
            <p className="text-black">Pay employees quickly with next-day or same-day deposit options.</p>
          </>
        ),
        Pricing: (
          <>
            <p className="text-black">Starts at $45/month + $5/employee/month. Includes free setup and support.</p>
          </>
        )
      },
    },
  }
};

   
     // Convert toolsContent object to array for mapping
     const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
       id: key,
       ...value,
     }));
   
     const systems = [
      {
        name: "ADP",
        logo: "/images/adp.jpg",
        bestFor: "Best for Large Enterprises",
        price: "$10/user/month + $50 base",
        videoCapacity: "Full-service payroll & tax filing",
        support: "Dedicated specialist",
        link: "#",
      },
      {
        name: "Zoho",
        logo: "/images/zo.jpg",
        bestFor: "Best for Small Businesses",
        price: "$25/user/month",
        videoCapacity: "Automated payroll & compliance",
        support: "Email/chat support",
        link: "#",
      },
      {
        name: "BambooHr",
        logo: "/images/bomb.png",
        bestFor: "Best for HR Integration",
        price: "Custom pricing",
        videoCapacity: "Payroll + HR platform",
        support: "24/7 support",
        link: "#",
      },
      {
        name: "Onpay",
        logo: "/images/on.jpg",
        bestFor: "Best for SMBs with contractors",
        price: "$36 + $4/user/month",
        videoCapacity: "Unlimited payroll runs",
        support: "Phone/email support",
        link: "#",
      },
      {
        name: "QuickBooks",
        logo: "/images/quick.png",
        bestFor: "Best for Accounting Sync",
        price: "$45/month + $5/user",
        videoCapacity: "Auto tax calculations",
        support: "24/7 support",
        link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
        linkText: "Links to Ooma Office"
      },
  ];
     const crmTestimonials = [
       {
         avatar: "M",
         avatarColor: "bg-teal-600",
         name: "Michael W.",
         date: "05/25/2024",
         stars: 5,
         text: "This CRM transformed our sales process completely. The contact management and pipeline visibility have increased our conversion rates by 27% in just three months.",
       },
       {
         avatar: "T",
         avatarColor: "bg-orange-500",
         name: "Teresa J.",
         date: "04/18/2024",
         stars: 4,
         text: "The automation features save our team hours every week. Email sequences and follow-up reminders ensure no lead falls through the cracks.",
       },
       {
         avatar: "R",
         avatarColor: "bg-pink-600",
         name: "Robert K.",
         date: "03/30/2024",
         stars: 5,
         text: "Integration with our phone system was seamless. Having call recordings automatically attached to contact records has improved our training and customer service.",
       },
       {
         avatar: "L",
         avatarColor: "bg-violet-500",
         name: "Lisa M.",
         date: "02/12/2024",
         stars: 5,
         text: "The reporting features give our management team real-time visibility into sales performance. Custom dashboards help us make data-driven decisions daily.",
       },
       {
         avatar: "B",
         avatarColor: "bg-emerald-600",
         name: "Brian T.",
         date: "01/07/2024",
         stars: 4,
         text: "Mobile app is powerful enough that our field sales team can manage their entire workflow on the go. The offline mode is particularly valuable.",
       },
       {
         avatar: "C",
         avatarColor: "bg-cyan-500",
         name: "Christina R.",
         date: "04/06/2024",
         stars: 5,
         text: "Customer support has been exceptional. Their onboarding team ensured our data migration went smoothly and trained our staff thoroughly.",
       },
     ];
   
     const faqData = [
       {
      question: "When will I get paid?",
      answer: "All employees at Compare Bazaar are paid on the 15th and last day of each month. If these dates fall on a weekend or holiday, you'll be paid on the last business day before."
    },
    {
      question: "How can I view my payslips?",
      answer: [
        "You can access your payslips through:",
        "1. The employee portal on our company website",
        "2. The Compare Bazaar mobile app (available for iOS and Android)",
        "3. Email delivery (if you've opted for this option)",
        "Payslips are typically available by 9 AM on payday"
      ]
    },
    {
      question: "What should I do if I notice an error in my pay?",
      answer: "Please contact our payroll team immediately at payroll@comparebazaar.com or call extension 555. Include your employee ID, pay period, and details about the discrepancy. We'll investigate and correct any errors within 3 business days."
    },
    {
      question: "How do I update my bank details for direct deposit?",
      answer: [
        "To update your bank information:",
        "1. Log in to the employee portal",
        "2. Navigate to 'Payment Settings'",
        "3. Select 'Update Bank Information'",
        "4. Enter your new account details",
        "Changes take effect for the next pay period if submitted by the 10th or 25th of the month"
      ]
    },
    {
      question: "What tax forms are available and when?",
      answer: "Your W-2 (for US employees) or P60 (for UK employees) will be available by January 31st each year. You can download digital copies from the portal or request a paper copy from HR."
    },
    {
      question: "How are bonuses and commissions paid?",
      answer: "Bonuses and commissions are included in your regular paycheck. They're processed on the same schedule but may appear as separate line items on your payslip."
    },
    {
      question: "What payment methods are available?",
      answer: [
        "We offer:",
        "• Direct deposit (recommended and fastest)",
        "• Physical checks (available upon request)",
        "• Pay cards (for employees without bank accounts)",
        "Note: International employees may have additional options"
      ]
    },
    {
      question: "How do I change my tax withholdings?",
      answer: "You can update your W-4 (US) or tax code (UK) through the employee portal under 'Tax Settings'. Major changes may require submitting physical forms to HR for verification."
    },
    {
      question: "What benefits deductions will I see on my paycheck?",
      answer: [
        "Common deductions include:",
        "• Health insurance premiums",
        "• Retirement contributions (401k/pension)",
        "• Flexible spending accounts",
        "• Union dues (if applicable)",
        "All deductions are listed in detail on your payslip"
      ]
    },
    {
      question: "Who should I contact for payroll questions?",
      answer: [
        "Our payroll team is available:",
        "• Email: payroll@comparebazaar.com",
        "• Phone: (800) 555-1234 ext. 555 (Mon-Fri 9AM-5PM)",
        "• In-person: HR office, 3rd floor (Wednesdays only)",
        "For fastest service, please include your employee ID in all communications"
      ]
    },
    {
      question: "How does overtime pay work?",
      answer: "Non-exempt employees receive 1.5 times their regular rate for hours worked over 40 in a week (US) or over contracted hours (UK). Overtime is automatically calculated and appears on your payslip."
    },
    {
      question: "When are pay raises processed?",
      answer: "Annual raises typically take effect in April paychecks. Promotional raises are processed in the next full pay period after approval. All changes will be reflected in your payslip with details."
    },

    {
      question: "Can I get a second phone number without buying another phone?",
      answer:
        "Yes. Most business phone systems, especially VoIP services, allow you to add multiple numbers to the same device or user account. This is ideal for managing business and personal lines separately.",
    },
    {
      question: "How many VoIP lines does my business need?",
      answer:
        "The number of VoIP lines you need depends on your team size and call volume. As a general rule, one line per simultaneous user is recommended. For example, a 10-person team typically needs about 8–10 lines if calls are frequent.",
    },
    {
      question: "Are there any recommended integrations to use with my phone system?",
      answer:
        "Yes. Popular integrations include CRM tools (like HubSpot, Salesforce), helpdesk platforms (like Zendesk), and productivity suites (like Google Workspace or Microsoft 365). These boost efficiency and enhance customer interactions.",
    },
    {
      question: "Are business phone systems secure?",
      answer:
        "Modern business phone systems use strong encryption protocols, spam filters, and multi-layer authentication to protect your data. Choosing a reputable VoIP provider is key to ensuring communication security.",
    },
  ];
  
   
     const contents = [
    {
      id: "intro",
      title: "Introduction to Best Payroll System",
      active: false,
    },
  
    {
      id: "recommendations",
      title: " Our top 5 Payroll System recommendations",
      active: false,
    },
    {
      id: "features",
      title: "What Is Payroll System?",
      active: false,
    },
    {
      id: "working",
      title: "How Does Payroll System Work",
      active: false,
    },
    {
      id: "importance",
      title: "Why Does Payroll System Matter?",
      active: false,
    },

    {
      id: "articles",
      title: "Related Articles",
      active: false,
    },
      {
      id: "Faq",
      title: "Payroll System FAQs",
      active: false,
    },
     
    {
      id: "faqs",
      title: "Frequently Asked Questions (FAQ)",
      active: false,
    },
  ];
  
     const crmData = [
        
  {
                id: 1,
                name: "ADP",
                image: "/images/adp.jpg",
                alt: "ADP",
                expertScore: 4.8,
                bestFor: "Best for Large Enterprises",
                visitUrl: "https://www.adp.com",
                keyFeatures: [
                  "$10/user/month + $50 base",
                  "Full-service payroll & tax filing",
                  "Dedicated specialist"
                ],
                freeTrial: true,
                freeVersion: false,
              },
              {
                id: 2,
                name: "Zoho Payroll",
                image: "/images/zoho.png",
                alt: "Zoho Payroll",
                expertScore: 4.6,
                bestFor: "Best for Small Businesses",
                visitUrl: "https://www.zoho.com/payroll",
                keyFeatures: [
                  "$25/user/month",
                  "Automated payroll & compliance",
                  "Email/chat support"
                ],
                freeTrial: true,
                freeVersion: false,
              },
              {
                id: 3,
                name: "BambooHR",
                image: "/images/bomb.png",
                alt: "BambooHR",
                expertScore: 4.5,
                bestFor: "Best for HR Integration",
                visitUrl: "https://www.bamboohr.com",
                keyFeatures: [
                  "Custom pricing",
                  "Payroll + HR platform",
                  "24/7 support"
                ],
                freeTrial: true,
                freeVersion: false,
              },
              {
                id: 4,
                name: "OnPay",
                image: "/images/on.jpg",
                alt: "OnPay",
                expertScore: 4.4,
                bestFor: "Best for SMBs with contractors",
                visitUrl: "https://www.onpay.com",
                keyFeatures: [
                  "$36 + $4/user/month",
                  "Unlimited payroll runs",
                  "Phone/email support"
                ],
                freeTrial: true,
                freeVersion: false,
              },
              {
                id: 5,
                name: "QuickBooks Payroll",
                image: "/images/quick.png",
                alt: "QuickBooks Payroll",
                expertScore: 4.5,
                bestFor: "Best for Accounting Sync",
                visitUrl: "https://quickbooks.intuit.com/payroll",
                keyFeatures: [
                  "$45/month + $5/user",
                  "Auto tax calculations",
                  "24/7 support"
                ],
                freeTrial: true,
                freeVersion: false,
              }
   
  
  
     ];
   
     const renderStars = (score) => {
       const stars = [];
       const fullStars = Math.floor(score);
       const hasHalfStar = score % 1 !== 0;
   
       for (let i = 0; i < fullStars; i++) {
         stars.push(
           <svg
             key={i}
             className="w-5 h-5 text-yellow-400 fill-current"
             viewBox="0 0 24 24"
           >
             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
           </svg>
         );
       }
   
       if (hasHalfStar) {
         stars.push(
           <svg
             key="half"
             className="w-5 h-5 text-yellow-400 fill-current"
             viewBox="0 0 24 24"
           >
             <defs>
               <linearGradient id="half">
                 <stop offset="50%" stopColor="currentColor" />
                 <stop offset="50%" stopColor="transparent" />
               </linearGradient>
             </defs>
             <path
               fill="url(#half)"
               d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
             />
           </svg>
         );
       }
   
       return stars;
     };


  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =` ${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const additionalText = "Our payroll system is designed to make your life easier. It automatically calculates your pay, taxes, and deductions, so you don't have to worry about errors. You can access your payslips anytime from your phone or computer, and if you ever have questions, our friendly payroll team is just an email or call away. We've built this system with real people in mind - whether you're in the office, working remotely, or on the go.";

  return (
    <>
    <Head>
                  <title>Compare Payroll & HR Software | Free Quotes from Trusted Providers – Compare-Bazaar</title>
                  <meta name="description" content="Simplify your payroll and HR management with the right software. Compare top solutions side-by-side, get free quotes, and find a system that fits your business—no pressure, no guesswork." />
                  <link rel="canonical" href="https://www.compare-bazaar.com/BestPayrollSystem" />
                </Head>

    <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Compare Bazaar Payroll Made Simple</h1>
  
          <p className="text-gray-800 text-base mb-4">
            At <span className="text-[#ff8633] font-semibold">Compare Bazaar</span>, we believe getting paid should be the easiest part of your job. <span className="text-[#ff8633] font-semibold"> <Link href="/BusinessPayroll" className="hover:underline">
          Our payroll system
          </Link></span> gives you reliable, on-time payments with no surprises. Whether you're full-time, part-time, or contract, we make sure your pay is accurate and arrives when it should. View your payslips, update your details, and track your payments - all in one simple place.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base">
            Getting paid shouldn't be complicated. That's why we've built a payroll system that works for you. You'll get paid on the same dates every month (the 15th and last day), and can check your payment details anytime. Need to change your bank account? Update it in minutes through our employee portal. Questions about your pay? We're here to help.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Plus, we keep your information safe with bank-level security. You'll get notifications when your pay is coming, and can download your tax documents with one click. At <span className="text-[#ff8633] font-semibold">Compare Bazaar</span>, we're committed to making payroll simple, clear, and stress-free for everyone in our team.
              </span>
            )}
          </p>
          <button
            className="mt-2 text-[#000e54] font-semibold flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less -' : 'Read more +'}
          </button>
        </section>
      {/* Responsive Grid Layout */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {systems.map((system, index) => (
            <PhoneSystemCardCommon 
              key={index} 
              system={system} 
              createRipple={createRipple} 
              onCompareQuotesClick={() => setIsModalOpen(true)}
            />
          ))}
        </div>
    </div>
     <div className="min-h-screen bg-gray-50"> 
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8"> 
     <TableOfContents contents={contents} />
     </div>
    <div className="flex-1 max-w-4xl">
  <section id="intro">
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Introduction to Best Payroll System
        </h1>
      </header>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Choosing the right payroll system helps your business automate payments,
          stay compliant with tax regulations, and boost employee satisfaction.
          From pricing to features, here are top payroll providers based on business needs.
        </p>

        {/* Payroll System Cards (Summarized) */}
        <div className="space-y-3 mb-8">
          {/* ADP */}
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">ADP:</span> Best for large enterprises — 
              $10/user/month + $50 base. Full-service payroll & tax filing with a dedicated specialist.
            </p>
          </div>

          {/* Zoho Payroll */}
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Zoho Payroll:</span> Best for small businesses — 
              $25/user/month. Automated payroll, compliance, and email/chat support.
            </p>
          </div>

          {/* BambooHR */}
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">BambooHR:</span> Best for HR integration — 
              Custom pricing. Combines payroll with a full HR platform and 24/7 support.
            </p>
          </div>

          {/* OnPay */}
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">OnPay:</span> Best for SMBs with contractors — 
              $36 + $4/user/month. Unlimited payroll runs with phone/email support.
            </p>
          </div>

          {/* QuickBooks Payroll */}
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">QuickBooks Payroll:</span> Best for accounting sync — 
              $45/month + $5/user. Auto tax calculations and 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 {/* Featured Partners Section */}
<div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Featured Payroll Partners</h2>
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <span>Advertisement</span>
      <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
        <span className="text-white font-bold">i</span>
      </div>
    </div>
  </div>

  {/* ADP */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/adp.jpg" alt="ADP Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-bold text-gray-900">
          ADP
          <br />
          <span className="text-lg">Enterprise Payroll Solutions</span>
        </div>
      </div>
      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2">
        <span>Visit Website</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div><div className="text-gray-600 mb-1">Good For</div><div className="font-medium text-gray-900">Large Enterprises</div></div>
      <div><div className="text-gray-600 mb-1">Core Features</div><div className="font-medium text-gray-900">Full-service payroll, tax filing</div></div>
      <div><div className="text-gray-600 mb-1">Pricing</div><div className="font-medium text-gray-900">$10/user/month + $50 base</div></div>
    </div>
  </div>

  {/* Zoho Payroll */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/zoho.png" alt="Zoho Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-bold text-gray-900">
          Zoho Payroll
          <br />
          <span className="text-lg">Payroll for Small Businesses</span>
        </div>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2">
        <span>Visit Website</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div><div className="text-gray-600 mb-1">Good For</div><div className="font-medium text-gray-900">Small Businesses</div></div>
      <div><div className="text-gray-600 mb-1">Core Features</div><div className="font-medium text-gray-900">Automation, compliance</div></div>
      <div><div className="text-gray-600 mb-1">Pricing</div><div className="font-medium text-gray-900">$25/user/month</div></div>
    </div>
  </div>

  {/* BambooHR */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/bomb.png" alt="BambooHR Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-bold text-gray-900">
          BambooHR
          <br />
          <span className="text-lg">HR + Payroll Platform</span>
        </div>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2">
        <span>Visit Website</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div><div className="text-gray-600 mb-1">Good For</div><div className="font-medium text-gray-900">HR Integration</div></div>
      <div><div className="text-gray-600 mb-1">Core Features</div><div className="font-medium text-gray-900">HR + Payroll Management</div></div>
      <div><div className="text-gray-600 mb-1">Pricing</div><div className="font-medium text-gray-900">Custom Pricing</div></div>
    </div>
  </div>

  {/* OnPay */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/on.jpg" alt="OnPay Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-bold text-gray-900">
          OnPay
          <br />
          <span className="text-lg">Payroll for SMBs with Contractors</span>
        </div>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2">
        <span>Visit Website</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div><div className="text-gray-600 mb-1">Good For</div><div className="font-medium text-gray-900">Contractor Payments</div></div>
      <div><div className="text-gray-600 mb-1">Core Features</div><div className="font-medium text-gray-900">Unlimited Payroll Runs</div></div>
      <div><div className="text-gray-600 mb-1">Pricing</div><div className="font-medium text-gray-900">$36 base + $4/user</div></div>
    </div>
  </div>

  {/* QuickBooks Payroll */}
  <div className="bg-gray-50 rounded-lg p-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/quick.png" alt="QuickBooks Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-bold text-gray-900">
          QuickBooks Payroll
          <br />
          <span className="text-lg">Accounting Integration</span>
        </div>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2">
        <span>Visit Website</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div><div className="text-gray-600 mb-1">Good For</div><div className="font-medium text-gray-900">Accounting Sync</div></div>
      <div><div className="text-gray-600 mb-1">Core Features</div><div className="font-medium text-gray-900">Auto Tax Filing, 24/7 Support</div></div>
      <div><div className="text-gray-600 mb-1">Pricing</div><div className="font-medium text-gray-900">$45/month + $5/user</div></div>
    </div>
  </div>
</div>
<section id="recommendations" className="mt-8"> 
  <div className="mx-auto">
    <div className="text-center mb-8 sm:mb-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        Our top 5 Payroll System recommendations
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
    </div>

    {/* Unified Table Layout for All Screen Sizes */}
    <div className="bg-white rounded-2xl  border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                Payroll System
              </th>
              <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                Expert Score
              </th>
              <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                Best for
              </th>
              <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                Key Features
              </th>
              <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                Free Trial
              </th>
              <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                Free Version
              </th>
              <th className="text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {crmData.map((crm, index) => (
              <tr
                key={crm.id}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="py-4 sm:py-8 px-2 sm:px-8">
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0">
                      <img
                        src={crm.image}
                        alt={crm.alt}
                        className="max-w-16 max-h-8 sm:max-w-32 sm:max-h-12 object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="font-medium text-gray-800 text-xs sm:text-base">
                        {crm.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                  <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                    <span className="text-lg sm:text-2xl font-bold text-gray-800">
                      {crm.expertScore}
                    </span>
                    <div className="flex space-x-1 scale-75 sm:scale-100">
                      {renderStars(crm.expertScore)}
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {crm.bestFor}
                  </span>
                </td>
                <td className="py-4 sm:py-8 px-2 sm:px-6">
                  <ul className="space-y-1 sm:space-y-2">
                    {crm.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-gray-600 flex items-start sm:items-center"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-0"></div>
                        <span className="leading-tight sm:leading-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                  <div className="flex justify-center">
                    {crm.freeTrial ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <X className="w-3 h-3 sm:w-5 sm:h-5 text-red-600" />
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                  <div className="flex justify-center">
                    {crm.freeVersion ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <X className="w-3 h-3 sm:w-5 sm:h-5 text-red-600" />
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 sm:py-8 px-2 sm:px-8">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2 mx-auto text-xs sm:text-sm">
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-gray-600 text-sm">
        * Scores and recommendations are based on expert analysis and user reviews
      </p>
    </div>
  </div>
   {toolsArray.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8"
                  >
                    {/* Tool Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Image
                            src={tool.logo}
                            alt={`${tool.title} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-black">
                          {tool.title}
                        </h2>
                      </div>
                      <a
                        href={tool.button.link}
                        className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700"
                      >
                        {tool.button.text}
                      </a>
                    </div>
  
                    {/* Scores */}
                    <div className="space-y-4 text-black mb-6">
                      {tool.scores.map((score, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm font-medium mb-1">
                            <span>{score.label}</span>
                            <span>{score.score}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-orange-600 h-2 rounded-full"
                              style={{
                                width: `${(parseFloat(score.score) / 5) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
  
                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pros</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Cons</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
  
                    {/* Why I Chose Section */}
                    <div className="mb-6 text-black">
                      <h3 className="text-lg font-semibold mb-2">
                        Why I chose {tool.title.split(":")[0]}
                      </h3>
                      <p className="mb-4">{tool.why.intro}</p>
                      {tool.why.bullets && (
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          {tool.why.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <p>{tool.why.outro}</p>
                    </div>
  
                    {/* Expandable Sections */}
                    {tool.why.extras &&
                      Object.entries(tool.why.extras).map(([label, content]) => {
                        const sectionKey = `${tool.id}-${label}`;
                        return (
                          <div
                            key={sectionKey}
                            className="border-t text-black pt-4 mb-4"
                          >
                            <button
                              onClick={() => toggleSection(sectionKey)}
                              className="w-full flex justify-between items-center font-medium"
                            >
                              <span>{label}</span>
                              <span className="text-orange-600">
                                {openSections[sectionKey] ? (
                                  <Minus className="w-5 h-5" />
                                ) : (
                                  <Plus className="w-5 h-5" />
                                )}
                              </span>
                            </button>
                            {openSections[sectionKey] && (
                              <div className="mt-2 text-gray-700">
                                {typeof content === "string" ? (
                                  <p>{content}</p>
                                ) : (
                                  content
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                ))}
</section>
 <section id="features" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      What Is Payroll System?
    </h1>

    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        A payroll system is a software solution designed to automate and streamline the process of paying employees. It handles calculations, tax deductions, benefits administration, and ensures compliance with labor laws.
      </p>
    </div>
  </div>
</section>

<section id="working" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      How Does Payroll System Work
    </h1>

    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        Modern payroll systems automate the entire payment process through several key steps:
      </p>
    </div>

    <div className="space-y-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Data Collection
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Gathers employee hours, overtime, and attendance data</li>
          <li>Integrates with time tracking systems</li>
          <li>Captures salary changes and bonus information</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Calculation Phase
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Computes gross pay based on hours worked</li>
          <li>Automatically deducts taxes and benefits</li>
          <li>Calculates net pay for each employee</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="importance" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Why Does Payroll System Matter?
    </h1>

    <div className="space-y-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Compliance and Accuracy
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Ensures tax calculations comply with current laws</li>
          <li>Reduces human error in payment calculations</li>
          <li>Maintains proper records for audits</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Employee Satisfaction
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Ensures timely and accurate payments</li>
          <li>Provides self-service access to pay information</li>
          <li>Transparent calculation of deductions</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="articles" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Related Articles
    </h1>

    <div className="space-y-6">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
        Explore more about payroll systems and related topics:
      </p>
      <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
        <li>How to Choose the Right Payroll Software</li>
        <li>Payroll Compliance: What You Need to Know</li>
        <li>Integrating Payroll with HR Systems</li>
      </ul>
    </div>
  </div>
</section>

<section id="Faq" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Payroll System FAQs
    </h1>

    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">What are the benefits of automated payroll?</h3>
        <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
          Automated payroll systems save time, reduce errors, ensure compliance, and provide better record-keeping compared to manual processes.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">How often should payroll be processed?</h3>
        <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
          Payroll frequency depends on your business needs and local regulations, but common schedules include weekly, bi-weekly, semi-monthly, or monthly.
        </p>
      </div>
    </div>
  </div>
</section>
    <div id="faq" className="">
        <FAQ faqsData={faqData} />
    </div>
 
</div>
</div>
 </div>
</div>
    

  
 


  

 

 

{/* buyers guide */}
 

    
    
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        
    </Modal>
    </>
  );
};

export default BestPayrollSystem;