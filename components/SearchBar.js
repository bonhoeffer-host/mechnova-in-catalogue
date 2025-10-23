'use client';

import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Search catalogs..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0072ce] focus:border-[#0072ce] bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0072ce] transition-colors duration-200"
          >
            <FiX className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
