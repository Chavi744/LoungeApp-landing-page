
import React from 'react';
import { DiamondIcon } from './Icons';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900/70 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
          <DiamondIcon className="w-8 h-8" />
          <span>LoungeApp</span>
        </a>
        <div className="space-x-4">
          <a href="#features" className="text-gray-300 hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</a>
          <a href="#audience" className="text-gray-300 hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Audience</a>
          <a href="#join" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-md hover:shadow-lg">
            Request Access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
