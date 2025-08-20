'use client'

import React, { useState, useEffect  } from 'react';
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
import PhoneSystemCardCommon from '../../../components/PhoneSystemCardCommon';
//  import Feedback from './Feedback';
import WebsiteBuildingForm from '../../../components/WebsiteBuildingForm';
import TableOfContents from "../../../components/TableOfContents";
import FAQ from "../../../components/FAQ";
import Article from "../../../components/ArticleLayoutCommon";
import Modal from '../../../components/Modal';

// import WebsiteBuilderComparison from '../../../components/WebsiteBuilderComparison';

const BestWebsiteBuildingPlatform= () => {
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
  const [activeTab, setActiveTab] = useState("features");
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const homeTestimonials = [
    {
      avatar: "P",
      avatarColor: "bg-purple-600",
      name: "Riya Sinhg.",
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
 const systems = [
  {
    name: "Wix",
    logo: "/images/wix.png",
    bestFor: "Best Templates",
    price: "Starts at $17/month",
    videoCapacity: "800+ integrations",
    support: "14-day money-back guarantee",
    link: "#",
  },
  {
    name: "Godaddy",
    logo: "/images/godaddy.png",
    bestFor: "Best for Added Tools",
    price: "Starts at $16.99/month",
    videoCapacity: "Integrations for WordPress sites",
    support: "7-day free trial",
    link: "#",
  },
  {
    name: "Mochahost",
    logo: "/images/mochahost.png",
    bestFor: "Best for Businesses on a Budget",
    price: "Starts at $3.99/month",
    videoCapacity: "15+ integrations",
    support: "No Free trial",
    link: "#",
  },
  {
    name: "Web.com",
    logo: "/images/web.png",
    bestFor: "Best for Beginners",
    price: "Starts at $19.99/month",
    videoCapacity: "No app store",
    support: "No free trial",
    link: "#",
  },
  {
    name: "Bluehost",
    logo: "/images/bluehost.png",
    bestFor: "Best for WordPress",
    price: "Starts at $11.99/month",
    videoCapacity: "WordPress plug-ins available",
    support: "30-day money-back guarantee",
    link: "#",
  },
];
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
    Wix: {
      title: "Wix – Best for beginners and small businesses",
      logo: "/images/wix.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.5/5" },
        { label: "Pricing", score: "4.2/5" },
        { label: "General features and Interface", score: "4.8/5" },
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "4.1/5" },
        { label: "Integration and compatibility", score: "4.3/5" },
        { label: "UX", score: "4.9/5" },
      ],
      pros: [
        "Intuitive drag-and-drop website builder",
        "Extensive template library with professional designs",
        "Comprehensive app market for extended functionality",
      ],
      cons: ["Limited customization compared to traditional hosting"],
      why: {
        intro: `Wix is best for beginners and small businesses because it delivers an unmatched combination of simplicity, design flexibility, and comprehensive features that make website creation accessible to everyone. Its high scores in user experience and interface design reflect a real-world efficacy that non-technical users can rely on.`,
        bullets: [
          "Wix scores an impressive 98/100 in ease of use, with perfect scores in drag-and-drop functionality and template design, essential for users without coding experience. Its ability to provide AI-powered design suggestions and mobile optimization further cements its position as the go-to platform for beginners.",
          "Additionally, Wix offers a more seamless website building experience across all devices compared to competitors.",
        ],
        outro: `Wix's AI-powered Wix ADI (Artificial Design Intelligence) creates personalized websites automatically, crucial for users who want professional results quickly. The App Market provides hundreds of integrations, ensuring all business needs are covered. Wix's unique visual editor allows real-time design changes, providing immediate feedback irrespective of technical skill level.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Wix is a comprehensive website building platform that includes
                hosting, design tools, e-commerce capabilities, and more,
                placing it in a similar bracket to all-in-one solutions. It's
                accomplished this while maintaining user-friendly interfaces,
                thanks to its focus on visual design and ease of use.
              </p>
              <p className="text-black">
                That prioritization of user experience carries over to their
                suite of website building tools, including their hosting
                infrastructure. With features and tools comparable to its peers
                in this list, but with the added bonus of designing the platform
                to function seamlessly for users of all technical levels.
              </p>
              <p className="text-black mb-4">
                The platform is tailored to meet the needs of businesses of all
                sizes, with a free plan and flexible upgrade options. Its
                pricing structure is competitive, offering value for money and
                reflecting an understanding of diverse business models.
              </p>
              <p className="text-black mb-4">
                Wix's interface is intuitive, scoring a 95/100 in design, and it
                supports virtually no learning curve, ensuring new users can
                quickly adapt. The platform's customizability is a standout
                feature, allowing businesses to tailor their websites to their
                unique brand and processes.
              </p>
              <p className="text-black mb-4">
                In terms of product design, Wix has been crafted with the user
                in mind, offering a balance between functionality and
                simplicity. This balance is critical for user adoption and
                long-term engagement with the platform.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                AI-Powered Website Builder (Wix ADI):
              </h4>
              <p className="text-black mb-4">
                Wix offers an AI-powered website builder called Wix ADI that can
                create personalized websites based on your business needs,
                making website creation smarter and faster.
              </p>
              <h4 className="text-lg font-bold mb-2">Drag-and-Drop Editor:</h4>
              <p className="text-black mb-4">
                This feature provides complete design freedom with an intuitive
                drag-and-drop interface, allowing you to place elements exactly
                where you want them on your website.
              </p>

              <h4 className="text-lg font-bold mb-2">App Market:</h4>
              <p className="text-black">
                Wix's App Market features hundreds of apps to extend your
                website's functionality, from e-commerce tools to marketing
                automation and customer management solutions.
              </p>
              <h4 className="text-lg font-bold mb-2">Mobile Optimization:</h4>
              <p className="text-black">
                Provides automatic mobile optimization ensuring your website
                looks perfect on all devices, with mobile-specific editing
                capabilities.
              </p>
              <h4 className="text-lg font-bold mb-2">
                E-commerce Integration:
              </h4>
              <p className="text-black">
                Wix offers comprehensive e-commerce capabilities including
                product management, payment processing, inventory tracking, and
                online store customization.
              </p>
              <h4 className="text-lg font-bold mb-2">
                SEO and Analytics Tools:
              </h4>
              <p className="text-black">
                Offers built-in SEO tools and detailed analytics capabilities,
                enabling precise performance tracking and search engine
                optimization.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <p className="font-bold  text-black mb-4">
                Price:<span classname="font-light"> $0</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Basic website building tools</li>
                <li>Wix subdomain</li>
                <li>500MB storage</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Combo:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light"> $16/month billed annually</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Custom domain for 1 year</li>
                <li>3GB storage</li>
                <li>Remove Wix ads</li>
                <li>Site analytics</li>
                <li>Form builder</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Unlimited:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light"> $22/month billed annually</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Combo, plus:</li>
                <li>10GB storage</li>
                <li>Site boost app</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Pro:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $27/month billed annually
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>20GB storage</li>
                <li>Professional logo</li>
                <li>Social media logo files</li>
                <li>Advanced analytics</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">VIP:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light"> $45/month billed annually</span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light"> All Pro features, plus:</span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>35GB storage</li>
                <li>Priority support</li>
                <li>Professional site review</li>
              </ul>
              <p className="text-black">
                For more detailed information on pricing and features, visit the
                Wix Pricing page.
              </p>
            </>
          ),
        },
      },
    },

    GoDaddy: {
      title: "GoDaddy – Best for domain management and hosting",
      logo: "/images/godaddy.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.3/5" },
        { label: "Pricing", score: "4.1/5" },
        { label: "General features and Interface", score: "4.2/5" },
        { label: "Core features", score: "4.5/5" },
        { label: "Advanced features", score: "4.0/5" },
        { label: "Integration and compatibility", score: "4.6/5" },
        { label: "UX", score: "4.1/5" },
      ],
      pros: [
        "Comprehensive domain management services",
        "Reliable hosting infrastructure with 99.9% uptime",
        "24/7 customer support across multiple channels",
        "Integrated business tools and marketing features",
        "Wide range of hosting solutions for all business sizes",
      ],
      cons: [
        "Website builder less intuitive than specialized platforms",
        "Additional features often require separate purchases",
        "Can be overwhelming for complete beginners",
      ],
      why: {
        intro: `GoDaddy stands out as the best solution for domain management and hosting due to its comprehensive infrastructure, reliable performance, and integrated business services. It excels in providing a one-stop solution for businesses that need both domain registration and robust hosting capabilities.`,
        bullets: [
          "GoDaddy's hosting infrastructure scored 94/100 in our evaluation, with exceptional uptime reliability, server performance, and scalability options that surpass most competitors in the traditional hosting space.",
          "The platform's domain management system allows businesses to easily register, transfer, and manage multiple domains with advanced DNS controls, making it accessible for business users while maintaining enterprise-grade functionality.",
          "Unlike competitors that focus primarily on website building, GoDaddy integrates domain services, hosting, email, and business tools into a unified platform, providing end-to-end web presence management.",
        ],
        outro: `While Wix offers superior website building capabilities and orangehost provides excellent WordPress integration, GoDaddy's comprehensive domain and hosting foundation gives it a distinct advantage for organizations requiring robust web infrastructure with integrated business services. It's particularly well-suited for businesses that need reliable hosting with extensive domain management capabilities.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                GoDaddy is a comprehensive web services platform that combines
                domain registration, web hosting, website building, and business
                tools in a single solution. As one of the world's largest domain
                registrars, it enables organizations to establish and maintain
                their online presence with enterprise-grade infrastructure.
              </p>
              <p className="text-black">
                The platform originated from domain registration services and
                has evolved to include advanced hosting capabilities, business
                email, e-commerce solutions, and digital marketing tools.
                GoDaddy's strength lies in its ability to provide reliable web
                infrastructure while maintaining comprehensive business support
                services.
              </p>
              <p className="text-black mb-4">
                What sets GoDaddy apart is its integrated approach to web
                presence management, where every aspect of your online business
                is supported by robust infrastructure. This makes it ideal for
                organizations with growing web traffic, multiple domains, or
                complex hosting requirements.
              </p>
              <p className="text-black mb-4">
                The platform offers global data centers, advanced security
                features, and 24/7 support that make it suitable for
                business-critical implementations across various industries and
                geographic locations.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Domain Management:</h4>
              <p className="text-black mb-4">
                Comprehensive domain registration and management system with
                advanced DNS controls, bulk domain tools, and automated renewal
                options for managing multiple domains efficiently.
              </p>
              <h4 className="text-lg font-bold mb-2">Web Hosting:</h4>
              <p className="text-black mb-4">
                Reliable hosting infrastructure with shared, VPS, and dedicated
                server options, featuring 99.9% uptime guarantee and scalable
                resources for growing businesses.
              </p>
              <h4 className="text-lg font-bold mb-2">Website Builder:</h4>
              <p className="text-black mb-4">
                Integrated website building tools with templates, drag-and-drop
                functionality, and mobile optimization for creating professional
                websites quickly.
              </p>
              <h4 className="text-lg font-bold mb-2">Business Email:</h4>
              <p className="text-black mb-4">
                Professional email hosting with custom domain addresses,
                calendar integration, and collaboration tools for business
                communication.
              </p>
              <h4 className="text-lg font-bold mb-2">E-commerce Tools:</h4>
              <p className="text-black mb-4">
                Complete online store functionality including product
                management, payment processing, inventory tracking, and
                marketing tools for selling online.
              </p>
              <h4 className="text-lg font-bold mb-2">Security Features:</h4>
              <p className="text-black">
                Advanced security including SSL certificates, malware scanning,
                daily backups, and DDoS protection for comprehensive website
                security.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a href="/">Free Trial </a>Available (30 days for hosting)
              </p>
              <h4 className="text-lg font-bold mb-2">Economy:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $7.99/month (first year, then $9.99/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>1 website</li>
                <li>100GB storage</li>
                <li>Unmetered bandwidth</li>
                <li>Free domain for 1 year</li>
                <li>SSL certificate</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Deluxe:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $9.99/month (first year, then $12.99/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Unlimited websites</li>
                <li>Unlimited storage</li>
                <li>Unlimited bandwidth</li>
                <li>Free domain for 1 year</li>
                <li>Free business email</li>
                <li>Website backup</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Ultimate:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $12.99/month (first year, then $16.99/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Deluxe, plus:</li>
                <li>Premium SSL certificate</li>
                <li>Malware scanning</li>
                <li>SEO tools</li>
                <li>2X processing power</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Maximum:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $19.99/month (first year, then $24.99/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Ultimate, plus:</li>
                <li>4X processing power</li>
                <li>Advanced security monitoring</li>
                <li>Premium support</li>
              </ul>
              <p className="text-black">
                For enterprise hosting and custom solutions, contact GoDaddy
                directly for a personalized quote.
              </p>
            </>
          ),
        },
      },
    },

    MochaHost: {
      title: "MochaHost – Best for budget-conscious hosting",
      logo: "/images/mochahost.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.1/5" },
        { label: "Pricing", score: "4.8/5" },
        { label: "General features and Interface", score: "3.9/5" },
        { label: "Core features", score: "4.0/5" },
        { label: "Advanced features", score: "3.7/5" },
        { label: "Integration and compatibility", score: "4.2/5" },
        { label: "UX", score: "3.8/5" },
      ],
      pros: [
        "Extremely competitive pricing with lifetime plans",
        "Generous storage and bandwidth allocations",
        "100% uptime guarantee with SLA",
        "Free website migration service",
        "No setup fees or hidden costs",
      ],
      cons: [
        "Limited advanced features compared to premium hosts",
        "Customer support can be slower during peak times",
        "Interface less polished than major competitors",
      ],
      why: {
        intro: `MochaHost stands out as the best budget-conscious hosting solution due to its exceptional value proposition, generous resource allocations, and commitment to affordable pricing without compromising essential hosting features. It excels in providing maximum value for cost-conscious businesses and individuals.`,
        bullets: [
          "MochaHost's pricing scored 96/100 in our evaluation, with exceptional value-to-feature ratios, lifetime plan options, and resource allocations that significantly exceed most competitors in the budget hosting category.",
          "The platform's commitment to no hidden fees and transparent pricing allows businesses to predict hosting costs accurately, making it accessible for startups and small businesses while maintaining reliable performance.",
          "Unlike premium hosts that charge separately for basic features, MochaHost includes essential tools like SSL certificates, website builders, and migration services in all plans, providing comprehensive hosting solutions at budget-friendly prices.",
        ],
        outro: `While GoDaddy offers superior infrastructure and Wix provides better website building tools, MochaHost's focus on affordability and value gives it a distinct advantage for organizations with limited budgets who still need reliable hosting services. It's particularly well-suited for small businesses, startups, and personal projects that require professional hosting without premium pricing.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                MochaHost is a budget-focused web hosting provider that combines
                affordable pricing with reliable hosting services and generous
                resource allocations. Founded with the mission to make quality
                web hosting accessible to everyone, it offers comprehensive
                hosting solutions without the premium price tag.
              </p>
              <p className="text-black">
                The platform has built its reputation on providing exceptional
                value through competitive pricing, lifetime hosting plans, and
                no-hidden-fee policies. MochaHost's strength lies in its ability
                to deliver essential hosting features at prices that make
                professional web presence accessible to small businesses and
                individuals.
              </p>
              <p className="text-black mb-4">
                What sets MochaHost apart is its commitment to transparency and
                affordability, where every hosting plan includes essential
                features without additional charges. This makes it ideal for
                budget-conscious users, startups, and small businesses that need
                reliable hosting without breaking the bank.
              </p>
              <p className="text-black mb-4">
                The platform offers various hosting types including shared, VPS,
                and dedicated servers, with a focus on providing maximum value
                and resources at each pricing tier, making professional hosting
                accessible to a broader audience.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Lifetime Hosting Plans:
              </h4>
              <p className="text-black mb-4">
                Unique lifetime hosting options that provide permanent hosting
                solutions for a one-time payment, offering exceptional long-term
                value for personal and business websites.
              </p>
              <h4 className="text-lg font-bold mb-2">100% Uptime Guarantee:</h4>
              <p className="text-black mb-4">
                Comprehensive uptime guarantee with SLA backing, ensuring your
                website remains accessible with automatic failover and redundant
                infrastructure.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Free Website Migration:
              </h4>
              <p className="text-black mb-4">
                Professional website migration service included at no extra
                cost, with technical support to ensure smooth transitions from
                other hosting providers.
              </p>
              <h4 className="text-lg font-bold mb-2">Unlimited Resources:</h4>
              <p className="text-black mb-4">
                Generous resource allocations including unlimited bandwidth,
                storage, and email accounts on most plans, providing room for
                growth without additional costs.
              </p>
              <h4 className="text-lg font-bold mb-2">Website Builder:</h4>
              <p className="text-black mb-4">
                Integrated website building tools with templates and
                drag-and-drop functionality, making it easy to create
                professional websites without technical knowledge.
              </p>
              <h4 className="text-lg font-bold mb-2">Security Features:</h4>
              <p className="text-black">
                Essential security tools including free SSL certificates, daily
                backups, and malware scanning to protect your website and data
                without additional charges.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a href="/">Free Trial </a>Available (30 days money-back
                guarantee)
              </p>
              <h4 className="text-lg font-bold mb-2">Soho:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $1.95/month (first year, then $7.95/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>1 website</li>
                <li>Unlimited storage</li>
                <li>Unlimited bandwidth</li>
                <li>Free domain for 1 year</li>
                <li>Free SSL certificate</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Business:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $3.95/month (first year, then $9.95/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Unlimited websites</li>
                <li>Unlimited storage</li>
                <li>Unlimited bandwidth</li>
                <li>Free domain for 1 year</li>
                <li>Free SSL certificate</li>
                <li>Website builder</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Reseller:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $7.95/month (first year, then $12.95/month)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Business, plus:</li>
                <li>Reseller capabilities</li>
                <li>White label options</li>
                <li>Advanced control panel</li>
                <li>Priority support</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Lifetime Plans:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  Starting at $149 (one-time payment)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Lifetime hosting</li>
                <li>No monthly fees</li>
                <li>All standard features included</li>
                <li>Transferable license</li>
              </ul>
              <p className="text-black">
                For custom hosting solutions and enterprise pricing, contact
                MochaHost directly for a personalized quote.
              </p>
            </>
          ),
        },
      },
    },
    WebCom: {
      title: "Web.com – Best for decentralized teams",
      logo: "/images/web.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.5/5" },

        { label: "Pricing", score: "4.2/5" },
        { label: "General features and Interface", score: "4.3/5" },
        { label: "Core features", score: "4.8/5" },
        { label: "Advanced features", score: "4.4/5" },
        { label: "Inegration and compatibility", score: "5/5" },
        { label: "UX", score: "4.3/5" },
      ],
      pros: [
        "Remote-first functionality and support",
        "Amble collaboration tools for decentralized teams",
        "Additional tool sets for other critical business needs",
      ],
      cons: ["Free/low-cost plans have reduced functionality"],
      why: {
        intro: `Web.com is best for decentralized teams because it delivers a combination of flexibility, connectivity, and comprehensive features that are unmatched in the market. Its high scores in collaboration tools and mobile app functionality are not just numbers—they reflect a real-world efficacy that decentralized teams can rely on..`,
        bullets: [
          "Web.com scores an impressive 96/100 in advanced features, with perfect scores in multi-channel support and collaboration tools, essential for decentralized teams. Its ability to provide customer geo-location features and VOIP support further cements its position as the go-to platform for teams operating remotely. ",
          "Additionally, Web.com offers a more seamless experience across all devices compared to competitors.",
        ],
        outro: `Web.com's AI-powered assistant offers smart forecasting, crucial for coordinating dispersed teams. Real-time notifications keep teams in sync with multi-channel communications. orangeprint guides remote teams through each process stage, providing clarity. Web.com's unique multi-channel support covers everything from email to social media, ensuring all team interactions are captured, irrespective of location..`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Web.com is part of a larger platform that includes website
                building, hosting, marketing, and more, placing it in a
                comprehensive bracket for business solutions. It's accomplished
                this while still maintaining low overhead costs, thanks to its
                remote-first work environment.
              </p>
              <p className="text-black">
                That prioritization of decentralized collaboration carries over
                to their suite of software solutions, including their platform.
                With features and tools comparable to its peers in this list,
                but with the added bonus of designing the platform to function
                across time zones and national boundaries.
              </p>
              <p className="text-black mb-4">
                The software is tailored to meet the needs of businesses of all
                sizes, with a free plan and no contract requirement. Its pricing
                structure is competitive, offering value for money and
                reflecting an understanding of diverse business models.
              </p>
              <p className="text-black mb-4">
                Web.com's interface is intuitive, scoring a 75/100 in design,
                and it supports a mild learning curve, ensuring new users can
                quickly adapt. The platform's customizability is a standout
                feature, allowing businesses to tailor the solution to their
                unique processes.
              </p>
              <p className="text-black mb-4">
                In terms of product design, Web.com has been crafted with the
                user in mind, offering a balance between functionality and
                simplicity. This balance is critical for user adoption and
                long-term engagement with the platform.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">AI-Powered Assistant:</h4>
              <p className="text-black mb-4">
                Web.com offers an AI-powered assistant that can predict trends,
                anomalies, and conversions, making business forecasting smarter.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Real-time Notifications:
              </h4>
              <p className="text-black mb-4">
                This feature provides real-time notifications from across
                multiple channels like phone, email, social media, and live
                chat, ensuring you never miss an interaction.
              </p>

              <h4 className="text-lg font-bold mb-2">orangeprint:</h4>
              <p className="text-black">
                Web.com's orangeprint feature helps businesses design and automate
                their processes, ensuring that team members know exactly what to
                do at each stage of the workflow.
              </p>
              <h4 className="text-lg font-bold mb-2">Meeting scheduling:</h4>
              <p className="text-black">
                Provides a tool to simplify meeting scheduling by syncing with
                your calendar and allowing contacts to book time directly.
              </p>
              <h4 className="text-lg font-bold mb-2">Multi-Channel Support:</h4>
              <p className="text-black">
                Web.com offers multi-channel support for phone, email, live
                chat, social media, and in-person meetings, keeping your team
                connected no matter how you communicate.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Advanced analytics and forecasting:{" "}
              </h4>
              <p className="text-black">
                Offers customizable reports and dashboards with advanced
                analytics capabilities, enabling precise forecasting and
                performance tracking.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <p className="font-bold  text-black mb-4">
                Price:<span classname="font-light"> $0 (for 3 users)</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Basic functionalities</li>
                <li>Limited to 3 users</li>
                <li>Lead and contact management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Standard Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $20/user/month billed monthly or $14/user/month billed
                  annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Business tracking</li>
                <li>Custom dashboards</li>
                <li>Multiple pipelines</li>
                <li>Business forecasting</li>
                <li>Social media management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Professional Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $35/user/month billed monthly or $23/user/month billed
                  annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Standard, plus:t</li>
                <li>Advanced customizations</li>
                <li>Process management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $52/user/month billed annually
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Advanced customization</li>
                <li>Territory management</li>
                <li>
                  More extensive analytics and business intelligence tools
                </li>
                <li>AI-driven insights</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Ultimate Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $52/user/month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  All Enterprise features, plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Higher storage</li>
                <li>Enhanced customization</li>
                <li>Advanced automation capabilities</li>
              </ul>
              <p className="text-black">
                For more detailed information on pricing and features, visit the
                Web.com Pricing page.
              </p>
            </>
          ),
        },
      },
    },

   bluehost: {
  title: "BlueHost – Best for WordPress hosting and beginners",
  logo: "/images/bluehost.png",
  button: {
    text: "Visit Website",
    link: "#",
  },
  scores: [
    { label: "Overall Score", score: "4.2/5" },
    { label: "Pricing", score: "4.4/5" },
    { label: "General features and Interface", score: "4.3/5" },
    { label: "Core features", score: "4.1/5" },
    { label: "Advanced features", score: "3.9/5" },
    { label: "Integration and compatibility", score: "4.5/5" },
    { label: "UX", score: "4.2/5" },
  ],
  pros: [
    "Official WordPress recommended hosting provider",
    "Excellent beginner-friendly interface and setup",
    "Strong customer support with 24/7 availability",
    "Free domain name for the first year",
    "One-click WordPress installation",
  ],
  cons: [
    "Higher renewal rates after introductory period",
    "Limited storage on basic plans",
    "Some advanced features require higher-tier plans",
  ],
  why: {
    intro: `BlueHost stands out as the best platform for WordPress hosting and beginners due to its official WordPress partnership, user-friendly interface, and comprehensive hosting solutions. It excels in providing reliable web hosting with excellent customer support and seamless WordPress integration.`,
    bullets: [
      "BlueHost's WordPress hosting scored 88/100 in our evaluation, with exceptional performance in WordPress optimization, one-click installations, and managed WordPress features that make it ideal for both beginners and experienced users.",
      "The platform's beginner-friendly approach includes guided setup processes, intuitive control panels, and comprehensive tutorials, making it accessible for users with no technical background while maintaining professional-grade hosting capabilities.",
      "Unlike competitors that offer generic hosting solutions, BlueHost provides specialized WordPress hosting with automatic updates, enhanced security features, and WordPress-specific performance optimization that delivers superior results for WordPress sites.",
    ],
    outro: `While other hosting providers offer competitive features, BlueHost's official WordPress recommendation and focus on user experience gives it a distinct advantage for WordPress users and beginners. It's particularly well-suited for small to medium businesses, bloggers, and anyone looking to establish a professional online presence without technical complexity.`,
    extras: {
      "About ": (
        <>
          <p className="text-black mb-4">
            BlueHost is one of the world's leading web hosting providers and an official WordPress recommended hosting partner. Founded in 2003, the company has built a reputation for reliable hosting services, excellent customer support, and user-friendly solutions that cater to both beginners and experienced web developers.
          </p>
          <p className="text-black">
            The platform specializes in WordPress hosting but offers a comprehensive range of hosting solutions including shared hosting, VPS hosting, dedicated servers, and managed WordPress hosting. BlueHost's strength lies in its ability to simplify complex hosting processes while maintaining enterprise-level reliability and performance.
          </p>
          <p className="text-black mb-4">
            What sets BlueHost apart is its focus on WordPress optimization and beginner-friendly features. The company provides specialized WordPress hosting environments with automatic updates, enhanced security, and performance optimization specifically designed for WordPress sites.
          </p>
          <p className="text-black mb-4">
            BlueHost serves millions of websites worldwide and offers 24/7 customer support, a 30-day money-back guarantee, and industry-leading uptime reliability that makes it suitable for businesses of all sizes.
          </p>
        </>
      ),
      "Key Features": (
        <>
          <h4 className="text-lg font-bold mb-2">WordPress Integration:</h4>
          <p className="text-black mb-4">
            Official WordPress recommended hosting with one-click WordPress installation, automatic updates, and WordPress-specific performance optimization for seamless website management.
          </p>
          <h4 className="text-lg font-bold mb-2">Website Builder:</h4>
          <p className="text-black mb-4">
            Drag-and-drop website builder with hundreds of professional templates, making it easy for beginners to create stunning websites without coding knowledge.
          </p>
          <h4 className="text-lg font-bold mb-2">
            Domain Management:
          </h4>
          <p className="text-black mb-4">
            Free domain name for the first year, domain privacy protection, and comprehensive domain management tools with easy DNS configuration and subdomain creation.
          </p>
          <h4 className="text-lg font-bold mb-2">Security Features:</h4>
          <p className="text-black mb-4">
            Free SSL certificates, SiteLock security, spam protection, and automated backups to keep websites secure and protected from threats.
          </p>
          <h4 className="text-lg font-bold mb-2">Email Services:</h4>
          <p className="text-black mb-4">
            Professional email hosting with unlimited email accounts, webmail access, and email forwarding to establish professional communication channels.
          </p>
          <h4 className="text-lg font-bold mb-2">Customer Support:</h4>
          <p className="text-black">
            24/7 customer support via phone, chat, and email with knowledgeable support staff, comprehensive knowledge base, and video tutorials for self-help.
          </p>
        </>
      ),
      Pricing: (
        <>
          <p className="text-black mb-4">
            <a href="/">30-Day Money-Back Guarantee</a> Available
          </p>
          <h4 className="text-lg font-bold mb-2">Basic:</h4>
          <p className="font-bold text-black mb-4">
            Price:{" "}
            <span className="font-light">
              $2.95/month (introductory rate, renews at $9.99/month)
            </span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Host 1 website</li>
            <li>50 GB SSD storage</li>
            <li>Free domain for 1 year</li>
            <li>Free SSL certificate</li>
            <li>Unmetered bandwidth</li>
          </ul>
          <h4 className="text-lg font-bold mb-2">Plus:</h4>
          <p className="font-bold text-black mb-4">
            Price:{" "}
            <span className="font-light">
              $5.45/month (introductory rate, renews at $14.99/month)
            </span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Host unlimited websites</li>
            <li>Unlimited SSD storage</li>
            <li>Free domain for 1 year</li>
            <li>Free SSL certificate</li>
            <li>Unmetered bandwidth</li>
            <li>Spam protection</li>
          </ul>
          <h4 className="text-lg font-bold mb-2">Choice Plus:</h4>
          <p className="font-bold text-black mb-4">
            Price:{" "}
            <span className="font-light">
              $5.45/month (introductory rate, renews at $19.99/month)
            </span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Everything in Plus, plus:</li>
            <li>Domain privacy protection</li>
            <li>Automated backups</li>
            <li>Malware scanning</li>
            <li>Enhanced security features</li>
          </ul>
          <h4 className="text-lg font-bold mb-2">Pro:</h4>
          <p className="font-bold text-black mb-4">
            Price:{" "}
            <span className="font-light">
              $13.95/month (introductory rate, renews at $28.99/month)
            </span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Everything in Choice Plus, plus:</li>
            <li>High-performance hosting</li>
            <li>Dedicated IP address</li>
            <li>Advanced SEO tools</li>
            <li>Priority customer support</li>
          </ul>
          <p className="text-black">
            BlueHost also offers specialized WordPress hosting plans starting at $2.95/month and VPS hosting solutions for advanced users requiring more resources.
          </p>
        </>
      ),
    },
  },
},
  };
  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  // const crmTestimonials = [
  //   {
  //     avatar: "M",
  //     avatarColor: "bg-teal-600",
  //     name: "Michael W.",
  //     date: "05/25/2024",
  //     stars: 5,
  //     text: "This CRM transformed our sales process completely. The contact management and pipeline visibility have increased our conversion rates by 27% in just three months.",
  //   },
  //   {
  //     avatar: "T",
  //     avatarColor: "bg-orange-500",
  //     name: "Teresa J.",
  //     date: "04/18/2024",
  //     stars: 4,
  //     text: "The automation features save our team hours every week. Email sequences and follow-up reminders ensure no lead falls through the cracks.",
  //   },
  //   {
  //     avatar: "R",
  //     avatarColor: "bg-pink-600",
  //     name: "Robert K.",
  //     date: "03/30/2024",
  //     stars: 5,
  //     text: "Integration with our phone system was seamless. Having call recordings automatically attached to contact records has improved our training and customer service.",
  //   },
  //   {
  //     avatar: "L",
  //     avatarColor: "bg-violet-500",
  //     name: "Lisa M.",
  //     date: "02/12/2024",
  //     stars: 5,
  //     text: "The reporting features give our management team real-time visibility into sales performance. Custom dashboards help us make data-driven decisions daily.",
  //   },
  //   {
  //     avatar: "B",
  //     avatarColor: "bg-emerald-600",
  //     name: "Brian T.",
  //     date: "01/07/2024",
  //     stars: 4,
  //     text: "Mobile app is powerful enough that our field sales team can manage their entire workflow on the go. The offline mode is particularly valuable.",
  //   },
  //   {
  //     avatar: "C",
  //     avatarColor: "bg-cyan-500",
  //     name: "Christina R.",
  //     date: "04/06/2024",
  //     stars: 5,
  //     text: "Customer support has been exceptional. Their onboarding team ensured our data migration went smoothly and trained our staff thoroughly.",
  //   },
  // ];

  const contents = [
    {
      id: "what-is-website-builder",
      title: "What Is a Website Builder?",
      active: false,
    },
    {
      id: "website-builder",
      title: "How Does a Website Builder Platform Work?",
      active: false,
    },
    {
      id: "website-recommendations",
      title: "Compare Our Best Picks",
      active: false,
    },
    {
      id: "reviews",
      title: "Reviews",
      active: false,
    },
    {
      id: "reviews",
      title: "How Much Will Using a Website Builder Cost?",
      active: false,
    },
    {
      id: "how-to-choose",
      title: "How to Choose a Website Builder",
      active: false,
    },
    {
      id: "website-builder-features",
      title: "What Are Some Features of Website Builder Services?",
      active: false,
    },
    {
      id: "methodology",
      title: "Methodology",
      active: false,
    },
    {
      id: "faqs",
      title: "Frequently Asked Questions (FAQ)",
      active: false,
    },
  ];
  const websiteData = [
  {
    id: 1,
    name: "Wix",
    image: "/images/wix.png",
    alt: "Wix",
    expertScore: 4.5,
    bestFor: "Best for beginners",
    visitUrl: "wix",
    keyFeatures: [
      "Drag-and-drop website builder",
      "AI website creation",
      "App marketplace",
    ],
    freeTrial: true,
    freeVersion: true,
    aiIntegration: true,
    customerSupport: "24/7 support",
  },
  {
    id: 2,
    name: "GoDaddy",
    image: "/images/godaddy.png",
    alt: "GoDaddy",
    expertScore: 4.5,
    bestFor: "Best for domain registration",
    visitUrl: "godaddy",
    keyFeatures: [
      "Domain registration",
      "Website builder",
      "Marketing tools",
    ],
    freeTrial: true,
    freeVersion: true,
    aiIntegration: true,
    customerSupport: "24/7 phone support",
  },
  {
    id: 3,
    name: "Mochahost",
    image: "/images/mochahost.png",
    alt: "Mochahost",
    expertScore: 4.2,
    bestFor: "Best for affordable hosting",
    visitUrl: "mochahost",
    keyFeatures: ["Unlimited hosting", "Free website builder", "SSD storage"],
    freeTrial: true,
    freeVersion: false,
    aiIntegration: false,
    customerSupport: "24/7 live chat",
  },
  {
    id: 4,
    name: "Web.com",
    image: "/images/web.png",
    alt: "Web.com",
    expertScore: 4.3,
    bestFor: "Best for professional websites",
    visitUrl: "webcom",
    keyFeatures: [
      "Professional design templates",
      "SEO optimization",
      "Mobile-responsive designs",
    ],
    freeTrial: true,
    freeVersion: false,
    aiIntegration: true,
    customerSupport: "Phone and email support",
  },
  {
    id: 5,
    name: "BlueHost",
    image: "/images/bluehost.png",
    alt: "BlueHost",
    expertScore: 4.6,
    bestFor: "Best for WordPress hosting",
    visitUrl: "bluehost",
    keyFeatures: [
      "WordPress recommended hosting",
      "Free domain for first year",
      "Free SSL certificate",
      "One-click WordPress install",
    ],
    freeTrial: true,
    freeVersion: false,
    aiIntegration: true,
    customerSupport: "24/7 phone, chat, and email support",
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

  const articles1 = [
    {
      id: 1,
      title: "Top 5 Website Builders for Small Businesses in 2025",
      image: "/images/art1websitebuilder.jpg",
      author: "Catie",
      date: "April 10, 2025",
      excerpt:
        "Choosing the right website builder can make or break your online presence. For small businesses looking to establish a professional web presence without coding knowledge...",
      link: "#",
    },
    {
      id: 2,
      title: "WordPress vs. Wix vs. Squarespace: Choosing the Right Platform",
      image: "/images/art2website.webp",
      author: "Catie",
      date: "March 21, 2025",
      excerpt:
        "With so many website building platforms available today, deciding which one fits your needs can be overwhelming. Each platform offers unique features, pricing structures, and...",
      link: "#",
    },
    {
      id: 3,
      title: "How to Build a Professional Website in 7 Simple Steps",
      image: "/images/art3website.webp",
      author: "Catie",
      date: "February 15, 2025",
      excerpt:
        "Creating a professional website doesn't have to be complicated or expensive. By following these seven proven steps, you can build a stunning website that attracts visitors and converts...",
      link: "#",
    },
  ];
 

  




  // faq
  const phoneFAQs = [
    {
      question: "What's the easiest website builder for beginners?",
      answer:
        "QuickSite and Wix are the most beginner-friendly options with drag-and-drop interfaces, AI-assisted design, and no coding required. They offer hundreds of templates and intuitive editors.",
    },
    {
      question: "Which builder is best for e-commerce websites?",
      answer:
        "Shopify and BusinessBuilder specialize in e-commerce with built-in payment processing, inventory management, and marketing tools. For WordPress users, WooCommerce is also excellent.",
    },
    {
      question: "Can I switch builders later if I'm not satisfied?",
      answer:
        "Yes, but migration can be complex. Content can usually be transferred, but designs often need rebuilding. Choose carefully to avoid future hassles.",
    },
    {
      question: "How important is mobile responsiveness?",
      answer:
        "Extremely important. Over 50% of web traffic comes from mobile devices. All modern builders create mobile-responsive sites, but always test your specific design.",
    },
    {
      question: "What hidden costs should I watch for?",
      answer:
        " Look for transaction fees (e-commerce), premium template costs, domain registration, additional bandwidth/storage fees, and charges for removing builder branding.",
    },
    {
      question: "How do I know if a builder will scale with my business?",
      answer:
        "Check maximum page/product limits, traffic handling capacity, available integrations, and enterprise plan options. BuilderPro and Webflow scale best for growing businesses.",
    },
  ];

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  const advantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5" />
          <path d="M3 21h18a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
          <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M17 18h-2m-3 0H5" />
          <rect x="8" y="14" width="8" height="4" rx="1" />
        </svg>
      ),
      title: 'Highly trained and skilled professionals'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <line x1="12" y1="8" x2="12" y2="8" />
          <path d="M15 4.5A3 3 0 0 0 9 6a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2c0 1.1-.9 2-2 2" />
          <path d="M9 12a2 2 0 0 1 0-4" />
        </svg>
      ),
      title: 'Expertise in technology'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14 2v4" />
          <path d="M18 4l-2 2" />
        </svg>
      ),
      title: 'Enables 24*7 customer support'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Preferred destination for outsourcing'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Cost-effective customer support'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="2" x2="9" y2="4" />
          <line x1="15" y1="2" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="22" />
          <line x1="15" y1="20" x2="15" y2="22" />
          <line x1="20" y1="9" x2="22" y2="9" />
          <line x1="20" y1="14" x2="22" y2="14" />
          <line x1="2" y1="9" x2="4" y2="9" />
          <line x1="2" y1="14" x2="4" y2="14" />
        </svg>
      ),
      title: 'Modernized Infrastructure and technology'
    }
  ];

//values
const valueProps = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 15C45 12.9 44.1 11.1 42.6 9.6C41.1 8.1 39.3 7.2 37.2 7.2H27C27 5.1 26.1 3.3 24.6 1.8C23.1 0.3 21.3 0 19.2 0H15C12.9 0 11.1 0.9 9.6 2.4C8.1 3.9 7.2 5.7 7.2 7.8V37.2C7.2 39.3 8.1 41.1 9.6 42.6C11.1 44.1 12.9 45 15 45H37.2C39.3 45 41.1 44.1 42.6 42.6C44.1 41.1 45 39.3 45 37.2V15Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
        </svg>
      ),
      title: 'Experts',
      description: '2 decades of experience'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 7.5C33.9 7.5 37.5 8.7 40.8 11.1C44.1 13.5 46.2 16.8 47.1 21H39C38.4 19.2 37.5 17.7 36.3 16.5C35.1 15.3 33.6 14.4 31.8 13.8C30 13.2 28.2 13.2 26.4 13.8C24.6 14.4 23.1 15.3 21.9 16.5C20.7 17.7 19.8 19.2 19.2 21H10.5C11.4 16.8 13.5 13.5 16.8 11.1C20.1 8.7 24 7.5 28.5 7.5H30Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <path d="M31.8 46.2C33.6 45.6 35.1 44.7 36.3 43.5C37.5 42.3 38.4 40.8 39 39H47.1C46.2 43.2 44.1 46.5 40.8 48.9C37.5 51.3 33.9 52.5 30 52.5H28.5C24 52.5 20.1 51.3 16.8 48.9C13.5 46.5 11.4 43.2 10.5 39H19.2C19.8 40.8 20.7 42.3 21.9 43.5C23.1 44.7 24.6 45.6 26.4 46.2C28.2 46.8 30 46.8 31.8 46.2Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <path d="M37.5 30C37.5 31.6 36.9 33 35.7 34.2C34.5 35.4 33.1 36 31.5 36H27C27 37.6 26.4 39 25.2 40.2C24 41.4 22.6 42 21 42H19.5C17.9 42 16.5 41.4 15.3 40.2C14.1 39 13.5 37.6 13.5 36V24C13.5 22.4 14.1 21 15.3 19.8C16.5 18.6 17.9 18 19.5 18H21C22.6 18 24 18.6 25.2 19.8C26.4 21 27 22.4 27 24H31.5C33.1 24 34.5 24.6 35.7 25.8C36.9 27 37.5 28.4 37.5 30Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <circle cx="38" cy="26" r="4" stroke="#3B6794" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Minds',
      description: '2000+ agile thinking minds'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="24" stroke="#000e54" strokeWidth="2" fill="none"/>
          <path d="M30 12L34.9 23.2L47 24.7L38.5 33.4L40.8 45.7L30 39.8L19.2 45.7L21.5 33.4L13 24.7L25.1 23.2L30 12Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
        </svg>
      ),
      title: 'Results',
      description: '6 Fortune 500 clients'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20V8M20 8L15 13M20 8L25 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M30 20V8M30 8L25 13M30 8L35 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M40 20V8M40 8L35 13M40 8L45 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M20 50V40M30 50V40M40 50V40" stroke="#000e54" strokeWidth="2"/>
          <circle cx="20" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="33" r="4" stroke="#000e54" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Growth',
      description: '20+ languages'
    }
  ];
  const additionalText = " The website builder landscape has evolved significantly, with AI-powered tools and drag-and-drop editors making professional web design accessible to everyone. Today's platforms offer advanced features like responsive templates, e-commerce integrations, SEO tools, and marketing automation. These solutions help businesses create stunning websites without coding knowledge. When evaluating different builders, consider factors like customization options, scalability, loading speed, and third-party integrations. Many platforms now include hosting, domain management, and analytics in a single package.";

return (
  <>
    <div className="max-w-6xl mx-auto p-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Website Building Platforms of 2025</h1>

        <p className="text-gray-800 text-base md:text-base mb-4">
          At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we understand how crucial a professional online presence is for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best website builders</span> that combine ease-of-use with powerful features for modern businesses. The <span className="text-orange-500 font-semibold">top web design platforms</span> offer intuitive drag-and-drop editors, mobile-responsive templates, and built-in SEO tools to help you create a high-performing website. Whether you're launching a portfolio, blog, or online store, the right website builder can transform your digital presence without requiring technical skills.
        </p>
      </header>

      <section className="mb-6">
        <p className="text-gray-800 text-base md:text-base">
          As your online presence grows, having the right website tools becomes essential. Beginners might start with simple page builders, but as your business expands, you'll need a platform that scales with your needs. Choosing the <span className="text-orange-500 font-semibold">best website building platform</span> can significantly impact your ability to attract visitors, convert leads, and grow your brand. At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we help you find the perfect solution offering features like e-commerce functionality, blogging tools, form builders, and analytics integrations.
          {showMore && (
            <span className="block mt-3">
              {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best website platforms</span> provide advanced capabilities like AI content generation, membership areas, multilingual support, and automated backups. With <span className="text-orange-500 font-semibold">Compare-bazaar</span>, you can easily compare top website builders, evaluate their templates and features, and choose the one that matches your vision. Let us guide you to the tools that will make website creation effortless and effective.
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
                 {/* Hero Section */}
      <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl  bg-gradient-to-r from-[#000e54] to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-semibold mb-6">Which Website Builder is Best For You?</h1>
          <p className="text-xl md:text-xl max-w-xl mx-auto">
            Compare the top website building platforms to find your perfect match based on needs, skills, and budget.
          </p>
        </div>
      </div>
              {/* What Is a Website Builder Section */}
              <section id="what-is-website-builder" className="mb-8 mt-6">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      What Is a Website Builder?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A website builder is a web-based software program used to
                      create websites. These easy-to-use platforms don't require
                      engineering or coding experience, making them the perfect
                      DIY tool for businesses wanting to create their own
                      website. The programs usually offer templates and a
                      WYSIWYG ("what you see is what you get") editor that
                      simplifies the process of building your site.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      It's now common for website builders to help ensure your{" "}
                      <a
                        href="#"
                        className="text-orange-600 hover:text-orange-700 underline"
                      >
                        site is mobile-friendly
                      </a>{" "}
                      and has a responsive design. Many boast e-commerce tools
                      that allow you to incorporate an online store and process
                      customer payments through your website. With the
                      increasing popularity of artificial intelligence, some
                      website builder vendors are incorporating AI tools to
                      further ease the site creation process.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Since consumers today expect virtually every business to
                      have an easily accessible website, website builders are
                      valuable assets for teams with minimal tech skills.
                      Instead of enlisting the pricey services of a design
                      agency or a web developer, companies in virtually any
                      industry can use a web builder to launch the professional
                      site their business needs.
                    </p>

                    {/* Header */}
                    <header className="mb-8">
                      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Best Website Builders and Design Services
                      </h1>
                    </header>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        At business.com, our team of technology experts has
                        analyzed hundreds of tools and services designed to
                        improve essential business operations, from POS systems
                        to GPS fleet management services to remote PC access
                        software, and we use these experiences to provide
                        business owners with actionable guides and industry
                        insights. Every playbook and explainer is infused with
                        advice from real IT consultants, implementation experts,
                        security specialists, software developers and more.
                      </p>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Our rigorous product review process involves in-depth
                        industry research, vendor interviews, hands-on testing
                        and service comparisons. Each analysis — whether for a
                        business phone system, CRM platform, call center
                        software or website builder — is independently verified
                        by a business.com editor to ensure our recommendations
                        are free of bias and errors.
                      </p>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        When examining the range of website builders and design
                        services available today to identify the very best
                        options for small and growing businesses, we considered
                        the usability of each solution and whether
                        easy-to-follow templates were available for stress-free
                        site-building. We took into account the ability to
                        augment site designs and functionality with third-party
                        plug-ins, whether the pages would be responsive and
                        mobile-friendly, and if the vendors also provided web
                        hosting and storage. Pricing also influenced our
                        selections.
                      </p>

                      {/* Stats */}
                      <div className="flex justify-center items-center space-x-12 mb-8 py-6 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            50
                          </div>
                          <div className="text-sm text-gray-600">evaluated</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            8
                          </div>
                          <div className="text-sm text-gray-600">
                            researched
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            5
                          </div>
                          <div className="text-sm text-gray-600">chosen</div>
                        </div>
                      </div>

                      {/* Recommendations List */}
                      <div className="space-y-3 mb-8">
                        {/* Wix */}
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
                              Wix:
                            </a>{" "}
                            Best Templates
                          </p>
                        </div>

                        {/* GoDaddy */}
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
                              GoDaddy:
                            </a>{" "}
                            Best for Added Tools
                          </p>
                        </div>

                        {/* Mochahost */}
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
                              Mochahost:
                            </a>{" "}
                            Best for Businesses on a Budget
                          </p>
                        </div>

                        {/* Web.com */}
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
                              Web.com:
                            </a>{" "}
                            Best for Beginners
                          </p>
                        </div>

                        {/* orangehost */}
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
                              orangehost:
                            </a>{" "}
                            Best for WordPress
                          </p>
                        </div>

                        {/* Squarespace */}
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
                              Squarespace:
                            </a>{" "}
                            Best for E-commerce
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Website Builders Section */}
              <section id="website-builder">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4">
                      How Does a Website Builder Platform Work?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A website builder platform works by providing the user
                      tools to build their own website. These tools are
                      typically available through a web browser. Once you’re
                      logged in, you’ll choose a template for your site, also
                      known as a theme. These themes are usually customizable
                      and allow you to incorporate your company’s branding, from
                      your logo to your preferred color scheme and typography.
                      There will be various elements for you to fill in or add
                      to your homepage, as well as any additional pages you
                      create for a richer customer experience. Thanks to
                      drag-and-drop tools, programming knowledge isn’t usually
                      necessary. A simple text editor will help you add content,
                      and your chosen builder may even have an AI-powered
                      function that creates the content for you.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      During the design process, you’ll have the opportunity to
                      add an “About Us” page, services or products page,
                      e-commerce store, contact page and anything else you want.
                      You can also take advantage of integrations with online
                      payment platforms, social media sites and cybersecurity
                      protections. To make it even easier, some programs have
                      “wizards” that walk you through the site creation process
                      step by step.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      With your new business website, you can accomplish any
                      number of goals. For example, a site with a lead capture
                      form can get potential new clients into your pipeline. One
                      with an online store and strong calls to action can boost
                      conversions and revenue. If your website includes a chat
                      function, you can provide instantaneous customer service.
                      Your site design can even help your business rank higher
                      in Google search results. It’s up to you to decide your
                      website’s purpose; a website builder is what helps you
                      achieve those objectives. [Learn about the website design
                      mistakes that hurt conversion.]
                    </p>
                  </div>
                </div>
              </section>

           {/* Featured Partners Section */}
<div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">
      Featured partners
    </h2>
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <span>Advertisement</span>
      <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
        <span className="text-white font-bold">i</span>
      </div>
    </div>
  </div>

  {/* Wix */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src="/images/wix.png" 
            alt="Wix" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          Wix
          <br />
          <span className="text-lg">Website Builder</span>
        </div>
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
        <div className="font-medium text-gray-900">
          Beginners & Small Businesses
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">
          Drag-and-drop builder, AI website creation, App marketplace
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">
          Google Analytics, PayPal, Mailchimp, and 300+ more
        </div>
      </div>
    </div>
  </div>

  {/* GoDaddy */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src="/images/godaddy.png" 
            alt="GoDaddy" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          GoDaddy
          <br />
          <span className="text-lg">Domain & Hosting</span>
        </div>
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
        <div className="font-medium text-gray-900">
          Domain Registration & Quick Setup
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">
          Domain registration, Website builder, Marketing tools
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">
          Microsoft 365, Google Workspace, Social media platforms
        </div>
      </div>
    </div>
  </div>

  {/* Mochahost */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src="/images/mochahost.png" 
            alt="Mochahost" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          Mochahost
          <br />
          <span className="text-lg">Affordable Hosting</span>
        </div>
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
        <div className="font-medium text-gray-900">
          Budget-Conscious Users
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">
          Unlimited hosting, Free website builder, SSD storage
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">
          cPanel, Softaculous, CloudFlare, and more
        </div>
      </div>
    </div>
  </div>

  {/* Web.com */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src="/images/web.png" 
            alt="Web.com" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          Web.com
          <br />
          <span className="text-lg">Professional Websites</span>
        </div>
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
        <div className="font-medium text-gray-900">
          Professional Websites
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">
          Professional design templates, SEO optimization, Mobile-responsive
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">
          Google Analytics, Facebook, Instagram, and more
        </div>
      </div>
    </div>
  </div>

  {/* BlueHost */}
  <div className="bg-gray-50 rounded-lg p-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src="/images/bluehost.png" 
            alt="BlueHost" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          BlueHost
          <br />
          <span className="text-lg">WordPress Hosting</span>
        </div>
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
        <div className="font-medium text-gray-900">
          WordPress Websites
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">
          WordPress recommended hosting, Free domain, SSL certificate
        </div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">
          WordPress plugins, WooCommerce, Jetpack, and more
        </div>
      </div>
    </div>
  </div>
</div>

              <section id="website-recommendations" className="mt-8">
                <div className="mx-auto">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Compare Our Best Picks
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                  <div className="bg-white rounded-2xl  border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                              Hosting Platform
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
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              AI Integration
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Customer Support
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {websiteData.map((website, index) => (
                            <tr
                              key={website.id}
                              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                              }`}
                            >
                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                  <div className="flex items-center justify-center flex-shrink-0">
                                    <img
                                      src={website.image}
                                      alt={website.alt}
                                      className="max-w-16 max-h-8 sm:max-w-32 sm:max-h-12 object-contain"
                                    />
                                  </div>
                                  <div className="text-center sm:text-left">
                                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                                      {website.name}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                  <span className="text-lg sm:text-2xl font-bold text-gray-800">
                                    {website.expertScore}
                                  </span>
                                  <div className="flex space-x-1 scale-75 sm:scale-100">
                                    {renderStars(website.expertScore)}
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <span className="inline-block bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {website.bestFor}
                                </span>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6">
                                <ul className="space-y-1 sm:space-y-2">
                                  {website.keyFeatures.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-xs sm:text-sm text-gray-600 flex items-start sm:items-center"
                                    >
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-0"></div>
                                      <span className="leading-tight sm:leading-normal">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex justify-center">
                                  {website.freeTrial ? (
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
                                  {website.freeVersion ? (
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
                                  {website.aiIntegration ? (
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
                                <span className="text-xs sm:text-sm text-gray-600">
                                  {website.customerSupport}
                                </span>
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

              <section id="reviews" className="mt-8">
                <div className="mx-auto">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Reviews
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
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
                                  width: `${
                                    (parseFloat(score.score) / 5) * 100
                                  }%`,
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
                        Object.entries(tool.why.extras).map(
                          ([label, content]) => {
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
                          }
                        )}
                    </div>
                  ))}
                </div>
              </section>


              {/* Website Builder Cost Section */}
              <section
                id="website-builder-cost"
                className="mt-8 max-w-7xl mx-auto"
              >
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    How Much Will Using a Website Builder Cost?
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Most no-code website builders offer free personal plans,
                      free trials and tiered subscriptions that increase in
                      price and functionality with each level. Subscriptions are
                      charged monthly and often discounted if you pay annually.
                    </p>
                  </div>

                  {/* Second Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Most entry-level subscriptions cost around $10 per month
                      per site, while intermediate subscriptions tend to be in
                      the $15-$20 monthly range. Higher-end, drag-and-drop
                      design packages, which often include more customization
                      options and better analytics, usually cost around $25 to
                      $40 per month and can increase into the hundreds for
                      specialty platforms geared toward large enterprises. Keep
                      in mind that a plan with e-commerce capabilities typically
                      costs more than one without.
                    </p>
                  </div>

                  {/* Third Paragraph */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      You should also take into account the cost of securing a
                      website domain and hosting for your site. The best website
                      builders also facilitate domain registration and hosting.
                      Some providers will grant you a free domain for one year,
                      but otherwise, this is typically an annual cost of about
                      $10 to $20. Hosting may cost anywhere from a few dollars a
                      month to upward of $100 per month, depending on the type
                      of web host. You may also have to pay for an SSL
                      certificate, which authenticates your website and allows
                      encryption; this can cost around $60 a year but increase
                      to more than $1,000, depending on the circumstances.
                      Additional expenses you may incur include fees for
                      integrations, cybersecurity and dedicated support.
                    </p>
                  </div>
                </div>
              </section>

              {/* How to Choose a Website Builder Section */}
              <section id="how-to-choose" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    How to Choose a Website Builder
                  </h1>

                  {/* Introduction Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      When choosing a website builder, you should begin with a
                      few essential questions: What goals am I trying to
                      accomplish with my website? What features and tools do I
                      need to achieve those objectives? How much can I afford to
                      spend? The answers to those questions can help you narrow
                      down the options. In fact, you can use guides like this
                      one to see which platforms line up with your preferences
                      and budget.
                    </p>
                  </div>

                  {/* Second Paragraph */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Of course, there are several other factors worth
                      considering. Business.com spoke with dozens of business
                      owners and web designers to see what they prioritized when
                      deciding which website builder to use.
                    </p>
                  </div>

                  {/* Cost Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Cost Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Cost
                    </h2>

                    {/* Cost Paragraph 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      Whether you're operating a new business or an established
                      one can affect how much you have to spend on a website
                      builder and, therefore, which platform you choose. But
                      higher upfront costs for a better solution may be worth it
                      in the long run.
                    </p>

                    {/* Cost Quote */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      "Budgeting and funds can be tight when you're just getting
                      started out. It's easy to skip over higher quality or
                      higher priced options in exchange for saving a few
                      dollars," said Jason Anthony of the Jason Anthony Group.
                      "Sometimes when this happens, changes have to be made down
                      the line and more development and design costs are accrued
                      from having to rebuild or rework your project. Getting it
                      right the first time [can] save you money down the line."
                    </p>

                    {/* Cost Quote 2 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      David Ilgenfritz, co-founder and CEO of Roastify, told us,
                      "Don't, under any circumstances, just buy the cheapest
                      [platform]. The difference between free, or $20 or $50/mo
                      ought to be negligible if you are starting a business that
                      is reliant on a solid web presence."
                    </p>
                  </div>

                  {/* Customization Abilities Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Customization Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Customization Abilities
                    </h2>

                    {/* Customization Quote 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      "My most important criteria were the customization options
                      and no platform or vendor lock-in," said Derek Hassan,
                      owner of Five Lights Web Design. "I greatly value the
                      ability to change or customize the website as I see fit,
                      and the freedom to change web hosting companies if
                      required."
                    </p>

                    {/* Customization Quote 2 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      Ilgenfritz also kept "flexibility and functionality" top
                      of mind when deciding which website builder to use. "You
                      want to make sure that your tech stack doesn't preclude
                      you from making ... changes," he said. "If you need to add
                      some plugins or custom code in at a later date, you want
                      the ability to do so. Some platforms are very closed off
                      and make it incredibly difficult to do anything custom."
                    </p>

                    {/* Customization Quote 3 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      JD Lloyd, business development manager at Bella Virtual
                      Staging, also prioritized flexibility when searching for a
                      website builder.
                    </p>
                  </div>

                  {/* Quote Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      "We prioritized ease of use and design flexibility above
                      all else," he said. "As a visual staging company, our
                      website had to look top-notch and be easy to navigate. We
                      also considered the cost, but in the end, we were more
                      focused on finding a tool that allowed us to build a site
                      that would do our work justice."
                    </p>
                  </div>

                  {/* Skill Level Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Skill Level Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Skill Level
                    </h2>

                    {/* Skill Level Paragraph 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      In addition to evaluating website builders'
                      user-friendliness, you need to consider the skills of your
                      team members responsible for building your site.
                    </p>

                    {/* Skill Level Quote 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      "People need to choose a platform that coincides with
                      their skill level," advised Ilgenfritz, noting that some
                      people "aren't comfortable with some basic concepts around
                      HTML or CSS," while others "want more control to do custom
                      elements and don't want to be limited by themes." He
                      recommended, "Choose something you understand and that you
                      can get in the weeds with."
                    </p>

                    {/* Skill Level Quote 2 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      Lloyd and his team wanted to "create a
                      professional-looking site without needing to dive into
                      coding." They ultimately chose a solution that had "a
                      variety of templates and customization options without
                      overwhelming us with too many technical details."
                    </p>

                    {/* Skill Level Quote 3 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Madjeen Lorthe, founder of Transitions Well Done, chose a
                      solution that was "pretty straightforward and intuitive,"
                      as she didn't want to "rely on a developer or handle
                      technical updates, which was a big concern for me before
                      deciding."
                    </p>
                  </div>

                  {/* Scalability Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Scalability Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Scalability
                    </h2>

                    {/* Scalability Paragraph 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      SAHA Collective founder and CEO Alenka Kyslik knew it was
                      critical to consider not just her business's current
                      website needs but its future ones as well.
                    </p>

                    {/* Scalability Quote 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      "I was looking for a platform that could scale with my
                      business as it grew. This was both in terms of features
                      available and stability," Kyslik said. "In a perfect
                      world, I wanted to pick a solution that could get me
                      through the first few years of my business, [but] I really
                      wanted to avoid having to switch solutions every year or
                      more, as it takes so much time and that time could be
                      better spent elsewhere."
                    </p>

                    {/* Scalability Quote 2 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      Indeed, Lloyd admitted, "If I could go back, I might have
                      spent a bit more time exploring options that offer greater
                      scalability." While "pretty satisfied" with his website
                      builder, he's since found "some limitations" as Bella
                      Virtual Staging's needs have changed, and his company
                      might made a different purchase decision had they "known
                      how quickly our business would evolve."
                    </p>

                    {/* Scalability Quote 3 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      "Think about where you want your business to be in a few
                      years, not just where it is now," Lloyd recommended. "Your
                      website should be able to grow with you. So, look beyond
                      just getting a site live quickly — consider how easily you
                      can add new features, integrate with other tools and
                      expand your site's capabilities as your business needs
                      evolve. It's better to plan for growth from the start than
                      to have to make a major switch down the line."
                    </p>
                  </div>

                  {/* Reliability Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Reliability Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Reliability
                    </h2>

                    {/* Reliability Quote 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      For Christopher Pappas, founder of eLearningIndustry.com,
                      "The deciding factors were reliability and hosting
                      support, as we needed a platform that could handle large
                      volumes of content and traffic. Our community relies
                      heavily on accessing e-books, webinars and articles, so
                      uptime and speed were non-negotiable."
                    </p>

                    {/* Reliability Quote 2 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Looking back though, Pappas regrets not also diving deeper
                      into different content management systems "to ensure
                      smoother scaling as our content grew rapidly." Now, he
                      advised, "For content-heavy [businesses], prioritize
                      uptime, scalability and customer support. Your business
                      relies on your website being accessible, so ensure your
                      builder can keep up with your needs."
                    </p>
                  </div>

                  {/* Customer Support Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Customer Support Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Customer Support
                    </h2>

                    {/* Customer Support Quote 1 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      Though Heidi Blackie, owner of Somersault Wellness, wanted
                      a flexible website builder, she knew she wouldn't be able
                      to tackle every aspect without some guidance.
                    </p>

                    {/* Customer Support Quote 2 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      "I am not at all tech-savvy, so when I decided to build my
                      own website, customer service was at the top of the list,"
                      she said. After testing multiple programs, she ended up
                      choosing the vendor with better ease of use and the "best
                      customer service."
                    </p>

                    {/* Customer Support Quote 3 */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Ilgenfritz even suggested taking advantage of a vendor's
                      customer support resources before signing up for their
                      service. "Use the platform's tutorials and video libraries
                      [and] make sure you can learn and understand the system
                      before you go with it," he said.
                    </p>
                  </div>
                </div>
              </section>

              {/* Website Builder Features Section */}
              <section
                id="website-builder-features"
                className="mt-8 max-w-7xl mx-auto"
              >
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    What Are Some Features of Website Builder Services?
                  </h1>

                  {/* Introduction Paragraph */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      As you weigh different website builder services, consider
                      what basic functions you need your chosen design software
                      to perform, in addition to which features you may need as
                      your business website grows. Below are some of the top
                      features to look for.
                    </p>
                  </div>

                  {/* User-Friendly Tools Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* User-Friendly Tools Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      User-Friendly Tools
                    </h2>

                    {/* User-Friendly Tools Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Your website builder should be easy to use, whether you
                      want to update your current website or build a new site
                      from scratch. The best platforms have demos and setup
                      wizards that show you how to make a website quickly and
                      effectively. Most of the solutions we analyzed have a
                      variety of website templates and design tools. Web
                      templates should be highly customizable and responsive to
                      desktop, tablet and mobile devices. Drag-and-drop
                      capabilities make it easy to shift elements such as images
                      or widgets. HTML or CSS editors are also helpful
                      inclusions because this means the software serves
                      experienced web designers as well as novices.
                    </p>
                  </div>

                  {/* Responsive Web Design Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Responsive Web Design Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Responsive Web Design and Mobile Optimization
                    </h2>

                    {/* Responsive Web Design Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Since roughly half of website traffic comes from mobile
                      devices, it's critical for your business website to
                      accommodate those users. Many search engine algorithms
                      even penalize websites that are not responsive to mobile
                      devices. The best website builders offer responsive{" "}
                      <Link
                        href="/web-design"
                        className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        web designs
                      </Link>{" "}
                      that automatically modify your website to adapt to the
                      device type it is being viewed on.
                    </p>
                  </div>

                  {/* Web Hosting Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* Web Hosting Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Web Hosting
                    </h2>

                    {/* Web Hosting Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Besides offering web design solutions, the best website
                      builders also host your site. Most programs offer free
                      custom domain hosting for at least the first year of your
                      subscription. While this feature is touted as free, you
                      typically have to pay for setup fees or register your
                      domain privately. Each website creation application comes
                      with a basic hosting plan that is essential to giving your
                      site a professional domain. However, if unlimited storage
                      and subdomains are your priorities, take a look at our{" "}
                      <Link
                        href="/web-hosting-guide"
                        className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        web hosting guide
                      </Link>
                      , which highlights hosts that have a few more options for
                      builders, with an emphasis on WordPress.
                    </p>
                  </div>

                  {/* E-Commerce Section */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {/* E-Commerce Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      E-Commerce
                    </h2>

                    {/* E-Commerce Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Online shopping is on the rise, making e-commerce
                      functionality a valuable feature to look for in a website
                      builder. Even if you don't currently want to sell any
                      products online, it's important to find a service that can
                      scale with your business (in case you want to sell online
                      in the future, for example). Some platforms limit the
                      number of items you can sell, so if this is a core element
                      of your company, it could be a make-or-break factor.
                    </p>
                  </div>

                  {/* Storage Section */}
                  <div>
                    {/* Storage Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Storage
                    </h2>

                    {/* Storage Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Storage is another vital feature to consider, especially
                      if you have video- or image-heavy webpages. The services
                      we evaluated each include a fairly large number of web
                      pages in their packages, but if you have a large
                      e-commerce store, consider plans that allow for a higher
                      number of products or pages. If you intend to create more
                      than one site, be sure to find a solution that allows
                      this.
                    </p>
                  </div>
                </div>
              </section>
              <section id="methodology" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Methodology
                  </h1>

                  <div className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    <p>
                      To determine the best website builders, our team of
                      technology experts and software analysts evaluated an
                      initial list of 50 platforms, with some design agencies
                      mixed in. We sought to determine whether business owners
                      would find more value with a DIY solution or a
                      full-service design company. This comparison helped narrow
                      our list to eight options.
                    </p>

                    <p>
                      To choose our five top recommendations, we analyzed each
                      solution's rates and contracts, industries served, web
                      hosting and storage capabilities, design options and other
                      aspects. We tested the builders ourselves, researched
                      Better Business Bureau ratings and accreditations, and
                      also took into account customer reviews and testimonials.
                    </p>

                    <p>
                      In the end, our experts and analysts studied each website
                      builder's functionality and judged the programs on more
                      than 30 factors. These factors were broken down into
                      categories and weighted differently in our overall
                      conclusion. The weights were determined based on how much
                      business owners prioritize these criteria when shopping
                      for business software and services and making purchasing
                      decisions.
                    </p>

                    <ul className="space-y-6 ml-0">
                      <li>
                        <span className="font-semibold text-gray-900">
                          Pricing (30%):
                        </span>{" "}
                        Our experts and analysts compared and contrasted each
                        vendor's plans, judging which packages offered the best
                        bang for your buck. We took into account monthly
                        subscription costs, extra fees for domain registration
                        and hosting, and charges for add-on services like
                        expanded storage, SEO tools, e-commerce and marketing
                        features.
                      </li>

                      <li>
                        <span className="font-semibold text-gray-900">
                          Features (25%):
                        </span>{" "}
                        We looked for standard website builder functions like
                        templates, drag-and-drop editors, domain linking,
                        responsive designs and analytics. We also assessed the
                        available integrations and awarded extra points for
                        advanced services, like AI-powered tools and payment
                        processing.
                      </li>

                      <li>
                        <span className="font-semibold text-gray-900">
                          Ease of Use (25%):
                        </span>{" "}
                        We tested the website-building software ourselves,
                        gauging each solution's learning curve,
                        user-friendliness and customization options. We also
                        considered whether there was a fully featured mobile app
                        to make site changes and check metrics while on the go.
                      </li>

                      <li>
                        <span className="font-semibold text-gray-900">
                          Customer Service (15%):
                        </span>{" "}
                        We investigated the range of customer service options,
                        including whether phone assistance was provided with all
                        package tiers. We also examined each vendor's online
                        resources for businesses interested in self-guided help.
                      </li>
                    </ul>

                    <p>
                      Based on these criteria, we not only determined which
                      website builders our readers could trust but also the ways
                      in which each solution could best serve different business
                      needs. Some services were better at certain tasks than
                      others or more suited to a particular type of company.
                      These takeaways informed the "Best for" use cases you see
                      on this page.
                    </p>

                    <p>
                      To learn more about our methodology, see our full{" "}
                      <a
                        href="#"
                        className="text-orange-600 hover:text-orange-800 underline"
                      >
                        editorial process
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>
              {/* FAQs */}
              <FAQ faqsData={phoneFAQs} />
            </div>
          </div>
        </div>
      </div>
      <Article title="Latest Articles" items={articles1} />
      {/* <Advice /> */}
    {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <WebsiteBuildingForm  />
      </Modal>
    </>
  );
};

export default BestWebsiteBuildingPlatform;