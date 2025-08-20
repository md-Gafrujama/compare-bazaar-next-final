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

      <div className="max-w-6xl mx-auto bg-white p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            The Best CRM Software of 2025
          </h1>

          <p className="text-gray-800 text-base md:text-base mb-4">
            At{" "}
            <span className="text-orange-500 font-semibold">
              Compare-bazaar
            </span>
            , we know how important it is to find the right tools to support
            your business. That’s why we suggest using the{" "}
            <span className="text-orange-500 font-semibold">
              best CRM software
            </span>
            —designed to work effortlessly with today’s VoIP systems. With
            features like AI-powered insights, smart automation, and real-time
            analytics, the{" "}
            <span className="text-orange-500 font-semibold">
              best CRM software
            </span>{" "}
            helps you build stronger customer relationships and streamline your
            workflow. Whether you're running a startup or managing a large
            company, the right CRM can make all the difference in how your team
            connects, collaborates, and grows.
          </p>
        </header>

        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your business grows, having the right communication tools becomes
            essential. While startups may start with a simple phone system, it’s
            important to upgrade as your needs evolve. A more advanced setup
            helps you stay efficient and connected. Integrating the{" "}
            <span className="text-orange-500 font-semibold">
              best CRM software
            </span>{" "}
            into your workflow can greatly improve how you manage customer
            relationships, automate tasks, and support business growth. At{" "}
            <span className="text-orange-500 font-semibold">
              Compare-bazaar
            </span>
            , we help you find the CRM that fits your goals, with features like
            AI analytics, automation, and smooth integration with your tools.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the{" "}
                <span className="text-orange-500 font-semibold">
                  best CRM software
                </span>{" "}
                comes with advanced features like AI-powered insights, real-time
                analytics, and powerful automation to enhance your team's
                efficiency. With{" "}
                <span className="text-orange-500 font-semibold">
                  Compare-bazaar
                </span>
                , you can compare leading CRM platforms, assess their strengths,
                and choose the best fit for your growing business. We're here to
                help you elevate your communication and customer management
                strategies.
              </span>
            )}
          </p>

          <button
            className="mt-2 text-[#000e54] font-semibold flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "LESS -" : "MORE +"}
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
              <section id="what-is-pm-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      CRM Software
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      CRM software manages and analyzes business contact and
                      customer information by storing and organizing it
                      effectively. Sales, marketing, and customer service teams
                      use the CRM platform to automate the gathering and
                      structuring of data related to customers, leads, partners,
                      and crucial business relationships.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      The processes and systems that help improve a business’s
                      relationships with their contacts may also be called
                      customer relationship management..
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Below, we have scored and ranked some of the top CRM
                      solutions in the market. Each has its own unique features
                      and functions that make them best suited to various use
                      cases.
                    </p>

                    {/* Recommendations List */}
                    <div className="space-y-3 mb-8">
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
                            HubSpot Sales Hub:
                          </a>{" "}
                          Best for integrations
                        </p>
                      </div>

                      {/* Pipedrive */}
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
                            Pipedrive:
                          </a>{" "}
                          Best for pipeline management and optimization
                        </p>
                      </div>

                      {/* Zoho CRM */}
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
                            Zoho CRM:
                          </a>{" "}
                          Best for decentralized teams
                        </p>
                      </div>

                      {/* Creatio */}
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
                            Creatio:
                          </a>{" "}
                          Best for low-code CRM and business process automation
                        </p>
                      </div>

                      {/* HoneyBook */}
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
                            HoneyBook:
                          </a>{" "}
                          Best for freelancers and service-based businesses
                        </p>
                      </div>
                    </div>
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

                {/* Zoho CRM */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <Image
                          src="/images/zoho.png"
                          alt="Zoho CRM Logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        Zoho
                        <br />
                        <span className="text-lg">CRM</span>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Any Company Size
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Lead Management, Automation, AI Assistant, and 10 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        Google Workspace, Microsoft 365, Zapier, and more
                      </div>
                    </div>
                  </div>
                </div>

                {/* HubSpot */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <Image
                          src="/images/hub.png"
                          alt="HubSpot Logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        HubSpot
                        <br />
                        <span className="text-lg">CRM Platform</span>
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
                        SMBs to Enterprises
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Marketing Automation, Email Tracking, Sales Pipeline
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        Zapier, Gmail, Outlook, and 50+ more
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creatio */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <Image
                          src="/images/creatio.png"
                          alt="Creatio Logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        Creatio
                        <br />
                        <span className="text-lg">Low-Code CRM</span>
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
                        Mid to Large Enterprises
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        BPM, Low-Code Automation, Sales & Service
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        Microsoft Teams, Google Workspace, and 10 more
                      </div>
                    </div>
                  </div>
                </div>

                {/* HoneyBook */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <Image
                          src="/images/honey.png"
                          alt="HoneyBook Logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        HoneyBook
                        <br />
                        <span className="text-lg">Client Management</span>
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
                        Freelancers & Creatives
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Proposals, Invoicing, Scheduling
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        QuickBooks, Calendly, Zapier, and more
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pipedrive */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <Image
                          src="/images/pipe.png"
                          alt="Pipedrive Logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        Pipedrive
                        <br />
                        <span className="text-lg">Sales CRM</span>
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
                        Sales Teams
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Pipeline Management, AI Sales Assistant
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        Slack, Asana, Trello, and 30 more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section id="CRM-recommendations" className="mt-8">
                <div className="mx-auto">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Our top 11 CRM recommendations
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
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 p-6 sm:p-8 transition-shadow duration-300 overflow-hidden">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                    Find your new project management software
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the perfect tool to streamline your workflow and
                    boost productivity
                  </p>
                </div>

                {/* Filter Products & Search Section */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Filter Products */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Filter className="w-4 h-4 text-blue-600" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Filter Products
                        </h3>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md"
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Products Search */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Search className="w-4 h-4 text-orange-600" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Search Products
                        </h3>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Search product name"
                          value={productSearch}
                          onChange={(e) => setProductSearch(e.target.value)}
                          className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md text-lg"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                          <div className="bg-gradient-to-r from-orange-500 to-blue-500 p-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <Search className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Filter by */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Filter by
                      </h3>
                    </div>
                    <div className="relative">
                      <select
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                      >
                        <option>Reviews</option>
                        <option>Pricing</option>
                        <option>Company Size</option>
                        <option>Features</option>
                        <option>Industry</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Sort by */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Sort by
                      </h3>
                    </div>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                      >
                        <option>Featured</option>
                        <option>Most Reviews</option>
                        <option>Highest Rated</option>
                        <option>Lowest Price</option>
                        <option>Most Popular</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Items per page */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-indigo-500" />
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Items per page
                      </h3>
                    </div>
                    <div className="relative">
                      <select
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                      >
                        <option>10 per page</option>
                        <option>25 per page</option>
                        <option>50 per page</option>
                        <option>100 per page</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
              {/* 1CRM products details */}
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
              {/* Common Features Section */}
              <section id="key-features" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Key CRM features to consider for your use case
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      While there are certainly software solutions that are
                      objectively “bad,” the majority of options in any given
                      vertical will be valued by how well they satisfy the
                      intended use case. Trying to apply the tool outside the
                      parameters it was designed for may fail to meet
                      expectations, but that does not necessarily mean the
                      software itself is of poor quality. It’s just a bad match.
                    </p>
                  </div>

                  {/* Second Paragraph with Links */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Below are some core areas of concern for CRM consumers to
                      consider when shopping around to help them find a tool
                      that aligns with their needs.{" "}
                      <Link
                        href="/enterprise-project-management"
                        className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        The Different Types of Roles & Responsibilities in a CRM
                      </Link>{" "}
                    </p>
                  </div>

                  {/* Contact management Section */}
                  <div>
                    {/* Contact management Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Contact management
                    </h2>

                    {/* Contact management Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                      For CRM tools, the most foundational functionality is that
                      of collecting and organizing contact information. At the
                      very least, it needs to be a step up from simply dumping
                      leads into a spreadsheet only to immediately be forgotten.
                      Spreadsheets have their place, but they aren’t optimized
                      for automation or to serve as living records. If a CRM
                      can’t improve on manual data entry, manual data scrubbing,
                      and manual retrieval, then it’s just Excel with extra
                      steps.
                    </p>

                    {/* Additional Contact Management Info */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-4">
                      Contact management features in CRM and sales software, it
                      should be noted, vary widely from system to system. But
                      the common upgrades to functionality will likely look
                      familiar to anyone who’s been using digital devices in the
                      past two decades:
                    </p>

                    <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
                      <li>Automated data importing</li>
                      <li>
                        Data export flexibility (via EDI, CSV, or other formats)
                      </li>
                      <li>
                        Integrations with other platforms, apps, and databases
                      </li>
                      <li>Filters and search functions</li>
                      <li>Analytics and reporting functions</li>
                    </ul>
                  </div>
                </div>
                {/*Communication recordsSection */}
                <div>
                  {/* Communication records Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Communication records
                  </h2>

                  {/* Communication records Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
                    By now, nearly everyone is familiar with the “This call may
                    be recorded for quality assurance purposes” line spoken to
                    customers calling in to a business for support. Having a
                    record of customer/client/lead interactions can be
                    indispensable. And not just for maintaining excellent
                    service, either.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6">
                    Using recorded calls, chats, and other communication,
                    businesses can achieve a multitude of important objectives,
                    including:
                  </p>

                  <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2 mb-6">
                    <li>
                      Improving effectiveness of staff training, onboarding,
                      company policies, and more
                    </li>
                    <li>
                      Compiling data for analytics (which can help identify
                      patterns, predict trends, and even recommend strategies)
                    </li>
                    <li>
                      Providing evidence to help navigate legal concerns and
                      protect against loss
                    </li>
                  </ul>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                    If benefits like these factor into your CRM and sales
                    software choices, then be aware that some software includes
                    functionality to support it, while some does not.
                  </p>
                </div>
                {/* Integrations Section */}
                <div>
                  {/* Integrations Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Integrations
                  </h2>

                  {/* Integrations Paragraphs */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Implementing new software systems can be difficult, and
                    onboarding users only becomes more problematic when the
                    system doesn’t play well with existing solutions in the
                    workflow.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Some CRMs are built as part of a larger platform of business
                    solutions, and are intended to be used as a holistic unit.
                    This is a bit of a trade-off, and some cost-benefit
                    evaluations will be needed to determine if a complete
                    workflow overhaul will net positive or negative returns for
                    the trouble.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    However, if maintaining the stability and functionality of
                    other systems is of equal importance, then finding a CRM
                    software that can integrate with them successfully is
                    critical. Depending on what integrations are needed, there
                    may be plug-ins or add-ons available already to users of the
                    tool.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    For less common integrations, some more code-heavy API
                    customization may be necessary. In these cases, it’s a good
                    idea to ask which side of the client-vendor partnership will
                    be building the integration.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                    What should be avoided is the addition of a CRM that only
                    further complicates workflows and requires additional manual
                    processes to hold the system together.
                  </p>
                </div>
                <div>
                  {/* Marketing Automation Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Marketing automation
                  </h2>

                  {/* Marketing Automation Paragraphs */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Marketing automation is a specific example of the
                    integration concerns above, but it merits its own spot on
                    this list due to the amount of overlap between marketing and
                    sales efforts. Like other sales-adjacent functions, there
                    are a lot of advantages to having the CRM trigger automatic
                    tasks such as sending confirmation emails, email nurture
                    campaigns, and more.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Worst-case scenario, similar to what’s mentioned above, is
                    that the new CRM complicates already existing processes,
                    rather than integrating or replacing them. If your CRM or
                    sales software adds another step in the process of, for
                    example, sending outreach emails because staff members have
                    to manually dig for contact info in the database, that’s a
                    net loss.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    At the very least, the CRM should leave any existing
                    processes intact and unhindered. Most likely, however, your
                    organization will benefit from some form of integration, or
                    a CRM that includes marketing automation features natively.
                  </p>
                </div>
                <div>
                  {/* Quotes and Invoicing Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Quotes and invoicing
                  </h2>

                  {/* Quotes and Invoicing Paragraphs */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Next in line for important functions in the sales process
                    that may or may not be handled by sales team members are
                    financials, such as quotes, invoices, and other AP/AR
                    responsibilities. The same philosophy applies here as above.
                    If an all-in-one solution upgrades your workflow, prioritize
                    that aspect in your research.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                    If integration will suffice, then double-check with vendors
                    for the specific platforms you need to be interoperable.
                    Even if your current process is efficient enough currently,
                    be sure that the CRM software doesn’t create additional
                    headaches for anyone in the workflow.
                  </p>
                </div>
                <div>
                  {/* Data Privacy Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Data privacy
                  </h2>

                  {/* Data Privacy Paragraphs */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Cybersecurity is, arguably, a priority for every
                    organization (or, at least it should be). Some verticals
                    deal with higher risk than others, however, and may need
                    additional security protocols for their CRM to protect
                    themselves or even to comply with industry mandates.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    This is one that may require consulting with IT, InfoSec, or
                    other I&O staff in the organization. Many of the technical
                    details that factor into whether or not a CRM software is
                    sufficiently secure may be outside the expertise of anyone
                    without a background in computer systems, and it’s not one
                    to leave to chance.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                    Check with internal SMEs, and leverage their experience to
                    further vet your shortlist of CRMs. It may even be
                    worthwhile to have a 3rd-party vendor risk assessment done
                    for any that meet all other criteria, just to cover your
                    bases.
                  </p>
                </div>
                <div>
                  {/* Project Management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Project management
                  </h2>

                  {/* Project Management Paragraphs */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    This list of supplemental functions that might be relevant
                    would be pretty long if it were comprehensive. All-in-one
                    systems, analytics and reporting, ease of use, pipeline
                    management, and many more might fit here. Many of these have
                    been touched on above, and others are likely known
                    quantities already.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    So instead, this part of the list will finish with one final
                    consideration: project management.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Organizations that have, until now, used less formalized
                    workflow processes may not realize how much of an upgrade a
                    well-designed project management strategy can be. As teams
                    grow, workloads become heavier, and processes become more
                    intricate and complex, tracking things on paper proves a
                    substantial challenge.
                  </p>

                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                    With effective implementation, project management tools can
                    provide visibility and accountability across the board.
                    Better still, it can help staff achieve greater levels of
                    autonomy by giving them the tools needed to stay organized
                    and on top of their responsibilities. Some CRM and sales
                    software tools include project management (PM) features in
                    their toolset, while others can integrate with popular
                    platforms via APIs. Either way, for any team larger than a
                    handful of employees, it’s worth discussing the potential
                    value a CRM with PM enablement might bring to the table.
                  </p>
                </div>
              </section>
              {/* How-to-choose */}
              <section id="how-to-choose" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Choosing the right CRM and sales software
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      After diving into the world of CRM solutions, you’ve
                      likely noticed there’s no shortage of options. This
                      abundance is actually a good thing – it means you have the
                      flexibility to find a CRM that fits your business like a
                      glove, whether you’re running a small startup or managing
                      a large company. If you’re a small business owner, you
                      might be looking for something straightforward and
                      budget-friendly. On the other hand, if you’re at the helm
                      of a larger company, you might need a CRM with all the
                      bells and whistles – think advanced features and seamless
                      integrations with your existing tech stack.
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
        <CRMForm />
      </Modal>
    </>
  );
};

export default BestCRMSoftware;
