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
 
 
import PhoneSystemContent from '../../../components/PhoneSystemContent';
 
import BusinessPhoneSystemForm from '../../../components/BusinessPhoneSystemForm';
 
 

const PhoneSystemsPage = () => {
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
     
 RingCentral: {
  title: "RingCentral – Best for Unified Communications",
  logo: "/images/ringcentral.png",
  button: {
    text: "Visit Website",
    link: "#",
  },
  scores: [
    { label: "Overall Score", score: "4.7/5" },
    { label: "Pricing", score: "4.4/5" },
    { label: "General features and Interface", score: "4.6/5" },
    { label: "Core features", score: "4.8/5" },
    { label: "Advanced features", score: "4.7/5" },
    { label: "Integration and compatibility", score: "5/5" },
    { label: "UX", score: "4.5/5" },
  ],
  pros: [
    "All-in-one business communication platform",
    "HD voice and video quality",
    "Robust integrations with CRM and productivity tools",
  ],
  cons: [
    "Higher tiers may be costly for small businesses",
    "Learning curve for new users with advanced features",
  ],
  why: {
    intro: `RingCentral is ideal for businesses seeking a comprehensive communication platform. With top-tier voice, video, messaging, and contact center functionality, it excels in streamlining communication across teams and clients.`,
    bullets: [
      "RingCentral offers 99.999% uptime and crystal-clear audio/video quality, making it reliable for daily business operations.",
      "Its integration ecosystem spans Microsoft Teams, Google Workspace, Salesforce, and hundreds of other apps, enabling seamless workflows.",
    ],
    outro: `With built-in call analytics, real-time collaboration, and customizable call routing, RingCentral simplifies internal and external communications. The platform’s scalability makes it a top choice for growing businesses or distributed teams that demand performance and flexibility.`,
    extras: {
      "About ": (
        <>
          <p className="text-black mb-4">
            RingCentral is a cloud-based communications platform offering voice,
            video, SMS, and fax capabilities all in one solution. With its
            intuitive interface and enterprise-grade reliability, it caters to
            businesses of all sizes.
          </p>
          <p className="text-black mb-4">
            The platform is designed for ease of use and rapid deployment,
            helping businesses eliminate the need for separate services for
            conferencing, messaging, and phones. It's especially effective in
            hybrid work models and remote-first organizations.
          </p>
          <p className="text-black mb-4">
            Its analytics dashboard provides deep insights into call performance
            and user behavior, while its admin controls make configuration and
            compliance management simple for IT teams.
          </p>
        </>
      ),
      "Key Features": (
        <>
          <h4 className="text-lg font-bold mb-2">HD Voice & Video:</h4>
          <p className="text-black mb-4">
            Delivers reliable, high-definition audio and video conferencing for
            seamless communication internally and externally.
          </p>

          <h4 className="text-lg font-bold mb-2">Team Messaging:</h4>
          <p className="text-black mb-4">
            Integrated messaging across devices with file sharing, task
            management, and threaded conversations.
          </p>

          <h4 className="text-lg font-bold mb-2">Auto-Receptionist & IVR:</h4>
          <p className="text-black mb-4">
            Customizable automated attendants and call routing to guide
            customers to the right department or agent efficiently.
          </p>

          <h4 className="text-lg font-bold mb-2">Mobile App:</h4>
          <p className="text-black mb-4">
            Stay connected from anywhere with a robust mobile app offering full
            access to call, video, and messaging features.
          </p>

          <h4 className="text-lg font-bold mb-2">Analytics and Call Logs:</h4>
          <p className="text-black">
            View detailed reports on call volumes, durations, missed calls, and
            more, enabling better resource planning and quality control.
          </p>
        </>
      ),
      Pricing: (
        <>
          <p className="text-black mb-4">
            <a href="#">Free Trial</a> Available
          </p>

          <h4 className="text-lg font-bold mb-2">Core Plan</h4>
          <p className="font-bold text-black mb-4">
            Price:<span className="font-light"> $20/user/month (annually)</span>
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Business phone or toll-free number</li>
            <li>Unlimited calls within the US/Canada</li>
            <li>Team messaging & document sharing</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Advanced Plan</h4>
          <p className="font-bold text-black mb-4">
            Price:<span className="font-light"> $25/user/month (annually)</span>
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Everything in Core</li>
            <li>Automatic call recording</li>
            <li>Advanced call handling features</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Ultra Plan</h4>
          <p className="font-bold text-black mb-4">
            Price:<span className="font-light"> $35/user/month (annually)</span>
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>All Advanced features</li>
            <li>Device status reports</li>
            <li>Real-time analytics</li>
            <li>Unlimited storage</li>
          </ul>

          <p className="text-black">
            For updated pricing and feature details, please refer to the official RingCentral pricing page.
          </p>
        </>
      ),
    },
  },
},
      Nextiva: {
  title: "Nextiva – Best for Small Businesses",
  logo: "/images/nextiva.png",
  button: {
    text: "Visit Website",
    link: "#",
  },
  scores: [
    { label: "Overall Score", score: "4.6/5" },
    { label: "Pricing", score: "4.5/5" },
    { label: "Ease of Use", score: "4.7/5" },
    { label: "Features", score: "4.6/5" },
    { label: "Call Quality", score: "4.4/5" },
    { label: "Support", score: "4.5/5" },
    { label: "Integrations", score: "4.3/5" },
  ],
  pros: [
    "User-friendly interface with fast setup",
    "Excellent call quality and uptime",
    "Powerful VoIP tools and virtual receptionist",
  ],
  cons: [
    "Limited advanced analytics on lower-tier plans",
    "Mobile app could be more robust",
  ],
  why: {
    intro: `Nextiva is one of the top-rated VoIP providers for small businesses due to its simple setup, reliable service, and powerful features at affordable pricing. Its VoIP platform is designed with SMBs in mind, offering everything from HD voice to call routing and voicemail-to-email functionality.`,
    bullets: [
      "Nextiva offers strong call management features like auto-attendant, call groups, and voicemail transcription that streamline business communication.",
      "The platform includes video conferencing, team chat, and file sharing — all in one place — ideal for small teams looking for an all-in-one communications solution.",
    ],
    outro: `Nextiva balances cost-efficiency and enterprise-grade features in a way that makes it perfect for growing small businesses. From sales calls to customer service interactions, it ensures crystal-clear communication and professional presence.`,
    extras: {
      "About": (
        <>
          <p className="text-black mb-4">
            Nextiva is a cloud-based business communication provider known for its VoIP phone systems. It supports over 100,000 businesses across the U.S., offering tools for calling, conferencing, fax, and messaging.
          </p>
          <p className="text-black mb-4">
            The company emphasizes ease of use, with simple onboarding and intuitive interfaces that don’t require technical expertise. It’s built to scale with your business as it grows.
          </p>
          <p className="text-black mb-4">
            Whether you're working from the office or remotely, Nextiva's system ensures consistent, high-quality communication and strong uptime reliability.
          </p>
        </>
      ),
      "Key Features": (
        <>
          <h4 className="text-lg font-bold mb-2">Auto-Attendant:</h4>
          <p className="text-black mb-4">
            Automatically greets and routes callers to the right team or department without human intervention.
          </p>
          <h4 className="text-lg font-bold mb-2">Voicemail to Email:</h4>
          <p className="text-black mb-4">
            Sends voicemail messages directly to your email inbox with audio attachments or transcriptions.
          </p>
          <h4 className="text-lg font-bold mb-2">HD Voice Calling:</h4>
          <p className="text-black mb-4">
            Delivers crystal-clear call quality using broadband internet, reducing dropped or choppy calls.
          </p>
          <h4 className="text-lg font-bold mb-2">Call Analytics:</h4>
          <p className="text-black mb-4">
            Provides detailed insights on call volumes, durations, missed calls, and agent activity.
          </p>
          <h4 className="text-lg font-bold mb-2">Mobile App:</h4>
          <p className="text-black mb-4">
            Stay connected on the go with voice and video calling, chat, and more, all from your smartphone.
          </p>
        </>
      ),
      Pricing: (
        <>
          <p className="text-black mb-4">
            <a href="#">Free Trial</a> Available
          </p>

          <h4 className="text-lg font-bold mb-2">Essential Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$23.95/user/month (billed annually)</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Unlimited calling</li>
            <li>Auto-attendant</li>
            <li>Voicemail-to-email</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Professional Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$27.95/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Call queues</li>
            <li>CRM integrations</li>
            <li>Unlimited video meetings</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Enterprise Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">Custom pricing</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Call recording</li>
            <li>Single Sign-On (SSO)</li>
            <li>Advanced analytics and integrations</li>
          </ul>
          <p className="text-black">
            For more detailed pricing information, visit the Nextiva pricing page.
          </p>
        </>
      ),
    },
  },
      },


     Ooma: {
  title: "Ooma Office – Best for Simplicity and Affordability",
  logo: "/images/ooma.png",
  button: {
    text: "Visit Website",
    link: "#",
  },
  scores: [
    { label: "Overall Score", score: "4.4/5" },
    { label: "Pricing", score: "4.7/5" },
    { label: "Ease of Use", score: "4.8/5" },
    { label: "Features", score: "4.2/5" },
    { label: "Call Quality", score: "4.3/5" },
    { label: "Support", score: "4.4/5" },
    { label: "Integrations", score: "4.0/5" },
  ],
  pros: [
    "Extremely easy to set up and use",
    "Great value for small businesses",
    "No contracts or hidden fees",
    "Reliable voice quality and uptime",
  ],
  cons: [
    "Limited advanced features for larger businesses",
    "Fewer third-party integrations compared to competitors",
  ],
  why: {
    intro: `Ooma Office is an ideal VoIP solution for small businesses seeking simplicity, reliability, and affordability. It offers an excellent set of essential features for business communication, with transparent pricing and no technical complexity.`,
    bullets: [
      "Ooma’s plug-and-play setup allows businesses to get started within minutes, with no need for IT support or hardware installation.",
      "Its mobile app ensures business continuity on the go, allowing users to receive calls, check voicemail, and send messages from any device.",
    ],
    outro: `For businesses that prioritize ease of use and a strong return on investment without needing complex integrations or enterprise-level analytics, Ooma is the right pick. Its combination of solid features, quality support, and dependable service makes it a top choice in the small business space.`,
    extras: {
      "About": (
        <>
          <p className="text-black mb-4">
            Ooma Office is a cloud-based business phone system designed to
            deliver enterprise-grade features in an easy-to-use package. It’s
            widely trusted by small to medium-sized businesses and is praised
            for its customer satisfaction, reliability, and cost-efficiency.
          </p>
          <p className="text-black">
            With support for virtual receptionists, call forwarding, mobile
            apps, and voicemail-to-email, Ooma offers all the core
            communication tools most businesses need — without unnecessary
            bells and whistles. The platform is built with a focus on ease of
            onboarding and low operational overhead, making it particularly
            appealing to startups and teams without dedicated IT departments.
          </p>
        </>
      ),
      "Key Features": (
        <>
          <h4 className="text-lg font-bold mb-2">Virtual Receptionist:</h4>
          <p className="text-black mb-4">
            Routes calls to the right person or department automatically with
            custom greetings and menu options.
          </p>
          <h4 className="text-lg font-bold mb-2">Mobile App:</h4>
          <p className="text-black mb-4">
            Take your business line on the go. Make and receive calls, check
            voicemail, and send messages from your smartphone.
          </p>
          <h4 className="text-lg font-bold mb-2">Voicemail Transcription:</h4>
          <p className="text-black mb-4">
            Converts voicemail messages into readable text and sends them to
            your email or app.
          </p>
          <h4 className="text-lg font-bold mb-2">Call Logs & Reporting:</h4>
          <p className="text-black mb-4">
            Provides a simple interface to monitor incoming and outgoing calls,
            helping businesses track communication history.
          </p>
          <h4 className="text-lg font-bold mb-2">Desktop and Mobile Sync:</h4>
          <p className="text-black">
            Ensures users have access to the same features and call records
            across both desktop and mobile platforms.
          </p>
        </>
      ),
      Pricing: (
        <>
          <p className="text-black mb-4">
            <a href="#">Free Trial</a> Available
          </p>

          <h4 className="text-lg font-bold mb-2">Ooma Office Essentials:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$19.95/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Unlimited calling in the U.S., Canada, Mexico, and Puerto Rico</li>
            <li>Virtual receptionist</li>
            <li>Call forwarding and blocking</li>
            <li>Mobile app access</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Ooma Office Pro:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$24.95/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Desktop app</li>
            <li>Call recording</li>
            <li>Voicemail transcription</li>
            <li>Enhanced call analytics</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Ooma Office Pro Plus:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$29.95/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>CRM integrations</li>
            <li>Call queuing</li>
            <li>Hot desking</li>
            <li>Team messaging</li>
          </ul>

          <p className="text-black">
            For more detailed pricing and feature comparison, visit the Ooma Office pricing page.
          </p>
        </>
      ),
    },
  },
     },
   Vonage: {
  title: "Vonage Business Communications – Best for Unified Communication Flexibility",
  logo: "/images/vonage.png",
  button: {
    text: "Visit Website",
    link: "#",
  },
  scores: [
    { label: "Overall Score", score: "4.2/5" },
    { label: "Pricing", score: "4.0/5" },
    { label: "General features and Interface", score: "4.3/5" },
    { label: "Core features", score: "4.4/5" },
    { label: "Advanced features", score: "4.0/5" },
    { label: "Integration and compatibility", score: "4.3/5" },
    { label: "UX", score: "4.5/5" },
  ],
  pros: [
    "Highly customizable and scalable",
    "Strong API capabilities and developer tools",
    "Mobile and desktop apps for remote work",
    "Global communication support",
    "Video, voice, messaging, and fax in one platform",
  ],
  cons: [
    "More complex setup for API features",
    "Customer support may vary depending on plan",
    "Advanced features may require higher-tier pricing",
  ],
  why: {
    intro: `Vonage Business Communications is best for companies seeking unified communications with advanced flexibility and global capabilities. It stands out for offering voice, messaging, video, and contact center tools that are scalable for startups or enterprises.`,
    bullets: [
      "Vonage offers extensive API integrations and developer options, giving businesses unmatched control over how they deploy voice, SMS, and video communication.",
      "Its platform supports a hybrid and remote workforce with mobile-first tools, allowing businesses to stay connected across devices and locations.",
      "Vonage integrates with CRMs like Salesforce and productivity tools like Microsoft Teams, Slack, and G Suite, supporting smoother workflows.",
    ],
    outro: `While other platforms may provide a simpler setup, Vonage is unmatched in its flexibility and global reach. It’s especially well-suited for businesses needing tailored communication flows or multi-channel support through programmable APIs.`,
    extras: {
      "About": (
        <>
          <p className="text-black mb-4">
            Vonage is a cloud communications provider that empowers businesses to
            connect via voice, messaging, video, and APIs. With a global
            footprint and enterprise-grade reliability, Vonage Business
            Communications helps organizations streamline internal and external
            communication.
          </p>
          <p className="text-black mb-4">
            The platform is ideal for hybrid and remote teams, supporting unified
            communication across devices. It allows businesses to manage phone
            systems, team messaging, and video conferencing all from one app.
          </p>
          <p className="text-black mb-4">
            Vonage is also widely recognized for its communication APIs that let
            developers build custom workflows, notifications, and multi-channel
            support into apps or customer service platforms.
          </p>
        </>
      ),
      "Key Features": (
        <>
          <h4 className="text-lg font-bold mb-2">Unified Communications:</h4>
          <p className="text-black mb-4">
            Vonage provides voice, video, SMS, team chat, and fax services in a
            single, user-friendly platform that supports mobile and desktop.
          </p>

          <h4 className="text-lg font-bold mb-2">Mobile and Desktop Apps:</h4>
          <p className="text-black mb-4">
            Enables employees to work from anywhere with synced apps across
            devices that offer calling, messaging, and meeting tools.
          </p>

          <h4 className="text-lg font-bold mb-2">Vonage Meetings:</h4>
          <p className="text-black mb-4">
            Integrated video conferencing solution that supports screen sharing,
            chat, and scheduling for up to 100 participants.
          </p>

          <h4 className="text-lg font-bold mb-2">Integrations:</h4>
          <p className="text-black mb-4">
            Offers built-in integrations with Salesforce, Microsoft Teams, Slack,
            G Suite, Zoho, and more to streamline communication and workflows.
          </p>

          <h4 className="text-lg font-bold mb-2">Call Analytics and Logs:</h4>
          <p className="text-black">
            Provides insights into call performance, duration, and quality for
            performance tracking and customer service optimization.
          </p>
        </>
      ),
      Pricing: (
        <>
          <p className="text-black mb-4">
            <a href="#">Free Trial</a> Available (14 days)
          </p>

          <h4 className="text-lg font-bold mb-2">Mobile Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$19.99/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Mobile and desktop apps</li>
            <li>Unlimited calling and texting</li>
            <li>Team messaging</li>
            <li>Basic reporting</li>
            <li>Vonage App Center access</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Premium Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$29.99/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Everything in Mobile, plus:</li>
            <li>CRM integrations</li>
            <li>Auto-attendant and call groups</li>
            <li>Multi-level IVR</li>
            <li>Vonage Meetings video conferencing</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Advanced Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$39.99/user/month</span>
          </p>
          <h6 className="text-lg font-bold mb-2">Features:</h6>
          <ul className="list-disc pl-5 text-black">
            <li>Everything in Premium, plus:</li>
            <li>Call recording</li>
            <li>On-demand call analytics</li>
            <li>Call monitoring tools</li>
            <li>Supervisor dashboards</li>
          </ul>

          <p className="text-black mt-4">
            Visit the Vonage Business Communications pricing page for more details on add-ons and enterprise features.
          </p>
        </>
      ),
    },
  },
   },
  
   ZoomPhone: {
  title: "Zoom Phone – Best for Teams Already Using Zoom Meetings",
  logo: "/images/zoom.png",
  button: {
    text: "Visit Website",
    link: "#",
  },
  scores: [
    { label: "Overall Score", score: "4.2/5" },
    { label: "Pricing", score: "4.1/5" },
    { label: "General features and Interface", score: "4.5/5" },
    { label: "Core features", score: "4.3/5" },
    { label: "Advanced features", score: "3.9/5" },
    { label: "Integration and compatibility", score: "4.5/5" },
    { label: "UX", score: "4.6/5" },
  ],
  pros: [
    "Seamlessly integrates with Zoom Meetings",
    "Modern and intuitive interface",
    "Ideal for hybrid or remote teams",
    "Global PSTN connectivity available",
    "Strong security and call encryption",
  ],
  cons: [
    "Many features require Zoom Meetings license",
    "Limited contact center functionality",
    "Pricing can rise with add-ons",
  ],
  why: {
    intro: `Zoom Phone is the best solution for companies already embedded in the Zoom ecosystem. It’s a natural extension of Zoom’s reliable video conferencing, delivering VoIP, team messaging, and phone capabilities in one streamlined platform.`,
    bullets: [
      "Zoom Phone offers advanced call management features, including auto-attendant, call queues, and voicemail transcription—all within the familiar Zoom interface.",
      "Zoom’s Global Select plan provides PSTN service in over 40 countries, making it a strong choice for multinational teams that want to consolidate communication in a single tool.",
      "It maintains enterprise-grade security, including encryption for voice calls and regulatory compliance for HIPAA and GDPR.",
    ],
    outro: `While it may lack some robust contact center tools offered by competitors like RingCentral, Zoom Phone excels in ease of use, unified communication, and its appeal to businesses already using Zoom for virtual meetings.`,
    extras: {
      "About": (
        <>
          <p className="text-black mb-4">
            Zoom Phone is a cloud-based business phone system developed by Zoom,
            extending its already-popular video conferencing platform to support
            voice communications. Designed for modern businesses, Zoom Phone
            allows organizations to consolidate meetings, messaging, and voice
            into one app.
          </p>
          <p className="text-black mb-4">
            It includes essential VoIP features such as intelligent call routing,
            call park/pickup, voicemail transcription, and direct phone numbers
            (DIDs). It’s especially popular among remote teams and distributed
            companies already relying on Zoom Meetings.
          </p>
          <p className="text-black">
            Whether you're a small team or an international organization, Zoom
            Phone offers scalability, flexibility, and a familiar user
            experience—making transitions from legacy phone systems smoother and
            more cost-effective.
          </p>
        </>
      ),
      "Key Features": (
        <>
          <h4 className="text-lg font-bold mb-2">Native Zoom Integration:</h4>
          <p className="text-black mb-4">
            Zoom Phone is tightly integrated with Zoom Meetings and Team Chat,
            enabling smooth transitions between voice, video, and messaging.
          </p>

          <h4 className="text-lg font-bold mb-2">Auto-Attendant & Call Queues:</h4>
          <p className="text-black mb-4">
            Set up intelligent routing to departments or individuals based on
            customizable schedules and menus.
          </p>

          <h4 className="text-lg font-bold mb-2">Global Coverage:</h4>
          <p className="text-black mb-4">
            Access phone numbers and PSTN service in over 40 countries with
            optional Global Select plans.
          </p>

          <h4 className="text-lg font-bold mb-2">Call Monitoring and Reporting:</h4>
          <p className="text-black mb-4">
            Supervisors can listen in, whisper, barge, or take over calls. Real-time
            analytics and usage dashboards help manage performance.
          </p>

          <h4 className="text-lg font-bold mb-2">Voicemail Transcription:</h4>
          <p className="text-black">
            Automatically convert voicemail to text and email it to users for quick
            response and accessibility.
          </p>
        </>
      ),
      Pricing: (
        <>
          <p className="text-black mb-4">
            <a href="#">Free Trial</a> Available
          </p>

          <h4 className="text-lg font-bold mb-2">Metered Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$10/user/month</span>
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Domestic and international calling (pay per minute)</li>
            <li>Basic call management and voicemail</li>
            <li>Requires Zoom Pro/Business account</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Unlimited Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$15/user/month</span>
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Unlimited calling within the U.S. and Canada</li>
            <li>Voicemail transcription</li>
            <li>Call queues and auto attendants</li>
            <li>SMS/MMS included</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Global Select Plan:</h4>
          <p className="font-bold text-black mb-4">
            Price: <span className="font-light">$20+/user/month</span>
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Includes unlimited domestic calling in 40+ countries</li>
            <li>Dedicated phone numbers for international teams</li>
            <li>Supports hybrid workforce and global offices</li>
          </ul>

          <p className="text-black mt-4">
            Visit the Zoom Phone Pricing page for the most current plan details and
            international coverage options.
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
      name: "Ooma Office",
      logo: "/images/ooma.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "No Contract Necessary",
      support: "50+ Standard Features",
      link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
    },
    {
      name: "RingEX",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $20/user/month paid annually",
      videoCapacity: "HD video meetings (100 participants)",
      support: "24/7 customer support",
      link: "#",
    },
    {
      name: "Zoom",
      logo: "/images/zoom.png",
      bestFor: "Video Conferencing",
      price: "Starts at $10 monthly per user/month",
      videoCapacity: "International Calling Metered",
      support: "24/7 customer support",
      link: "#",
    },
    {
      name: "NextivoONE",
      logo: "/images/nextiva.png",
      bestFor: "Best for Support",
      price: "Starts at $30 per user/month",
      videoCapacity: "Social media channels",
      support: "24/7 customer support",
      link: "#",
    },
    {
      name: "Vonage",
      logo: "/images/vonage.png",
      bestFor: "Best for Support",
      price: "Starts at $13.99 per user/month",
      videoCapacity: "Unlimited domestic calling",
      support: "Supports desktop and mobile apps",
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
    id: "introduction",
    title: "Introduction to Business Phone Systems",
    active: false,
  },
  {
    id: "importance",
    title: "Our top 11 Business Phone Systems recommendations",
    active: false,
  },
  {
    id: "features",
    title: "Key Features of Best Phone System Management",
    active: false,
  },
  {
    id: "best-systems",
    title: "What Are the Best Business Phone Systems?",
    active: false,
  },
  {
    id: "benefits",
    title: "Benefits of Modern Phone Systems",
    active: false,
  },
  {
    id: "types",
    title: "Types of Business Phone System Solutions",
    active: false,
  },
  {
    id: "perfect-solution",
    title: "Find Your Perfect Phone Solution",
    active: false,
  },
   
  {
    id: "faqs",
    title: "FAQs",
    active: false,
  },
];

   const crmData = [
      
  {
    id: 1,
    name: "RingCentral MVP",
    image: "/images/ringcentral.png",
    alt: "RingCentral MVP",
    expertScore: 4.7,
    bestFor: "Best for Unified Communications",
    visitUrl: "ringcentral",
    keyFeatures: [
      "HD voice & video calling",
      "Team messaging",
      "Call routing & IVR"
    ],
    freeTrial: true,
    freeVersion: false,
  },
  {
    id: 2,
    name: "Nextiva",
    image: "/images/nextiva.png",
    alt: "Nextiva",
    expertScore: 4.6,
    bestFor: "Best for small businesses",
    visitUrl: "nextiva",
    keyFeatures: [
      "VoIP phone system",
      "Call analytics",
      "Auto-attendant & voicemail"
    ],
    freeTrial: true,
    freeVersion: false,
  },
  {
    id: 3,
    name: "Ooma Office",
    image: "/images/ooma.png",
    alt: "Ooma Office",
    expertScore: 4.3,
    bestFor: "Best budget-friendly solution",
    visitUrl: "ooma",
    keyFeatures: [
      "Virtual receptionist",
      "Mobile app",
      "Easy setup for small teams"
    ],
    freeTrial: true,
    freeVersion: false,
  },
  {
    id: 4,
    name: "Vonage Business Communications",
    image: "/images/vonage.png",
    alt: "Vonage Business Communications",
    expertScore: 4.4,
    bestFor: "Best for custom integrations",
    visitUrl: "vonage",
    keyFeatures: [
      "Voice, SMS, and team chat",
      "CRM integrations",
      "Flexible API access"
    ],
    freeTrial: true,
    freeVersion: false,
  },
  
  {
    id: 6,
    name: "Zoom Phone",
    image: "/images/zoom.png",
    alt: "Zoom Phone",
    expertScore: 4.3,
    bestFor: "Best for hybrid teams",
    visitUrl: "zoomphone",
    keyFeatures: [
      "Cloud PBX system",
      "Seamless Zoom Meetings integration",
      "Call queues & recordings"
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
 

  // const systems = [
  //   {
  //     name: "Ooma Office",
  //     logo: "/images/ooma.png",
  //     bestFor: "Best for Ease of Use",
  //     price: "Starts at $19.95 per user/month",
  //     videoCapacity: "No Contract Necessary",
  //     support: "50+ Standard Features",
  //     link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
  //   },
  //   {
  //     name: "RingEX",
  //     logo: "/images/ringcentral.png",
  //     bestFor: "Best for Ease of Use",
  //     price: "Starts at $20/user/month paid annually",
  //     videoCapacity: "HD video meetings (100 participants)",
  //     support: "24/7 customer support",
  //     link: "#",
  //   },
  //   {
  //     name: "Zoom",
  //     logo: "/images/zoom.png",
  //     bestFor: "Video Conferencing",
  //     price: "Starts at $10 monthly per user/month",
  //     videoCapacity: "International Calling Metered",
  //     support: "24/7 customer support",
  //     link: "#",
  //   },
  //   {
  //     name: "NextivoONE",
  //     logo: "/images/nextiva.png",
  //     bestFor: "Best for Support",
  //     price: "Starts at $30 per user/month",
  //     videoCapacity: "Social media channels",
  //     support: "24/7 customer support",
  //     link: "#",
  //   },
  //   {
  //     name: "Vonage",
  //     logo: "/images/vonage.png",
  //     bestFor: "Best for Support",
  //     price: "Starts at $13.99 per user/month",
  //     videoCapacity: "Unlimited domestic calling",
  //     support: "Supports desktop and mobile apps",
  //     link: "#",
  //   },
  // ];

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

  const additionalText =
    " The modern business phone system landscape has evolved significantly, with cloud-based VoIP solutions replacing traditional landlines in many organizations. Today's business phone systems offer advanced features like AI-powered call routing, CRM integration, voicemail-to-text transcription, and comprehensive analytics. These tools help businesses enhance customer service, improve team collaboration, and streamline communication workflows. When evaluating different providers, it's important to consider factors such as scalability, call quality, integration capabilities, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and conferencing in a single platform.";

  return (
    <>
      <Head>
        <title>Compare Bazaar : Compare Quotes from Top Vendors & Make Smarter Buying Decisions</title>
        <meta
          name="description"
          content="Compare quotes from verified vendors with confidence at Compare-Bazaar. Save time, money, and stress with transparent comparisons you can trust."
        />
        <link
          rel="canonical"
          href="https://www.compare-bazaar.com/phone-systems"
        />
      </Head>

      <div className="max-w-6xl mx-auto p-4 py-12 ">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            The Best Business Phone Systems of 2025
          </h1>

          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we understand the importance of seamless communication for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best business phone systems</span> that provide crystal-clear call quality and advanced features for modern enterprises. The <span className="text-orange-500 font-semibold">best VoIP and UCaaS solutions</span> offer AI-driven call analytics, auto-attendants, and seamless integrations to help you manage communications more effectively. Whether you're running a small startup or a large corporation, the right phone system can transform how you connect with customers and collaborate with your team.
          </p>

          <p className="text-gray-700 mb-4">
            Looking for the best business phone system for your company?
            <a
              href="https://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/"
              onClick={(e) => {
                e.preventDefault();
                document.location.href =
                  "https://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1788";
              }}
              rel="nofollow"
              className="text-[#000e54] hover:text-[#ff8633] hover:underline font-medium transition-colors duration-200"
            >
              &nbsp;Get free quotes from top vendors&nbsp;
            </a>
            to compare pricing and features tailored to your business needs.
          </p>
        </header>

        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your business grows, ensuring you have the right communication tools is critical. Small teams can often manage with basic phone services, but as your operations expand, it's essential that your phone system scales accordingly. Implementing the <span className="text-orange-500 font-semibold">best business phone system</span> can significantly enhance your ability to improve customer service, reduce costs, and boost productivity. At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we help you find the perfect communication solution that aligns with your business needs, offering features like call forwarding, video conferencing, and real-time analytics.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">
                  <Link href="/BusinessPhoneSystem" className="hover:underline">
                    best business phone system
                  </Link>
                </span> provide advanced capabilities such as AI-powered virtual assistants, call recording, and multi-channel support to optimize your communications. With <span className="text-orange-500 font-semibold">Compare Bazaar</span>, you can easily compare the top phone system providers, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your business communications to the next level.
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
              <section id="introduction">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
            <header className="mb-8">
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
    Business Phone Systems
  </h1>
</header>

{/* Main Content */}
<div className="prose prose-lg max-w-none">
  <p className="text-gray-700 leading-relaxed mb-6">
    Business phone systems are essential tools that enable organizations to
    communicate effectively with customers, partners, and internal teams. They
    include advanced features like call forwarding, voicemail-to-email, call
    recording, and integrations with CRM and help desk platforms.
  </p>

  <p className="text-gray-700 leading-relaxed mb-8">
    Choosing the right phone system helps businesses improve productivity,
    enhance customer satisfaction, and manage communications efficiently across
    locations and devices.
  </p>

  <p className="text-gray-700 leading-relaxed mb-6">
    Below, we’ve listed and categorized some of the best business phone system
    providers based on their strengths and ideal use cases.
  </p>

  {/* Recommendations List */}
  <div className="space-y-3 mb-8">
    {/* RingCentral */}
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
          RingCentral:
        </a>{" "}
        Best all-in-one cloud-based phone system
      </p>
    </div>

    {/* Nextiva */}
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
          Nextiva:
        </a>{" "}
        Best for customer support and business collaboration
      </p>
    </div>

    {/* Grasshopper */}
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
      Vonage:
    </a>{" "}
    Best for scalability and global communication
  </p>
</div>


    {/* Ooma Office */}
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
          Ooma Office:
        </a>{" "}
        Best for ease of use and affordability
      </p>
    </div>

    {/* 8x8 */}
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
      Zoom:
    </a>{" "}
    Best for video conferencing and hybrid collaboration
  </p>
</div>

  </div>
</div>

                </div>
              </section>
              {/* Featured Partners Section */}
              {/* Featured Partners Section */}
<div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Featured partners</h2>
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <span>Advertisement</span>
      <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
        <span className="text-white font-bold">i</span>
      </div>
    </div>
  </div>

  {/* RingCentral */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src="/images/ringcentral.png"
            alt="RingCentral Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          RingCentral
          <br />
          <span className="text-lg">Cloud Phone System</span>
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
        <div className="font-medium text-gray-900">All Business Sizes</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">VoIP, Team Messaging, Video Meetings</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">Salesforce, Microsoft Teams, Google Workspace</div>
      </div>
    </div>
  </div>

  {/* Nextiva */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src="/images/nextiva.png"
            alt="Nextiva Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          Nextiva
          <br />
          <span className="text-lg">Unified Communications</span>
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
        <div className="font-medium text-gray-900">Customer Service Teams</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">Voice, Video, Messaging, Helpdesk</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">Zendesk, Outlook, HubSpot</div>
      </div>
    </div>
  </div>

  {/* Grasshopper */}
   <div className="bg-gray-50 rounded-lg p-6 mb-6">
  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 flex-shrink-0">
        <Image
          src="/images/zoom.png" // Make sure you have this image in your public/images folder
          alt="Zoom Logo"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-xl font-bold text-gray-900">
        Zoom
        <br />
        <span className="text-lg">Video Conferencing Platform</span>
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
      <div className="font-medium text-gray-900">Remote Teams & Webinars</div>
    </div>
    <div>
      <div className="text-gray-600 mb-1">Core Features</div>
      <div className="font-medium text-gray-900">HD Video, Screen Sharing, Breakout Rooms</div>
    </div>
    <div>
      <div className="text-gray-600 mb-1">Integrations</div>
      <div className="font-medium text-gray-900">Slack, Google Calendar, Microsoft Teams</div>
    </div>
  </div>
</div>


  {/* Ooma Office */}
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src="/images/ooma.png"
            alt="Ooma Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-xl font-bold text-gray-900">
          Ooma Office
          <br />
          <span className="text-lg">VoIP for SMBs</span>
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
        <div className="font-medium text-gray-900">Simple Setup & Affordability</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Core Features</div>
        <div className="font-medium text-gray-900">Auto Attendant, Voicemail-to-Email</div>
      </div>
      <div>
        <div className="text-gray-600 mb-1">Integrations</div>
        <div className="font-medium text-gray-900">Google Contacts, Microsoft 365</div>
      </div>
    </div>
  </div>

  {/* 8x8 */}
 <div className="bg-gray-50 rounded-lg p-6">
  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 flex-shrink-0">
        <Image
          src="/images/vonage.png" // Ensure this image exists in your /public/images directory
          alt="Vonage Logo"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-xl font-bold text-gray-900">
        Vonage
        <br />
        <span className="text-lg">Business Communications Platform</span>
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
      <div className="font-medium text-gray-900">Scalable VoIP & Unified Communications</div>
    </div>
    <div>
      <div className="text-gray-600 mb-1">Core Features</div>
      <div className="font-medium text-gray-900">Voice, Video, Messaging, APIs</div>
    </div>
    <div>
      <div className="text-gray-600 mb-1">Integrations</div>
      <div className="font-medium text-gray-900">Microsoft Teams, Salesforce, HubSpot</div>
    </div>
  </div>
</div>

</div>


               <section id="importance" className="mt-8"> 
                <div className="mx-auto">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Our top 11 Business Phone Systems recommendations
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
              {/* find your prodoct management software */}
             
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
         <section id="features" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Key Features of Best Phone System Management
    </h1>

    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        Modern business phone systems offer far more than just call handling. The best solutions provide comprehensive communication management with features designed to enhance productivity, improve customer service, and streamline operations.
      </p>
    </div>

    <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        Below are the essential features to look for in a business phone system.{" "}
        <Link
          href="/business-communication-solutions"
          className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-medium"
        >
          Compare different phone system types
        </Link>{" "}
      </p>
    </div>

    <div className="space-y-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Advanced Call Management
        </h2>
        <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6">
          Professional call handling features that go beyond basic calling:
        </p>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Intelligent call routing based on time, caller, or department</li>
          <li>Interactive Voice Response (IVR) with customizable menus</li>
          <li>Call queuing with position announcements</li>
          <li>Call recording with cloud storage options</li>
          <li>Whisper coaching for supervisor assistance</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Unified Communications
        </h2>
        <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6">
          Integration of multiple communication channels into one platform:
        </p>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Voice, video, SMS, and chat in single interface</li>
          <li>Presence indicators showing team availability</li>
          <li>Seamless transition between communication modes</li>
          <li>Mobile apps with full system functionality</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="best-systems" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      What Are the Best Business Phone Systems?
    </h1>

    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        The "best" phone system depends entirely on your business needs, size, and budget. Here's an overview of top-rated solutions across different categories:
      </p>
    </div>

    <div className="space-y-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Cloud-Based VoIP Solutions
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>RingCentral:</strong> Comprehensive features with excellent reliability</li>
          <li><strong>8x8:</strong> Strong analytics and international capabilities</li>
          <li><strong>Vonage Business:</strong> Flexible plans with good API integration</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          On-Premise PBX Systems
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Avaya IP Office:</strong> Robust solution for larger enterprises</li>
          <li><strong>Cisco Unified Communications Manager:</strong> Enterprise-grade security and features</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="benefits" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Benefits of Modern Phone Systems
    </h1>

    <div className="space-y-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Operational Efficiency
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Reduce missed calls with intelligent routing</li>
          <li>Eliminate hardware maintenance with cloud solutions</li>
          <li>Simplify management through web-based admin portals</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Cost Savings
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Lower call costs, especially for international</li>
          <li>Reduce need for separate communication tools</li>
          <li>Scalable pricing grows with your business</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="types" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Types of Business Phone System Solutions
    </h1>

    <div className="space-y-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          VoIP Phone Systems
        </h2>
        <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6">
          Cloud-based solutions using internet connectivity:
        </p>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Hosted PBX (Private Branch Exchange)</li>
          <li>UCaaS (Unified Communications as a Service)</li>
          <li>CCaaS (Contact Center as a Service)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Traditional Phone Systems
        </h2>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>On-premise PBX</li>
          <li>Key System Units (KSU)</li>
          <li>Multi-line phone systems</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="perfect-solution" className="mt-8 max-w-7xl mx-auto">
  <div className="max-w-none">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      Find Your Perfect Phone Solution
    </h1>

    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
        Selecting the right business phone system requires careful consideration of your current needs and future growth.
      </p>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Evaluation Checklist</h3>
        <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Number of users and expected growth</li>
          <li>Required features vs. nice-to-have features</li>
          <li>Existing infrastructure and IT resources</li>
          <li>Budget constraints and total cost of ownership</li>
        </ul>
      </div>
    </div>
  </div>
</section>

 
              {/* FAQs */}
              <FAQ faqsData={faqData} />
            </div>
          </div>
        </div>
      </div>
   {/* <Article title="Latest Articles" items={articles} /> */}
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

export default PhoneSystemsPage;
