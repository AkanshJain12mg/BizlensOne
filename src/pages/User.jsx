import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Layout } from '../components/Layout';

export const User = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const clients = ['Client A'];

  const handleSubmit = () => {
    if (selectedClient === 'Client A') {
      navigate('/user/viewclientA');
    }
  };

  return (
    <Layout showHomeButton>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Dashboard Access
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Select a client to view their analysis dashboard
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <div className="space-y-6">
            {/* Client Dropdown */}
            <div>
              <label htmlFor="client-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Client *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className={selectedClient ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}>
                    {selectedClient || 'Choose a client...'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                    {clients.map((client) => (
                      <button
                        key={client}
                        onClick={() => {
                          setSelectedClient(client);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white first:rounded-t-lg last:rounded-b-lg"
                      >
                        {client}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!selectedClient}
              className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
                selectedClient
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};