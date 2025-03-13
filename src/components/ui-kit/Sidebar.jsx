import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  BarChart2,
  Package,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

const defaultNavItems = [
  { name: "Dashboard", path: "/", icon: <Home size={20} /> },
  { name: "Customers", path: "/customers", icon: <Users size={20} /> },
  { name: "Sales", path: "/sales", icon: <BarChart2 size={20} /> },
  { name: "Products", path: "/products", icon: <Package size={20} /> },
  { name: "Orders", path: "/orders", icon: <ShoppingCart size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-center mb-5 p-2">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Business Manager
          </h1>
        </div>

        {/* Navigation Items */}
        <ul className="space-y-2 font-medium">
          {defaultNavItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                  location.pathname === item.path
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                } group`}
              >
                <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  {item.icon}
                </span>
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile Section - At the bottom */}
        <div
          className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700"
          ref={dropdownRef}
        >
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  UN
                </span>
              </div>
              <div className="ml-3 flex-grow">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  User Name
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  user@example.com
                </p>
              </div>
            </button>

            {/* Profile Dropdown */}
            {profileDropdownOpen && (
              <div className="absolute bottom-full mb-2 left-0 w-full bg-white dark:bg-gray-700 rounded-md shadow-lg py-1">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => {
                    /* Handle sign out logic */
                  }}
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
