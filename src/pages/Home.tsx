import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <MessageSquare className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to the Dashboard
          </h1>
          <p className="text-gray-600 mb-8">
            Click on chat in menu to start chatting and discover relevant articles
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Go to Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;