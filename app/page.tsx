import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
            Site Intro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Amplify Your Online Presence and Discover Unique Websites
          </p>
        </div>

        {/* What is Site Intro */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            What is Site Intro?
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Site Intro is a revolutionary platform designed to help website owners showcase their digital creations, expand their audience, and connect with potential users or customers.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-700 mb-2">Visibility</h3>
              <p className="text-gray-600">Get discovered by a global audience interested in unique websites.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-700 mb-2">Networking</h3>
              <p className="text-gray-600">Connect with other website creators and potential collaborators.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-700 mb-2">Growth</h3>
              <p className="text-gray-600">Increase traffic and engagement for your website.</p>
            </div>
          </div>
        </div>

        {/* How to Submit */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            How to Submit Your Website
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-4 text-2xl font-bold text-green-600">1</span>
              <p className="text-gray-700">Create a compelling profile that highlights your website's unique value proposition.</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-2xl font-bold text-green-600">2</span>
              <p className="text-gray-700">Provide key details including website URL, description, target audience, and key features.</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-2xl font-bold text-green-600">3</span>
              <p className="text-gray-700">Our team will review and feature your site in our curated collection.</p>
            </div>
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4"
            >
              Submit Your Website
            </button>
          </div>
        </div>

        {/* New Sites on Site Intro */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            New Sites on Site Intro
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-blue-800">Randzy</h3>
              <p className="text-gray-600 mb-2">
                An innovative platform connecting website creators and explorers.
              </p>
              <Link 
                href="https://www.randzy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Randzy.com
              </Link>
            </div>
            {/* Add more new sites here in future */}
            <div className="bg-white p-4 rounded-lg shadow-md opacity-50 flex items-center justify-center">
              <p className="text-gray-500">More sites coming soon!</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t pt-4 text-sm text-gray-500">
          <p>Launched: January 11, 2025</p>
        </div>
      </div>
    </div>
  );
}
