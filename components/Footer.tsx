
import React from 'react';
import { DiamondIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="flex items-center space-x-2 text-xl font-bold text-sky-400 mb-4">
              <DiamondIcon className="w-7 h-7" />
              <span>LoungeApp</span>
            </a>
            <p className="text-sm">
              Exclusive travel solutions for the global diamond industry. Security, discretion, and community at your fingertips.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-sky-400 transition-colors">Features</a></li>
              <li><a href="#audience" className="hover:text-sky-400 transition-colors">Target Audience</a></li>
              <li><a href="#join" className="hover:text-sky-400 transition-colors">Request Access</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-gray-200 mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LoungeApp. All Rights Reserved. Designed for the diamond trade.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
