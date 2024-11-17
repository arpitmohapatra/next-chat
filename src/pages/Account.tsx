import React from 'react';
import { useAuthStore } from '../lib/store';
import { User, Mail, Calendar, MapPin } from 'lucide-react';

const Account = () => {
  const user = useAuthStore(state => state.user);

  return (
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <User size={48} className="text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Account Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <User className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-medium">January 2024</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;