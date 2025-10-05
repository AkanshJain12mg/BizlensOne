import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Eye, Clock, Monitor, LineChart } from 'lucide-react';
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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {/* Data Analysis Card */}
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

          {/* Business Insights Card */}
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

        {/* Section 1: What Experts Can Do */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Bizlens Experts Can Do for You
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Get Answers in Real Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We set up smart natural language querying so you can easily ask questions and get instant data insights.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
              <Monitor className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Visualize Your Enterprise Data
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bring all business data together — from third-party tools, IoT sensors, and internal databases — in one unified dashboard.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
              <LineChart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Advanced Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With AI-powered analytics and R/Python integration, unlock deeper insights and data-driven decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Capabilities and Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Capabilities and Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Employee eXperience (DEX) Reporting',
                desc: 'Measure and improve employee experience, enabling data-driven decisions and workplace satisfaction.',
              },
              {
                title: 'AI-powered Employee eXperience',
                desc: 'A conversational AI platform to automate tasks and enhance satisfaction across business functions.',
              },
              {
                title: 'Continuous Compliance and Policy Enforcement',
                desc: 'Maintain compliance with benchmarks and regulations using automated monitoring.',
              },
              {
                title: 'Intelligent Automation',
                desc: 'Leverage a vast automation library for OS and apps to enhance productivity and minimize errors.',
              },
              {
                title: 'Manage Workspace Lifecycle',
                desc: 'Automate workspace provisioning, patching, and remote control for optimal efficiency.',
              },
              {
                title: 'Out-of-the-Box Patch Content',
                desc: 'Ready-to-use patch content for OS and third-party apps, ensuring continuous security updates.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

