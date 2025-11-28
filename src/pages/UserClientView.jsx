// 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';

// ✅ Import your local image
import dashboardImage from '../dashboard.png';
import threadupdashboard from '../mounjidashboard.jpeg'
import mounjidashboard from '../mounjidashboard.jpeg'

export const UserClientView = ({ clientId = 'ByeWind' }) => {
  const navigate = useNavigate();

  // Client data configuration
  const clientData = {
    ByeWind: {
      name: 'ByeWind',
      image: dashboardImage, // <-- using local image
      description:
        `This dashboard shows comprehensive analytics and insights for ${clientId}, including performance metrics, trends, and key business indicators.`,
    },
    ThreadUp: {
      name: 'ThreadUp',
      image:  threadupdashboard, // <-- using local image
      description:
        `This dashboard shows comprehensive analytics and insights for ${clientId}, including performance metrics, trends, and key business indicators.`,
    },
    Mounji: {
      name: 'Mounji',
      image: mounjidashboard, // <-- using local image
      description:
        `This dashboard shows comprehensive analytics and insights for ${clientId}, including performance metrics, trends, and key business indicators.`,
    },
  };

  const currentClient = clientData[clientId] || clientData.ByeWind;

  const handleBack = () => {
    navigate('/user');
  };

  const handleViewDashboard = () => {
    window.location.href =
      'https://enterprise-dashboard-eqmx3xdse-lassiecoders-projects.vercel.app/overview';
  };

  return (
    <Layout showBackButton showHomeButton onBack={handleBack}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {currentClient.name} Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive insights and analytics for {currentClient.name}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={currentClient.image}
                alt={`${currentClient.name} Analytics Dashboard`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Dashboard Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {currentClient.description}
              </p>
            </div>

            {/* View Dashboard Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleViewDashboard}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
