'use client';
import React, { useState, useRef } from 'react';

const NewPage = () => {

    // Form state
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      message: '',
      services: {
        crmsoftware: false,
        emailmarket: false,
        websitebuild: false,
        phonesystem: false,
        fleetManagement: false,
        employeeManagement: false
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
      form_source: 'Services Contact Form'
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
            phone: '',
            company: '',
            role: '',
            message: '',
            services: {
              crmsoftware: false,
              emailmarket: false,
              websitebuild: false,
              phonesystem: false,
              fleetManagement: false,
              employeeManagement: false
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

    return (
      <>
        {/* Services Contact Form with Web3Forms */}
        <div className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-[#000e54]">
                Interested in Our <span className="text-[#ff8633]">Services?</span>
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tell us about your needs and we'll connect you with the right solutions for your business.
              </p>
            </div>

            {/* Success/Error Messages */}
            {formStatus.success && (
              <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-5 rounded-xl max-w-2xl mx-auto mb-8 shadow-lg" role="alert">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <strong className="font-bold text-lg">Thank you!</strong>
                    <p className="mt-1">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            {formStatus.error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-5 rounded-xl max-w-2xl mx-auto mb-8 shadow-lg" role="alert">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <strong className="font-bold">Error:</strong>
                    <p className="mt-1">{formStatus.error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content: Form Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Side - Form */}
              <div className="order-2 lg:order-1 flex">
                <form className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100 w-full flex flex-col" onSubmit={handleSubmit}>
                  {/* Web3Forms honeypot field to prevent spam */}
                  <input type="hidden" name="botcheck" style={{ display: 'none' }} />
                  
                  <div className="mb-8">
                    <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#000e54]">
                      Get Started Today
                    </h4>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide" htmlFor="name">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide" htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide" htmlFor="company">
                        Company/Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all bg-gray-50 hover:bg-white"
                        placeholder="Your Company Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-4 text-sm font-semibold uppercase tracking-wide">
                      Services You're Interested In <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                      <div className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all duration-200 group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id="crm-software"
                            name="crmsoftware"
                            checked={formData.services.crmsoftware}
                            onChange={handleCheckboxChange}
                            className="appearance-none w-5 h-5 rounded border-2 border-gray-300 cursor-pointer 
                                      checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633] transition-all"
                          />
                          {formData.services.crmsoftware && (
                            <svg 
                              className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2.5" 
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <label htmlFor="crm-software" className={`cursor-pointer text-sm ${formData.services.crmsoftware ? 'text-[#ff8633] font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          Best CRM Software
                        </label>
                      </div>

                      <div className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all duration-200 group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id="email-marketing"
                            name="emailmarket"
                            checked={formData.services.emailmarket}
                            onChange={handleCheckboxChange}
                            className="appearance-none w-5 h-5 rounded border-2 border-gray-300 cursor-pointer 
                                      checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633] transition-all"
                          />
                          {formData.services.emailmarket && (
                            <svg 
                              className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2.5" 
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <label htmlFor="email-marketing" className={`cursor-pointer text-sm ${formData.services.emailmarket ? 'text-[#ff8633] font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          Best Email Marketing Services
                        </label>
                      </div>

                      <div className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all duration-200 group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id="website-building"
                            name="websitebuild"
                            checked={formData.services.websitebuild}
                            onChange={handleCheckboxChange}
                            className="appearance-none w-5 h-5 rounded border-2 border-gray-300 cursor-pointer 
                                      checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633] transition-all"
                          />
                          {formData.services.websitebuild && (
                            <svg 
                              className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2.5" 
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <label htmlFor="website-building" className={`cursor-pointer text-sm ${formData.services.websitebuild ? 'text-[#ff8633] font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          Best Website Building Platforms
                        </label>
                      </div>

                      <div className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all duration-200 group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id="phone-systems"
                            name="phonesystem"
                            checked={formData.services.phonesystem}
                            onChange={handleCheckboxChange}
                            className="appearance-none w-5 h-5 rounded border-2 border-gray-300 cursor-pointer 
                                      checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633] transition-all"
                          />
                          {formData.services.phonesystem && (
                            <svg 
                              className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2.5" 
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <label htmlFor="phone-systems" className={`cursor-pointer text-sm ${formData.services.phonesystem ? 'text-[#ff8633] font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          Business Phone Systems
                        </label>
                      </div>

                      <div className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all duration-200 group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id="fleet-management"
                            name="fleetManagement"
                            checked={formData.services.fleetManagement}
                            onChange={handleCheckboxChange}
                            className="appearance-none w-5 h-5 rounded border-2 border-gray-300 cursor-pointer 
                                      checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633] transition-all"
                          />
                          {formData.services.fleetManagement && (
                            <svg 
                              className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2.5" 
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <label htmlFor="fleet-management" className={`cursor-pointer text-sm ${formData.services.fleetManagement ? 'text-[#ff8633] font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          GPS Fleet Management Software
                        </label>
                      </div>

                      <div className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all duration-200 group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            id="employee-management"
                            name="employeeManagement"
                            checked={formData.services.employeeManagement}
                            onChange={handleCheckboxChange}
                            className="appearance-none w-5 h-5 rounded border-2 border-gray-300 cursor-pointer 
                                      checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633] transition-all"
                          />
                          {formData.services.employeeManagement && (
                            <svg 
                              className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2.5" 
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <label htmlFor="employee-management" className={`cursor-pointer text-sm ${formData.services.employeeManagement ? 'text-[#ff8633] font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                          Best Employee Management Software
                        </label>
                      </div>
</div>
    </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide" htmlFor="role">
                      Your Role <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] appearance-none bg-gray-50 hover:bg-white transition-all duration-300"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="Marketing Manager">Marketing Manager</option>
                        <option value="Director">Director</option>
                        <option value="Digital Marketing Manager">Digital Marketing Manager</option>
                        <option value="Manager">Manager</option>
                        <option value="IT Professional">IT Professional</option>
                        <option value="Marketing Assistant">Marketing Assistant</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Analyst">Analyst</option>
                        <option value="Student">Student</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide" htmlFor="message">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] transition-all duration-300 bg-gray-50 hover:bg-white resize-y"
                      placeholder="Tell us about your project and requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-[#000e54] hover:to-[#001e74] transition-all duration-300 transform hover:-translate-y-2 flex justify-center items-center text-lg"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Side - Professional Content */}
              <div className="order-1 lg:order-2 flex">
                <div className="bg-gradient-to-br from-[#000e54] via-[#001e74] to-[#000e54] rounded-2xl p-8 md:p-12 text-white shadow-2xl w-full flex flex-col relative overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8633]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff8633]/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
                  
                  <div className="relative z-10 mb-6">
                    <h4 className="text-2xl md:text-3xl font-bold mb-3">
                      Why Choose <span className="text-[#ff8633]">Compare Bazaar?</span>
                    </h4>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ff9a57] rounded-full mb-4"></div>
                    <p className="text-base text-white/90 leading-relaxed">
                      We're committed to helping businesses find the perfect solutions. Our expert team provides comprehensive comparisons and personalized recommendations.
                    </p>
                  </div>

                  {/* Features List - Optimized spacing */}
                  <div className="space-y-4 mb-6 flex-grow relative z-10">
                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold mb-1.5 text-white">Expert Analysis</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Our team of industry experts conducts thorough research and analysis to provide you with accurate, unbiased comparisons.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold mb-1.5 text-white">Fast Response</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Get quick responses to your inquiries. We understand that time is valuable and strive to respond within 24 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold mb-1.5 text-white">Personalized Service</h5>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Every business is unique. We tailor our recommendations to match your specific needs and goals.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Process Steps - Compact and optimized */}
                  <div className="mb-6 relative z-10">
                    <h5 className="text-lg font-bold mb-4 text-white">How It Works</h5>
                    <div className="space-y-3">
                      <div className="flex items-center group bg-white/5 backdrop-blur-sm rounded-lg p-3.5 hover:bg-white/10 transition-all border border-white/10">
                        <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-lg flex items-center justify-center mr-3 font-bold text-white shadow-lg group-hover:scale-110 transition-transform text-sm">
                          1
                        </div>
                        <div className="flex-1">
                          <h6 className="font-semibold text-white text-sm mb-0.5">Submit Your Inquiry</h6>
                          <p className="text-white/70 text-xs">Fill out the form with your details</p>
                        </div>
                      </div>
                      <div className="flex items-center group bg-white/5 backdrop-blur-sm rounded-lg p-3.5 hover:bg-white/10 transition-all border border-white/10">
                        <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-lg flex items-center justify-center mr-3 font-bold text-white shadow-lg group-hover:scale-110 transition-transform text-sm">
                          2
                        </div>
                        <div className="flex-1">
                          <h6 className="font-semibold text-white text-sm mb-0.5">Expert Review</h6>
                          <p className="text-white/70 text-xs">Our team analyzes your needs</p>
                        </div>
                      </div>
                      <div className="flex items-center group bg-white/5 backdrop-blur-sm rounded-lg p-3.5 hover:bg-white/10 transition-all border border-white/10">
                        <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#ff8633] to-[#ff9a57] rounded-lg flex items-center justify-center mr-3 font-bold text-white shadow-lg group-hover:scale-110 transition-transform text-sm">
                          3
                        </div>
                        <div className="flex-1">
                          <h6 className="font-semibold text-white text-sm mb-0.5">Get Customized Solutions</h6>
                          <p className="text-white/70 text-xs">Receive tailored solutions for your goals</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20 mt-auto relative z-10">
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="text-2xl md:text-3xl font-bold text-[#ff8633] mb-1.5">500+</div>
                      <div className="text-xs text-white/80 font-medium">Happy Clients</div>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="text-2xl md:text-3xl font-bold text-[#ff8633] mb-1.5">24/7</div>
                      <div className="text-xs text-white/80 font-medium">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
};

export default NewPage;