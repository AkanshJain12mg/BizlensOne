import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import resultImage from '../sendresultimage.jpeg';

export const ClientDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/client');
  };
  const [showAlert, setShowAlert] = React.useState(false);

// Optional: auto-hide alert after 3 seconds
React.useEffect(() => {
  if (showAlert) {
    const timer = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }
}, [showAlert]);


  return (
    <Layout showBackButton showHomeButton onBack={handleBack}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Analysis Results
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your data analysis is complete. Your file has been downloaded.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src = {resultImage}
                alt="Data Analysis Results"
                className="w-full h-full object-cover"
              />
            </div>
           <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Analysis Summary
              </h3>

              {/* Button to show alert */}
              <button
                onClick={() => setShowAlert(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
              >
                Download Report Again
              </button>

              {/* Styled Alert Box */}
              {showAlert && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow">
                  ✔ Your report has been downloaded.
                </div>
              )}

              <p className="text-gray-600 dark:text-gray-300 mt-4">
                The analysis reveals key insights about your data patterns and trends.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};