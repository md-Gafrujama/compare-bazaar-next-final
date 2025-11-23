"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const CRMWhatIsSection = () => {
  return (
    <>
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
              The processes and systems that help improve a business's
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
                Any Company Size
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">Core Features</div>
              <div className="font-medium text-gray-900">
                Pipeline Management, Sales Automation, Reporting
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
    </>
  );
};

export default CRMWhatIsSection;

