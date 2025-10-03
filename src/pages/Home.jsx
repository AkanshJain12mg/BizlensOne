import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Eye } from 'lucide-react';
import { Layout } from '../components/Layout';

export const Home = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Bizlens
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We empower retailers, brands, and local businesses with smart QR-based solutions that simplify product tracking, enhance customer engagement, and unlock real-time insights. With a focus on accessibility and efficiency, BizLens bridges the gap between physical products and digital experiences—helping businesses scale smarter, serve better, and stay ahead in a fast-moving market.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Start Analyzing Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Data Analysis"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Upload your data files and get comprehensive analysis with powerful insights.
              </p>
              <Link
                to="/client"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Start Analyzing
              </Link>
            </div>
          </div>

          {/* Get Insights Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business Insights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Business Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access detailed insights and dashboards from client data analysis.
              </p>
              <Link
                to="/user"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 group"
              >
                <Eye className="w-5 h-5 mr-2" />
                Get Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};