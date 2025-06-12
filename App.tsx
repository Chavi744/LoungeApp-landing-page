
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 text-gray-100 antialiased font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Audience />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
