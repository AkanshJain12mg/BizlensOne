import React from 'react';
import { Header } from './Header';

export const Layout = ({ 
  children, 
  showBackButton, 
  showHomeButton, 
  onBack 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        showBackButton={showBackButton} 
        showHomeButton={showHomeButton} 
        onBack={onBack} 
      />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Made by <span className="font-semibold text-blue-600 dark:text-blue-400">Bizlens</span>
          </p>
        </div>
      </footer>
    </div>
  );
};