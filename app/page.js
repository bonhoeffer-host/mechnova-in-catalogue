"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FiCalendar, FiExternalLink } from 'react-icons/fi';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [catalogs, setCatalogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function fetchCatalogs() {
      const res = await fetch("/api/catalogs");
      const data = await res.json();
      setCatalogs(data.catalog);
      setFiltered(data.catalog);
    }
    fetchCatalogs();
  }, []);

  useEffect(() => {
    setFiltered(
      catalogs.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, catalogs]);

  return (
    <div className="min-h-screen bg-[#E6F2FB]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mechnova Machines <span className="text-[#0072ce]">Catalogs</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Browse and explore our comprehensive collection of catalogs.
            <br/>
            Find detailed information about our products and services.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SearchBar searchTerm={search} onSearchChange={setSearch} />
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-sm text-gray-600 text-center">
            {search.length === 0 ? '' : 
             filtered.length === 1 ? `1 catalog found for "${search}"` : `${filtered.length} catalogs found for "${search}"`}
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-7xl mx-auto pb-10">
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No catalogs found.</div>
        )}
        {filtered.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white flex flex-col justify-between rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-blue-100"
          >
            {/* Thumbnail Section */}
            <div className="bg-white overflow-hidden">
              <img
                src={`/pages/${cat.slug}/${cat.slug}_1.webp`}
                alt={cat.title}
                className="object-cover transition-transform duration-300 hover:scale-110 w-full"
              />
            </div>

            {/* Content Section */}
            <div className="px-3 py-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0072ce] transition-colors duration-200">
                {cat.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <FiCalendar className="h-4 w-4 mr-2" />
                <span><strong>Published: </strong>{cat.date}</span>
              </div>
            </div>

            <div className="px-4 pb-4">
              <a href={`/catalog/${cat.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0072ce] text-white font-semibold py-3 px-4 rounded-full hover:bg-[#005ba3] transition-all duration-200 flex items-center justify-center space-x-2 text-lg shadow cursor-pointer"
                >
                  <span>View Catalog</span>
                  <FiExternalLink className="h-4 w-4" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
