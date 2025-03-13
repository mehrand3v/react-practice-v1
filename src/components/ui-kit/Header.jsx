import React from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  const location = useLocation();

  // Function to get the current page title based on the path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Dashboard";

    // Remove the leading slash and capitalize the first letter
    const title = path.substring(1);
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="mr-2 md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu size={24} className="text-gray-500 dark:text-gray-400" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {getPageTitle()}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Add any header icons/actions here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
