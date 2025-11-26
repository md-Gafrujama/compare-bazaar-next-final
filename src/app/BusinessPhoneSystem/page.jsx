"use client";
import React, { useState, useEffect, useRef } from 'react';
import BusinessPhoneSystemForm from '../../components/BusinessPhoneSystemForm';
import Link from 'next/link';
import { Phone, Shield, Zap, TrendingUp, Users, BarChart3, Call, MessageSquare, Video, CheckCircle } from 'lucide-react';

const BusinessPhoneSystem = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef(null);
 
  useEffect(() => {
    if (document.querySelector('script[src*="bzWidget.min.js"]')) return;
  
    const script1 = document.createElement('script');
    script1.src = "https://cdn.buyerzone.com/apps/widget/bzWidget.min.js";
    script1.async = true;
    script1.setAttribute('data-bzwidget', '');
    script1.setAttribute('data-bzwidget-pub-id', '59578');
    script1.setAttribute('data-bzwidget-color-palette-name', 'default');
    script1.setAttribute('data-bzwidget-category-id', '10144');
 
    const container = document.getElementById('buyerzone-widget-container');
    if (container) {
      container.appendChild(script1);
      
      script1.onload = () => {
        if (typeof bzWidget !== 'undefined') {
          bzWidget.init();
        }
      };
    }
  
    return () => {
      if (container && container.contains(script1)) {
        container.removeChild(script1);
      }
    };
  }, []);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    iframe.style.width = '100%';
    iframe.style.maxWidth = '500px';
    iframe.style.height = window.innerWidth < 640 ? '670px' : '620px';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.style.margin = '0 auto';
    iframe.scrolling = 'no';
    
    const widgetContainer = document.getElementById('buyerzone-widget-container');
    
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
      widgetContainer.appendChild(iframe);
      
      setTimeout(() => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Phone Systems Comparison</title>
            <style>
              body {
                font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin: 0;
                padding: 0;
                align-items: center;
                text-align-center;
                background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
                overflow: hidden;
                padding-top:0px;
              }
              #bzWidgetContainer {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 12px;
                box-shadow: 0 8px 30px rgba(0, 14, 84, 0.1);
              }
              .loading {
                text-align: center;
                padding: 40px;
                width: 100%;
                background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,244,255,0.9) 100%);
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(16, 79, 255, 0.07);
              }
              .spinner {
                border: 4px solid rgba(0, 14, 84, 0.1);
                border-left: 4px solid #104fff;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
                margin: 25px auto;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @media (max-width: 640px) {
                .loading {
                  padding: 25px;
                }
                .spinner {
                  width: 40px;
                  height: 40px;
                }
              }
            </style>
          </head>
          <body>
            <div id="bzWidgetContainer">
              <div class="loading">
                <div class="spinner"></div>
                <p style="color: #000e54; font-size: 16px; font-weight: 500;">Loading comparison tool...</p>
              </div>
            </div>
            
            <script data-bzwidget
              src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
              data-bzwidget-pub-id="59578"
              data-bzwidget-color-palette-name="default"
              data-bzwidget-category-id="10144">
            </script>
            
            <script>
              function initBzWidget() {
                if (typeof bzWidget !== 'undefined') {
                  bzWidget.init();
                  document.getElementById('bzWidgetContainer').querySelector('.loading').style.display = 'none';
                } else {
                  setTimeout(initBzWidget, 500);
                }
              }
              
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initBzWidget, 1000);
                
                setTimeout(function() {
                  if (typeof bzWidget === 'undefined') {
                    document.getElementById('bzWidgetContainer').innerHTML = 
                      '<p style="text-align:center; padding:30px; color:#e74c3c; background: linear-gradient(180deg, #fff0f0 0%, #ffe0e0 100%); border-radius: 10px; box-shadow: 0 4px 15px rgba(231, 76, 60, 0.1);">Unable to load the comparison tool. Please refresh and try again.</p>';
                  }
                }, 10000);
              });

              window.addEventListener('resize', function() {
                if (typeof bzWidget !== 'undefined' && bzWidget.refresh) {
                  bzWidget.refresh();
                }
              });
            </script>
          </body>
          </html>
        `);
        iframeDoc.close();
        
        setWidgetLoaded(true);
      }, 0);
    }
    
    const handleResize = () => {
      if (iframe) {
        iframe.style.height = window.innerWidth < 640 ? '700px' : '600px';
        iframe.style.width = '100%';
        iframe.style.maxWidth = '500px';
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   
<>
    <div className="relative w-full min-h-screen overflow-hidden mt-0 pt-0">
      {/* Enhanced deep navy background with richer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000a42] via-[#000e54] to-[#001470]"></div>
      
      {/* Improved gradient overlays for more depth and visual richness */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000a42] via-[#001d82] to-[#00103c] opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000524]/60 via-transparent to-[#000730]/60"></div>
      
      {/* Enhanced decorative elements with better spacing */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#104fff]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#104fff]/20 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#104fff]/20 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#104fff]/20 to-transparent"></div>
      
      {/* Enhanced corner light beams with animation */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#104fff] rounded-full opacity-15 blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slower"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3366ff] rounded-full opacity-15 blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3366ff] rounded-full opacity-15 blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#104fff] rounded-full opacity-15 blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse-slower"></div>
      
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgLz4KICA8cGF0aCBkPSJNIDIsMiBoIDEgdiAxIGggLTEgeiBNIDQsNCBoIDEgdiAxIGggLTEgeiBNIDYsNiBoIDEgdiAxIGggLTEgeiBNIDgsOCBoIDEgdiAxIGggLTEgeiBNIDEwLDEwIGggMSB2IDEgaCAtMSB6IE0gMTIsMTIgaCAxIHYgMSBoIC0xIHogTSAxNCwxNCBoIDEgdiAxIGggLTEgeiBNIDE2LDE2IGggMSB2IDEgaCAtMSB6IE0gMTgsMTggaCAxIHYgMSBoIC0xIHogTSAyMCwyMCBoIDEgdiAxIGggLTEgeiBNIDIyLDIyIGggMSB2IDEgaCAtMSB6IE0gMjQsMjQgaCAxIHYgMSBoIC0xIHogTSAyNiwyNiBoIDEgdiAxIGggLTEgeiBNIDI4LDI4IGggMSB2IDEgaCAtMSB6IE0gMzAsMzAgaCAxIHYgMSBoIC0xIHogTSAzMiwzMiBoIDEgdiAxIGggLTEgeiBNIDM0LDM0IGggMSB2IDEgaCAtMSB6IE0gMzYsMzYgaCAxIHYgMSBoIC0xIHogTSAzOCwzOCBoIDEgdiAxIGggLTEgeiBNIDQwLDQwIGggMSB2IDEgaCAtMSB6IE0gNDIsNDIgaCAxIHYgMSBoIC0xIHogTSA0NCw0NCBoIDEgdiAxIGggLTEgeiBNIDQ2LDQ2IGggMSB2IDEgaCAtMSB6IE0gNDgsNDggaCAxIHYgMSBoIC0xIHogTSA1MCw1MCBoIDEgdiAxIGggLTEgeiBNIDUyLDUyIGggMSB2IDEgaCAtMSB6IE0gNTQsNTQgaCAxIHYgMSBoIC0xIHogTSA1Niw1NiBoIDEgdiAxIGggLTEgeiBNIDU4LDU4IGggMSB2IDEgaCAtMSB6IiBmaWxsPSIjZmZmIiAvPgo8L3N2Zz4=')]"></div>
      </div>
      
      {/* Enhanced animated floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-[#104fff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4260ff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slower"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#3c8fff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/6 w-60 h-60 bg-[#6495ff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slower animation-delay-4000"></div>
      </div>
      
      {/* Enhanced network connection lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100" stroke="white" strokeWidth="0.12" />
          <path d="M100,0 L0,100" stroke="white" strokeWidth="0.12" />
          <path d="M50,0 L50,100" stroke="white" strokeWidth="0.12" />
          <path d="M0,50 L100,50" stroke="white" strokeWidth="0.12" />
          <path d="M25,0 L75,100" stroke="white" strokeWidth="0.12" />
          <path d="M75,0 L25,100" stroke="white" strokeWidth="0.12" />
          <path d="M0,25 L100,75" stroke="white" strokeWidth="0.12" />
          <path d="M0,75 L100,25" stroke="white" strokeWidth="0.12" />
          <path d="M15,0 L85,100" stroke="white" strokeWidth="0.08" />
          <path d="M85,0 L15,100" stroke="white" strokeWidth="0.08" />
          <path d="M0,35 L100,65" stroke="white" strokeWidth="0.08" />
          <path d="M0,65 L100,35" stroke="white" strokeWidth="0.08" />
        </svg>
      </div>
      
      {/* Enhanced header light effect */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-[#104fff] blur-2xl opacity-25 animate-pulse-slow"></div>
      
      {/* Main content container with enhanced glass effect and padding */}
      <div className="relative z-10 w-full flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Two Column Layout - Form Left, Design Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1 flex">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-gray-100 w-full flex flex-col">
                {/* Header Section */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-[#ff8633] to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                      Get Free Quotes
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Compare Business Phone Systems
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Fill out the form to get customized quotes from top business phone system providers.
                  </p>
                </div>

                {/* Form Component */}
                <div className="flex-1">
                  <BusinessPhoneSystemForm />
                </div>

                {/* Backup Link */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3 text-center">
                    Prefer a different format?
                  </p>
                  <Link 
                    href="/Technology/business-phone-systems/get-free-quotes"
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-[#000e54] to-[#001470] text-white rounded-xl font-semibold hover:from-[#001470] hover:to-[#000e54] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Get Free Quotes (Alternative Form)
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Professional Content */}
            <div className="order-1 lg:order-2 flex">
              <div className="bg-gradient-to-br from-[#000e54] via-[#001470] to-[#000e54] rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 text-white w-full flex flex-col relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8633]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="inline-block mb-3">
                      <span className="bg-gradient-to-r from-[#ff8633] to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        Why Choose Us
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Modern Business Communication Solutions
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Connect your team with enterprise-grade phone systems designed for today's businesses.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6 space-y-4 flex-grow">
                    {[
                      { icon: Phone, title: 'VoIP & Cloud PBX', desc: 'Scalable cloud-based phone systems' },
                      { icon: Video, title: 'Video Conferencing', desc: 'HD video calls and screen sharing' },
                      { icon: MessageSquare, title: 'Unified Messaging', desc: 'SMS, voicemail, and chat in one place' },
                      { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level encryption and compliance' },
                      { icon: BarChart3, title: 'Call Analytics', desc: 'Real-time insights and reporting' }
                    ].map((feature, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#ff8633] to-orange-600 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-300">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20 mt-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ff8633] mb-1">99.9%</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ff8633] mb-1">24/7</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default BusinessPhoneSystem;