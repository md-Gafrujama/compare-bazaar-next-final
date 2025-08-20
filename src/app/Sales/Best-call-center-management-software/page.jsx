"use client";

import React, { useState, useEffect } from "react";
import PhoneSystemCardCommon from "../../../components/PhoneSystemCardCommon";
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

import Image from "next/image";
import TableOfContents from "../../../components/TableOfContents";

import Advice from "../../../components/Advice ";
import Modal from "../../../components/Modal";
import CallCenterForm from '../../../components/CallCenterForm';
import FAQ from "../../../components/FAQ";
// import   WhitePaperForm from './WhitePaperForm';
import Article from "../../../components/ArticleLayoutCommon";
import Head from "next/head";

const BestCallSoftware = () => {
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
  GoTo: {
    title: "GoTo Contact Center – Best for small businesses",
    logo: "/images/goto.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.4/5" },
      { label: "Pricing", score: "4.1/5" },
      { label: "General features and Interface", score: "4.2/5" },
      { label: "Core features", score: "4.3/5" },
      { label: "Advanced features", score: "4.0/5" },
      { label: "Integration and compatibility", score: "4.2/5" },
      { label: "UX", score: "4.3/5" },
    ],
    pros: [
      "Affordable pricing and user-friendly setup",
      "Strong live call routing and IVR features",
      "Good analytics for small teams"
    ],
    cons: ["Limited scalability for large enterprises"],
    why: {
      intro: `GoTo Contact Center is ideal for small businesses due to its simple setup, intuitive UI, and essential features that don’t overwhelm. It provides reliable voice services and fundamental tools without high complexity or cost.`,
      bullets: [
        "The IVR and call queueing system is easy to configure and supports small team workflows efficiently.",
        "Includes real-time analytics and reporting to track agent performance and call stats."
      ],
      outro: `If you’re looking for a straightforward, no-fuss contact center solution that handles customer calls effectively, GoTo delivers the essentials with minimal overhead.`
    }
  },
  RingCentral: {
    title: "RingCentral Contact Center – Best for unified communications",
    logo: "/images/ringcentral.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.5/5" },
      { label: "Pricing", score: "4.0/5" },
      { label: "General features and Interface", score: "4.6/5" },
      { label: "Core features", score: "4.8/5" },
      { label: "Advanced features", score: "4.5/5" },
      { label: "Integration and compatibility", score: "4.9/5" },
      { label: "UX", score: "4.4/5" },
    ],
    pros: [
      "Supports voice, video, SMS, and chat",
      "Highly customizable dashboards",
      "Excellent uptime and scalability"
    ],
    cons: ["Pricing may be high for smaller teams"],
    why: {
      intro: `RingCentral is a top-tier solution for teams needing omnichannel communication. Its platform integrates video, voice, SMS, and team messaging in a single interface—ideal for streamlined operations.`,
      bullets: [
        "Advanced AI tools enhance agent assistance and call routing.",
        "Its cloud-based infrastructure ensures high availability and performance."
      ],
      outro: `Whether managing inbound queries or outbound campaigns, RingCentral helps unify communications across channels for better customer experiences.`
    }
  },
  GoAnswer: {
    title: "Go Answer – Best for 24/7 live answering",
    logo: "/images/goanswer.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.3/5" },
      { label: "Pricing", score: "4.2/5" },
      { label: "General features and Interface", score: "4.1/5" },
      { label: "Core features", score: "4.5/5" },
      { label: "Advanced features", score: "4.0/5" },
      { label: "Integration and compatibility", score: "4.3/5" },
      { label: "UX", score: "4.1/5" },
    ],
    pros: [
      "Real human receptionists available 24/7",
      "Great for legal intake and appointment booking",
      "US-based support teams"
    ],
    cons: ["Not ideal for large-scale outbound operations"],
    why: {
      intro: `Go Answer focuses on delivering high-quality live receptionist services, making it perfect for businesses that value human connection in every customer interaction.`,
      bullets: [
        "Offers legal intake, medical answering, and multilingual support.",
        "Excellent choice for SMBs and solo practitioners wanting full-time front desk coverage."
      ],
      outro: `For businesses prioritizing live, human-led communication, Go Answer offers round-the-clock professionalism without in-house staff.`
    }
  },
  Twilio: {
    title: "Twilio Flex – Best for developer customization",
    logo: "/images/twilio.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.6/5" },
      { label: "Pricing", score: "4.3/5" },
      { label: "General features and Interface", score: "4.4/5" },
      { label: "Core features", score: "4.7/5" },
      { label: "Advanced features", score: "4.9/5" },
      { label: "Integration and compatibility", score: "5/5" },
      { label: "UX", score: "4.5/5" },
    ],
    pros: [
      "Fully programmable interface",
      "High-level workflow automation",
      "Supports custom channel development"
    ],
    cons: ["Requires development resources to maximize"],
    why: {
      intro: `Twilio Flex is the ultimate flexible call center platform. Its programmability lets developers build truly custom solutions tailored to business needs.`,
      bullets: [
        "Supports voice, messaging, video, and custom integrations.",
        "Great for tech-savvy organizations looking to scale and innovate."
      ],
      outro: `If you're looking for total control over your call center design and workflow, Twilio Flex offers unmatched customization and API depth.`
    }
  },
  Salesforce: {
    title: "Salesforce Service Cloud – Best for enterprises",
    logo: "/images/salesforce.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "Overall Score", score: "4.7/5" },
      { label: "Pricing", score: "4.0/5" },
      { label: "General features and Interface", score: "4.6/5" },
      { label: "Core features", score: "4.9/5" },
      { label: "Advanced features", score: "4.8/5" },
      { label: "Integration and compatibility", score: "5/5" },
      { label: "UX", score: "4.6/5" },
    ],
    pros: [
      "Powerful AI tools for service automation",
      "Built-in case management and knowledge base",
      "Deep integration with other Salesforce apps"
    ],
    cons: ["Steep learning curve and high cost for small orgs"],
    why: {
      intro: `Salesforce Service Cloud is built for scale. It delivers the depth, flexibility, and enterprise-grade reliability required by large organizations and fast-growing service teams.`,
      bullets: [
        "Includes Einstein AI for smarter customer service.",
        "Customizable to meet regulatory and workflow needs across industries."
      ],
      outro: `If you're managing a large team or multiple service channels, Salesforce Service Cloud offers the infrastructure and intelligence you need to grow.`
    }
  }
};

  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const systems = [
    {
      name: "GoTo",
      logo: "/images/goto.png",
     bestFor: "Best for Small Businesses Management",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "•	Agent dashboard and softphone",
      support: "24/7 customer support",
      link: "#",

    },
    {
      name: "RingCentral",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Inbound Customer Services",
      price: "Starts at $20  per user/month",
      videoCapacity: "Google, Microsoft integrations",
      support: "24/7 customer support",
      link: "#",
  
    },
    {
      name: "Goanswer",
      logo: "/images/goan.png",
      bestFor: "Best Outsourced Call Center Service",
      price: "Starts at $175/mo for 100 minutes/user.",
      videoCapacity: "Scalable, bilingual, portal access",
      support: "24/7 bilingual live agents",
      link: "#",
 
    },
    {
      name: "Twiilio",
      logo: "/images/twilio.png",
      bestFor: "Best for Complex Communication",
      price: "Starts at $15  per user/month",
      videoCapacity: "MMS support & message tracking",
      support: "24/7 customer support",
      link: "#",

    },
    {
      name: "Salesforce",
      logo: "/images/cloud.png",
      bestFor: "Best for Improving Customer Service",
      price: "Starts at $25 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "Dynamic Email Marketing and Analytics",
      link: "#",
 
    },
  ];
 

  const faqData = [
    {
      question: "How does your call center management system improve customer service?",
      answer: [
        "Intelligent call routing based on agent skills and customer needs",
        "Real-time monitoring and coaching tools for quality assurance",
        "Omnichannel capabilities connecting voice, chat, email, and social media",
        "Customer journey tracking across all touchpoints",
        "Smart IVR systems with natural language processing"
      ]
    },
    {
      question: "What features does your system offer for agent performance management?",
      answer: [
        "Real-time dashboards and performance metrics",
        "Call recording and quality scoring",
        "Automated coaching based on conversation analysis",
        "Gamification and incentive management tools",
        "Skill-based scheduling and development tracking"
      ]
    },
    {
      question: "How does your system handle call overflow during peak times?",
      answer: "Our system uses predictive analytics to forecast call volumes and automatically scales resources. It includes dynamic IVR messaging, callback options, intelligent queue management, and can instantly activate overflow call centers or remote agents when thresholds are reached."
    },
    {
      question: "Can the system help with compliance and call recording regulations?",
      answer: [
        "Yes, our compliance features include:",
        "Automatic call recording with consent management",
        "PCI DSS compliant payment processing",
        "HIPAA-compliant data handling options",
        "Customizable disclosure statements",
        "Comprehensive audit trails for all interactions"
      ]
    },
    {
      question: "How does your workforce management functionality work?",
      answer: "Our WFM system uses historical data and machine learning to predict call volumes and optimal staffing needs. It manages agent schedules, monitors adherence in real-time, allows for shift bidding and swapping, handles time-off requests, and optimizes breaks to maintain service levels."
    },
    {
      question: "What reporting and analytics capabilities does the system offer?",
      answer: "We provide comprehensive analytics including call metrics (AHT, FCR, abandonment rates), quality scores, customer satisfaction, agent performance, and trend analysis. Custom reports can be scheduled, exported, and visualized through interactive dashboards with drill-down capabilities."
    },
    {
      question: "How secure is customer data in your system?",
      answer: [
        "We employ enterprise-grade security including:",
        "SOC 2 Type II and GDPR compliance",
        "Encryption for all data at rest and in transit",
        "Role-based access controls with multi-factor authentication",
        "Automatic PCI redaction from recordings",
        "Regular penetration testing and security audits"
      ]
    },
    {
      question: "Can your system integrate with our existing CRM and business tools?",
      answer: "Yes, our platform offers pre-built integrations with major CRM systems like Salesforce, Microsoft Dynamics, and Zendesk. We also integrate with popular business tools and provide open APIs for custom integrations with your unique technology stack."
    },
    {
      question: "What kind of support do you offer for implementation and ongoing service?",
      answer: "We provide 24/7 technical support, a dedicated implementation team, and ongoing account management. Implementation includes discovery workshops, custom configuration, data migration, agent training, and a phased rollout approach. Post-implementation, we conduct quarterly business reviews to ensure you're maximizing ROI."
    },
    {
      question: "How does your system utilize AI and automation to improve efficiency?",
      answer: [
        "AI-powered features include:",
        "Conversational IVR and intelligent virtual assistants",
        "Automated post-call summaries and disposition codes",
        "Sentiment analysis and automatic escalation triggers",
        "Predictive routing based on customer history and needs",
        "Agent assist tools providing real-time guidance during calls"
      ]
    }
  ];

   const contents = [
    {
      id: "intro",
      title: "Introduction to Call Center Management Software",
      active:false,
    },
    {
      id: "software",
      title: "Our top 5 Call Center Software recommendations",
      active:false,
    },
    {
      id: "usecase",
      title: "Key Call Center Software Features to Consider for Your Use Case",
      active:false,
    },
    {
      id: "rightcenter",
      title: "Choosing the right call center management software",
      active:false,
    },
    { id: "faqs", title: "FAQs", active:false, },
 
   
     
    ];
  const callData = [
  {
    id: 1,
    name: "GoTo Contact Center",
    image: "/images/goto.png",
    alt: "GoTo Contact Center",
    expertScore: 4.4,
    bestFor: "Best for small businesses",
    visitUrl: "goto",
    keyFeatures: [
      "IVR and call queuing",
      "Real-time analytics",
      "Simple setup and UI"
    ],
    freeTrial: true,
    freeVersion: false
  },
  {
    id: 2,
    name: "RingCentral Contact Center",
    image: "/images/ringcentral.png",
    alt: "RingCentral Contact Center",
    expertScore: 4.5,
    bestFor: "Best for unified communications",
    visitUrl: "ringcentral",
    keyFeatures: [
      "Omnichannel routing",
      "AI-based agent assistance",
      "Customizable dashboards"
    ],
    freeTrial: true,
    freeVersion: false
  },
  {
    id: 3,
    name: "Go Answer",
    image: "/images/goanswer.png",
    alt: "Go Answer",
    expertScore: 4.3,
    bestFor: "Best for 24/7 live answering",
    visitUrl: "goanswer",
    keyFeatures: [
      "Live receptionist services",
      "Legal intake support",
      "Appointment scheduling"
    ],
    freeTrial: false,
    freeVersion: false
  },
  {
    id: 4,
    name: "Twilio Flex",
    image: "/images/twilio.png",
    alt: "Twilio Flex",
    expertScore: 4.6,
    bestFor: "Best for developer customization",
    visitUrl: "twilio",
    keyFeatures: [
      "Fully programmable interface",
      "Custom workflow engine",
      "Omnichannel support"
    ],
    freeTrial: true,
    freeVersion: true
  },
  {
    id: 5,
    name: "Salesforce Service Cloud",
    image: "/images/salesforce.png",
    alt: "Salesforce Service Cloud",
    expertScore: 4.7,
    bestFor: "Best for enterprises",
    visitUrl: "salesforce",
    keyFeatures: [
      "AI-powered customer service",
      "Case management",
      "Knowledge base integration"
    ],
    freeTrial: true,
    freeVersion: false
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

   const articles = [
    {
      id: 1,
      title: "Cloud-Based vs On-Premise Call Center Solutions: Which is Right for Your Business?",
      image: "/images/img1call1.png",
      author: "Alex",
      date: "March 15, 2023",
      excerpt:
        "When choosing call center software, one of the first decisions is between cloud-based and on-premise solutions. Cloud systems offer scalability and remote access, while on-premise provides more control...",
      link: "#",
    },
    {
      id: 2,
      title: "Top 5 Call Center Software Platforms in 2024: Features and Comparison",
      image: "/images/img2call2.png",
      author: "Alex",
      date: "July 8, 2023",
      excerpt:
        "From Genesys to Five9, today's call center platforms offer advanced features like AI-powered routing, omnichannel support, and real-time analytics. We compare the top solutions based on pricing...",
      link: "#",
    },
    {
      id: 3,
      title: "Essential Features to Look for in Call Center Management Software",
      image: "/images/img3call3.jpg",
      author: "Alex",
      date: "February 10, 2024",
      excerpt:
        "Modern call center software should include more than just basic calling capabilities. Look for features like intelligent call routing, workforce management, CRM integration, and comprehensive reporting...",
      link: "#",
    },
  ];

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classNameList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const additionalText =
  "Modern call center solutions have transformed dramatically, evolving from basic phone banks to robust cloud-based systems with VoIP, AI, and omnichannel capabilities. These platforms enable real-time agent monitoring, intelligent call routing, CRM integration, and customer sentiment analysis. When choosing a provider, it's essential to assess factors like reliability, uptime SLAs, integration support, agent scalability, and reporting tools. Top solutions also unify voice, messaging, video, and help desk tools into a streamlined contact center experience, improving both efficiency and customer satisfaction.";


  return (
    <>
          <Head>
              <title>Best Call Center Management Software | Compare Features & Free Quotes – Compare-Bazaar</title>
              <meta name="description" content="Find the best call center management software for your team. Compare top solutions side-by-side, explore key features, and get free, no-obligation quotes—fast, accurate, and tailored to your needs." />
              <link rel="canonical" href="https://www.compare-bazaar.com/Callcenter" />
            </Head>
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Call Center Management Software of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we understand the importance of exceptional customer service for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best call center software</span> that provides comprehensive contact center solutions with advanced features for modern enterprises. The <span className="text-orange-500 font-semibold">top CCaaS platforms</span> offer intelligent call routing, omnichannel support, real-time monitoring, and seamless CRM integrations to help you manage customer interactions more effectively. Whether you're running a small support team or a large contact center, the right software can transform your customer experience and operational efficiency.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your customer service operations grow, having the right call center tools becomes critical. Small teams might manage with basic solutions, but as your contact volume increases, it's essential that your software scales accordingly. Implementing the <span className="text-orange-500 font-semibold">best call center management system</span> can significantly enhance your ability to improve customer satisfaction, reduce handle times, and boost agent productivity. At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we help you find the perfect solution that aligns with your business needs, offering features like IVR, automatic call distribution, workforce management, and detailed reporting.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best call center solutions</span> provide advanced capabilities such as sentiment analysis, predictive dialing, quality management, and AI-powered self-service options to optimize your customer interactions. With <span className="text-orange-500 font-semibold">Compare-bazaar</span>, you can easily compare the top call center software providers, evaluate their features, and choose the one that best fits your operational requirements. Let us guide you to the tools that will take your customer service to the next level.
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


           {/* <Feedback/> */}
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
            <section id="intro">
  <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
    {/* Header */}
    <header className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Call Center Management Software
      </h1>
    </header>

    {/* Main Content */}
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-6">
        Call center management software helps streamline inbound and outbound communication processes, improve agent productivity, monitor real-time performance, and enhance customer experience. These platforms integrate tools for voice, messaging, and analytics to help support, sales, and service teams operate at scale.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Whether you're running a small customer service team or a large enterprise support center, these tools provide automation, omnichannel capabilities, and detailed reporting to support better decision-making.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Below, we highlight the best call center management software solutions of 2025, each offering standout features to meet diverse business needs.
      </p>

      {/* Recommendations List */}
      <div className="space-y-3 mb-8">
        {/* GoTo */} 
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-700">
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium underline">
              GoTo Contact Center:
            </a>{" "}
            Best for remote team support and flexibility
          </p>
        </div>

        {/* RingCentral */} 
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-700">
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium underline">
              RingCentral Contact Center:
            </a>{" "}
            Best for enterprise-grade call routing and analytics
          </p>
        </div>

        {/* GoAnswer */} 
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-700">
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium underline">
              GoAnswer:
            </a>{" "}
            Best for 24/7 live answering services
          </p>
        </div>

        {/* Twilio */} 
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-700">
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium underline">
              Twilio Flex:
            </a>{" "}
            Best for customizable cloud contact centers
          </p>
        </div>

        {/* Salesforce */} 
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-700">
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium underline">
              Salesforce Service Cloud:
            </a>{" "}
            Best for CRM-integrated call center management
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

             

              <section id="software" className="mt-8">
                <div className="mx-auto">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Our top 5 Call Center Software recommendations
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
                              CRM Platform
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
                          {callData.map((call, index) => (
                            <tr
                              key={call.id}
                              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                              }`}
                            >
                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                  <div className="flex items-center justify-center flex-shrink-0">
                                    <img
                                      src={call.image}
                                      alt={call.alt}
                                      className="max-w-16 max-h-8 sm:max-w-32 sm:max-h-12 object-contain"
                                    />
                                  </div>
                                  <div className="text-center sm:text-left">
                                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                                      {call.name}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                  <span className="text-lg sm:text-2xl font-bold text-gray-800">
                                    {call.expertScore}
                                  </span>
                                  <div className="flex space-x-1 scale-75 sm:scale-100">
                                    {renderStars(call.expertScore)}
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {call.bestFor}
                                </span>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6">
                                <ul className="space-y-1 sm:space-y-2">
                                  {call.keyFeatures.map((feature, idx) => (
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
                                  {call.freeTrial ? (
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
                                  {call.freeVersion ? (
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

              {/* find your prodoct management software */}
            
              {/* 1CRM products details */}
             
              {/* Common Features Section */}
             <section id="usecase" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Key Call Center Software Features to Consider for Your Use Case
    </h1>

    {/* Introduction */}
    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
        While some call center platforms clearly underperform, most solutions are only as valuable as their fit for your specific needs. Using a platform outside its intended scope can lead to disappointment—not because the software is bad, but because it’s the wrong tool for the job.
      </p>
    </div>

    {/* Routing & Contact Management */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Intelligent Routing & Contact Management
      </h2>
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 mb-6">
        The backbone of any call center software is its ability to route calls efficiently. Features like IVR (Interactive Voice Response) and ACD (Automatic Call Distribution) help direct calls to the right agent, improving customer experience and minimizing wait time.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Automatic Call Distribution (ACD)</li>
        <li>Interactive Voice Response (IVR)</li>
        <li>Omnichannel routing (voice, email, chat)</li>
        <li>Contact tagging and history tracking</li>
        <li>Call queues and skill-based routing</li>
      </ul>
    </div>

    {/* Call Recording */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">
        Call Recording & Quality Monitoring
      </h2>
      <p className="text-base text-gray-700 mb-6">
        Recording calls isn’t just about compliance—it’s a valuable tool for training, quality assurance, and improving customer service. Some platforms also offer speech analytics and sentiment analysis.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Automatic call recording and archiving</li>
        <li>Live call monitoring</li>
        <li>Call whisper and barge-in features</li>
        <li>Sentiment and keyword analysis</li>
        <li>Dispute resolution support</li>
      </ul>
    </div>

    {/* Integrations */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">
        Platform Integrations
      </h2>
      <p className="text-base text-gray-700 mb-4">
        The best call center tools integrate smoothly with your existing CRM, ticketing systems, communication apps, and workforce management tools. This reduces context-switching and boosts agent productivity.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>CRM integrations (HubSpot, Salesforce, Zoho)</li>
        <li>Helpdesk and ticketing tools (Zendesk, Freshdesk)</li>
        <li>Workforce management platforms</li>
        <li>Email & calendar sync (Google, Outlook)</li>
        <li>APIs and webhooks for custom workflows</li>
      </ul>
    </div>

    {/* Automation */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">
        Call & Workflow Automation
      </h2>
      <p className="text-base text-gray-700 mb-4">
        Automating tasks like follow-up emails, ticket creation, or even outbound dialing can save time and reduce human error. Automation should streamline—not complicate—your support process.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Power and predictive dialers</li>
        <li>Automatic ticket generation</li>
        <li>Trigger-based workflows</li>
        <li>Email or SMS follow-up scheduling</li>
        <li>Voicemail drops</li>
      </ul>
    </div>

    {/* Analytics */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">
        Analytics & Reporting
      </h2>
      <p className="text-base text-gray-700 mb-4">
        Actionable reporting allows managers to track performance, measure KPIs, and optimize operations. Some tools even provide real-time dashboards and AI-driven insights.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Call volume trends</li>
        <li>Agent performance metrics</li>
        <li>First call resolution (FCR) rates</li>
        <li>Service-level agreement (SLA) tracking</li>
        <li>Custom dashboard creation</li>
      </ul>
    </div>

    {/* Data Privacy */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">
        Data Privacy & Compliance
      </h2>
      <p className="text-base text-gray-700 mb-4">
        From GDPR to HIPAA to PCI, security standards vary by industry. Choose a platform that meets your compliance requirements and protects customer data at every touchpoint.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>End-to-end call encryption</li>
        <li>Role-based permissions</li>
        <li>Audit logs</li>
        <li>Secure call storage</li>
        <li>3rd-party security certifications</li>
      </ul>
    </div>

    {/* Workforce Management */}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">
        Workforce & Schedule Management
      </h2>
      <p className="text-base text-gray-700 mb-4">
        Managing agents effectively is critical. Look for tools that simplify scheduling, forecasting, and tracking so your team stays productive without burnout.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Shift scheduling and time tracking</li>
        <li>Agent availability dashboards</li>
        <li>Forecasting call volumes</li>
        <li>Real-time occupancy monitoring</li>
        <li>Absenteeism alerts</li>
      </ul>
    </div>
  </div>
</section>
              {/* How-to-choose */}
            <section id="rightcenter" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    {/* Main Heading */}
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Choosing the right call center management software
    </h1>

    {/* First Paragraph */}
    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        After exploring the landscape of call center software solutions, it’s clear there’s no shortage of options. That’s actually a good thing — it gives you the flexibility to find a system that’s tailored to your team’s size, complexity, and communication needs. If you’re running a small or mid-sized support team, you may prioritize ease of use and cost-effectiveness. For enterprise-level contact centers, robust tools like predictive dialers, real-time dashboards, omnichannel routing, and deep integrations with existing infrastructure may take center stage.
      </p>
    </div>
  </div>
</section>

              {/* FAQs */}
              <FAQ faqsData={faqData} />
            </div>
          </div>
        </div>
      </div>

      <Article title="Latest Articles" items={articles} />
      <Advice />

      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={crmTestimonials}
      /> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallCenterForm/>
      </Modal>
    </>
  );
};

export default BestCallSoftware;
