import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../lib/store';
import { Home, MessageSquare, BarChart2, User, LogOut, Command } from 'lucide-react';

const Sidebar = () => {
  const logout = useAuthStore(state => state.logout);

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Command className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">Dashboard</span>
      </div>
      
      <nav className="flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`
          }
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`
          }
        >
          <MessageSquare size={20} />
          <span>Chat</span>
        </NavLink>
        
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`
          }
        >
          <BarChart2 size={20} />
          <span>Analytics</span>
        </NavLink>
        
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`
          }
        >
          <User size={20} />
          <span>Account</span>
        </NavLink>
      </nav>
      
      <button
        onClick={logout}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition-colors mt-auto"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;