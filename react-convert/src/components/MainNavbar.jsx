import React, { useState } from 'react';

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About Us",
    "Areas of Work",
    "Products & Solutions",
    "Our Platform",
    "Ecosystem",
    "Resources"
  ];

  return (
    <nav className="bg-white py-4 relative z-40 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-between">
      
        <a href="#" className="flex-shrink-0">
          <img src="/public/logo.png" width="120" alt="Logo" />
        </a>

        <button 
          className="lg:hidden block p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-[#1F2A5A] relative before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-[#1F2A5A] before:-top-2 before:left-0 after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-[#1F2A5A] after:top-2 after:left-0"></div>
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto lg:items-center mt-4 lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row lg:gap-8 items-start lg:items-center w-full">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full lg:w-auto py-2 lg:py-0 relative group">
                <a className="font-medium text-black cursor-pointer hover:text-[#A7D6D9] transition-colors flex items-center justify-between lg:justify-start">
                  {link}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="text-[#4CAF50] ml-1 lg:ml-2" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                </a>
              </li>
            ))}

            <li className="py-2 lg:py-0 lg:ml-4">
              <span className="text-lg cursor-pointer hover:opacity-80">🔍</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
