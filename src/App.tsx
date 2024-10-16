import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <About />
      <AIAssistant />
      <AIChat />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;