"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, ExternalLink } from "lucide-react";

const CRMProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
      <div className="p-6 md:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={product.image}
                alt={product.alt}
                width={80}
                height={80}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                priority
              />
            </div>

            {/* Title and Review Link */}
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {product.title}
              </h1>
              <Link
                href={product.reviewLink || "/reviews/zoho-projects"}
                className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
              >
                Leave a Review
              </Link>
            </div>
          </div>

          {/* Compare Button */}
          <div className="flex-shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
              Compare
            </button>
          </div>
        </div>

        {/* Good For Section */}
        {product.goodFor && (
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
              <span className="font-semibold text-gray-700">Good for:</span>
              <div className="flex flex-wrap items-center gap-1">
                {product.goodFor.map((item, idx) => (
                  <span key={idx} className="text-gray-600">
                    {item}
                    {idx < product.goodFor.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Description Section */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            {product.description}
          </p>

          {product.learnMoreLink && (
            <Link
              href={product.learnMoreLink}
              className="text-sm sm:text-base md:text-lg text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-semibold"
            >
              Learn More About {product.title}
            </Link>
          )}
        </div>

        {/* Visit Website Button */}
        <div className="flex justify-end">
          <Link
            href={product.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
          >
            Visit Website
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CRMProductCard;

