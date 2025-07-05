import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, Heart } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const Catalogue = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'size') {
      const sizeOrder = { 'A1': 1, 'A2': 2, 'A3': 3, 'A4': 4 };
      filtered = [...filtered].sort((a, b) => sizeOrder[a.size as keyof typeof sizeOrder] - sizeOrder[b.size as keyof typeof sizeOrder]);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, sortBy, products]);

  const sortOptions = [
    { label: 'Default', value: '' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Name: A to Z', value: 'name' },
    { label: 'Size: A1 to A4', value: 'size' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Product Catalogue
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Discover our collection of handcrafted mandalas, each piece uniquely designed to bring peace and beauty to your space
            </p>
          </motion.div>

          {/* Size Reference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Size Reference Guide</h3>
            <div className="flex justify-center items-end gap-8">
              <div className="text-center">
                <div className="w-8 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm mb-2 mx-auto"></div>
                <span className="text-sm font-medium text-gray-700">A4</span>
                <div className="text-xs text-gray-500">21×30cm</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm mb-2 mx-auto"></div>
                <span className="text-sm font-medium text-gray-700">A3</span>
                <div className="text-xs text-gray-500">30×42cm</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-18 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm mb-2 mx-auto"></div>
                <span className="text-sm font-medium text-gray-700">A2</span>
                <div className="text-xs text-gray-500">42×59cm</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm mb-2 mx-auto"></div>
                <span className="text-sm font-medium text-gray-700">A1</span>
                <div className="text-xs text-gray-500">59×84cm</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Sort */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search mandalas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                        <Eye className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.availability 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.availability ? 'Available' : 'Sold Out'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">
                      {product.size}
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg">
                      {product.medium}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or sort criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 font-light">
              I create custom mandalas tailored to your vision, space, and spiritual needs. 
              Let's collaborate to bring your unique mandala to life.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Request Custom Mandala
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;