
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section 
      id="join" 
      className="py-20 bg-cover bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/loungeappcta/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-sky-700/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Join the Exclusive Circle
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Elevate your business travel. Register your interest to be among the first to experience LoungeApp and gain access to a world of curated travel solutions.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your business email" 
            className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:ring-2 focus:ring-sky-300 focus:outline-none shadow-lg"
            aria-label="Business email for registration"
          />
          <button 
            type="submit" 
            className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            Register Interest
          </button>
        </form>
        <p className="text-sm text-gray-300 mt-6">
          Access is subject to verification of membership in recognized diamond exchanges or industry affiliation.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
