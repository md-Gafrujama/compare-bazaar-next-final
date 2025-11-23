'use client';

import { useState, useEffect } from 'react';
import "../styles/Home.css";
import { ArrowRight } from 'lucide-react';
import Head from 'next/head';
import { ChevronRight, TrendingUp, DollarSign, Search, BarChart3, Zap, Users ,Award} from 'lucide-react';
import CookieConsent from '../components/CookieConsent';
import Image from 'next/image';

import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Headphones,
  Clipboard,
} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  // HANDELING THE SUBSCRIBE BUTTON
  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69");
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setSubscribed(false);
        }, 3000);
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  const testimonials = [
    {
      avatar: "A",
      avatarColor: "bg-purple-600",
      name: "Aisha R.",
      date: "06/12/2024",
      stars: 5,
      text: "Compare Bazaar transformed our email marketing strategy completely. Their team helped us build campaigns that actually get opened, with a 300% increase in engagement. Now I actually look forward to checking our marketing metrics!"
    },
    {
      avatar: "M",
      avatarColor: "bg-red-600",
      name: "Michael T.",
      date: "11/27/2023",
      stars: 5,
      text: "As a small business owner, I was overwhelmed by lead generation. Compare Bazaar delivered qualified leads that actually converted. Their CRM integration made tracking everything seamless. Worth every penny!"
    },
    {
      avatar: "D",
      avatarColor: "bg-blue-500",
      name: "David K.",
      date: "10/31/2023",
      stars: 5,
      text: "Our new website built by Compare Bazaar has increased our online conversions by 45% in just two months. They understood our vision and created a site that truly represents our brand while being incredibly functional."
    },
    {
      avatar: "J",
      avatarColor: "bg-green-500",
      name: "Jessica L.",
      date: "09/15/2024",
      stars: 5,
      text: "The call center solutions from Compare Bazaar have revolutionized our customer service. Response times are faster, customer satisfaction is up, and our team has better tools to manage calls. It's like we upgraded to first class!"
    },
    {
      avatar: "R",
      avatarColor: "bg-yellow-500",
      name: "Robert C.",
      date: "08/20/2024",
      stars: 5,
      text: "I was skeptical about outsourcing lead generation, but Compare Bazaar proved me wrong. The quality of leads we received was exceptional, and their CRM integration made follow-ups effortless. Our sales have never been better!"
    },
    {
      avatar: "S",
      avatarColor: "bg-indigo-600",
      name: "Sophia M.",
      date: "07/05/2024",
      stars: 5,
      text: "From website design to email automation, Compare Bazaar has been our one-stop solution for digital growth. Their team understands how all the pieces work together to build a complete marketing ecosystem. Truly partners in our success!"
    }
  ];

  const clients = [
    { name: "Willscot", image: "/images/zoho.png" },
    { name: "RingCentral", image: "/images/zoom.png" },
    { name: "Culligan", image: "/images/twillio.png" },
    { name: "Toshiba", image: "/images/activ.png" },
    { name: "Satellite", image: "/images/azuga.png" },
    { name: "Google", image: "/images/bomb.png" },
    { name: "Client 7", image: "/images/cloud.png" },
    { name: "Apple", image: "/images/creatio.png" },
    { name: "Apple 2", image: "/images/design.png" },
    { name: "Netflix", image: "/images/goan.png" },
    { name: "Netflix 2", image: "/images/goto.png" },
    { name: "Netflix 3", image: "/images/honey.png" },
    { name: "Google", image: "/images/hub.png" },
    { name: "Client 7", image: "/images/motive.png" },
    { name: "Apple", image: "/images/nextiva.png" },
    { name: "Apple 2", image: "/images/ooma.png" },
    { name: "Netflix", image: "/images/pipe.png" },
    { name: "Netflix 2", image: "/images/ringcentral.png" },
    { name: "Google", image: "/images/samsara.png" },
    { name: "Client 7", image: "/images/tele.png" },
    { name: "Apple", image: "/images/teramind.png" },
    { name: "Apple 2", image: "/images/veri.png" },
    { name: "Netflix", image: "/images/verizon.png" },
    { name: "Netflix 2", image: "/images/vonage.png" },
  ];

  // Handle component mounting and resizing
  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      const currentLogosPerScreen = getLogosPerScreen(width);
      const newLogosPerScreen = getLogosPerScreen(newWidth);
      
      if (currentLogosPerScreen !== newLogosPerScreen) {
        const currentGroup = Math.floor(activeIndex / currentLogosPerScreen);
        const newStartIndex = currentGroup * newLogosPerScreen;
        const maxValidIndex = Math.max(0, clients.length - newLogosPerScreen);
        setActiveIndex(Math.min(newStartIndex, maxValidIndex));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, activeIndex]);

  // Number of logos to show at once
  const getLogosPerScreen = (screenWidth) => {
    if (!screenWidth) {
      screenWidth = width || (typeof window !== 'undefined' ? window.innerWidth : 1024);
    }
    
    if (screenWidth < 640) return 1;
    if (screenWidth < 1024) return 3;
    return 6;
  };

  const logosPerScreen = isMounted ? getLogosPerScreen() : 3; // Default to 3 during SSR
  
  const getVisibleLogos = () => {
    return clients.slice(activeIndex, activeIndex + logosPerScreen);
  };

  const goToLogo = (index) => {
    const adjustedIndex = index * logosPerScreen;
    const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
    setActiveIndex(Math.min(adjustedIndex, maxValidIndex));
  };

  const nextLogo = () => {
    if (activeIndex + logosPerScreen < clients.length) {
      setActiveIndex((prev) => prev + logosPerScreen);
    } else {
      setActiveIndex(0);
    }
  };

  const prevLogo = () => {
    if (activeIndex - logosPerScreen >= 0) {
      setActiveIndex((prev) => prev - logosPerScreen);
    } else {
      const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
      setActiveIndex(maxValidIndex);
    }
  };

  const shouldShowDots = () => {
    return width >= 640 && clients.length > logosPerScreen;
  };

  const getNumberOfDots = () => {
    return Math.ceil(clients.length / logosPerScreen);
  };

  // Don't render until component is mounted to avoid SSR issues
  if (!isMounted) return null;

  const tools = [
    { 
      name: "Best CRM Software", 
      icon: <Users />, 
      link: "/Sales/Best-crm-software",
      image: "/images/crm.webp"
    },
    { 
      name: "Best Email Marketing Services", 
      icon: <Mail />, 
      link: "/Marketing/Best-email-marketing-services",
      image: "/images/emailsystem.png"
    },
    { 
      name: "Best Website Building and Management Platforms", 
      icon: <Globe />, 
      link: "/Marketing/Best-website-building-platform",
      image: "/images/bestwebsite.webp"
    },
    { 
      name: "Business Phone Systems", 
      icon: <Phone />, 
      link: "/Technology/Business-phone-systems",
      image: "/images/BPS.webp"
    },
    { 
      name: "GPS Fleet Management Software", 
      icon: <MapPin />, 
      link: "/Technology/Gps-fleet-management-software",
      image: "/images/gps-system.webp"
    },
    { 
      name: "Best Employee Management Software", 
      icon: <Users />, 
      link: "/Technology/Best-employee-management-software",
      image: "/images/bestemploye.webp"
    },
    { 
      name: "Best Call Center Management Software", 
      icon: <Headphones />, 
      link: "/Sales/Best-call-center-management-software",
      image: "/images/call.webp"
    },
    { 
      name: "Best Payroll System", 
      icon: <DollarSign/>, 
      link: "/Technology/Best-payroll-system",
      image: "/images/payroll.webp"
    },
    { 
      name: "Best Project Management Software", 
      icon: <Clipboard />, 
      link: "/Sales/Best-project-management-software",
      image: "/images/bestproject.webp"
    },
  ];

  return (
    <>
      <Head>
        <title>Compare Bazaar : Compare Quotes from Top Vendors & Make Smarter Buying Decisions</title>
        <meta name="description" content="Compare quotes from verified vendors with confidence at Compare-Bazaar. Save time, money, and stress with transparent comparisons you can trust." />
        <link rel="canonical" href="https://www.compare-bazaar.com/" />
      </Head>
      
      <div className="relative w-full overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] xl:min-h-[75vh] bg-gradient-to-br from-[#ff8633] via-amber-600 to-orange-800 overflow-hidden">
          {/* Dynamic Mesh Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="mesh1" cx="20%" cy="20%" r="25%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                  <radialGradient id="mesh2" cx="80%" cy="30%" r="30%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                  <radialGradient id="mesh3" cx="60%" cy="80%" r="35%">
                    <stop offset="0%" stopColor="#d97706" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#mesh1)"/>
                <rect width="100%" height="100%" fill="url(#mesh2)"/>
                <rect width="100%" height="100%" fill="url(#mesh3)"/>
              </svg>
            </div>
            
            {/* Floating Orbs - Hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block absolute top-20 left-20 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-60"></div>
            <div className="hidden md:block absolute top-40 right-32 w-6 h-6 bg-orange-300 rounded-full animate-pulse opacity-70"></div>
            <div className="hidden sm:block absolute bottom-40 left-1/3 w-8 h-8 bg-amber-300 rounded-full animate-bounce opacity-50"></div>
            <div className="hidden lg:block absolute top-1/2 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
            <div className="hidden md:block absolute top-1/3 left-[60%] w-5 h-5 bg-white/40 rounded-full animate-bounce opacity-70 blur-sm"></div>
            <div className="hidden lg:block absolute bottom-24 right-1/4 w-7 h-7 bg-orange-200 rounded-full animate-pulse opacity-60 blur"></div>
            <div className="hidden md:block absolute top-1/4 right-1/3 w-3 h-3 bg-yellow-100 rounded-full animate-ping opacity-80"></div>
            <div className="hidden sm:block absolute bottom-10 left-1/2 w-6 h-6 bg-amber-100 rounded-full animate-bounce opacity-50 blur-sm"></div>
            <div className="hidden lg:block absolute top-10 left-1/2 w-10 h-10 bg-white/20 rounded-full animate-pulse opacity-40 blur"></div>
            <div className="hidden md:block absolute bottom-16 right-10 w-5 h-5 bg-orange-100 rounded-full animate-bounce opacity-60 blur-sm"></div>
            <div className="hidden sm:block absolute top-1/2 left-10 w-8 h-8 bg-yellow-200 rounded-full animate-ping opacity-50 blur"></div>
            <div className="hidden md:block absolute bottom-1/4 left-1/4 w-6 h-6 bg-white/30 rounded-full animate-pulse opacity-40 blur"></div>
            <div className="hidden lg:block absolute top-1/5 right-1/5 w-7 h-7 bg-amber-100 rounded-full animate-bounce opacity-50 blur"></div>
            <div className="hidden md:block absolute bottom-1/3 right-1/2 w-4 h-4 bg-orange-300 rounded-full animate-ping opacity-60 blur-sm"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-0 sm:px-1 md:px-2 lg:px-3 py-4 sm:py-6 md:py-8 lg:py-10">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh]">
              
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 pl-1 sm:pl-2 md:pl-3 lg:pl-2 xl:pl-4 lg:pr-4 xl:pr-8">
                
                {/* Hero Title */}
                <div className="relative space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 max-w-4xl">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[0.9] tracking-tight text-left">
                    <span className="block">Empowering Decisions</span>
                    <span className="block relative">
                      Through Price & Insight.
                      <div className="absolute -bottom-1.5 sm:-bottom-2 md:-bottom-3 lg:-bottom-4 left-0 w-full h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full transform origin-left scale-x-0 animate-[slideIn_1.5s_ease-out_0.5s_forwards]"></div>
                    </span>
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-orange-50 font-medium sm:font-semibold max-w-4xl text-left leading-relaxed">
                    Compare Bazaar simplifies complex buying decisions by offering clear, side-by-side price
                    quotes from top vendors. Whether you're upgrading tech, scaling systems, or exploring new solutions, we help you compare smarter—faster, easier, and with confidence.
                  </p>
                  
                  {/* Circle animation - positioned absolutely above and on the right side above the "Empowering Decisions" text - now visible on mobile */}
                  <div className="absolute right-2 top-[-50px] sm:right-4 sm:top-[-60px] md:right-[10px] md:top-[-90px] lg:right-0 lg:top-[-100px] xl:right-[-10px] xl:top-[-110px] 2xl:right-[-20px] 2xl:top-[-120px]">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 opacity-50 sm:opacity-60 blur-lg sm:blur-xl animate-pulse scale-125 sm:scale-150"></div>
                    
                    {/* Rotating ring effect - hidden on mobile, visible on md+ */}
                    <div className="hidden md:block absolute inset-[-8px] rounded-full border-4 border-transparent border-t-amber-400 border-r-orange-500 animate-spin-slow opacity-50"></div>
                    <div className="hidden md:block absolute inset-[-12px] rounded-full border-4 border-transparent border-b-amber-400 border-l-orange-500 animate-spin-slow opacity-50" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
                    
                    {/* Sparkles around circle - smaller on mobile */}
                    <div className="absolute -top-1 sm:-top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-full animate-ping opacity-70 sm:opacity-80"></div>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-300 rounded-full animate-ping opacity-70 sm:opacity-80" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 -left-1.5 sm:-left-2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-300 rounded-full animate-ping opacity-70 sm:opacity-80" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 -right-1.5 sm:-right-2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-300 rounded-full animate-ping opacity-70 sm:opacity-80" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Main circle - responsive size */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 relative group cursor-pointer transform hover:rotate-[360deg] transition-transform duration-1000 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-spin-slow opacity-80 group-hover:opacity-100 group-hover:animate-spin-medium shadow-lg"></div>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center text-white shadow-inner group-hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/30 rounded-full blur-[4px] sm:blur-[6px] transform -rotate-12"></div>
                        <div className="relative z-10 text-center px-0.5 sm:px-1 md:px-1.5 lg:px-2 transform group-hover:scale-110 transition-transform duration-300">
                          <div className="mb-0 animate-bounce-slow">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                          </div>
                          <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-black mb-0.5">30% OFF</div>
                          <div className="text-[6px] sm:text-[7px] md:text-[7px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] font-semibold opacity-90 leading-tight">Savings</div>
                        </div>
                      </div>
                      <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-200 rounded-full animate-float delay-100"></div>
                      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-200 rounded-full animate-float delay-300"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-orange-300 opacity-0 group-hover:opacity-70 group-hover:animate-ping"></div>
                    </div>
                    
                    {/* Additional floating particles - smaller on mobile */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full animate-float opacity-60 sm:opacity-70" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-400 rounded-full animate-float opacity-60 sm:opacity-70" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Subscribe Section */}
                <div className="space-y-2 sm:space-y-2.5 md:space-y-3 max-w-4xl">
                  <div className="bg-gradient-to-r from-white via-white to-orange-50 rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-3 shadow-lg border border-white/50">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 md:gap-3">
                      <div className="flex-1 flex items-center px-2 sm:px-2.5 md:px-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-[#ff8633] to-orange-600 flex items-center justify-center mr-1.5 sm:mr-2 md:mr-3 shadow-md flex-shrink-0">
                          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white" />
                        </div>
                        <input
                          type="email"
                          placeholder="Your business email"
                          className="flex-1 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base lg:text-lg outline-none text-gray-800 placeholder-gray-500 bg-transparent w-0 min-w-0"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={loading}
                        />
                      </div>
                      <button
                        className="w-full sm:w-auto bg-gradient-to-r from-[#ff8633] to-orange-600 hover:from-orange-600 hover:to-[#ff8633] text-white font-bold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 lg:px-6 rounded-lg sm:rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        onClick={handleSubscribe}
                        disabled={loading}
                      >
                        {loading ? "Starting..." : subscribed ? "Welcome! ✨" : "Subscribe Now"}
                        {!loading && !subscribed && <ChevronRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Right Content - 3D Interface */}
              <div className="relative flex items-center justify-center mt-6 sm:mt-8 lg:mt-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-2 sm:px-0">
                  
                  {/* Main Interface Card */}
                  <div className="animate-[floatSlow_8s_ease-in-out_infinite]">
                    <div
                      className="relative bg-gradient-to-br from-white via-gray-50 to-orange-50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_10px_40px_10px_rgba(255,134,51,0.25)] border-2 border-orange-200 overflow-hidden transition-transform duration-700 max-h-[500px] sm:max-h-[600px] md:max-h-[650px] lg:max-h-[710px] min-h-[220px] sm:min-h-[240px] md:min-h-[250px] lg:min-h-[260px] overflow-y-auto"
                      style={{
                        transform: 'perspective(1800px) rotateX(8deg) rotateY(-8deg)'
                      }}
                      onMouseEnter={e => {
                        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                          e.currentTarget.style.transform = 'perspective(1800px) rotateX(0deg) rotateY(0deg) scale(1.05)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                          e.currentTarget.style.transform = 'perspective(1800px) rotateX(8deg) rotateY(-8deg)';
                        }
                      }}
                    >
                      
                      {/* Header Bar */}
                      <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-1.5 sm:p-2 md:p-2.5 lg:p-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#ff8633] to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                              <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg">Compare Bazaar </div>
                            </div>
                          </div>
                          <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-red-400 shadow-sm"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-yellow-400 shadow-sm"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-green-400 shadow-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-1.5 sm:p-2 md:p-3 lg:p-4 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                        
                        {/* Search Query Display */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-2.5 md:p-3 lg:p-4 border border-blue-100">
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-0.5 sm:mb-1">Get Comparison Quotes</div>
                          <div className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base leading-tight">&quot;Best CRM Software for Enterprise&quot;</div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs text-blue-600 mt-1 sm:mt-1.5 md:mt-2">🔍 Found 247 vendors • Analyzed in 2.3s</div>
                        </div>

                        {/* Top Recommendations */}
                        <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3">
                          {[
                            { 
                              name: "Salesforce Enterprise", 
                              score: 9.4, 
                              price: "$150/mo", 
                              savings: "Save $200/mo",
                              color: "from-blue-500 to-blue-600",
                              features: "Advanced AI, Custom Fields, API Access"
                            },
                            { 
                              name: "HubSpot Professional", 
                              score: 8.8, 
                              price: "$90/mo", 
                              savings: "Save $110/mo",
                              color: "from-green-500 to-green-600",
                              features: "Marketing Hub, Sales Analytics, Automation"
                            },
                            { 
                              name: "Pipedrive Advanced", 
                              score: 8.2, 
                              price: "$65/mo", 
                              savings: "Save $85/mo",
                              color: "from-purple-500 to-purple-600",
                              features: "Pipeline Management, Mobile App, Integrations"
                            }
                          ].map((item, index) => (
                            <div key={index} className="group bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-2.5 md:p-3 lg:p-4 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                              <div className="flex items-start justify-between mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 gap-1.5 sm:gap-2">
                                <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 flex-1 min-w-0">
                                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${item.color} shadow-sm flex-shrink-0 mt-0.5`}></div>
                                  <div className="min-w-0 flex-1">
                                    <div className="font-semibold text-gray-800 text-[10px] sm:text-xs md:text-sm truncate">{item.name}</div>
                                    <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 line-clamp-2 leading-tight">{item.features}</div>
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <div className="font-bold text-[#ff8633] text-[10px] sm:text-xs md:text-sm">{item.price}</div>
                                  <div className="text-[9px] sm:text-[10px] md:text-xs text-green-600 font-medium">{item.savings}</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                                <div className="flex-1 min-w-0">
                                  <div className="h-1 sm:h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-[#ff8633] to-orange-500 rounded-full transition-all duration-1000"
                                      style={{ width: `${item.score * 10}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="ml-1.5 sm:ml-2 md:ml-3 text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-700 flex-shrink-0">
                                  {item.score}/10
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* AI Insight Panel */}
                        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-2.5 md:p-3 lg:p-4 border-2 border-orange-200">
                          <div className="flex items-start space-x-1.5 sm:space-x-2 md:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#ff8633] to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold text-[#ff8633]">Compare top-rated CRM</span> software in minutes.<span className="font-bold text-green-600">No fluff</span> — just features, pricing, and insights that matter.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Action Buttons - Hidden on mobile, visible on larger screens */}
                  <div className="hidden sm:block absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 border border-gray-200 animate-bounce">
                    <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 whitespace-nowrap">$50K+ Saved</span>
                    </div>
                  </div>

                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff8633]/20 to-orange-600/20 rounded-xl sm:rounded-2xl md:rounded-3xl filter blur-xl scale-110 -z-10 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes floatSlow {
              0%, 100% { 
                transform: perspective(1200px) rotateX(5deg) rotateY(-8deg) translateY(0px);
              }
              50% { 
                transform: perspective(1200px) rotateX(5deg) rotateY(-8deg) translateY(-15px);
              }
            }
            
            @keyframes slideIn {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
          `}</style>
        </div>

        {/* BEST TOOLS SECTION */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Best tools to run your business</h2>
            <p className="text-base text-gray-800 max-w-2xl mx-auto">
              Explore verified reviews, compare real prices, and find the best-fit solutions for your needs and budget—all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex flex-col rounded-xl shadow-xl overflow-hidden h-full"
              >
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3 min-h-[60px]">
                    <div className="flex items-start space-x-3 flex-1 min-w-0">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        index % 2 === 0 ? 'bg-[#000e54] text-white' : 'bg-blue-100 text-[#000e54]'
                      }`}>
                        {tool.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 break-words">{tool.name}</h3>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                      {tool.category}
                    </span>
                  </div>
                  
                  <div className="mb-4 rounded-lg overflow-hidden aspect-square">
                    <img 
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={tool.link}
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#ff8633] hover:bg-[#e67420] text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow gap-2 text-base"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CLIENTS SECTION */}
        <section className="py-16 px-5 bg-white">
          <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Brands We Work With</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Our Learners Work at Global Companies & Startups</p>

            {/* Navigation and logos container */}
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={prevLogo}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Previous logos"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Logo Container */}
              <div className="flex justify-center items-center space-x-12 overflow-hidden w-full lg:w-3/4 xl:w-4/5">
                {getVisibleLogos().map((client, index) => (
                  <div key={index} className="flex items-center justify-center h-15 w-30 transition-all duration-300">
                    <img
                      src={client.image}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextLogo}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Next logos"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              {shouldShowDots() && (
                <div className="flex">
                  {Array.from({ length: getNumberOfDots() }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToLogo(i)}
                      className={`w-2 h-2 rounded-full mx-1 mb-1 transition-colors duration-200 ${
                        i === Math.floor(activeIndex / logosPerScreen)
                          ? 'bg-gray-700'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to logo group ${i + 1}`}
                      aria-current={i === Math.floor(activeIndex / logosPerScreen) ? 'true' : 'false'}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="relative w-full bg-white py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
        </div>
      </div>
      <CookieConsent/>
    </>
  );
};

export default Home;
