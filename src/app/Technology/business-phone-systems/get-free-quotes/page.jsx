"use client";

import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, Phone, Shield, Zap, TrendingUp, Users, BarChart3, PhoneCall, MessageSquare, Video, DollarSign } from 'lucide-react';

const BusinessPhoneSystemGetQuotesForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    zipCode: '',
    phoneSystemNeeds: '',
    phonesNeeded: '',
    emailUpdates: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  // Update document title
  useEffect(() => {
    document.title = "Get Business Phone System Quotes | Compare-Bazaar";
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please complete this required field.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please complete this required field.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please complete this required field.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please complete this required field.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please complete this required field.';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Please complete this required field.';
    } else if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid 5-digit zip code.';
    }
    if (!formData.phoneSystemNeeds) {
      newErrors.phoneSystemNeeds = 'Please complete this required field.';
    }
    if (!formData.phonesNeeded) {
      newErrors.phonesNeeded = 'Please complete this required field.';
    }
    // reCAPTCHA is always required
    if (!captchaValue) {
      newErrors.captcha = 'Please verify that you\'re not a robot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Explicit check: reCAPTCHA must be completed
    if (!captchaValue) {
      setErrors({
        ...errors,
        captcha: 'Please verify that you\'re not a robot.'
      });
      return;
    }
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        document.querySelector(`[name="${firstErrorField}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        alert('Form submission is not configured. Please contact support.');
        setIsSubmitting(false);
        return;
      }
      
      const submissionData = {
        access_key: accessKey,
        subject: 'Business Phone System Quote Request - Compare-Bazaar',
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company_name: formData.companyName,
        phone: formData.phoneNumber,
        zip_code: formData.zipCode,
        phone_system_needs: formData.phoneSystemNeeds,
        phones_needed: formData.phonesNeeded,
        email_updates: formData.emailUpdates ? 'Yes' : 'No',
        form_source: 'Business Phone System - Get Quotes (Compare-Bazaar)',
        captcha_token: captchaValue
      };

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
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          zipCode: '',
          phoneSystemNeeds: '',
          phonesNeeded: '',
          emailUpdates: false
        });
        setCaptchaValue(null);
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
        setErrors({});
      } else {
        alert('Sorry, there was a problem submitting your information. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was a problem submitting your information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Get Business Phone System Quotes | Compare-Bazaar</title>
        <meta name="description" content="Get free, no-obligation quotes from top business phone system providers. Compare VoIP solutions and find the best fit for your business." />
        <link rel="canonical" href="https://www.compare-bazaar.com/Technology/business-phone-systems/get-free-quotes" />
      </Head>
      
      {/* Main Content Section - Two Column Layout */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-8 md:py-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff8633]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-stretch">
            
            {/* Left Side - Form */}
            <div className="order-1 lg:order-1 flex">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-gray-100 backdrop-blur-sm transform transition-all duration-300 hover:shadow-3xl w-full flex flex-col h-full">
                {/* Header Section */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-[#ff8633] to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                      Get Free Quotes
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Connect Your Business with Modern Communication
                  </h1>
                  <p className="text-base md:text-base text-gray-600 leading-relaxed">
                    Fill out the form to get customized quotes from top business phone system providers and find the perfect solution for your needs.
                  </p>
                </div>

                {showSuccess && (
                  <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-xl p-4 shadow-lg animate-fadeIn">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-base font-semibold text-green-800">Thank you!</h3>
                        <p className="mt-1 text-sm text-green-700">
                          Your submission has been received. We will get back to you soon with your free quotes.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  {/* First Name and Last Name in One Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 placeholder-gray-400 
                            bg-white transition-all duration-300 ease-in-out
                            focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                            hover:border-gray-400 hover:shadow-md
                            ${errors.firstName 
                              ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                              : 'border-gray-300'
                            }
                            ${focusedField === 'firstName' ? 'shadow-lg scale-[1.01]' : ''}
                          `}
                          placeholder="John"
                        />
                        {focusedField === 'firstName' && !errors.firstName && (
                          <div className="absolute inset-0 rounded-xl border-2 border-[#ff8633] pointer-events-none animate-pulse-border"></div>
                        )}
                      </div>
                      {errors.firstName && (
                        <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                          <span className="mr-1">⚠</span> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 placeholder-gray-400 
                            bg-white transition-all duration-300 ease-in-out
                            focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                            hover:border-gray-400 hover:shadow-md
                            ${errors.lastName 
                              ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                              : 'border-gray-300'
                            }
                            ${focusedField === 'lastName' ? 'shadow-lg scale-[1.01]' : ''}
                          `}
                          placeholder="Doe"
                        />
                        {focusedField === 'lastName' && !errors.lastName && (
                          <div className="absolute inset-0 rounded-xl border-2 border-[#ff8633] pointer-events-none animate-pulse-border"></div>
                        )}
                      </div>
                      {errors.lastName && (
                        <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                          <span className="mr-1">⚠</span> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="group">
                    <label htmlFor="companyName" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('companyName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 placeholder-gray-400 
                          bg-white transition-all duration-300 ease-in-out
                          focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                          hover:border-gray-400 hover:shadow-md
                          ${errors.companyName 
                            ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                            : 'border-gray-300'
                          }
                          ${focusedField === 'companyName' ? 'shadow-lg scale-[1.01]' : ''}
                        `}
                        placeholder="Acme Corporation"
                      />
                      {focusedField === 'companyName' && !errors.companyName && (
                        <div className="absolute inset-0 rounded-xl border-2 border-[#ff8633] pointer-events-none animate-pulse-border"></div>
                      )}
                    </div>
                    {errors.companyName && (
                      <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                        <span className="mr-1">⚠</span> {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 placeholder-gray-400 
                          bg-white transition-all duration-300 ease-in-out
                          focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                          hover:border-gray-400 hover:shadow-md
                          ${errors.email 
                            ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                            : 'border-gray-300'
                          }
                          ${focusedField === 'email' ? 'shadow-lg scale-[1.01]' : ''}
                        `}
                        placeholder="john.doe@company.com"
                      />
                      {focusedField === 'email' && !errors.email && (
                        <div className="absolute inset-0 rounded-xl border-2 border-[#ff8633] pointer-events-none animate-pulse-border"></div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                        <span className="mr-1">⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phoneNumber')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 placeholder-gray-400 
                          bg-white transition-all duration-300 ease-in-out
                          focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                          hover:border-gray-400 hover:shadow-md
                          ${errors.phoneNumber 
                            ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                            : 'border-gray-300'
                          }
                          ${focusedField === 'phoneNumber' ? 'shadow-lg scale-[1.01]' : ''}
                        `}
                        placeholder="+1 (555) 123-4567"
                      />
                      {focusedField === 'phoneNumber' && !errors.phoneNumber && (
                        <div className="absolute inset-0 rounded-xl border-2 border-[#ff8633] pointer-events-none animate-pulse-border"></div>
                      )}
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                        <span className="mr-1">⚠</span> {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Zip Code */}
                  <div className="group">
                    <label htmlFor="zipCode" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                      Zip Code <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('zipCode')}
                        onBlur={() => setFocusedField(null)}
                        maxLength={5}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 placeholder-gray-400 
                          bg-white transition-all duration-300 ease-in-out
                          focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                          hover:border-gray-400 hover:shadow-md
                          ${errors.zipCode 
                            ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                            : 'border-gray-300'
                          }
                          ${focusedField === 'zipCode' ? 'shadow-lg scale-[1.01]' : ''}
                        `}
                        placeholder="12345"
                      />
                      {focusedField === 'zipCode' && !errors.zipCode && (
                        <div className="absolute inset-0 rounded-xl border-2 border-[#ff8633] pointer-events-none animate-pulse-border"></div>
                      )}
                    </div>
                    {errors.zipCode && (
                      <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                        <span className="mr-1">⚠</span> {errors.zipCode}
                      </p>
                    )}
                  </div>

                  {/* Phone System Needs */}
                  <div className="group">
                    <label htmlFor="phoneSystemNeeds" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                      Phone System Needs <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="phoneSystemNeeds"
                        name="phoneSystemNeeds"
                        value={formData.phoneSystemNeeds}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phoneSystemNeeds')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 
                          bg-white transition-all duration-300 ease-in-out
                          focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                          hover:border-gray-400 hover:shadow-md
                          ${errors.phoneSystemNeeds 
                            ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                            : 'border-gray-300'
                          }
                          ${focusedField === 'phoneSystemNeeds' ? 'shadow-lg scale-[1.01]' : ''}
                        `}
                      >
                        <option value="">Select an option</option>
                        <option value="Installing new phone system">Installing new phone system</option>
                        <option value="Replacing existing phone system">Replacing existing phone system</option>
                        <option value="Expanding existing phone system">Expanding existing phone system</option>
                      </select>
                    </div>
                    {errors.phoneSystemNeeds && (
                      <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                        <span className="mr-1">⚠</span> {errors.phoneSystemNeeds}
                      </p>
                    )}
                  </div>

                  {/* Phones Needed */}
                  <div className="group">
                    <label htmlFor="phonesNeeded" className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-[#ff8633]">
                      Number of Phones Needed <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="phonesNeeded"
                        name="phonesNeeded"
                        value={formData.phonesNeeded}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phonesNeeded')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-gray-900 
                          bg-white transition-all duration-300 ease-in-out
                          focus:outline-none focus:ring-4 focus:ring-[#ff8633]/20 focus:border-[#ff8633] 
                          hover:border-gray-400 hover:shadow-md
                          ${errors.phonesNeeded 
                            ? 'border-red-500 bg-red-50 focus:ring-red-200 focus:border-red-500' 
                            : 'border-gray-300'
                          }
                          ${focusedField === 'phonesNeeded' ? 'shadow-lg scale-[1.01]' : ''}
                        `}
                      >
                        <option value="">Select an option</option>
                        <option value="1-10">1-10 phones</option>
                        <option value="11-25">11-25 phones</option>
                        <option value="26-50">26-50 phones</option>
                        <option value="50+">50+ phones</option>
                      </select>
                    </div>
                    {errors.phonesNeeded && (
                      <p className="mt-1.5 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                        <span className="mr-1">⚠</span> {errors.phonesNeeded}
                      </p>
                    )}
                  </div>

                  {/* Email Updates Checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="emailUpdates"
                        name="emailUpdates"
                        type="checkbox"
                        checked={formData.emailUpdates}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#ff8633] border-gray-300 rounded focus:ring-[#ff8633] focus:ring-2"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="emailUpdates" className="font-medium text-gray-700">
                        I would like to receive email updates about phone system solutions
                      </label>
                    </div>
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex flex-col items-start">
                    <ReCAPTCHA
                      ref={captchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={(value) => {
                        setCaptchaValue(value);
                        if (errors.captcha) {
                          setErrors({
                            ...errors,
                            captcha: ''
                          });
                        }
                      }}
                    />
                  </div>
                  {errors.captcha && (
                    <p className="mt-2 text-sm text-red-600 font-medium animate-slideDown flex items-center">
                      <span className="mr-1">⚠</span> {errors.captcha}
                    </p>
                  )}

                  {/* Consent Text */}
                  <div className="pt-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      By clicking &quot;Compare Prices&quot; below, I consent to receive from compare-bazaar.com at any time SMS text messages and I also consent to receive from compare-bazaar.com and up to five service providers at any time emails, telemarketing calls using auto-dialer, artificial voices or pre-recordings, which could result in wireless charges, at the number provided above. I understand that consent is not a condition of purchase. I also agree to the{' '}
                      <Link href="/TermsOfUse" className="text-[#ff8633] hover:text-orange-600 underline font-semibold transition-colors">
                        Terms &amp; Conditions
                      </Link>
                      {' '}and{' '}
                      <Link href="/PrivacyPolicy" className="text-[#ff8633] hover:text-orange-600 underline font-semibold transition-colors">
                        Privacy Policy
                      </Link>
                      , which are also linked at the bottom of the page.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg mt-auto
                      transition-all duration-300 ease-in-out transform relative overflow-hidden
                      ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#ff8633] to-orange-600 hover:from-orange-600 hover:to-[#ff8633] shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Compare Prices'
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - Product Demo/Content */}
            <div className="order-2 lg:order-2 flex">
              <div className="lg:sticky lg:top-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col border border-gray-700 relative overflow-hidden w-full lg:h-full custom-scrollbar">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 md:opacity-15 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'local'
                  }}
                ></div>
                {/* Additional overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/97 via-gray-900/97 to-gray-800/97"></div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="inline-block mb-2">
                      <span className="bg-gradient-to-r from-[#ff8633] to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        Get Free Quotes
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                      Experience Business Phone Systems
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      See how our platform simplifies business communication
                    </p>
                  </div>

                  {/* Professional Dashboard Design */}
                  <div className="mb-4 bg-gray-900 rounded-xl p-2 sm:p-3 shadow-2xl border border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl lg:flex-1">
                    {/* Browser Window Frame */}
                    <div className="bg-gray-800 rounded-t-lg px-2 sm:px-3 py-1.5 sm:py-2 flex items-center space-x-1 sm:space-x-2 border-b border-gray-700">
                      <div className="flex space-x-1 sm:space-x-1.5 flex-shrink-0">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm hover:bg-red-600 transition-colors"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm hover:bg-yellow-600 transition-colors"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm hover:bg-green-600 transition-colors"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 h-5 sm:h-6 rounded-lg border border-gray-600 ml-1 sm:ml-2 flex items-center px-2 sm:px-3 min-w-0">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-[8px] sm:text-[10px] text-gray-300 font-mono truncate">https://phone.compare-bazaar.com/dashboard</span>
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400 ml-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-b-lg overflow-hidden shadow-inner lg:h-[calc(100%-45px)] min-h-[400px] sm:min-h-[500px] lg:min-h-0 flex flex-col">
                      {/* Realistic Dashboard Header with Navigation */}
                      <div className="bg-white border-b border-gray-200">
                        {/* Top Navigation Bar */}
                        <div className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b border-gray-100">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#ff8633] to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <div>
                              <h3 className="text-[10px] sm:text-xs font-bold text-gray-900 leading-tight">Business Phone System</h3>
                              <p className="text-[8px] sm:text-[9px] text-gray-500">Dashboard</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1.5 sm:space-x-2">
                            <div className="flex items-center space-x-1 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-200">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-[8px] sm:text-[9px] font-semibold text-green-700">Live</span>
                            </div>
                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 flex items-center justify-center">
                              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Navigation Tabs */}
                        <div className="px-3 sm:px-4 flex items-center space-x-1 sm:space-x-2 border-b border-gray-100">
                          <button className="px-2 sm:px-3 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-semibold text-[#ff8633] border-b-2 border-[#ff8633]">Overview</button>
                          <button className="px-2 sm:px-3 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-medium text-gray-600 hover:text-gray-900">Calls</button>
                          <button className="px-2 sm:px-3 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-medium text-gray-600 hover:text-gray-900">Analytics</button>
                        </div>
                      </div>
                      
                      {/* Main Content Area */}
                      <div className="p-2 sm:p-3 md:p-4 bg-gray-50 flex-1 flex flex-col overflow-y-auto">
                        {/* Professional KPI Cards with Realistic Design */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4">
                          {/* Active Calls Card */}
                          <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                              </div>
                              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-200">+12%</span>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 leading-tight">247</p>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-gray-600 leading-tight">Active Calls</p>
                            <div className="mt-1.5 flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-blue-500 h-1 rounded-full" style={{ width: '82%' }}></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Call Quality Card */}
                          <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                              </div>
                              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">+5.2%</span>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 leading-tight">99.8%</p>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-gray-600 leading-tight">Call Quality</p>
                            <div className="mt-1.5 flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-emerald-500 h-1 rounded-full" style={{ width: '99.8%' }}></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Cost Savings Card */}
                          <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#ff8633] to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <DollarSign className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                              </div>
                              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-full border border-orange-200">+22%</span>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 leading-tight">$4.5K</p>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-gray-600 leading-tight">Monthly Savings</p>
                            <div className="mt-1.5 flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-orange-500 h-1 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Professional Call Activity Graph Section */}
                        <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 border border-gray-200 shadow-sm flex-1 relative min-h-[180px] sm:min-h-[200px] md:min-h-[220px] overflow-hidden">
                          {/* Graph Header with Realistic Design */}
                          <div className="mb-2 sm:mb-3 pb-2 sm:pb-2.5 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff8633]" />
                                  <p className="text-[10px] sm:text-[11px] md:text-xs font-bold text-gray-900">Call Volume Trend</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-[8px] sm:text-[9px] text-gray-500">Last 24 hours</span>
                                  <span className="text-[8px] sm:text-[9px] text-gray-300">•</span>
                                  <span className="text-[8px] sm:text-[9px] text-gray-500">48 active lines</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
                                <button className="px-2 py-1 text-[8px] sm:text-[9px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">Day</button>
                                <button className="px-2 py-1 text-[8px] sm:text-[9px] font-medium text-[#ff8633] bg-orange-50 rounded">Week</button>
                                <button className="px-2 py-1 text-[8px] sm:text-[9px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">Month</button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Graph Visualization */}
                          <div className="relative pt-2 pb-12 sm:pb-14 px-2 sm:px-3 h-full">
                            <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
                              {/* Grid Lines */}
                              <defs>
                                <linearGradient id="callGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#ff8633" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#ff8633" stopOpacity="0.05" />
                                </linearGradient>
                                <linearGradient id="callGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                                </linearGradient>
                              </defs>
                              
                              {/* Horizontal Grid Lines */}
                              <line x1="30" y1="20" x2="30" y2="130" stroke="#e5e7eb" strokeWidth="0.5" />
                              <line x1="30" y1="130" x2="280" y2="130" stroke="#e5e7eb" strokeWidth="0.5" />
                              <line x1="30" y1="75" x2="280" y2="75" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                              
                              {/* Y-axis labels */}
                              <text x="25" y="25" fontSize="8" fill="#6b7280" textAnchor="end">200</text>
                              <text x="25" y="80" fontSize="8" fill="#6b7280" textAnchor="end">100</text>
                              <text x="25" y="135" fontSize="8" fill="#6b7280" textAnchor="end">0</text>
                              
                              {/* X-axis labels */}
                              <text x="60" y="145" fontSize="8" fill="#6b7280" textAnchor="middle">00:00</text>
                              <text x="120" y="145" fontSize="8" fill="#6b7280" textAnchor="middle">06:00</text>
                              <text x="180" y="145" fontSize="8" fill="#6b7280" textAnchor="middle">12:00</text>
                              <text x="240" y="145" fontSize="8" fill="#6b7280" textAnchor="middle">18:00</text>
                              <text x="280" y="145" fontSize="8" fill="#6b7280" textAnchor="middle">24:00</text>
                              
                              {/* Call Volume Line 1 (Incoming) */}
                              <path 
                                d="M 40,110 Q 70,95, 100,85 T 160,75 T 220,70 T 280,65" 
                                stroke="#ff8633" 
                                strokeWidth="2.5" 
                                fill="none" 
                                strokeLinecap="round"
                              />
                              <path 
                                d="M 40,110 Q 70,95, 100,85 T 160,75 T 220,70 T 280,65 L 280,130 L 40,130 Z" 
                                fill="url(#callGradient)" 
                              />
                              
                              {/* Call Volume Line 2 (Outgoing) */}
                              <path 
                                d="M 40,120 Q 70,110, 100,105 T 160,100 T 220,95 T 280,90" 
                                stroke="#3b82f6" 
                                strokeWidth="2.5" 
                                fill="none" 
                                strokeLinecap="round"
                              />
                              <path 
                                d="M 40,120 Q 70,110, 100,105 T 160,100 T 220,95 T 280,90 L 280,130 L 40,130 Z" 
                                fill="url(#callGradient2)" 
                              />
                              
                              {/* Data Points - Incoming */}
                              <circle cx="40" cy="110" r="3" fill="#ff8633" stroke="white" strokeWidth="1.5" />
                              <circle cx="100" cy="85" r="3" fill="#ff8633" stroke="white" strokeWidth="1.5" />
                              <circle cx="160" cy="75" r="3" fill="#ff8633" stroke="white" strokeWidth="1.5" />
                              <circle cx="220" cy="70" r="3" fill="#ff8633" stroke="white" strokeWidth="1.5" />
                              <circle cx="280" cy="65" r="3" fill="#ff8633" stroke="white" strokeWidth="1.5" />
                              
                              {/* Data Points - Outgoing */}
                              <circle cx="40" cy="120" r="3" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                              <circle cx="100" cy="105" r="3" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                              <circle cx="160" cy="100" r="3" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                              <circle cx="220" cy="95" r="3" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                              <circle cx="280" cy="90" r="3" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                              
                              {/* Legend */}
                              <g transform="translate(200, 20)">
                                <line x1="0" y1="0" x2="15" y2="0" stroke="#ff8633" strokeWidth="2" />
                                <text x="20" y="4" fontSize="8" fill="#374151">Incoming</text>
                                <line x1="0" y1="10" x2="15" y2="10" stroke="#3b82f6" strokeWidth="2" />
                                <text x="20" y="14" fontSize="8" fill="#374151">Outgoing</text>
                              </g>
                            </svg>
                          </div>
                          
                          {/* Bottom Stats */}
                          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 z-10">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 shadow-sm">
                              <div className="flex items-center justify-between flex-wrap gap-1 sm:gap-0">
                                <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
                                  <div className="flex items-center space-x-1 sm:space-x-1.5">
                                    <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-gray-700 whitespace-nowrap">247 Calls</span>
                                  </div>
                                  <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
                                  <div className="flex items-center space-x-1 sm:space-x-1.5">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-gray-700 whitespace-nowrap">Peak: 2PM</span>
                                  </div>
                                </div>
                                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#ff8633] whitespace-nowrap">+12% Today</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Professional Activity Feed with Realistic Design */}
                        <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-200 shadow-sm">
                          <div className="flex items-center justify-between mb-2 sm:mb-3 pb-2 border-b border-gray-200">
                            <div className="flex items-center space-x-2">
                              <div className="w-1 h-4 bg-[#ff8633] rounded-full"></div>
                              <p className="text-[10px] sm:text-[11px] md:text-xs font-bold text-gray-900">Recent Activity</p>
                              <span className="text-[8px] sm:text-[9px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">12</span>
                            </div>
                            <button className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-[#ff8633] hover:text-orange-600 transition-colors whitespace-nowrap flex items-center">
                              View All
                              <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-2.5 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200 group">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                  <p className="text-[9px] sm:text-[10px] font-semibold text-gray-900">Call Completed</p>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">2m ago</span>
                                </div>
                                <p className="text-[8px] sm:text-[9px] text-gray-600 line-clamp-1">Customer support call finished in 3.2 minutes</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-[7px] sm:text-[8px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">+1-555-0123</span>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">Duration: 3:24</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-2.5 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200 group">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                  <p className="text-[9px] sm:text-[10px] font-semibold text-gray-900">Extension Added</p>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">5m ago</span>
                                </div>
                                <p className="text-[8px] sm:text-[9px] text-gray-600 line-clamp-1">New extension #125 assigned to Sales Team</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-[7px] sm:text-[8px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Ext. 125</span>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">Sales Team</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-2.5 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200 group">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                  <p className="text-[9px] sm:text-[10px] font-semibold text-gray-900">Voicemail Received</p>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">10m ago</span>
                                </div>
                                <p className="text-[8px] sm:text-[9px] text-gray-600 line-clamp-1">New voicemail from extension #42</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-[7px] sm:text-[8px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">Ext. 42</span>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">0:45 duration</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Features - Compact */}
                  <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 flex items-center">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff8633] mr-1.5 sm:mr-2" />
                      Key Features
                    </h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {[
                        { icon: Phone, text: 'VoIP & Cloud PBX' },
                        { icon: Video, text: 'Video conferencing' },
                        { icon: MessageSquare, text: 'Unified messaging' },
                        { icon: Shield, text: 'Enterprise security' },
                        { icon: BarChart3, text: 'Call analytics' }
                      ].map((feature, index) => (
                        <div 
                          key={index}
                          className="flex items-center text-gray-300 group cursor-pointer active:scale-95 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 active:translate-x-1 bg-gray-800/50 rounded-lg p-2 sm:p-2.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-[#ff8633]/20 active:bg-gray-700 touch-manipulation"
                        >
                          <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff8633] mr-1.5 sm:mr-2 flex-shrink-0 group-hover:scale-125 group-hover:rotate-3 transition-all duration-300" />
                          <span className="text-[10px] sm:text-xs font-medium group-hover:font-semibold transition-all duration-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-border {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        select {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        select:focus {
          transform: scale(1.01);
        }
        select option {
          padding: 12px;
          background: white;
          color: #1f2937;
          transition: background-color 0.2s;
        }
        select option:hover {
          background-color: #f3f4f6;
        }
        select option:checked {
          background-color: #ff8633;
          color: white;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff8633;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff6b00;
        }
      `}</style>
    </>
  );
};

export default BusinessPhoneSystemGetQuotesForm;

