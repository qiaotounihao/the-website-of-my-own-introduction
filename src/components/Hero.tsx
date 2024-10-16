import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 animate-pulse">
            Hello, I'm <span className="font-extrabold">Yesterday</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed">
            I'm a <span className="text-cyan-400 font-semibold">marketing enthusiast</span> with experience in 
            <span className="text-pink-400 font-semibold"> social media management</span> and 
            <span className="text-yellow-400 font-semibold"> content creation</span>. My focus is on developing 
            <span className="text-green-400 font-semibold"> creative strategies</span> that drive engagement and brand growth.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Explore My Work
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://s2.loli.net/2024/10/16/ev6O7Zn5YmgqVJh.jpg"
            alt="Yesterday"
            className="rounded-lg w-full h-auto object-cover mx-auto shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;