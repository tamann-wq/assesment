import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductsDetails() {
  const { productId } = useParams();
  const product = useSelector(state => 
    state.products.items.find(p => p.id === parseInt(productId))
  );

  if (!product) return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
        <Link 
          to="/products" 
          className="text-blue-600 hover:underline transition-colors duration-200"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div 
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="md:w-1/3"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {product.rating} ★
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span>Brand: {product.brand}</span>
                <span className="mx-2">•</span>
                <span>Stock: {product.stock}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          className="md:w-2/3"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                {product.category}
              </span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mt-8">
              <Link 
                to="/products" 
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Products
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}