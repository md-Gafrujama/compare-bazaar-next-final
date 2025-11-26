'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function CareersPage() {
  // State for selected job and form data
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume_link: '',
    linkedin: '',
    portfolio: '',
    cover_letter: '',
    experience: ''
  });
  const [formStatus, setFormStatus] = useState({ show: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for scrolling
  const jobDescriptionRef = useRef(null);
  const applicationFormRef = useRef(null);

  // Animation hooks for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [positionsRef, positionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [applicationRef, applicationInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Update document title
  useEffect(() => {
    document.title = "Careers | Compare-Bazaar";
  }, []);

  // Job descriptions data
  const jobDescriptions = {
    "B2B Sales Executive": {
      title: "B2B Sales Executive",
      location: "Austin, TX",
      description: (
        <div>
          <p className="text-gray-600 mb-4">We are looking for a motivated and results-driven B2B Sales Executive to join our team. You will be responsible for generating new business opportunities and building strong relationships with clients.</p>
          <h3 className="text-base font-bold mb-2 text-gray-800">Responsibilities:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">Identify and prospect new business opportunities.</li>
            <li className="mb-2">Build and maintain strong relationships with clients.</li>
            <li className="mb-2">Meet and exceed sales targets.</li>
            <li className="mb-2">Collaborate with the marketing team to develop sales strategies.</li>
          </ul>
          <h3 className="text-base font-bold mb-2 text-gray-800">Requirements:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">2+ years of experience in B2B sales.</li>
            <li className="mb-2">Strong communication and negotiation skills.</li>
            <li className="mb-2">Proven track record of meeting sales targets.</li>
            <li className="mb-2">Ability to work independently and as part of a team.</li>
          </ul>
        </div>
      )
    },
    "Client Success Manager": {
      title: "Client Success Manager",
      location: "Austin, TX",
      description: (
        <div>
          <p className="text-gray-600 mb-4">We are seeking a dedicated Client Success Manager to ensure our clients achieve their goals using our services. You will act as the main point of contact for clients, providing support and guidance.</p>
          <h3 className="text-base font-bold mb-2 text-gray-800">Responsibilities:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">Onboard new clients and ensure a smooth transition.</li>
            <li className="mb-2">Provide ongoing support and training to clients.</li>
            <li className="mb-2">Monitor client satisfaction and address any issues.</li>
            <li className="mb-2">Collaborate with internal teams to improve client experience.</li>
          </ul>
          <h3 className="text-base font-bold mb-2 text-gray-800">Requirements:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">3+ years of experience in client success or account management.</li>
            <li className="mb-2">Excellent communication and interpersonal skills.</li>
            <li className="mb-2">Strong problem-solving abilities.</li>
            <li className="mb-2">Ability to manage multiple clients and projects simultaneously.</li>
          </ul>
        </div>
      )
    }
  };

  // Handle job selection
  const handleJobSelect = (jobTitle) => {
    setSelectedJob(jobTitle);
    
    // Scroll to job description after a short delay
    setTimeout(() => {
      if (jobDescriptionRef.current) {
        jobDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ show: false });

    try {
      // In a real app, you would submit to your API here
      // For this demo, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      setFormStatus({
        show: true,
        success: true,
        message: 'Thanks for your application! We will be in touch soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume_link: '',
        linkedin: '',
        portfolio: '',
        cover_letter: '',
        experience: ''
      });

      // Add confetti effect
      addConfetti();
    } catch (error) {
      // Show error message
      setFormStatus({
        show: true,
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confetti effect function
  const addConfetti = () => {
    const colors = ['#0d6eaa', '#76b729', '#f8d258', '#ff6b6b', '#8c52ff'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];

      confetti.style.position = 'absolute';
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = Math.random() * 10 + 5 + 'px';
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = '50%';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      confetti.style.opacity = Math.random() + 0.5;

      confettiContainer.appendChild(confetti);

      const animationDuration = Math.random() * 3 + 2;
      const horizonalMovement = (Math.random() - 0.5) * 200;

      confetti.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${horizonalMovement}px, 100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: animationDuration * 1000,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        fill: 'forwards'
      });

      setTimeout(() => {
        confetti.remove();
      }, animationDuration * 1000);
    }

    setTimeout(() => {
      confettiContainer.remove();
    }, 5000);
  };

  return (
    <>
      <div className="font-sans text-gray-800 bg-gray-50">
        {/* Hero Banner */}
        <div 
          ref={heroRef}
          className={`relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden transition-all duration-700 ${heroInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          style={{ 
            backgroundImage: 'linear-gradient(135deg, rgba(0, 14, 84, 0.85), rgba(255, 134, 51, 0.75)), url(https://www.swg.com/usa/wp-content/uploads/sites/34/2014/09/Careers-banner.jpg)'
          }}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Join Our Team!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Build your career with a company that values innovation, growth, and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => positionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ff8633] hover:bg-[#ff9a57] text-white font-semibold px-8 py-4 rounded-full shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-lg"
              >
                View Open Positions
              </button>
              <button 
                onClick={() => valuesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-lg"
              >
                Our Values
              </button>
            </div>
          </div>
        </div>

        {/* Work with Great People Section */}
        <div className="text-center py-20 px-4 max-w-4xl mx-auto bg-white">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block pb-4 mb-6">
            <span className="relative z-10">Work with Great People</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We have a diverse team of hard-working and fun-loving individuals who are passionate about making a difference
          </p>
        </div>

        {/* Features Section */}
        <div 
          ref={featuresRef} 
          className={`max-w-7xl mx-auto px-4 md:px-8 py-20 bg-white transition-all duration-700 ${featuresInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefits Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Benefits" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000e54]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#000e54]">Benefits</h3>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  Competitive salary packages, comprehensive health insurance, flexible work arrangements, and professional development opportunities.
                </p>
              </div>
            </div>

            {/* Culture Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Culture" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000e54]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#000e54]">Culture</h3>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  A collaborative, inclusive environment where innovation thrives, ideas are valued, and work-life balance is respected.
                </p>
              </div>
            </div>

            {/* Awards Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Awards" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000e54]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#000e54]">Awards</h3>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  Recognized as "Most Innovative Platform" in 2023. Join a team that's making a real impact in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div 
          ref={positionsRef} 
          className={`py-20 px-4 md:px-8 text-center bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${positionsInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative inline-block pb-4">
              <span className="relative z-10">Open Positions</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore exciting career opportunities and join our growing team
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {Object.entries(jobDescriptions).map(([title, job]) => (
                <div 
                  key={title} 
                  className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="text-left mb-6">
                    <h3 className="text-2xl font-bold text-[#000e54] mb-3 group-hover:text-[#ff8633] transition-colors">{title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-5 h-5 mr-2 text-[#ff8633]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-base">{job.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Join our dynamic team and make an impact in your career
                    </p>
                  </div>
                  <button 
                  onClick={() => handleJobSelect(title)}
                  className="bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-opacity-50 w-full md:w-auto"
                >
                  View Details
                </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Description Section */}
        {selectedJob && (
          <div 
            ref={jobDescriptionRef}
            className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8 pb-6 border-b-2 border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000e54]">{selectedJob}</h2>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-[#ff8633]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">{jobDescriptions[selectedJob]?.location}</span>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                {jobDescriptions[selectedJob]?.description}
              </div>
              <div className="mt-10 text-center">
                <button 
                  onClick={() => applicationFormRef.current.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-opacity-50 text-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        <div 
          ref={valuesRef}
          className={`py-20 px-4 md:px-8 text-center bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${valuesInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative inline-block pb-4">
              <span className="relative z-10">Our Values</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
              At Compare Bazaar, we follow six core values that help shape our everyday decisions. These values guide how we treat our customers, support our teammates, work with our partners, and grow our company. They're not just words – they're the foundation of how we do business and make sure everyone we interact with feels respected, valued, and supported.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "📈", title: "Do what it takes to deliver excellent results" },
                { icon: "🚀", title: "Bring a proactive, solution-oriented attitude to everything you do" },
                { icon: "🤝", title: "Act with integrity and respect" },
                { icon: "💬", title: "Communicate directly and honestly" },
                { icon: "🎯", title: "Do what you say you are going to do" },
                { icon: "🧠", title: "Always learn and try new things" }
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-lg text-[#000e54] leading-tight">{value.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div 
          ref={applicationRef}
          className={`py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white transition-all duration-700 ${applicationInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000e54]">
                Apply Now
              </h2>
              {selectedJob && (
                <p className="text-xl text-gray-600 font-semibold mb-4">{selectedJob}</p>
              )}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mx-auto"></div>
            </div>

            {/* Main Content: Form Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Side - Form */}
              <div className="flex">
                <form ref={applicationFormRef} onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100 w-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#000e54]">
                      Start Your Journey
                    </h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Fill out the application form below. Our team will review your application and get back to you soon.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hidden field for job title */}
                    <input type="hidden" name="job_title" value={selectedJob || 'General Application'} />
                    
                    {/* Personal Information */}
                    <div className="form-group">
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        required
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        required
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    {/* Resume Link Field */}
                    <div className="form-group">
                      <label htmlFor="resume_link" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Resume Link</label>
                      <input
                        type="url"
                        id="resume_link"
                        name="resume_link"
                        value={formData.resume_link}
                        onChange={handleInputChange}
                        placeholder="https://drive.google.com/..."
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                      />
                      <p className="text-xs text-gray-500 mt-2">Share a link to your resume (Google Drive, Dropbox, etc.)</p>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="linkedin" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">LinkedIn Profile</label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="portfolio" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Portfolio/Website</label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio || ''}
                        onChange={handleInputChange}
                        placeholder="https://yourportfolio.com"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                      />
                      <p className="text-xs text-gray-500 mt-2">Share your portfolio or personal website (optional)</p>
                    </div>
                    
                    {/* Cover Letter */}
                    <div className="form-group md:col-span-2">
                      <label htmlFor="cover_letter" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Why are you interested in this position? *</label>
                      <textarea
                        id="cover_letter"
                        name="cover_letter"
                        value={formData.cover_letter}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all min-h-36 resize-y bg-gray-50 hover:bg-white"
                        required
                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                      ></textarea>
                    </div>
                    
                    {/* Experience */}
                    <div className="form-group md:col-span-2">
                      <label htmlFor="experience" className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">Relevant Experience *</label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all min-h-36 resize-y bg-gray-50 hover:bg-white"
                        required
                        placeholder="Describe your relevant work experience, skills, and achievements..."
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white font-bold rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-opacity-50 text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                    
                    {/* Form Status Message */}
                    {formStatus.show && (
                      <div className={`md:col-span-2 p-5 rounded-xl mt-4 border-2 ${formStatus.success ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                        <div className="flex items-center">
                          {formStatus.success ? (
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          <div>
                            <strong className="font-bold">{formStatus.success ? 'Success!' : 'Error!'}</strong>
                            <span className="ml-2">{formStatus.message}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Side - Professional Content */}
              <div className="flex">
                <div className="bg-gradient-to-br from-[#000e54] via-[#001e74] to-[#000e54] rounded-2xl p-8 md:p-12 text-white shadow-2xl w-full flex flex-col relative overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8633]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff8633]/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
                  
                  <div className="relative z-10 mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Why Join <span className="text-[#ff8633]">Our Team?</span>
                    </h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mb-6"></div>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                      At Compare Bazaar, we're building something special. Join a team that values innovation, collaboration, and personal growth.
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-6 mb-8 flex-grow relative z-10">
                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold mb-2 text-white">Career Growth</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          We invest in your professional development with training programs, mentorship, and opportunities to take on new challenges.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold mb-2 text-white">Competitive Benefits</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Enjoy comprehensive health insurance, flexible work arrangements, and competitive compensation packages.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold mb-2 text-white">Collaborative Culture</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Work with talented, supportive colleagues in an inclusive environment where your ideas are valued and heard.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold mb-2 text-white">Innovation Focus</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Be part of cutting-edge projects and help shape the future of our industry with innovative solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20 mt-auto relative z-10">
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="text-3xl md:text-4xl font-bold text-[#ff8633] mb-2">50+</div>
                      <div className="text-sm text-white/80 font-medium">Team Members</div>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="text-3xl md:text-4xl font-bold text-[#ff8633] mb-2">100%</div>
                      <div className="text-sm text-white/80 font-medium">Remote Friendly</div>
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
}

export default CareersPage;