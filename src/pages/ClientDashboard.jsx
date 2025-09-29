import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const ClientDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/client');
  };

  return (
    <Layout showBackButton showHomeButton onBack={handleBack}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Analysis Results
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your data analysis is complete. Here are the results:
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Data Analysis Results"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Analysis Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. The analysis reveals key insights 
                about your data patterns and trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};