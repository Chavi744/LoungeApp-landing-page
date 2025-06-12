
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative py-20 md:py-32 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/loungeapphero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          <span className="block">LoungeApp: Exclusive Travel</span>
          <span className="block text-sky-400">for the World of Diamonds</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Seamlessly book flights, hotels, and bespoke services tailored for diamond professionals. Experience unparalleled security, discretion, and an exclusive community.
        </p>
        <a 
          href="#join" 
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Request Access
        </a>
      </div>
    </section>
  );
};

export default Hero;
