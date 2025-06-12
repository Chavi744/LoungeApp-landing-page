
import React from 'react';
import { PlaneIcon, LockIcon, UsersIcon, ShieldCheckIcon } from './Icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-sky-500 text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <PlaneIcon className="w-8 h-8" />,
      title: "Dedicated Travel Solutions",
      description: "Tailored itineraries, preferred rates, and services for diamond trading hubs and global exhibitions. Fly and stay with confidence."
    },
    {
      icon: <LockIcon className="w-8 h-8" />,
      title: "Centralized & Secure Platform",
      description: "All your business travel needs in one encrypted, discreet environment. Manage bookings and sensitive information with peace of mind."
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Exclusive Professional Network",
      description: "Connect with fellow diamond traders, industry experts, and service providers within a trusted community on the go."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Uncompromised Discretion",
      description: "Your privacy and security are paramount. We ensure maximum discretion for all your travel arrangements and communications."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-sky-400">LoungeApp?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience a travel platform built from the ground up to meet the unique demands of the global diamond industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
