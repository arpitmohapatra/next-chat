import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../lib/store";
import {
  Home,
  MessageSquare,
  BarChart2,
  User,
  LogOut,
  Command,
} from "lucide-react";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div
      className={`h-screen transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      } bg-gray-900 text-white p-6 flex flex-col`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        className="flex items-center gap-2 mb-8 overflow-hidden cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <Command className="h-8 w-8 text-blue-400 flex-shrink-0" />
        <span
          className={`text-xl font-bold whitespace-nowrap ${
            !expanded && "hidden"
          }`}
        >
          Dashboard
        </span>
      </div>

      <nav className="flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-blue-600" : "hover:bg-gray-800"
            }`
          }
        >
          <Home size={20} className="flex-shrink-0" />
          <span className={`whitespace-nowrap ${!expanded && "hidden"}`}>
            Home
          </span>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-blue-600" : "hover:bg-gray-800"
            }`
          }
        >
          <MessageSquare size={20} className="flex-shrink-0" />
          <span className={`whitespace-nowrap ${!expanded && "hidden"}`}>
            Chat
          </span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-blue-600" : "hover:bg-gray-800"
            }`
          }
        >
          <BarChart2 size={20} className="flex-shrink-0" />
          <span className={`whitespace-nowrap ${!expanded && "hidden"}`}>
            Analytics
          </span>
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-blue-600" : "hover:bg-gray-800"
            }`
          }
        >
          <User size={20} className="flex-shrink-0" />
          <span className={`whitespace-nowrap ${!expanded && "hidden"}`}>
            Account
          </span>
        </NavLink>
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition-colors mt-auto"
      >
        <LogOut size={20} className="flex-shrink-0" />
        <span className={`whitespace-nowrap ${!expanded && "hidden"}`}>
          Logout
        </span>
      </button>
    </div>
  );
};

export default Sidebar;
