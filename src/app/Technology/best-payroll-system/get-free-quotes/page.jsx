"use client";

import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Head from 'next/head';
import Link from 'next/link';
import { 
  CheckCircle, 
  ChevronDown, 
  DollarSign, 
  Shield, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Users, 
  Building2,
  CreditCard,
  FileText,
  Calendar,
  ArrowRight,
  Sparkles,
  Award,
  Star
} from 'lucide-react';

const PayrollGetQuotesForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    zipCode: '',
    employeeCount: '',
    payrollFrequency: '',
    currentSystem: '',
    priorityFeatures: [],
    emailUpdates: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);

  const totalSteps = 3;

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  useEffect(() => {
    document.title = "Get Payroll System Quotes | Compare-Bazaar";
  }, []);

  // Calculate form progress
  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== '' && value !== false;
    }).length;
    const totalFields = Object.keys(formData).length;
    setFormProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleCheckboxChange = (feature) => {
    setFormData({
      ...formData,
      priorityFeatures: formData.priorityFeatures.includes(feature)
        ? formData.priorityFeatures.filter(f => f !== feature)
        : [...formData.priorityFeatures, feature]
    });
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Please complete this required field.';
      if (!formData.lastName.trim()) newErrors.lastName = 'Please complete this required field.';
      if (!formData.companyName.trim()) newErrors.companyName = 'Please complete this required field.';
      if (!formData.email.trim()) {
        newErrors.email = 'Please complete this required field.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Please complete this required field.';
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'Please complete this required field.';
      } else if (!/^\d{5}$/.test(formData.zipCode)) {
        newErrors.zipCode = 'Please enter a valid 5-digit zip code.';
      }
    }
    
    if (step === 2) {
      if (!formData.employeeCount) newErrors.employeeCount = 'Please complete this required field.';
      if (!formData.payrollFrequency) newErrors.payrollFrequency = 'Please complete this required field.';
      if (!formData.currentSystem) newErrors.currentSystem = 'Please complete this required field.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateForm = () => {
    return validateStep(1) && validateStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setCurrentStep(1);
      return;
    }

    if (!captchaValue) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'payroll-system',
          captcha: captchaValue
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          zipCode: '',
          employeeCount: '',
          payrollFrequency: '',
          currentSystem: '',
          priorityFeatures: [],
          emailUpdates: false
        });
        setCurrentStep(1);
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
        setCaptchaValue(null);
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const priorityFeatures = [
    { id: 'automated-payroll', label: 'Automated Payroll Processing', icon: <Zap className="w-5 h-5" /> },
    { id: 'tax-compliance', label: 'Tax Compliance & Filing', icon: <Shield className="w-5 h-5" /> },
    { id: 'time-tracking', label: 'Time & Attendance Integration', icon: <Clock className="w-5 h-5" /> },
    { id: 'benefits', label: 'Benefits Administration', icon: <Award className="w-5 h-5" /> },
    { id: 'reporting', label: 'Advanced Reporting & Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'mobile-access', label: 'Mobile Access & Employee Self-Service', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <>
      <Head>
        <title>Get Payroll System Quotes | Compare-Bazaar</title>
        <meta name="description" content="Get free quotes from top payroll system providers. Compare features, pricing, and find the perfect payroll solution for your business." />
        <link rel="canonical" href="https://www.compare-bazaar.com/Technology/best-payroll-system/get-free-quotes" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#ff8633] to-orange-600 text-white py-8 sm:py-12 shadow-lg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
                Get Free Payroll System Quotes
              </h1>
              <p className="text-lg sm:text-xl text-center text-orange-50 max-w-2xl mx-auto">
                Compare top payroll solutions. Get matched with providers that fit your business needs in minutes.
              </p>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: <Star className="w-6 h-6" />, text: 'Top-Rated Providers', color: 'from-yellow-400 to-orange-500' },
                { icon: <Shield className="w-6 h-6" />, text: 'Secure & Compliant', color: 'from-blue-400 to-blue-600' },
                { icon: <Zap className="w-6 h-6" />, text: 'Fast Matching', color: 'from-purple-400 to-purple-600' }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.color} text-white mb-3`}>
                    {benefit.icon}
                  </div>
                  <p className="font-semibold text-gray-800">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Form Container */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Progress Bar */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Form Progress</span>
                  <span className="text-sm font-semibold text-[#ff8633]">{formProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#ff8633] to-orange-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${formProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-3">
                  {[1, 2, 3].map((step) => (
                    <div 
                      key={step}
                      className={`flex items-center gap-2 ${currentStep >= step ? 'text-[#ff8633]' : 'text-gray-400'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        currentStep >= step 
                          ? 'bg-[#ff8633] text-white' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {step}
                      </div>
                      <span className="hidden sm:inline text-xs font-medium">
                        {step === 1 ? 'Contact Info' : step === 2 ? 'Business Details' : 'Preferences'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {showSuccess ? (
                <div className="p-8 sm:p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
                    Your request has been submitted successfully. Our team will contact you shortly with personalized quotes.
                  </p>
                  <Link
                    href="/Technology/best-payroll-system"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff8633] hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Return to Payroll Systems
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-12">
                  {/* Step 1: Contact Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
                        <p className="text-gray-600">Let's start with your basic details</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                              errors.firstName 
                                ? 'border-red-500 focus:border-red-500' 
                                : focusedField === 'firstName'
                                ? 'border-[#ff8633] ring-4 ring-orange-100'
                                : 'border-gray-300 focus:border-[#ff8633]'
                            } focus:outline-none`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                              errors.lastName 
                                ? 'border-red-500 focus:border-red-500' 
                                : focusedField === 'lastName'
                                ? 'border-[#ff8633] ring-4 ring-orange-100'
                                : 'border-gray-300 focus:border-[#ff8633]'
                            } focus:outline-none`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('companyName')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                            errors.companyName 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'companyName'
                              ? 'border-[#ff8633] ring-4 ring-orange-100'
                              : 'border-gray-300 focus:border-[#ff8633]'
                          } focus:outline-none`}
                          placeholder="Your Company Inc."
                        />
                        {errors.companyName && (
                          <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                            errors.email 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'email'
                              ? 'border-[#ff8633] ring-4 ring-orange-100'
                              : 'border-gray-300 focus:border-[#ff8633]'
                          } focus:outline-none`}
                          placeholder="john.doe@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('phoneNumber')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                              errors.phoneNumber 
                                ? 'border-red-500 focus:border-red-500' 
                                : focusedField === 'phoneNumber'
                                ? 'border-[#ff8633] ring-4 ring-orange-100'
                                : 'border-gray-300 focus:border-[#ff8633]'
                            } focus:outline-none`}
                            placeholder="(555) 123-4567"
                          />
                          {errors.phoneNumber && (
                            <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Zip Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('zipCode')}
                            onBlur={() => setFocusedField(null)}
                            maxLength="5"
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                              errors.zipCode 
                                ? 'border-red-500 focus:border-red-500' 
                                : focusedField === 'zipCode'
                                ? 'border-[#ff8633] ring-4 ring-orange-100'
                                : 'border-gray-300 focus:border-[#ff8633]'
                            } focus:outline-none`}
                            placeholder="12345"
                          />
                          {errors.zipCode && (
                            <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-8 py-3 bg-gradient-to-r from-[#ff8633] to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                          Next Step
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Business Details</h2>
                        <p className="text-gray-600">Tell us about your payroll needs</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Number of Employees <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="employeeCount"
                          value={formData.employeeCount}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('employeeCount')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                            errors.employeeCount 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'employeeCount'
                              ? 'border-[#ff8633] ring-4 ring-orange-100'
                              : 'border-gray-300 focus:border-[#ff8633]'
                          } focus:outline-none bg-white`}
                        >
                          <option value="">Select employee count</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                        {errors.employeeCount && (
                          <p className="mt-1 text-sm text-red-500">{errors.employeeCount}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Payroll Frequency <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="payrollFrequency"
                          value={formData.payrollFrequency}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('payrollFrequency')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                            errors.payrollFrequency 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'payrollFrequency'
                              ? 'border-[#ff8633] ring-4 ring-orange-100'
                              : 'border-gray-300 focus:border-[#ff8633]'
                          } focus:outline-none bg-white`}
                        >
                          <option value="">Select payroll frequency</option>
                          <option value="weekly">Weekly</option>
                          <option value="bi-weekly">Bi-weekly</option>
                          <option value="semi-monthly">Semi-monthly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                        {errors.payrollFrequency && (
                          <p className="mt-1 text-sm text-red-500">{errors.payrollFrequency}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Current Payroll System <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="currentSystem"
                          value={formData.currentSystem}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('currentSystem')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                            errors.currentSystem 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'currentSystem'
                              ? 'border-[#ff8633] ring-4 ring-orange-100'
                              : 'border-gray-300 focus:border-[#ff8633]'
                          } focus:outline-none bg-white`}
                        >
                          <option value="">Select current system</option>
                          <option value="manual">Manual/Spreadsheet</option>
                          <option value="existing-software">Existing Payroll Software</option>
                          <option value="accountant">Outsourced to Accountant</option>
                          <option value="none">No current system</option>
                        </select>
                        {errors.currentSystem && (
                          <p className="mt-1 text-sm text-red-500">{errors.currentSystem}</p>
                        )}
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-8 py-3 bg-gradient-to-r from-[#ff8633] to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                          Next Step
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Priority Features</h2>
                        <p className="text-gray-600">Select the features that matter most to your business</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {priorityFeatures.map((feature) => (
                          <label
                            key={feature.id}
                            className={`relative flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.priorityFeatures.includes(feature.id)
                                ? 'border-[#ff8633] bg-orange-50 shadow-md'
                                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.priorityFeatures.includes(feature.id)}
                              onChange={() => handleCheckboxChange(feature.id)}
                              className="sr-only"
                            />
                            <div className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mr-3 mt-0.5 ${
                              formData.priorityFeatures.includes(feature.id)
                                ? 'border-[#ff8633] bg-[#ff8633]'
                                : 'border-gray-300'
                            }`}>
                              {formData.priorityFeatures.includes(feature.id) && (
                                <CheckCircle className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className={`inline-flex p-2 rounded-lg mb-2 ${
                                formData.priorityFeatures.includes(feature.id)
                                  ? 'bg-[#ff8633] text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {feature.icon}
                              </div>
                              <p className={`font-medium ${
                                formData.priorityFeatures.includes(feature.id)
                                  ? 'text-gray-900'
                                  : 'text-gray-700'
                              }`}>
                                {feature.label}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <input
                          type="checkbox"
                          name="emailUpdates"
                          checked={formData.emailUpdates}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-[#ff8633] border-gray-300 rounded focus:ring-[#ff8633]"
                        />
                        <label className="text-sm text-gray-700">
                          I'd like to receive email updates about payroll solutions and best practices.
                        </label>
                      </div>

                      {/* CAPTCHA */}
                      <div className="pt-4">
                        <ReCAPTCHA
                          ref={captchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                          onChange={(value) => setCaptchaValue(value)}
                          className="flex justify-center"
                        />
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
                        >
                          Previous
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !captchaValue}
                          className="px-8 py-3 bg-gradient-to-r from-[#ff8633] to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Get Free Quotes
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default PayrollGetQuotesForm;

