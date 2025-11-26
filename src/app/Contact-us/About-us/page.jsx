"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import bgImage2 from "../../../assets/images/bg2.webp";
import WorkWithGreatPeople from '../../../components/WorkWithGreatPeople';
import NewPage from '../../../components/NewPage';


const CompareBazaarHomepage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      unbiasedComparisons: false,
      leadGeneration: false,
      advertisingSolutions: false,
      engagingContent: false
    }
  });

  // Form status state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
    success: false
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked
      }
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Prepare services as a string
    const selectedServices = Object.keys(formData.services)
      .filter(key => formData.services[key])
      .join(', ');

    // Create form data object for submission
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: 'Form submission is not configured. Please contact support.',
        success: false
      });
      return;
    }
    
    const submissionData = {
      access_key: accessKey,
      subject: 'Services Inquiry - Compare-Bazaar',
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
      services: selectedServices,
      form_source: 'About Us Services Form'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (data.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          message: '',
          services: {
            unbiasedComparisons: false,
            leadGeneration: false,
            advertisingSolutions: false,
            engagingContent: false
          }
        });
        setFormStatus({
          submitted: true,
          submitting: false,
          error: null,
          success: true
        });
      } else {
        setFormStatus({
          submitted: true,
          submitting: false,
          error: data.message || "Something went wrong. Please try again.",
          success: false
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: "Network error. Please check your connection and try again.",
        success: false
      });
    }
  };

  // Values section visibility logic
  const valuesRef = useRef(null);
  const [valuesInView, setValuesInView] = useState(false);

  // Update document title
  React.useEffect(() => {
    document.title = "About Us | Compare-Bazaar";
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => {
      if (valuesRef.current) {
        observer.unobserve(valuesRef.current);
      }
    };
  }, []);

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#ff8633]/10 text-[#ff8633] rounded-full text-sm font-semibold mb-4 border border-[#ff8633]/20">
                About Compare Bazaar
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              We are a creative <br />
              <span className="text-[#000e54]">B2B</span>{" "}
              <span className="text-[#ff8633]">Marketing <br />Solutions Company</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full my-8"></div>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Welcome to Compare Bazaar — where passion meets purpose. We are dedicated to providing exceptional marketing solutions tailored to the unique needs of businesses across a wide range of industries. At the heart of our work is a commitment to innovation, customer-focused strategies, and delivering measurable, impactful results.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Our team believes in building lasting partnerships by understanding your goals and aligning our efforts to support your long-term growth and success. Whether you're a startup or an established brand, we're here to help you stand out, connect with your audience, and achieve meaningful progress in a constantly evolving market.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#000e54]">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#000e54]">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 p-5">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-2xl opacity-20 blur-2xl"></div>
              <Image
                src={bgImage2}
                alt="Person working on laptop"
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105 border-4 border-white"
              />
            </div>
          </div>
        </div>

        <WorkWithGreatPeople />

        {/* Services Section */}
        <div className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000e54]">Our Services</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover how Compare Bazaar can transform your business with our comprehensive solutions.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 - Unbiased Comparisons */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group border-2 border-gray-100">
                <div className="h-2 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300"></div>
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#000e54] to-[#001e74] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300 shadow-lg group-hover:scale-110">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#000e54] group-hover:text-[#ff8633] transition-colors">Unbiased Comparisons</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Our team of experts curates detailed, unbiased comparisons to help you find the best options tailored to your needs.</p>
                </div>
              </div>

              {/* Card 2 - Lead Generation */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group border-2 border-gray-100">
                <div className="h-2 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300"></div>
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#000e54] to-[#001e74] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300 shadow-lg group-hover:scale-110">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#000e54] group-hover:text-[#ff8633] transition-colors">Lead Generation</h3>
                  <p className="text-gray-600 text-base leading-relaxed">We bridge the gap between consumers and businesses by connecting you with trusted providers and services.</p>
                </div>
              </div>

              {/* Card 3 - Advertising Solutions */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group border-2 border-gray-100">
                <div className="h-2 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300"></div>
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#000e54] to-[#001e74] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300 shadow-lg group-hover:scale-110">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#000e54] group-hover:text-[#ff8633] transition-colors">Advertising Solutions</h3>
                  <p className="text-gray-600 text-base leading-relaxed">For businesses, we offer innovative advertising opportunities to reach your target audience effectively.</p>
                </div>
              </div>

              {/* Card 4 - Engaging Content */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group border-2 border-gray-100">
                <div className="h-2 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300"></div>
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#000e54] to-[#001e74] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#ff8633] group-hover:to-[#ff9a57] transition-all duration-300 shadow-lg group-hover:scale-110">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#000e54] group-hover:text-[#ff8633] transition-colors">Engaging Content</h3>
                  <p className="text-gray-600 text-base leading-relaxed">From informative articles to in-depth guides, our content is designed to educate, inspire, and guide you every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Contact Form Section */}
        <NewPage />

        {/* About Us Section */}
        <div className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000e54]">About Us - Compare Bazaar</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Welcome to Compare Bazaar, your ultimate destination for smart decision-making!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  We are a dynamic content marketing, lead generation, and advertising platform dedicated to helping consumers and businesses connect seamlessly. Our mission is to simplify your choices by providing comprehensive comparisons, expert insights, and tailored recommendations across a wide range of products and services.
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  At Compare Bazaar, we understand that navigating the ever-expanding marketplace can be overwhelming. That's why we've created a user-friendly platform that empowers you to make informed decisions with confidence. Whether you're searching for the best deals, exploring new trends, or seeking trusted advice, we've got you covered.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#000e54] to-[#001e74] rounded-2xl p-8 text-white shadow-2xl">
                <h4 className="text-2xl font-bold mb-4 text-[#ff8633]">Our Mission</h4>
                <p className="text-white/90 leading-relaxed">
                  To empower businesses and consumers with transparent, data-driven insights that enable smarter decision-making in an ever-evolving marketplace.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-[#000e54] flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  What We Offer
                </h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">Unbiased Comparisons:</span> Our team of experts curates detailed, unbiased comparisons to help you find the best options tailored to your needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">Lead Generation:</span> We bridge the gap between consumers and businesses by connecting you with trusted providers and services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">Advertising Solutions:</span> For businesses, we offer innovative advertising opportunities to reach your target audience effectively.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">Engaging Content:</span> From informative articles to in-depth guides, our content is designed to educate, inspire, and guide you every step of the way.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-[#000e54] flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  Why Choose Us
                </h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">Trustworthy:</span> We prioritize transparency and integrity in everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">Comprehensive:</span> Our platform covers a wide array of categories, ensuring you find what you're looking for.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff8633] mr-3 font-bold">✓</span>
                    <span><span className="font-semibold text-[#000e54]">User-Centric:</span> Your satisfaction is at the heart of our operations, and we strive to deliver exceptional value with every interaction.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ff8633]/10 to-[#ff9a57]/10 rounded-2xl p-8 md:p-12 border-2 border-[#ff8633]/20">
              <p className="text-gray-800 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                Join the Compare Bazaar community today and experience a smarter way to shop, compare, and connect. Let us help you make the best choices for your lifestyle and business needs. Together, we'll navigate the bazaar of possibilities!
              </p>
            </div>
          </div>
        </div>
 
        {/* Values Section */}
        <div
          ref={valuesRef}
          className={`py-20 px-4 md:px-8 lg:px-16 text-center bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${valuesInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#000e54] relative inline-block pb-4">
              <span className="relative z-10">Our Values</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
              At CompareBazaar, we are guided by six core values that shape our decisions, drive our interactions, and reflect our commitment to excellence. These principles serve as a foundation for how we engage with our clients, collaborate with colleagues, work with service providers, and represent our company. Our values are not just ideals—they are the standards we live by every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "📈", title: "Do what it takes to deliver excellent results", color: "from-blue-500 to-blue-600" },
                { icon: "🚀", title: "Bring a proactive, solution-oriented attitude to everything you do", color: "from-purple-500 to-purple-600" },
                { icon: "🤝", title: "Act with integrity and respect", color: "from-green-500 to-green-600" },
                { icon: "💬", title: "Communicate directly and honestly", color: "from-orange-500 to-orange-600" },
                { icon: "🎯", title: "Do what you say you are going to do", color: "from-red-500 to-red-600" },
                { icon: "🧠", title: "Always learn and try new things", color: "from-indigo-500 to-indigo-600" }
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        {value.icon}
                      </div>
                      <h3 className="font-bold text-lg text-[#000e54] leading-tight text-center group-hover:text-[#ff8633] transition-colors">{value.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default CompareBazaarHomepage;