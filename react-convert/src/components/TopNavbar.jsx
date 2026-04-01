import React, { useState } from 'react';

const TopNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#e6f4ff] py-2 text-[14px]">
      <div className="container mx-auto px-4 max-w-7xl flex justify-end gap-6">
        <div className="text-[#2F80ED] font-semibold cursor-pointer hover:text-[#1366d6] hover:underline transition-colors">
          Events
        </div>
        <div className="text-[#2F80ED] font-semibold cursor-pointer hover:text-[#1366d6] hover:underline transition-colors">
          Contact Us
        </div>

        <div className="relative">
          <span 
            className="text-[#2F80ED] font-semibold cursor-pointer hover:text-[#1366d6] hover:underline transition-colors flex items-center gap-1"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Language
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="text-[#4CAF50]" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </span>
          {dropdownOpen && (
            <ul className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
              <li><button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button></li>
              <li><button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hindi</button></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
