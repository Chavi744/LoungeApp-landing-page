
import React from 'react';
import { DiamondIcon, BuildingOfficeIcon, UsersIcon } from './Icons'; // Assuming UsersIcon can be reused or a specific one for "Travel Agents"

interface AudienceItemProps {
  icon: React.ReactNode;
  text: string;
}

const AudienceItem: React.FC<AudienceItemProps> = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition-colors">
    <div className="text-sky-400 mb-4">{icon}</div>
    <p className="text-gray-300 font-medium">{text}</p>
  </div>
);

const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Built for the Elite of the <span className="text-sky-400">Diamond Industry</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            LoungeApp caters to the specific needs of professionals operating within the high-stakes world of diamond trading and luxury goods.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AudienceItem 
            icon={<DiamondIcon className="w-12 h-12" />} 
            text="Members of Official Diamond Exchanges (Antwerp, Ramat Gan, Mumbai, Dubai, etc.)" 
          />
          <AudienceItem 
            icon={<BuildingOfficeIcon className="w-12 h-12" />} 
            text="Participants in Diamond & Jewelry Exhibitions (Visitors and Exhibitors)" 
          />
          <AudienceItem 
            icon={<UsersIcon className="w-12 h-12" />} 
            text="Travel Agents Specializing in the Diamond Sector" 
          />
          <AudienceItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.923-2.197.923-3.417A6.98 6.98 0 006.977 1.722c-2.307 0-4.407.836-6.002 2.253A6.984 6.984 0 00.975 9.75c0 1.22.395 2.381.923 3.417l2.496 3.03M11.42 15.17L15.17 11.42" />
          </svg>
            } 
            text="Service Providers to the Diamond Industry (Logistics, Security, Insurance)" 
          />
        </div>
      </div>
    </section>
  );
};

export default Audience;
