import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const UserClientView = ({ clientId = 'A' }) => {
  const navigate = useNavigate();

  // Client data configuration
  const clientData = {
    A: {
      name: 'Client A',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This dashboard shows comprehensive analytics and insights for Client A, including performance metrics, trends, and key business indicators.'
    },
    B: {
      name: 'Client B',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Advanced analytics dashboard for Client B showcasing detailed market analysis, customer behavior patterns, and strategic business insights to drive growth and optimization.'
    },
    C: {
      name: 'Client C',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Comprehensive business intelligence platform for Client C featuring real-time data visualization, predictive analytics, and performance monitoring across all key metrics.'
    }
  };

  const currentClient = clientData[clientId] || clientData.A;

  const handleBack = () => {
    navigate('/user');
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
          </div>
        </div>
      </div>
    </Layout>
  );
};