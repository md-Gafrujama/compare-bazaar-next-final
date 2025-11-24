// components/FAQ.js
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = ({ faqsData }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="faqs" className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-none">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3 md:mb-4">
            Frequently Asked Questions (FAQ)
          </h1>
          <div className="w-20 sm:w-24 md:w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          {faqsData.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-200 last:border-b-0 transition-all duration-200 ${
                openItems[index] ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-start sm:items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                aria-expanded={openItems[index]}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed pr-2 sm:pr-4">
                  {item.question}
                </h3>

                {/* Plus/Minus Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm ${
                    openItems[index]
                      ? "bg-orange-600 hover:bg-orange-700 rotate-0"
                      : "bg-orange-500 hover:bg-orange-600 rotate-0"
                  }`}
                >
                  {openItems[index] ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;