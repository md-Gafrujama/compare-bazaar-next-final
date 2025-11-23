"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, ExternalLink, Search, Filter, Clock, Users } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CRMFindNewSoftwareSection = ({
  searchTerm,
  setSearchTerm,
  productSearch,
  setProductSearch,
  filterBy,
  setFilterBy,
  sortBy,
  setSortBy,
  itemsPerPage,
  setItemsPerPage,
}) => {
  return (
    <>
      {/* find your product management software */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 p-6 sm:p-8 transition-shadow duration-300 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Find your new project management software
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect tool to streamline your workflow and
            boost productivity
          </p>
        </div>

        {/* Filter Products & Search Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filter Products */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Filter Products
                </h3>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            </div>

            {/* Products Search */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <Search className="w-4 h-4 text-orange-600" />
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Search Products
                </h3>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search product name"
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md text-lg"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-500 p-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Filter by */}
          <div className="group">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-4 h-4 text-yellow-500" />
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Filter by
              </h3>
            </div>
            <div className="relative">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
              >
                <option>Reviews</option>
                <option>Pricing</option>
                <option>Company Size</option>
                <option>Features</option>
                <option>Industry</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Sort by */}
          <div className="group">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-purple-500" />
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Sort by
              </h3>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
              >
                <option>Featured</option>
                <option>Most Reviews</option>
                <option>Highest Rated</option>
                <option>Lowest Price</option>
                <option>Most Popular</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Items per page */}
          <div className="group">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-indigo-500" />
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Items per page
              </h3>
            </div>
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
              >
                <option>10 per page</option>
                <option>25 per page</option>
                <option>50 per page</option>
                <option>100 per page</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      {/* Product Details Section */}
      <section id="new-CRM-software" className="mt-8">
        {/* This section contains all the individual product cards */}
        {/* Products like 1CRM, 4Degrees, etc. will be rendered here */}
        {/* Due to length, individual product cards should be extracted to separate components */}
      </section>
    </>
  );
};

export default CRMFindNewSoftwareSection;

