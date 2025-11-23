"use client";

import React from "react";
import { Check, X, ExternalLink } from "lucide-react";

const CRMRecommendationsSection = ({ crmData, renderStars }) => {
  return (
    <section id="CRM-recommendations" className="mt-8">
      <div className="mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our top 11 CRM recommendations
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Unified Table Layout for All Screen Sizes */}
        <div className="bg-white rounded-2xl  border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                    CRM Platform
                  </th>
                  <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                    Expert Score
                  </th>
                  <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                    Best for
                  </th>
                  <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                    Key Features
                  </th>
                  <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                    Free Trial
                  </th>
                  <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                    Free Version
                  </th>
                  <th className="text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {crmData.map((crm, index) => (
                  <tr
                    key={crm.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="py-4 sm:py-8 px-2 sm:px-8">
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <img
                            src={crm.image}
                            alt={crm.alt}
                            className="max-w-16 max-h-8 sm:max-w-32 sm:max-h-12 object-contain"
                          />
                        </div>
                        <div className="text-center sm:text-left">
                          <span className="font-medium text-gray-800 text-xs sm:text-base">
                            {crm.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                        <span className="text-lg sm:text-2xl font-bold text-gray-800">
                          {crm.expertScore}
                        </span>
                        <div className="flex space-x-1 scale-75 sm:scale-100">
                          {renderStars(crm.expertScore)}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                      <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {crm.bestFor}
                      </span>
                    </td>
                    <td className="py-4 sm:py-8 px-2 sm:px-6">
                      <ul className="space-y-1 sm:space-y-2">
                        {crm.keyFeatures.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-gray-600 flex items-start sm:items-center"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-0"></div>
                            <span className="leading-tight sm:leading-normal">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                      <div className="flex justify-center">
                        {crm.freeTrial ? (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 sm:w-5 sm:h-5 text-orange-600" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="w-3 h-3 sm:w-5 sm:h-5 text-red-600" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                      <div className="flex justify-center">
                        {crm.freeVersion ? (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 sm:w-5 sm:h-5 text-orange-600" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="w-3 h-3 sm:w-5 sm:h-5 text-red-600" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 sm:py-8 px-2 sm:px-8">
                      <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2 mx-auto text-xs sm:text-sm">
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            * Scores and recommendations are based on expert analysis
            and user reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default CRMRecommendationsSection;

