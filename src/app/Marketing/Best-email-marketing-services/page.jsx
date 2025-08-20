"use client";

import React, { useState, useEffect } from "react";
import PhoneSystemCardCommon from "../../../components/PhoneSystemCardCommon";

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

import CRMComparison from "../../../components/CRMComparison";

import Advice from "../../../components/Advice ";
import Modal from "../../../components/Modal";

import FAQ from "../../../components/FAQ";

import Article from "../../../components/ArticleLayoutCommon";
import Head from "next/head";

import EmailMarketingForm from '../../../components/EmailMarketingForm';




const BestEmail = () => {
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
  OomaOffice: {
    title: "Campaign Monitor - Best for Deliverability",
    logo: "/images/camp.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.6/5" },
      { label: "Pricing", score: "4.7/5" },
      { label: "Email Features", score: "4.5/5" },
      { label: "Integrations", score: "4.6/5" },
      { label: "Ease of Use", score: "4.8/5" },
      { label: "Support", score: "4.6/5" },
    ],
    pros: [
      "Exceptional inbox placement rates",
      "Great for transactional and promotional emails",
      "User-friendly email builder",
      "High-quality templates and reporting tools",
    ],
    cons: [
      "Limited automation compared to competitors",
      "Fewer integrations than all-in-one platforms",
    ],
    why: {
      intro: `Campaign Monitor excels in email deliverability, making it a reliable choice for businesses that prioritize getting into the inbox.`,
      bullets: [
        "Easy-to-use platform with beautiful templates.",
        "Focused on email best practices and sender reputation.",
      ],
      outro: `If deliverability is your #1 priority, Campaign Monitor is a strong, dependable solution.`,
    },
  },

  RingEX: {
    title: "Campaginer - Best for Larger Businesses",
    logo: "/images/campai.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.7/5" },
      { label: "Pricing", score: "4.5/5" },
      { label: "Email Features", score: "4.7/5" },
      { label: "Integrations", score: "4.9/5" },
      { label: "Ease of Use", score: "4.6/5" },
      { label: "Support", score: "4.5/5" },
    ],
    pros: [
      "Built to handle large email volumes",
      "Enterprise-grade campaign tools",
      "Powerful segmentation and A/B testing",
      "Robust API and integration options",
    ],
    cons: [
      "Learning curve for beginners",
      "Higher pricing tiers for advanced features",
    ],
    why: {
      intro: `Campaginer is designed for high-volume email senders and large marketing teams who need flexibility, power, and precision.`,
      bullets: [
        "Advanced tools for segmentation, automation, and analytics.",
        "Scalable infrastructure tailored for growing businesses.",
      ],
      outro: `If you're an enterprise or scaling fast, Campaginer offers the performance and reliability your team needs.`,
    },
  },

  Zoom: {
    title: "Klaviyo - Best for Data-Driven Marketing",
    logo: "/images/klay.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.5/5" },
      { label: "Pricing", score: "4.3/5" },
      { label: "Email Features", score: "4.4/5" },
      { label: "Integrations", score: "4.7/5" },
      { label: "Ease of Use", score: "4.9/5" },
      { label: "Support", score: "4.5/5" },
    ],
    pros: [
      "Tightly integrates with eCommerce platforms like Shopify",
      "In-depth segmentation and targeting",
      "Event-based automation and analytics",
      "User-friendly drag-and-drop editor",
    ],
    cons: [
      "Can be pricey for smaller lists",
      "Primarily tailored for eCommerce brands",
    ],
    why: {
      intro: `Klaviyo is the go-to platform for brands that want deep customer insights and automation triggered by real behavior.`,
      bullets: [
        "Best-in-class tools for eCommerce and online stores.",
        "Real-time analytics to guide strategy and segmentation.",
      ],
      outro: `If you're an online brand aiming to use data to personalize and grow, Klaviyo is unmatched.`,
    },
  },

  NextivaONE: {
    title: "GetResponse - Best AI-powered automation",
    logo: "/images/get.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.6/5" },
      { label: "Pricing", score: "4.4/5" },
      { label: "Email Features", score: "4.5/5" },
      { label: "Integrations", score: "4.6/5" },
      { label: "Ease of Use", score: "4.7/5" },
      { label: "Support", score: "4.7/5" },
    ],
    pros: [
      "AI-powered content and subject line suggestions",
      "Built-in webinar and landing page tools",
      "Great automation workflows",
      "CRM, SMS, and email in one place",
    ],
    cons: [
      "Some features only in higher-tier plans",
      "Email template editor can feel limited",
    ],
    why: {
      intro: `GetResponse offers smart automation features and AI enhancements, making it a strong pick for marketers who want intelligent tools.`,
      bullets: [
        "Helps automate sales funnels with prebuilt templates.",
        "AI tools save time and improve performance automatically.",
      ],
      outro: `If you're looking for smart automation without needing a full marketing team, GetResponse delivers solid value.`,
    },
  },

  Vonage: {
    title: "HubSpot - Best Bundled Marketing Solution",
    logo: "/images/hub.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.4/5" },
      { label: "Pricing", score: "4.3/5" },
      { label: "Email Features", score: "4.2/5" },
      { label: "Integrations", score: "4.5/5" },
      { label: "Ease of Use", score: "4.4/5" },
      { label: "Support", score: "4.3/5" },
    ],
    pros: [
      "Email, CRM, and automation in one platform",
      "Great onboarding and tutorials",
      "Free plan available with core features",
      "Wide range of templates and integrations",
    ],
    cons: [
      "Gets expensive as your needs grow",
      "Email features aren’t as deep as dedicated tools",
    ],
    why: {
      intro: `HubSpot is a top choice for companies that want an all-in-one platform that bundles email, CRM, and marketing automation.`,
      bullets: [
        "Centralizes sales, marketing, and service in one system.",
        "Perfect for growing teams needing scalable solutions.",
      ],
      outro: `If you want to simplify your tech stack and still get strong marketing tools, HubSpot is your answer.`,
    },
  },
};


  
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));
  const systems = [
  
    {
      name: "Campaign Monitor",
      logo: "/images/camp.png",
      bestFor: "Best for Deliverability",
      price: "From $12 per month",
      videoCapacity: "Starts at 2,500 monthly emails",
      support: "30-day free trial",
      link: "#",

    },
    {
      name: "Campaginer",
      logo: "/images/campai.png",
      bestFor: "Best for Larger Businesses",
      price: "From $59 per month",
      videoCapacity: "Starts at 5k contacts and 30k sends",
      support: "30-day full-featured free trial",
      link: "#",
    
    },
    {
      name: "Klaviyo",
      logo: "/images/klay.png",
      bestFor: "Best for Data-Driven Marketing",
      price: "From $20/month",
      videoCapacity: "Starts at 5,000 monthly emails",
      support: "Free plan",
      link: "#",
   
    },
    {
      name: "GetResponse",
      logo: "/images/get.png",
      bestFor: "Best AI-powered automation",
      price: "From $15.58 per month",
      videoCapacity: "Unlimited email sends",
      support: "30-day free trial",
      link: "#",
   
    },
    {
      name: "HubSpot",
      logo: "/images/hub.png",
      bestFor: "Best Bundled Marketing Solution",
      price: "From $20 per month",
      videoCapacity: "5,000 daily emails to contacts",
      support: "14-day free trial; free plan",
      link: "#",
  
    },
  ];


//   {
//     id: 1,
    
//     image: "/images/ooma.png",
//     alt: "Ooma Office",
//     expertScore: 4.5,
//     bestFor: "Best for small business communication",
//     visitUrl: "ooma",
//     keyFeatures: [
//       "Virtual receptionist",
//       "Voicemail-to-email",
//       "Call forwarding and email alerts",
//     ],
//     freeTrial: true,
//     freeVersion: false,
//   },
//   {
//     id: 2,
    
//     image: "/images/ringcentral.png",
//     alt: "RingEX",
//     expertScore: 4.4,
//     bestFor: "Best for all-in-one communication",
//     visitUrl: "ringex",
//     keyFeatures: [
//       "Integrated email and messaging",
//       "Advanced analytics",
//       "AI transcription and summaries",
//     ],
//     freeTrial: true,
//     freeVersion: false,
//   },
//   {
//     id: 3,
    
//     image: "/images/zoom.png",
//     alt: "Zoom",
//     expertScore: 4.3,
//     bestFor: "Best for webinars and event-based marketing",
//     visitUrl: "zoom",
//     keyFeatures: [
//       "Zoom Mail and Calendar integration",
//       "Webinar tools",
//       "Email campaign automation",
//     ],
//     freeTrial: true,
//     freeVersion: true,
//   },
//   {
//     id: 4,
   
//     image: "/images/nextiva.png",
//     alt: "NextivaONE",
//     expertScore: 4.2,
//     bestFor: "Best for unified communication and email support",
//     visitUrl: "nextiva",
//     keyFeatures: [
//       "Email-to-voice features",
//       "CRM + email integration",
//       "Multichannel campaign tracking",
//     ],
//     freeTrial: true,
//     freeVersion: false,
//   },
//   {
//     id: 5,
    
//     image: "/images/vonage.png",
//     alt: "Vonage",
//     expertScore: 4.1,
//     bestFor: "Best for scalable business communication",
//     visitUrl: "vonage",
//     keyFeatures: [
//       "Vonage Campaigns",
//       "Email + SMS marketing suite",
//       "API-driven automation",
//     ],
//     freeTrial: true,
//     freeVersion: false,
//   },
// ];
 const features = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/>
            </svg>
          ),
          title: "Beautiful Email Templates",
          description: "Choose from 100+ professionally designed, mobile-responsive templates that work across all devices and email clients."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 20H2v-2h1v-6a8 8 0 1116 0v6h1v2zm-3-2V12A5 5 0 007 12v6h12zm-5 3v1h-4v-1h4z"/>
            </svg>
          ),
          title: "Advanced Segmentation",
          description: "Send targeted messages by segmenting your audience based on behavior, demographics, purchase history, and more."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 10-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1112.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.5C8 17 6.375 15.774 5.754 15z"/>
            </svg>
          ),
          title: "Smart Analytics",
          description: "Track opens, clicks, conversions, and revenue with our comprehensive dashboard and detailed reporting tools."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.636 12.707l1.828 1.829L8.88 13.12l-1.83-1.827 1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414 1.826 1.83 1.415-1.415-1.829-1.828 1.414-1.414 1.828 1.829 1.415-1.415-1.829-1.828-1.414 1.414-1.827-1.829-1.415 1.415 1.829 1.828-1.414 1.414-1.829-1.829L6.05 6.05l-1.414 1.414 1.829 1.828-1.414 1.415-1.828-1.829-1.414 1.414 1.828 1.828 1.414-1.414zM13.12 15.536l1.829 1.828 1.414-1.414-1.828-1.829 1.414-1.414 1.829 1.828 1.414-1.414-1.828-1.829 1.414-1.414 1.829 1.829 1.414-1.415-1.829-1.828 1.414-1.414 1.828 1.829 1.415-1.415-1.829-1.828-1.414 1.414-1.829-1.829-1.414 1.415 1.828 1.828-1.414 1.414-1.829-1.829-1.414 1.415 1.829 1.828-1.414 1.414-1.828-1.829-1.415 1.415 1.829 1.828-1.414 1.414z"/>
            </svg>
          ),
          title: "Automation Workflows",
          description: "Set up automated email sequences for welcome series, abandoned carts, re-engagement campaigns, and more."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 010-5h1V6h2v2h2.5v2H10a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v2h-2v-2H8.5v-2z"/>
            </svg>
          ),
          title: "A/B Testing",
          description: "Test subject lines, content, send times, and more to optimize your campaigns for maximum engagement."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.833 3.337a.5.5 0 01.798.6l-4.5 6a.5.5 0 01-.729.06l-2.5-2.5a.5.5 0 01.708-.708l2.056 2.056 4.167-5.508z"/>
            </svg>
          ),
          title: "List Management",
          description: "Easily import, organize, and clean your contact lists with our powerful list management tools."
        }
      ];
const Testimonials = [
    {
      avatar: "P",
      avatarColor: "bg-purple-600",
      name: "Pedro G.",
      date: "06/12/2024",
      stars: 5,
      text: "Blake and Courtney are a powerhouse if your are new to the leads world. They kept their end of the bargain lots of quality leads."
    },
    {
      avatar: "E",
      avatarColor: "bg-blue-500",
      name: "Eric L.",
      date: "10/31/2023",
      stars: 5,
      text: "I needed a few more vendors to gather information for a lease or purchase of a copier for our church. 360Connect did just that."
    }
  ];

  
  

  const faqData = [
    {
      question: "What are the types of email marketing?",
      answer:
        "There are several types of email marketing. The most common type is the informational newsletter, which provides general company news and updates, transactional emails that are part of the sales or billing process (order and shipping confirmations, receipts, invoices, etc.), and behavioral emails that are sent after a subscriber takes a certain action on your website (signs up for a mailing list, abandons their cart, sends an inquiry, etc.).",
    },
    {
      question: "Who should use email marketing?",
      answer:
        "Any business that wants to build strong customer relationships and improve their website traffic and revenue for a relatively low cost should consider email marketing.",
    },
    {
      question: "Does email marketing software integrate with other software?",
      answer:
        "Yes, email marketing software integrates with other business software, such as top CRM systems and other marketing tools. These integrations create a seamless connection that allows these individual platforms to share data, reducing the need for double-entry and the risk of human error, as well as keeping all stakeholders apprised of new developments in real time.",
    },
    {
      question: "Can you automate email marketing blasts?",
      answer:
        "Yes, you can automate email marketing blasts so they’re scheduled for delivery ahead of time. You can set these up to run once or on a recurring basis. However, when setting up automated email marketing blasts repeatedly, you should periodically check the content to ensure it remains accurate and up to date.",
    },
    {
      question: "Is email marketing worth it for your business?",
      answer: "Yes, email marketing is worthwhile for almost every business and can generate a return on investment when best practices are followed. Many users make purchases directly through email marketing content and even more are influenced by this content toward making a purchase at a later date.",
    },
  ];


   const contents = [
    { id: "intro-email" , title: "Introduction to Best Email Marketing", active:false },

    { id: "emailmarketing-features", title: "Featured Partners", active:false },
 
    { id: "platforms", title: "Best Business Email Marketing Platforms", active:false },
    { id: "email-features", title: "Key Features For Email Marketing services", active:false },
    { id: "email-howchoose", title: "How to Choose Email Marketing Service?", active:false},
   
   { id: "faqs" , title: "FAQs", active:false } ,
    
    
  ];
     const emailData = [
  {
    id: 1,
    
    image: "/images/camp.png",
    alt: "Campaignmonitor",
    expertScore: 4.5,
    bestFor: "Best for Deliverability",
    visitUrl: "#",
    keyFeatures: [
      "Virtual receptionist",
      "Voicemail-to-email",
      "Call forwarding and email alerts",
    ],
    freeTrial: true,
    freeVersion: false,
  },
  {
    id: 2,
    
    image: "/images/campai.png",
    alt: "Campaginer",
    expertScore: 4.4,
    bestFor: "Best for Larger Businesses",
    visitUrl: "ringex",
    keyFeatures: [
      "Integrated email and messaging",
      "Advanced analytics",
      "AI transcription and summaries",
    ],
    freeTrial: true,
    freeVersion: false,
  },
  {
    id: 3,
    
    image: "/images/klay.png",
    alt: "",
    expertScore: 4.3,
    bestFor: "Best for Data-Driven Marketing",
    visitUrl: "zoom",
    keyFeatures: [
      "Zoom Mail and Calendar integration",
      "Webinar tools",
      "Email campaign automation",
    ],
    freeTrial: true,
    freeVersion: true,
  },
  {
    id: 4,
   
    image: "/images/get.png",
    alt: "GetResponse",
    expertScore: 4.2,
    bestFor: "Best AI-powered automation",
    visitUrl: "nextiva",
    keyFeatures: [
      "Email-to-voice features",
      "CRM + email integration",
      "Multichannel campaign tracking",
    ],
    freeTrial: true,
    freeVersion: false,
  },
  {
    id: 5,
    
    image: "/images/hub.png",
    alt: "HubSpot",
    expertScore: 4.1,
    bestFor: "Best Bundled Marketing Solution",
    visitUrl: "vonage",
    keyFeatures: [
      "Vonage Campaigns",
      "Email + SMS marketing suite",
      "API-driven automation",
    ],
    freeTrial: true,
    freeVersion: false,
  },
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

  const articles = [
  {
    id: 1,
    title: "Email Marketing vs Social Media: Which Drives More Conversions?",
    image: "/images/img1email.png",
    author: "Catie",
    date: "April 5, 2023",
    excerpt:
      "Marketing teams often debate which channel deserves more budget allocation. Should you focus on email marketing or invest heavily in social media campaigns...",
    link: "#",
  },
  {
    id: 2,
    title: "Mailchimp Email Marketing: Features, Pricing, Pros and Cons",
    image: "/images/img2email.png",
    author: "Catie",
    date: "August 17, 2023",
    excerpt:
      "Mailchimp Overview Mailchimp is a popular email marketing platform offering intuitive tools for businesses of all sizes. Their all-in-one marketing solution includes...",
    link: "#",
  },
  {
    id: 3,
    title: "7 Key Metrics to Measure Email Marketing Success",
    image: "/images/img3email.png",
    author: "Catie",
    date: "January 22, 2024",
    excerpt:
      "As a marketing professional, measuring the effectiveness of your email campaigns is essential for optimizing performance. Beyond basic open rates...",
    link: "#",
  },
];
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

  const additionalText = " The modern email marketing landscape has evolved significantly, with AI-powered personalization replacing traditional mass emails in many organizations. Today's email marketing systems offer advanced features like automated customer journeys, behavior-based targeting, A/B testing capabilities, and comprehensive analytics dashboards. These tools help businesses increase conversion rates, improve customer engagement, and streamline their marketing processes. When evaluating different providers, it's important to consider factors such as deliverability rates, template customization options, integration capabilities, and total cost of ownership. Many platforms now include unified marketing capabilities, bringing together email campaigns, landing pages, contact management, and performance analytics in a single dashboard.";
  

  
  return (
    <>
      <Head>
        <title>
         The Best Business Email Marketing Platforms of 2025 | Free Quotes on
          Compare-Bazaar
        </title>
        <meta
          name="description"
          content="As your business expands, the right email marketing tools become even more important."
        />
        <link
          rel="canonical"
          href="https://www.compare-bazaar.com/BestEmailMarketing"
        />
      </Head>

     <div className="max-w-6xl mx-auto bg-white p-4 py-12">
  <header className="mb-8">
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 ">The Best Business Email Marketing Platforms of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare-bazaar</span>,  we know how important it is for your business to stay connected with your customers. That's why we recommend the <span className="text-orange-500 font-semibold">top email marketing platforms</span> that offer powerful tools to create impactful campaigns and gain valuable customer insights. The <span className="text-orange-500 font-semibold">best email marketing solutions</span> make it easy to automate processes, segment audiences, and analyze performance—all so you can communicate with your customers in a more personalized and effective way. Whether you're a small online shop or a large business, the right email marketing system can help you grow, engage, and retain your customers.
           </p>
       </header>


<section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
          As your business expands, the right email marketing tools become even more important. Small businesses can start with basic email campaigns, but as your customer base grows, your tools need to keep up. Choosing the <span className="text-orange-500 font-semibold">best business email marketing platform</span> can help you boost revenue, strengthen customer loyalty, and streamline your marketing. At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we simplify the process of finding the perfect email solution by offering features like automated workflows, mobile-friendly templates, and detailed performance reports.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Plus, the <span className="text-orange-500 font-semibold">top business email marketing platforms</span> offer advanced features such as dynamic content, subscriber lifecycle management, and smart sending strategies that can take your campaigns to the next level. With  <span className="text-orange-500 font-semibold">Compare-bazaar</span>, you can easily compare the leading email marketing solutions, understand their unique features, and select the one that best fits your business needs. Let us help you find the tools that will elevate your digital marketing and customer communication efforts.
              </span>
            )}
          </p>
          <button
            className="mt-2 text-[#000e54] font-medium flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'LESS -' : 'MORE +'}
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
              {/* Table of Contents - Left Sidebar */}
              <TableOfContents contents={contents} />
            </div>
            {/* main content */}
            <div className="flex-1 max-w-4xl">
            <section id="intro-email">
  <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
    {/* Header */}
    <header className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Business Email Marketing
      </h1>
    </header>

    {/* Main Content */}
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-6">
        Email marketing platforms help businesses build relationships, automate outreach, and
        measure performance at scale. Whether you're nurturing leads or boosting customer retention,
        the right tool can personalize messaging and maximize conversions through automation,
        segmentation, and analytics.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        This strategy is known as <strong>email relationship management</strong>. From welcome
        journeys to re-engagement campaigns, effective platforms enable timely and targeted
        communication across your lifecycle stages.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Below, we’ve reviewed the top business email marketing platforms for 2025 — including
        <strong> Campaign Monitor</strong>, <strong>Campaginer</strong>, <strong>Klaviyo</strong>,{" "}
        <strong>GetResponse</strong>, and <strong>HubSpot</strong>. Each tool brings unique
        strengths, whether you prioritize automation, design, data, or integration.
      </p>

      {/* Recommendations List */}
      <div className="space-y-3 mb-8">
        {/* Campaign Monitor */}
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-700">
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              Campaign Monitor:
            </a>{" "}
            Best for beautifully designed emails and branded customer experiences
          </p>
        </div>

        {/* Campaginer */}
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-700">
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              Campaginer:
            </a>{" "}
            Best for startups and SMBs seeking affordable bulk email tools
          </p>
        </div>

        {/* Klaviyo */}
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-700">
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              Klaviyo:
            </a>{" "}
            Best for e-commerce automation and data-driven segmentation
          </p>
        </div>

        {/* GetResponse */}
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-700">
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              GetResponse:
            </a>{" "}
            Best for all-in-one automation with landing pages, webinars, and CRM
          </p>
        </div>

        {/* HubSpot */}
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-700">
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              HubSpot:
            </a>{" "}
            Best for advanced CRM integration and lifecycle marketing automation
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

              <section id="emailmarketing-features">
             {/* Featured Partners Section */}
<div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Featured Partners</h2>
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <span>Advertisement</span>
      <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
        <span className="text-white font-bold">i</span>
      </div>
    </div>
  </div>

  {/* Ooma Office */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/camp.png" alt="Ooma Office Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        {/* <div className="text-xl font-bold text-gray-900">
          Ooma Office
          <br />
          <span className="text-lg">Email & VoIP Integration</span>
        </div> */}
      </div>
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <div className="text-gray-600 mb-1">Good For</div>
        <div className="font-medium text-gray-900">Small Businesses</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">VoIP, Email Templates, Call + Campaign Sync</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">Google, Microsoft, CRMs</div>
      </div>
    </div>
  </div>

  {/* RingEX */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/campai.png" alt="RingEX Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        {/* <div className="text-xl font-bold text-gray-900">
          RingEX
          <br />
          <span className="text-lg">Unified Communications</span>
        </div> */}
      </div>
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <div className="text-gray-600 mb-1">Good For</div>
        <div className="font-medium text-gray-900">Enterprise Marketing Teams</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">Email Campaign Sync, Video, Team Messaging</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">Salesforce, Outlook, Slack</div>
      </div>
    </div>
  </div>

  {/* Zoom */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/klay.png" alt="Zoom Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        {/* <div className="text-xl font-bold text-gray-900">
          Zoom
          <br />
          <span className="text-lg">Webinar Campaigns</span>
        </div> */}
      </div>
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <div className="text-gray-600 mb-1">Good For</div>
        <div className="font-medium text-gray-900">Virtual Events & Email Blasts</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">Webinars, Video + Email Follow-ups</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">Mailchimp, Salesforce, Eventbrite</div>
      </div>
    </div>
  </div>

  {/* NextivaONE */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/get.png" alt="NextivaONE Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        {/* <div className="text-xl font-bold text-gray-900">
          NextivaONE
          <br />
          <span className="text-lg">Smart Marketing Suite</span>
        </div> */}
      </div>
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <div className="text-gray-600 mb-1">Good For</div>
        <div className="font-medium text-gray-900">All-in-One Marketing & Communications</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">AI Email Tools, Automation, Call Integration</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">HubSpot, Zoho, CRMs</div>
      </div>
    </div>
  </div>

  {/* Vonage */}
  <div className="bg-gray-50 rounded-lg p-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image src="/images/hub.png" alt="Vonage Logo" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        {/* <div className="text-xl font-bold text-gray-900">
          Vonage
          <br />
          <span className="text-lg">Omnichannel Messaging</span>
        </div> */}
      </div>
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <div className="text-gray-600 mb-1">Good For</div>
        <div className="font-medium text-gray-900">Omnichannel Campaigns</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">Email, SMS, Voice, API Access</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">CRM Tools, Zapier, REST APIs</div>
      </div>
    </div>
  </div>
</div>
</section>
             <section id="platforms" className="mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                     Best Business Email Marketing Platforms
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-700 mx-auto rounded-full"></div>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-black text-sm sm:text-lg">
                               Platform
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-black text-sm sm:text-lg">
                              Expert Score
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-black text-sm sm:text-lg">
                              Best for
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-black text-sm sm:text-lg">
                              Key Features
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-black text-sm sm:text-lg">
                              Free Trial
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-black text-sm sm:text-lg">
                              Free Version
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-black text-sm sm:text-lg">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {emailData.map((crm, index) => (
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
                      * Scores and recommendations are based on expert analysis
                      and user reviews
                    </p>
                  </div>
                </div>
              </section>

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

            
          
             
              {/* Common Features Section */}
              <section id="email-features" className=" py-16 px-4 sm:px-6  max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">
            Powerful Email Marketing Features
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-800">
          All the tools you need to craft, send, and track email campaigns that really work
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-base text-black">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
              {/* How-to-choose */}
               <section id="email-howchoose" className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto bg-white rounded-xl  overflow-hidden">
        <div className="bg-[#000e54] p-6 md:p-8">
          <h1 className="text-4xl md:text-3xl font-semibold text-white">Choosing the Right Email Marketing Service</h1>
          <p className="text-blue-100 mt-2 text-base">A simple guide to help you pick the best email marketing tool for your business</p>
        </div>
        
        <div className="py-10 max-w-6xl mx-auto">
          <div className="mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-[#000e54]">
            <h2 className="text-xl font-semibold text-[#000e54]">Why Your Choice Matters</h2>
            <p className="text-gray-800 text-base mt-2">Picking the right email platform can boost your open rates, sales, and profits. This guide will make it easier for you to choose the best one.</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
              List Size and Growth Projections
            </h2>
            <div className="pl-10">
              <ul className="space-y-3">
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-base">Current subscriber count:</span> Different tools charge based on how many people are on your list. Check your list size so you don’t pay too much.
                  </div>
                </li>
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-base">Growth rate:</span> Pick a service that can grow with you without big price jumps. If you’re growing fast, look for flexible pricing.
                  </div>
                </li>
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-base text-gray-800">List segmentation needs:</span> Think about how detailed you want to organize your audience—more advanced features may cost more.
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
         <section className="mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
    Budget Considerations for Email Marketing Platforms
  </h2>
  <div className="pl-10">
    <ul className="space-y-3">
      <li className="flex items-start text-base">
        <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
          <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
        </div>
        <div>
          <span className="font-semibold text-base text-gray-800">Subscription pricing models:</span> Most email marketing platforms—like NextivaONE, Zoom, or Vonage—offer tiered plans based on contacts, emails sent, and features. Annual billing typically provides a better rate than monthly billing.
        </div>
      </li>
      <li className="flex items-start text-base">
        <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
          <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
        </div>
        <div>
          <span className="font-semibold text-base text-gray-800">Free and trial plans:</span> Platforms like Ooma Office and Zoom often include free trials or limited-feature free tiers—ideal for small businesses or teams testing before investing.
        </div>
      </li>
      <li className="flex items-start text-base">
        <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
          <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
        </div>
        <div>
          <span className="font-semibold text-base text-gray-800">Usage-based pricing:</span> For occasional senders, RingEX and similar platforms may offer pay-as-you-go options, where you only pay for emails you send—helpful for campaigns without ongoing needs.
        </div>
      </li>
    </ul>
  </div>
</section>

<section className="mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
    Feature Requirements for Email Marketing Platforms
  </h2>
  <div className="pl-10">
    <div className="grid md:grid-cols-2 gap-4">
      {/* Essential Features */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-800 text-base mb-2">Essential Features</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Drag-and-drop email editor
          </li>
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Mobile-responsive templates
          </li>
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Contact list management
          </li>
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Campaign performance reports
          </li>
        </ul>
      </div>

      {/* Advanced Features */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-base text-gray-800 mb-2">Advanced Features</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            A/B testing for subject lines and content
          </li>
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Automated workflows and drip campaigns
          </li>
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Advanced segmentation and tagging
          </li>
          <li className="flex items-center text-gray-800 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Predictive analytics and lead scoring
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

          
          <section className="mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
    Deliverability Rates
  </h2>
  <div className="pl-10">
    <p className="text-gray-800 text-base mb-4">
      No matter how well-designed your email is, it’s ineffective if it doesn’t land in the recipient’s inbox. Choose platforms with high deliverability scores, authenticated sending domains, and solid sender reputations. 
    </p>

    <p className="text-gray-800 text-base mb-4">
      Business email platforms like <strong>NextivaONE</strong> and <strong>Vonage</strong> often include built-in spam compliance, domain reputation management, and DKIM/SPF authentication—key factors that reduce the chances of emails landing in the spam folder.
    </p>

    <div className="bg-blue-50 border-l-4 border-[#000e54] p-4 rounded-r">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-base text-[#000e54]">
            <strong>Pro Tip:</strong> Look for platforms with a deliverability rate of 95% or higher. Services like <strong>Zoom Email & Chat</strong> and <strong>RingEX</strong> prioritize authenticated sending, which improves inbox placement and reduces bounce rates.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

         {/* <section className="mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">5</span>
    Integration Capabilities
  </h2>
  <div className="pl-10">
    <p className="text-gray-800 text-base mb-4">
      Your email marketing solution should connect seamlessly with your core business tools to streamline workflows, automate communication, and improve data accuracy.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="font-semibold text-base text-gray-800">CRM Platforms</p>
        <p className="text-sm text-gray-600">Salesforce, Zoho, HubSpot</p>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="font-semibold text-base text-gray-800">VoIP & UCaaS</p>
        <p className="text-sm text-gray-600">Ooma, Vonage, RingEX</p>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="font-semibold text-base text-gray-800">E-commerce Tools</p>
        <p className="text-sm text-gray-600">Shopify, WooCommerce</p>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="font-semibold text-base text-gray-800">Video & Chat</p>
        <p className="text-sm text-gray-600">Zoom, Microsoft Teams</p>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="font-semibold text-base text-gray-800">Analytics Suites</p>
        <p className="text-sm text-gray-600">Google Analytics, Power BI</p>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="font-semibold text-base text-gray-800">Calendars & Scheduling</p>
        <p className="text-sm text-gray-600">Calendly, Google Calendar</p>
      </div>
    </div>

    <p className="text-gray-800 text-base">
      Choose platforms like <strong>NextivaONE</strong> or <strong>Zoom Email & Chat</strong> that offer robust built-in integrations with CRMs and VoIP tools. Look for open API access for advanced workflows and automation triggers.
    </p>
  </div>
</section> */}

{/*           
        <section className="mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">6</span>
    Ease of Use and Support
  </h2>
  <div className="pl-10">
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <h3 className="font-semibold text-base text-gray-800 mb-3">Key Considerations for Email Platform Usability:</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
          </svg>
          <span className="text-gray-800 text-base">
            Is the dashboard intuitive? Platforms like <strong>NextivaONE</strong> and <strong>Vonage</strong> provide user-friendly drag-and-drop editors and campaign templates.
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
          </svg>
          <span className="text-gray-800 text-base">
            What kind of customer support is available? Look for 24/7 live chat, email, or phone support like what <strong>Ooma Office</strong> and <strong>RingEX</strong> offer.
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
          </svg>
          <span className="text-gray-800 text-base">
            Is there a help center, video tutorials, or a knowledge base? Platforms like <strong>Zoom Email & Chat</strong> offer searchable documentation and onboarding tours.
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
          </svg>
          <span className="text-gray-800 text-base">
            Is white-glove onboarding or a dedicated account manager available? This is common with <strong>NextivaONE</strong> and <strong>RingCentral</strong> enterprise plans.
          </span>
        </li>
      </ul>
    </div>
  </div>
</section> */}

          
         <section className="mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">5</span>
    Compliance and Security
  </h2>
  <div className="pl-10">
    <div className="flex flex-col md:flex-row gap-4">
      {/* Legal Compliance */}
      <div className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 border-[#000e54]">
        <h3 className="font-semibold text-gray-800 mb-2 text-base">Legal Compliance</h3>
        <p className="text-gray-800 text-base">Ensure your chosen email platform complies with international and local laws:</p>
        <ul className="mt-2 space-y-1">
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            GDPR (EU): General Data Protection Regulation
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            CAN-SPAM (US): Commercial Email Regulation
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            CASL (Canada): Anti-Spam Law
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Regional Laws (e.g., India’s DPDP Act)
          </li>
        </ul>
      </div>

      {/* Security Features */}
      <div className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 border-[#000e54]">
        <h3 className="font-semibold text-gray-800 mb-2 text-base">Security Features</h3>
        <p className="text-gray-800 text-base">Choose a platform that protects user data with enterprise-grade security:</p>
        <ul className="mt-2 space-y-1">
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Two-factor authentication (2FA)
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Data encryption at rest and in transit
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            HTTPS-secured dashboards
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Third-party security certifications & audits
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


  </div>
  </div>
   {/* faq */}
      
                    <FAQ faqsData={faqData} />
  </section>
              {/* FAQs */}
             
            </div>
          </div>
        </div>
      </div>

      <section id="d-article">
        <Article
          title="Related Articles"
          items={articles}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
        />
      </section>

      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={Testimonials}
      /> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmailMarketingForm/>
      </Modal>
    </>
  );
};

export default BestEmail;


