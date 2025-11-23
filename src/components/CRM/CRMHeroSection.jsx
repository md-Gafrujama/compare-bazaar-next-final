"use client";

import React, { useState } from "react";
import PhoneSystemCardCommon from "../PhoneSystemCardCommon";

const CRMHeroSection = ({ systems, createRipple, onCompareQuotesClick }) => {
  const [showMore, setShowMore] = useState(false);

  const additionalText =
    "Business communication has come a long way, with VoIP (Voice over Internet Protocol) systems now replacing traditional PBX setups in many organizations. Today's business phone systems come with cutting-edge features like AI-powered voicemail transcription, smart call routing, CRM integration, and detailed analytics dashboards. These tools enable businesses to track key performance metrics, enhance customer satisfaction, and optimize communication workflows. When choosing a provider, it's crucial to consider factors such as scalability, reliability, security, and the total cost of ownership. Many modern systems now offer unified communications, merging voice, video, messaging, and collaboration tools into one seamless platform.";

  return (
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
          your business. That's why we suggest using the{" "}
          <span className="text-orange-500 font-semibold">
            best CRM software
          </span>
          —designed to work effortlessly with today's VoIP systems. With
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
          essential. While startups may start with a simple phone system, it's
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
            onCompareQuotesClick={onCompareQuotesClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CRMHeroSection;

