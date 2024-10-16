import React from 'react';
import { Book, Music, Bike, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Reading', icon: Book },
    { name: 'Music', icon: Music },
    { name: 'Cycling', icon: Bike },
    { name: 'Technology Development', icon: Cpu },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-display animate-pulse">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              "Hello! My name is Yesterday, and I have a diverse range of interests and skills that shape my professional and personal life.",
              "Academically, I am pursuing a degree in electronic information, specializing in embedded systems. I enjoy learning about new technologies, particularly how software interacts with hardware to create practical solutions in areas like automation, IoT, and embedded devices.",
              "Beyond the technical side, I have a deep interest in psychology and writing. I find human behavior and emotions fascinating, and I love exploring different psychological theories.",
              "In my free time, I love reading, especially books on literature, psychology, and personal development. I also enjoy staying active, whether it's cycling, running, or playing sports like tennis."
            ].map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 leading-relaxed transform transition duration-500 hover:scale-105 hover:text-white font-light tracking-wide hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:bg-opacity-50 p-4 rounded-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-display animate-pulse">
              Skills & Interests
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg transform transition duration-300 hover:scale-110 hover:shadow-lg hover:from-blue-900 hover:to-purple-900">
                  <skill.icon className="text-cyan-400" size={28} />
                  <span className="text-xl text-gray-300 font-display">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-display animate-pulse">
                Career Goals
              </h3>
              <ul className="list-none space-y-4 text-gray-300">
                {[
                  "Establish a stable career in the tech industry",
                  "Build financial independence",
                  "Shift towards fields like psychology and writing",
                  "Achieve balance between technical expertise and creative expression"
                ].map((goal, index) => (
                  <li key={index} className="transform transition duration-300 hover:translate-x-2 hover:text-white font-light tracking-wide flex items-center space-x-2">
                    <span className="text-cyan-400">&#9733;</span>
                    <span className="font-display text-lg">{goal.split(' ')[0]}</span> 
                    <span>{goal.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;