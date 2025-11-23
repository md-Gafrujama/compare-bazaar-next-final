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
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "../../../components/TableOfContents";

import CRMComparison from "../../../components/CRMComparison";

import Advice from "../../../components/Advice ";
import Modal from "../../../components/Modal";
import CRMForm from "../../../components/CRMForm";
import FAQ from "../../../components/FAQ";
// import   WhitePaperForm from './WhitePaperForm';
import Article from "../../../components/ArticleLayoutCommon";
import Head from "next/head";

// CRM Section Components
import CRMHeroSection from "../../../components/CRM/CRMHeroSection";
import CRMWhatIsSection from "../../../components/CRM/CRMWhatIsSection";
import CRMRecommendationsSection from "../../../components/CRM/CRMRecommendationsSection";
import CRMToolsDetailSection from "../../../components/CRM/CRMToolsDetailSection";
import CRMFindNewSoftwareSection from "../../../components/CRM/CRMFindNewSoftwareSection";
import CRMKeyFeaturesSection from "../../../components/CRM/CRMKeyFeaturesSection";
import CRMHowToChooseSection from "../../../components/CRM/CRMHowToChooseSection";

const BestCRMSoftware = () => {
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
    Zoho: {
      title: "Zoho CRM – Best for decentralized teams",
      logo: "/images/zoho.png",
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
        intro: `Zoho CRM is best for decentralized teams because it delivers a combination of flexibility, connectivity, and comprehensive features that are unmatched in the market. Its high scores in collaboration tools and mobile app functionality are not just numbers—they reflect a real-world efficacy that decentralized teams can rely on..`,
        bullets: [
          "Zoho CRM scores an impressive 96/100 in advanced features, with perfect scores in multi-channel support and collaboration tools, essential for decentralized teams. Its ability to provide customer geo-location features and VOIP support further cements its position as the go-to CRM for teams operating remotely. ",
          "TAdditionally, Zoho offers a more seamless experience across all devices compared to competitors.",
        ],
        outro: `Zoho’s AI-powered Sales Assistant, Zia, offers smart sales forecasting, crucial for coordinating dispersed teams. SalesSignals keeps teams in sync with real-time, multi-channel notifications. Blueprint guides remote teams through each deal stage, providing process clarity. Zoho’s unique multi-channel support covers everything from email to social media, ensuring all team interactions are captured, irrespective of location..`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Zoho CRM is part of a larger platform that includes HR,
                accounting, operations, and more, placing it in a similar
                bracket to NetSuite. It’s accomplished this while still
                maintaining low overhead costs, thanks to its remote-first work
                environment.
              </p>
              <p className="text-black">
                That prioritization of decentralized collaboration carries over
                to their suite of software solutions, including their CRM. With
                features and tools comparable to its peers in this list, but
                with the added bonus of designing the platform to function
                across time zones and national boundaries.
              </p>
              <p className="text-black mb-4">
                The software is tailored to meet the needs of businesses of all
                sizes, with a free plan and no contract requirement. Its pricing
                structure is competitive, offering value for money and
                reflecting an understanding of diverse business models.
              </p>
              <p className="text-black mb-4">
                Zoho CRM’s interface is intuitive, scoring a 75/100 in design,
                and it supports a mild learning curve, ensuring new users can
                quickly adapt. The platform’s customizability is a standout
                feature, allowing businesses to tailor the CRM to their unique
                processes.
              </p>
              <p className="text-black mb-4">
                In terms of product design, Zoho CRM has been crafted with the
                user in mind, offering a balance between functionality and
                simplicity. This balance is critical for user adoption and
                long-term engagement with the platform.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                AI-Powered Sales Assistant (Zia):
              </h4>
              <p className="text-black mb-4">
                Zoho CRM offers an AI-powered sales assistant called Zia that
                can predict trends, anomalies, and conversions, making sales
                forecasting smarter.
              </p>
              <h4 className="text-lg font-bold mb-2">SalesSignals:</h4>
              <p className="text-black mb-4">
                This feature provides real-time notifications from across
                multiple channels like phone, email, social media, and live
                chat, ensuring you never miss an interaction.
              </p>

              <h4 className="text-lg font-bold mb-2">Blueprint:</h4>
              <p className="text-black">
                Zoho’s Blueprint feature helps businesses design and automate
                their sales processes, ensuring that salespeople know exactly
                what to do at each stage of the deal.
              </p>
              <h4 className="text-lg font-bold mb-2">Meeting scheduling:</h4>
              <p className="text-black">
                Provides a tool to simplify meeting scheduling by syncing with
                your calendar and allowing contacts to book time directly.
              </p>
              <h4 className="text-lg font-bold mb-2">Multi-Channel Support:</h4>
              <p className="text-black">
                Zoho CRM offers multi-channel support for phone, email, live
                chat, social media, and in-person meetings, keeping your team
                connected no matter how you communicate.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Advanced analytics and forecasting:{" "}
              </h4>
              <p className="text-black">
                Offers customizable reports and dashboards with advanced
                analytics capabilities, enabling precise sales forecasting and
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
                <li>Basic CRM functionalities</li>
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
                <li>Sales tracking</li>
                <li>Custom dashboards</li>
                <li>Multiple pipelines</li>
                <li>Sales forecasting</li>
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
                <li>AI-driven sales insights</li>
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
                Zoho CRM Pricing page.
              </p>
            </>
          ),
        },
      },
    },

    Creatio: {
      title: "Creatio – Best for workflow automation",
      logo: "/images/creatio.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.3/5" },
        { label: "Pricing", score: "3.8/5" },
        { label: "General features and Interface", score: "4.5/5" },
        { label: "Core features", score: "4.4/5" },
        { label: "Advanced features", score: "4.6/5" },
        { label: "Integration and compatibility", score: "4.2/5" },
        { label: "UX", score: "4.1/5" },
      ],
      pros: [
        "Advanced workflow automation capabilities",
        "No-code/low-code platform for customization",
        "Comprehensive business process management",
        "AI-powered recommendations and insights",
        "Industry-specific solutions available",
      ],
      cons: [
        "Steeper learning curve for beginners",
        "Higher pricing compared to basic CRM solutions",
        "May be overly complex for simple CRM needs",
      ],
      why: {
        intro: `Creatio stands out as the best CRM for workflow automation due to its comprehensive business process management capabilities and no-code platform approach. It excels in creating complex automated workflows that can handle sophisticated business processes beyond traditional CRM functions.`,
        bullets: [
          "Creatio's workflow automation engine scored 92/100 in our evaluation, with exceptional capabilities in process modeling, automated decision-making, and multi-step workflow orchestration that surpasses most traditional CRM systems.",
          "The platform's no-code approach allows businesses to create custom applications and workflows without technical expertise, making it accessible for business users while maintaining enterprise-grade functionality.",
          "Unlike competitors that focus primarily on sales processes, Creatio integrates marketing, sales, and service workflows into unified business processes, providing end-to-end automation across the entire customer lifecycle.",
        ],
        outro: `While Salesforce offers robust automation through its Flow Builder and HubSpot provides solid workflow capabilities, Creatio's business process management foundation gives it a distinct advantage for organizations requiring complex, multi-departmental workflow automation. It's particularly well-suited for enterprises that need to automate intricate business processes involving multiple stakeholders and approval chains.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Creatio is a comprehensive business process management and CRM
                platform that combines sales, marketing, and service automation
                in a single solution. Built on a no-code platform, it enables
                organizations to create custom applications and automate complex
                business processes without extensive technical knowledge.
              </p>
              <p className="text-black">
                The platform originated from a focus on business process
                management and has evolved to include advanced CRM capabilities,
                AI-powered insights, and industry-specific solutions. Creatio's
                strength lies in its ability to model, execute, and optimize
                business processes while maintaining full CRM functionality.
              </p>
              <p className="text-black mb-4">
                What sets Creatio apart is its unified approach to customer
                experience management, where every customer interaction is part
                of a larger business process. This makes it ideal for
                organizations with complex sales cycles, multiple approval
                processes, or intricate service delivery workflows.
              </p>
              <p className="text-black mb-4">
                The platform offers both cloud and on-premise deployment
                options, with robust security features and compliance
                certifications that make it suitable for enterprise-level
                implementations across various industries.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Process Designer:</h4>
              <p className="text-black mb-4">
                Visual workflow designer that allows users to create complex
                business processes with drag-and-drop simplicity, including
                conditional logic, parallel processing, and automated decision
                points.
              </p>
              <h4 className="text-lg font-bold mb-2">No-Code Platform:</h4>
              <p className="text-black mb-4">
                Comprehensive application development environment that enables
                business users to create custom applications, forms, and
                workflows without coding knowledge.
              </p>
              <h4 className="text-lg font-bold mb-2">
                AI and Machine Learning:
              </h4>
              <p className="text-black mb-4">
                Built-in AI capabilities including predictive analytics, next
                best action recommendations, and automated lead scoring to
                enhance decision-making processes.
              </p>
              <h4 className="text-lg font-bold mb-2">Customer 360 View:</h4>
              <p className="text-black mb-4">
                Unified customer profile that aggregates data from all
                touchpoints, providing a complete view of customer interactions
                across sales, marketing, and service channels.
              </p>
              <h4 className="text-lg font-bold mb-2">Marketing Automation:</h4>
              <p className="text-black mb-4">
                Comprehensive marketing campaign management with lead nurturing,
                email marketing, landing page creation, and campaign performance
                analytics.
              </p>
              <h4 className="text-lg font-bold mb-2">Service Management:</h4>
              <p className="text-black">
                Complete service desk functionality including case management,
                knowledge base, SLA tracking, and customer portal for seamless
                service delivery.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a href="/">Free Trial </a>Available (14 days)
              </p>
              <h4 className="text-lg font-bold mb-2">Team:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $25/user/month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Sales and marketing automation</li>
                <li>Basic workflow automation</li>
                <li>Contact and lead management</li>
                <li>Email integration</li>
                <li>Mobile app access</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Sales:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $35/user/month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Team, plus:</li>
                <li>Advanced sales automation</li>
                <li>Territory management</li>
                <li>Sales analytics and forecasting</li>
                <li>Document management</li>
                <li>Quote and proposal generation</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Service:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $50/user/month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Sales, plus:</li>
                <li>Service desk and case management</li>
                <li>Knowledge base</li>
                <li>SLA management</li>
                <li>Customer portal</li>
                <li>Field service management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Studio:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">
                  $25/user/month (add-on to any plan)
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>No-code application development</li>
                <li>Advanced process designer</li>
                <li>Custom object creation</li>
                <li>Integration studio</li>
                <li>Advanced analytics</li>
              </ul>
              <p className="text-black">
                For enterprise pricing and custom solutions, contact Creatio
                directly for a personalized quote.
              </p>
            </>
          ),
        },
      },
    },
    HubSpot: {
      title: "HubSpot Sales Hub- Best for integrations",
      logo: "/images/hub.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.5/5" },

        { label: "Pricing", score: "4.8/5" },
        { label: "General features and Interface", score: "4.4/5" },
        { label: "Core features", score: "4.5/5" },
        { label: "Advanced features", score: "3.8/5" },
        { label: "Inegration and compatibility", score: "4.8/5" },
        { label: "UX", score: "4.8/5" },
      ],
      pros: [
        "One of the most trusted names in the industry",
        "First-class automation and integration options",
        "CRM, email marketing, and website management in one place",
        "Free plan",
      ],
      cons: [
        "Higher-end cost structure for paid plans and added tools",
        "Best for use cases that need more than just CRM software",
      ],
      why: {
        intro: `HubSpot Sales Hub is recommended as the best CRM for integration options due to its unparalleled ease of integration, free offerings, and a user-friendly platform that simplifies complex processes. It’s the ideal choice for businesses that value a cohesive, interconnected suite of tools to streamline their operations.`,
        bullets: [
          "HubSpot’s CRM earned near-perfect scores across the board, boasting a 95.83/100 for both API availability and integration ease, and a 100/100 for the breadth of native add-ons and third-party integrations. ",
          "The ‘no contract required’ policy and free plan make the platform a rarity among competitors. This approach democratizes access to powerful CRM tools, and makes it an attractive option for businesses of all sizes.",
        ],
        outro: `While Salesforce is often lauded for its extensive feature set and scalability, HubSpot Sales Hub is the go-to for businesses prioritizing ease of integration and user-friendly experiences. It’s particularly well-suited for companies that leverage a wide array of tools and require a CRM that can integrate with them.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                HubSpot CRM is designed to help you streamline your business
                operations by integrating marketing, sales, and customer service
                into one seamless platform.
              </p>
              <p className="text-black">
                Known for its user-friendly interface and comprehensive sales
                and marketing features, HubSpot CRM provides tools for contact
                management, email tracking, deal pipelines, and marketing
                automation. Its integration capabilities with popular business
                apps ensure you can manage all your customer interactions and
                data from a single platform. HubSpot’s free tier offers
                comprehensive functionalities, making it accessible for small
                businesses and startups, while scalable options are available
                for larger enterprises needing advanced features and
                customizations. Its extensive training resources also help to
                speed up adoption of the software.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Contact management:</h4>
              <p className="text-black mb-4">
                Provides a detailed view of contacts, tracking every interaction
                automatically and allowing users to easily manage customer
                relationships.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Email tracking and notifications
              </h4>
              <p className="text-black mb-4">
                Enables real-time notifications when a contact opens an email,
                allowing sales teams to follow up effectively.
              </p>

              <h4 className="text-lg font-bold mb-2">Pipeline management:</h4>
              <p className="text-black">
                Offers a visual dashboard for managing sales pipelines, helping
                teams to track deals and stages effectively.
              </p>
              <h4 className="text-lg font-bold mb-2">Meeting scheduling:</h4>
              <p className="text-black">
                Provides a tool to simplify meeting scheduling by syncing with
                your calendar and allowing contacts to book time directly.
              </p>
              <h4 className="text-lg font-bold mb-2">
                AI-driven lead scoring:
              </h4>
              <p className="text-black">
                Uses predictive analytics and behavioral data to prioritize
                leads, helping sales teams focus on high-potential
                opportunities.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Bidirectional integration:{" "}
              </h4>
              <p className="text-black">
                Supports seamless integration with hundreds of third-party
                applications through a robust API, enhancing workflow automation
                and data synchronization.
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
                Price: <span classname="font-light">$0/month</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Contact management</li>
                <li>Deal pipeline</li>
                <li>Quotes</li>
                <li>Live chat</li>
                <li>Meeting scheduling</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Starter Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $20/seat/month billed monthly
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light"> Everything in Free, plus:</span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Sales automation</li>
                <li>Goals</li>
                <li>Sales content analytics</li>
                <li>Payments</li>
                <li>Task queues</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Professional Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $100/seat/month billed monthly
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:{" "}
                <span classname="font-light">Everything in Starter, plus:</span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Prospecting and lead management</li>
                <li>Sequences</li>
                <li>Forecasting</li>
                <li>Custom Reporting</li>
                <li>Sales Analytics</li>
                <li>Playbooks</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:{" "}
                <span classname="font-light">
                  $150/seat/month billed monthly
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  Everything in Professional, plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Custom objects</li>
                <li>Predictive lead scoring</li>
                <li>Conversation intelligence</li>
                <li>Recurring revenue tracking</li>
                <li>Deal Journey Analytics</li>
              </ul>
              <p className="text-black">
                For more detailed pricing and features, visit HubSpot Sales Hub
                Pricing.
              </p>
            </>
          ),
        },
      },
    },
    HoneyBook: {
      title: "HoneyBook – Best for creative professionals and freelancers",
      logo: "/images/honey.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.1/5" },
        { label: "Pricing", score: "4.0/5" },
        { label: "General features and Interface", score: "4.3/5" },
        { label: "Core features", score: "4.2/5" },
        { label: "Advanced features", score: "3.8/5" },
        { label: "Integration and compatibility", score: "3.9/5" },
        { label: "UX", score: "4.4/5" },
      ],
      pros: [
        "Designed specifically for creative professionals",
        "Built-in project management and client portal",
        "Integrated invoicing and payment processing",
        "Beautiful, intuitive interface",
        "Comprehensive client communication tools",
      ],
      cons: [
        "Limited customization compared to traditional CRMs",
        "Fewer third-party integrations",
        "Not suitable for complex B2B sales processes",
        "Higher cost for advanced features",
      ],
      why: {
        intro: `HoneyBook is the best CRM for creative professionals and freelancers because it's specifically designed to address the unique needs of creative businesses. Unlike traditional CRMs that focus on sales processes, HoneyBook combines client management with project delivery, making it ideal for photographers, designers, consultants, and other service-based creative professionals.`,
        bullets: [
          "HoneyBook scored 88/100 in our evaluation for industry-specific features, with exceptional capabilities in project management, client communication, and creative workflow automation that traditional CRMs simply don't offer.",
          "The platform's client portal functionality allows creative professionals to share project updates, receive feedback, and manage approvals in a branded environment, creating a professional client experience that enhances business reputation.",
          "Unlike general CRMs, HoneyBook integrates essential business functions like contract management, invoicing, and payment processing into a single platform, reducing the need for multiple tools and streamlining the entire client lifecycle from inquiry to payment.",
        ],
        outro: `While platforms like Salesforce and HubSpot offer more customization and integration options, HoneyBook's focused approach on creative businesses makes it more valuable for its target audience. It's particularly effective for small to medium creative businesses that need a comprehensive solution without the complexity of enterprise-level CRMs.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                HoneyBook is a comprehensive business management platform
                designed specifically for creative professionals, freelancers,
                and small service-based businesses. Founded to address the
                unique challenges faced by creative entrepreneurs, it combines
                CRM functionality with project management, client communication,
                and financial tools.
              </p>
              <p className="text-black">
                The platform recognizes that creative professionals need more
                than just contact management – they need tools to manage
                projects, communicate with clients, handle contracts, and
                process payments. HoneyBook integrates all these functions into
                a single, user-friendly platform.
              </p>
              <p className="text-black mb-4">
                What makes HoneyBook special is its focus on the client
                experience. The platform provides branded client portals,
                professional proposal templates, and streamlined communication
                tools that help creative professionals present themselves
                professionally while managing their business efficiently.
              </p>
              <p className="text-black mb-4">
                The platform has grown to serve photographers, wedding planners,
                designers, consultants, and other creative professionals who
                need a solution that understands their unique business model and
                workflow requirements.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Client Portal:</h4>
              <p className="text-black mb-4">
                Branded client portal where clients can view project progress,
                provide feedback, approve deliverables, and make payments,
                creating a professional and streamlined client experience.
              </p>
              <h4 className="text-lg font-bold mb-2">Project Management:</h4>
              <p className="text-black mb-4">
                Built-in project management tools including task management,
                file sharing, timeline tracking, and milestone management
                specifically designed for creative workflows.
              </p>
              <h4 className="text-lg font-bold mb-2">Smart Proposals:</h4>
              <p className="text-black mb-4">
                Professional proposal templates with integrated pricing,
                contracts, and payment options that can be customized for
                different services and sent directly to clients.
              </p>
              <h4 className="text-lg font-bold mb-2">Contract Management:</h4>
              <p className="text-black mb-4">
                Digital contract creation and e-signature functionality with
                customizable templates for different types of creative services
                and automatic contract reminders.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Invoicing and Payments:
              </h4>
              <p className="text-black mb-4">
                Automated invoicing system with multiple payment options
                including credit cards, ACH transfers, and payment plans, with
                automatic payment reminders and late fee handling.
              </p>
              <h4 className="text-lg font-bold mb-2">Lead Management:</h4>
              <p className="text-black">
                Lead capture and nurturing tools including inquiry forms,
                automated follow-ups, and lead scoring specifically designed for
                creative service businesses.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a href="/">Free Trial </a>Available (7 days)
              </p>
              <h4 className="text-lg font-bold mb-2">Starter:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">$16/month billed annually</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Contact management</li>
                <li>Basic project management</li>
                <li>Proposal creation</li>
                <li>Contract templates</li>
                <li>Basic invoicing</li>
                <li>Payment processing (3.5% + 30¢ per transaction)</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Essentials:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">$33/month billed annually</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Starter, plus:</li>
                <li>Client portal</li>
                <li>Advanced project management</li>
                <li>Automated workflows</li>
                <li>File sharing and proofing</li>
                <li>Calendar scheduling</li>
                <li>Payment plans</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Premium:</h4>
              <p className="font-bold text-black mb-4">
                Price:{" "}
                <span className="font-light">$66/month billed annually</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Essentials, plus:</li>
                <li>Advanced automation</li>
                <li>Custom branding</li>
                <li>Advanced reporting</li>
                <li>Lead capture forms</li>
                <li>Priority support</li>
                <li>Advanced integrations</li>
              </ul>
              <p className="text-black mb-4">
                <strong>Note:</strong> All plans include payment processing fees
                of 3.5% + 30¢ per transaction. ACH payments are available at 1%
                + 30¢ per transaction.
              </p>
              <p className="text-black">
                For detailed pricing information and feature comparisons, visit
                the HoneyBook Pricing page.
              </p>
            </>
          ),
        },
      },
    },
    Pipedrive: {
      title: "Pipedrive – Best for pipeline management and optimization",
      logo: "/images/pipe.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.2/5" },

        { label: "Pricing", score: "3.5/5" },
        { label: "General features and Interface", score: "4.3/5" },
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "3.5/5" },
        { label: "Inegration and compatibility", score: "4.8/5" },
        { label: "UX", score: "4/5" },
      ],
      pros: [
        "AI-powered lead tracking",
        "Helps teams focus their energy on more effective efforts",
        "Approachable interface",
      ],
      cons: [
        "Not as valuable for teams with existing, well-refined lead pipelines",
      ],
      why: {
        intro: `Pipedrive is best for businesses that prioritize sales process optimization. Its intuitive design, combined with powerful automation and analytics, makes it an ideal tool for sales teams to streamline their workflows.

Pipedrive’s visual sales pipeline breathes life into deal progression, streamlining the sales process in a digestible, visual format. Complemented by comprehensive Sales Reporting, users glean valuable insights into performance trends. With seamless Email Integration, tracking correspondence and automating follow-ups becomes effortless. Pipedrive’s Activity and Goal Tracking further keep sales efforts aligned, optimizing pipeline progress. For businesses seeking a clear view and control over their sales pipeline, Pipedrive has the right formula, making it a top recommendation in the CRM domain.`,
        bullets: [
          "Pipedrive’s overall score of 83.3 out of 100, with a 4.2-star rating, is a testament to its balanced performance across various criteria. It excels in core features like sales pipeline, task automation, and email integration, which are pivotal for effective CRM functionality. ",
          "Compared to other CRMs like Salesforce or HubSpot, Pipedrive is more accessible and less complex, making it ideal for small to medium-sized businesses or teams that require a straightforward, efficient sales process without the need for extensive customization or complex integrations.",
          "Pipedrive is designed to help teams make the most of their leads, and focus on the ones most likely to convert. It does this through a variety of non-conventional CRM capabilities, including AI analytics, intelligence software, and prescriptive data insights. ",
          "The interface is also carefully crafted to present the most relevant information in a visual, easy-to-digest manner. Properly implemented, Pipedrive can dramatically reduce the number of leads that slip through the cracks, and the number of dead ends chased by sales staff.",
          "Recent additions include improved AI analytics and more third-party integrations.",
        ],
        outro: `For more information on Pipedrive, check out Pipedrive Product Updates and Pipedrive Community.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                HubSpot CRM is designed to help you streamline your business
                operations by integrating marketing, sales, and customer service
                into one seamless platform.
              </p>
              <p className="text-black">
                Known for its user-friendly interface and comprehensive sales
                and marketing features, HubSpot CRM provides tools for contact
                management, email tracking, deal pipelines, and marketing
                automation. Its integration capabilities with popular business
                apps ensure you can manage all your customer interactions and
                data from a single platform. HubSpot’s free tier offers
                comprehensive functionalities, making it accessible for small
                businesses and startups, while scalable options are available
                for larger enterprises needing advanced features and
                customizations. Its extensive training resources also help to
                speed up adoption of the software.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Pipeline management:</h4>
              <p className="text-black mb-4">
                Pipedrive offers a visual sales pipeline which allows users to
                effectively manage deals at different stages and streamline the
                sales process.
              </p>
              <h4 className="text-lg font-bold mb-2">Sales reporting:</h4>
              <p className="text-black mb-4">
                Pipedrive includes comprehensive sales reporting features to
                provide insights and monitor sales performance over time.
              </p>

              <h4 className="text-lg font-bold mb-2">Email integration:</h4>
              <p className="text-black">
                O: Pipedrive provides seamless email integration, allowing users
                to send and receive emails directly from the CRM, track
                correspondence and automate follow-ups.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Activity and goal tracking:
              </h4>
              <p className="text-black">
                Pipedrive allows users to set and monitor goals and activities,
                keeping sales efforts aligned with business objectives.
              </p>
              <h4 className="text-lg font-bold mb-2">Sales automation:</h4>
              <p className="text-black">
                Pipedrive’s workflow automation feature enables users to
                automate repetitive tasks, such as sending emails or updating
                deal stages, to save time and ensure consistency in sales
                processes
              </p>
              <h4 className="text-lg font-bold mb-2">Smart contact data: </h4>
              <p className="text-black">
                Pipedrive enriches contact profiles by pulling in data from
                social media and other online sources, providing users with
                comprehensive and up-to-date information about their contacts.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Essential:</h4>
              <p className="font-bold  text-black mb-4">
                Price:{" "}
                <span classname="font-light">
                  $24 per seat per month billed monthly or $14 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Lead and pipeline management</li>
                <li>Data import</li>
                <li>400+ integrations</li>
                <li>Contact reports</li>
                <li>Personalized onboarding</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Advanced:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  $49 per seat per month billed monthly or $39 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  Everything from previous tier plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Full email sync</li>
                <li>Automations builder, including email sequences</li>
                <li>Call and email scheduling</li>
                <li>Live chat support</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Professional :</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  $69 per seat per month billed monthly or $49 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  Everything from previous tiers plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>AI Sales Assistant</li>
                <li>Contract management</li>
                <li>Lead routing</li>
                <li>Team management</li>
                <li>Revenue forecasts</li>
                <li>Extra data entry and data quality settings</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Power:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classmate="font-light">
                  {" "}
                  $79 per seat per month billed monthly or $64 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classmate="font-light">
                  Everything from previous tiers plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Project planning</li>
                <li>More control of account permissions and visibilities</li>
                <li>24/7 live chat support</li>
                <li>Phone support</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classmate="font-light">
                  $129 per seat per month billed monthly or $99 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classmate="font-light">
                  Everything from previous tiers plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Unlimited reports and customizations</li>
                <li>Enhanced security preferences</li>
                <li>
                  Maximize the number of automations and email syncs per seatt
                </li>
              </ul>
              <p className="text-black">
                For more detailed information on pricing and features, visit the
                Pipedrive Pricing page.
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

  const systems = [
    {
      name: "Zoho CRM",
      logo: "/images/zoho.png",
      bestFor: "Best for Growing Businesses",
      price: "Starts at $14 per user per month",
      videoCapacity: "Office 365 integration , Zoho Marketplace",
      support: "24/7 customer support",
      link: "#",
    },
    {
      name: "Creatio",
      logo: "/images/creatio.png",
      bestFor: "Best for Customer Lifecycle Management",
      price: "Starts at $25 per user per month",
      videoCapacity: ",14-day free trial",
      support: "24/7 customer support",
      link: "#",
    },
    {
      name: "Hub CRM",
      logo: "/images/hub.png",
      bestFor: "Best for Sales and Marketing Integrations",
      price: "Starts at $9 per month per user",
      videoCapacity: "Includes 1,000 marketing contacts",
      support: "Email chat support included",
      link: "#",
    },
    {
      name: "HoneyBook",
      logo: "/images/honey.png",
      bestFor: "Best for All-In-One Option",
      price: "Starts at $29 per user per month",
      videoCapacity: "7-day free trial",
      support: "24/7 phone and email support",
      link: "#",
    },
    {
      name: "Pipedrive",
      logo: "/images/pipe.png",
      bestFor: "Best for Automation and Management",
      price: "Starts at $14 per user per month",
      videoCapacity: "Free 14-day trial. ",
      support: "24/7 online chat, premium for phone",
      link: "#",
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
      question: "What is an example of a CRM program?",
      answer:
        "TSalesforce is a widely recognized CRM program that offers a variety of customer relationship management services.",
    },
    {
      question: "What is the most popular CRM software?",
      answer:
        "ISalesforce is often considered the most popular CRM software due to its extensive features and widespread adoption across industries. But don’t let popularity keep you from checking out their competitors like Pipedrive and HubSpot. At a fraction of the cost and with a lot less work, they can provide a robust CRM system that will serve your business well.",
    },
    {
      question: "What is CRM mainly used for?",
      answer:
        "CRM is primarily used for managing interactions with current and potential customers, streamlining processes, and improving profitability through organizing customer information and automating sales and marketing interactions.",
    },
    {
      question: "Is Excel a CRM tool?",
      answer:
        "Excel is not a dedicated CRM tool; it is a spreadsheet application that can be used for basic data management but lacks the automation, integration, and analytics capabilities of specialized CRM software.",
    },
    {
      question: "What is the point of having a CRM?",
      answer: `A CRM system helps businesses manage customer data, track interactions, and automate various marketing, sales, and customer service processes, leading to improved customer relationships and increased efficiency.`,
    },
  ];

  const contents = [
    {
      id: "CRM-recommendations",
      title: "Our top 11 CRM recommendations",
      active: false,
    },
    {
      id: "new-CRM-software",
      title: "Find your new CRM software",
      active: false,
    },
    {
      id: "key-features",
      title: "Key CRM features to consider for your use case",
      active: false,
    },
    {
      id: "how-to-choose",
      title: "Choosing the right CRM and sales software",
      active: false,
    },
    {
      id: "crm-faqs",
      title: "Frequently Asked Questions (FAQ)",
      active: false,
    },
  ];
  const crmData = [
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
        "Pipeline management",
      ],
      freeTrial: true,
      freeVersion: true,
    },
    {
      id: 2,
      name: "Zoho CRM",
      image: "/images/zoho.png",
      alt: "Zoho CRM",
      expertScore: 4.5,
      bestFor: "Best for decentralized teams",
      visitUrl: "zoho",
      keyFeatures: [
        "SalesSignals",
        "Blueprint",
        "AI-powered sales assistant Zia",
      ],
      freeTrial: true,
      freeVersion: true,
    },

    {
      id: 3,
      name: "Pipedrive",
      image: "/images/pipe.png",
      alt: "Pipedrive",
      expertScore: 4.2,
      bestFor: "Best for pipeline management and optimization",
      visitUrl: "shape",
      keyFeatures: [
        "Streamlined lead routing",
        "Revenue Forecasting",
        "Smart contact management",
      ],
      freeTrial: true,
      freeVersion: false,
    },
    {
      id: 4,
      name: "Creatio",
      image: "/images/creatio.png",
      alt: "Creatio",
      expertScore: 4.3,
      bestFor: "Best for no-code platform",
      visitUrl: "creatio",
      keyFeatures: [
        "No-code platform",
        "Process automation",
        "AI-powered insights",
      ],
      freeTrial: true,
      freeVersion: false,
    },

    {
      id: 5,
      name: "HoneyBook",
      image: "/images/honey.png",
      alt: "HoneyBook",
      expertScore: 4.1,
      bestFor: "Best for creative businesses",
      visitUrl: "honeybook",
      keyFeatures: [
        "Client management for creatives",
        "Automated workflows",
        "Invoice and contract management",
      ],
      freeTrial: true,
      freeVersion: false,
    },
    {
      id: 6,
      name: "Shape CRM",
      image: "/images/shapecrm.png",
      alt: "Shape CRM",
      expertScore: 4.4,
      bestFor: "Best for flexibility",
      visitUrl: "shape",
      keyFeatures: [
        "Industry-specific modules",
        "Dynamic data modeling",
        "Custom workflow automation",
      ],
      freeTrial: true,
      freeVersion: false,
    },
    {
      id: 7,
      name: "Salesforce Sales Cloud",
      image: "/images/salesforce.png",
      alt: "Salesforce Sales Cloud",
      expertScore: 4.0,
      bestFor: "Best CRM for enterprises",
      visitUrl: "shape",
      keyFeatures: [
        "360-degree customer view",
        "Einstein AI analytics",
        "Broad scalability",
      ],
      freeTrial: true,
      freeVersion: false,
    },

    {
      id: 8,
      name: "Oracle Netsuite CRM",
      image: "/images/oracle.png",
      alt: "Oracle Netsuite CRM",
      expertScore: 4.0,
      bestFor: "Best all-in-one solutions",
      visitUrl: "shape",
      keyFeatures: [
        "Marketing automation",
        "Customer service management",
        "Advanced order management",
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
      title: "Cloud CRM vs On-Premise CRM Software",
      image: "/images/img1crm.jpg",
      author: "Catie",
      date: "March 15, 2023",
      excerpt:
        "Businesses today face a critical decision when choosing CRM technology. Should I invest in cloud-based CRM or stick with on-premise solutions...",
      link: "#",
    },
    {
      id: 2,
      title: "Salesforce CRM: Features, Pricing, Pros and Cons",
      image: "/images/img2crm.png",
      author: "Catie",
      date: "September 22, 2023",
      excerpt:
        "Salesforce Overview Salesforce is a leading CRM platform offering cloud-based solutions for businesses of all sizes. Their comprehensive suite includes...",
      link: "#",
    },
    {
      id: 3,
      title: "10 Essential Factors to Consider When Selecting a CRM System",
      image: "/images/img3crm.png",
      author: "Catie",
      date: "February 8, 2024",
      excerpt:
        "As a business leader, finding the right CRM software is crucial for managing customer relationships effectively. With numerous options available...",
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
    "Business communication has come a long way, with VoIP (Voice over Internet Protocol) systems now replacing traditional PBX setups in many organizations. Today's business phone systems come with cutting-edge features like AI-powered voicemail transcription, smart call routing, CRM integration, and detailed analytics dashboards. These tools enable businesses to track key performance metrics, enhance customer satisfaction, and optimize communication workflows. When choosing a provider, it's crucial to consider factors such as scalability, reliability, security, and the total cost of ownership. Many modern systems now offer unified communications, merging voice, video, messaging, and collaboration tools into one seamless platform.";

  return (
    <>
      <Head>
        <title>
          Best CRM Software Compared Side-by-Side | Free Quotes on
          Compare-Bazaar
        </title>
        <meta
          name="description"
          content="Easily compare the best CRM software side-by-side. Get free, no-obligation quotes and find the right CRM for your business—fast, simple, and 100% unbiased."
        />
        <link
          rel="canonical"
          href="https://www.compare-bazaar.com/BestCRMSoftware"
        />
      </Head>

      <CRMHeroSection
        systems={systems}
        createRipple={createRipple}
        onCompareQuotesClick={() => setIsModalOpen(true)}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              {/* Table of Contents - Left Sidebar */}
              <TableOfContents contents={contents} />
            </div>
            {/* main content */}
            <div className="flex-1 max-w-4xl">
              <CRMWhatIsSection />
              
              <CRMRecommendationsSection crmData={crmData} renderStars={renderStars} />
              
              <CRMToolsDetailSection toolsArray={toolsArray} openSections={openSections} toggleSection={toggleSection} />
              
              <CRMFindNewSoftwareSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                productSearch={productSearch}
                setProductSearch={setProductSearch}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                sortBy={sortBy}
                setSortBy={setSortBy}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
              />
              
              {/* Product Details Section - Individual product cards remain here */}
              <section id="new-CRM-software" className="mt-8">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/1CRM.png" // Replace with your actual logo path
                            alt="1CRM Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            1CRM
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Founded in 1997 and headquartered in Victoria, Canada,
                        1CRM develops an eponymous customer relationship
                        management (CRM) tool. The 1CRM system helps its clients
                        provide better online information to their customers
                        while streamlining internal business processes and
                        improving their cost model. 1CRM offers both an
                        on-premise solution and a cloud-based service
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About 1CRM
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.1crm.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 4Degrees products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/4Degrees.png" // Replace with your actual logo path
                            alt="4Degrees Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            4Degrees
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        4Degrees is a cloud-based customer relationship
                        management (CRM) solution, which helps businesses
                        leverage their relationships. 4Degrees integrates into
                        email, calendar, and a number of third party data
                        sources to automatically populate a team's relationship
                        network, minimize data entry about the people and
                        companies in that network, and suggests ways to engage
                        that network over time.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About 4Degrees
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.4degrees.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Aarialife Technologies - A Zoho CRM Provider products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Aarialife.png" // Replace with your actual logo path
                            alt=" 2Aarialife Technologies Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Aarialife Technologies - A Zoho CRM Provider
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>

                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Aarialife is a Zoho Premium Partner and has the
                        knowledge, skills, and competency to consult and help
                        implement a highly-customized solution to meet various
                        customer's business and sales automation needs, while
                        suggesting leading practices.
                      </p>

                      <Link
                        href="/learn-more/24SevenOffice"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Aarialife Technologies
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.aarialife.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/*Accelo  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/accelo.png" // Replace with your actual logo path
                            alt="Accelo Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Accelo
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>

                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Small (50-249 Employees)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Accelo is a comprehensive Professional Services
                        Automation (PSA) platform designed to help service
                        organizations streamline operations, manage projects,
                        and improve profitability. By centralizing business
                        processes, it provides full visibility, real-time
                        insights, and automation, helping teams deliver work
                        more efficiently and detect issues early. Accelo
                        supports scalability and enables growth with integrated
                        solutions for project, client, and financial management
                        from quote-to-cash.
                      </p>

                      <Link
                        href="/learn-more/4castplus"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Accelo
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.accelo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Affinaquest products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Affinaquest.png" // Replace with your actual logo path
                            alt="Affinaquest Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            5day.io
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Affinaquest is a full-featured customer relationship
                        management (CRM) system built specifically for nonprofit
                        organizations.
                      </p>

                      <Link
                        href="/learn-more/5day-io"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Affinaquest
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.affinaquest.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 5Affinity products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Affinity.jpg" // Replace with your actual logo path
                            alt="Affinity Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Affinity
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Affinity is a relationship intelligence platform
                        enabling teams to leverage their network and close
                        deals. Using patent-pending technology, Affinity allows
                        teams to manage relationships by auto-populating the
                        pipeline and allowing introductions to decision makers.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Affinity
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.affinity.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* AgencyBloc  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/AgencyBloc.png" // Replace with your actual logo path
                            alt="AgencyBloc Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            AgencyBloc
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        AgencyBloc is an agency management system that helps
                        life and health insurance agencies grow their business
                        by organizing and automating their operations using a
                        combination of an industry-specific CRM, commissions
                        processing, and integrated marketing automation.
                        AgencyBloc’s mission is to provide powerful solutions by
                        making the convoluted straightforward.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About AgencyBloc
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.agencybloc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/*AgentCubed products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/AgentCubed.jpg" // Replace with your actual logo path
                            alt="AgentCubed Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            AgentCubed
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        AgentCubed was developed as a lead management tool as
                        well as a customer relationship management (CRM)
                        solution for the insurance industry. It offers three
                        different cloud-based products that cater to the needs
                        of either agents, agencies, or call centers. AgentCubed
                        provides free product demos, and its agency and call
                        center solutions can be customized to the specific needs
                        of the client depending on how many individuals will be
                        using the system.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About AgentCubed
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.agentcubed.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Agile CRM  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/AgileCRM.png" // Replace with your actual logo path
                            alt="Agile CRM Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Agile CRM
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        With Agile CRM, it is possible to engage your sales
                        force like never before by treating sales like a game.
                        Features include custom leader boards, real-time alerts
                        and advanced sales metrics. Track each and every key
                        performance indicator (KPI) with cohort analysis,
                        conversion reports and advanced analytics. Know your
                        customer’s profile, social presence, web activity and
                        track every interaction through a neatly arranged
                        timeline tracking the customer’s journey
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Agile CRM
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.agilecrm.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Amity  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Amity.jpg" // Replace with your actual logo path
                            alt="Amity Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Amity
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Amity
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.amity.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <CRMKeyFeaturesSection />
              
              <CRMHowToChooseSection />
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
        <CRMForm />
      </Modal>
    </>
  );
};

export default BestCRMSoftware;
