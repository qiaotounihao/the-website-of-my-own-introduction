import React from 'react';
import { Bot, Zap, Brain, Cpu, Code, Sparkles } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const features = [
    { icon: Bot, title: 'Intelligent Conversations', description: 'Engage in natural, context-aware dialogues' },
    { icon: Zap, title: 'Lightning-Fast Responses', description: 'Get instant answers to your queries' },
    { icon: Brain, title: 'Continuous Learning', description: 'AI that evolves and improves with each interaction' },
    { icon: Cpu, title: 'Advanced Processing', description: 'Powered by cutting-edge AI technology' },
    { icon: Code, title: 'Code Generation', description: 'Create code snippets and solve programming challenges' },
    { icon: Sparkles, title: 'Creative Problem Solving', description: 'Innovative solutions for complex problems' },
  ];

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzAwMDAwMDQwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      </div>
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-display animate-pulse">
            AI Assistant
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Experience the future of conversation with our cutting-edge AI assistant. Powered by advanced machine learning algorithms, it's here to revolutionize your tasks and queries.
          </p>
          <a
            href="#chat"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 inline-flex items-center animate-bounce"
          >
            <Bot className="mr-2" size={24} />
            Initiate AI Interaction
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-70 border border-gray-700 hover:border-cyan-400 group backdrop-filter backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <feature.icon className="text-cyan-400 mr-3 group-hover:animate-spin" size={36} />
                <h3 className="text-xl font-semibold font-display group-hover:text-cyan-400 transition duration-300">{feature.title}</h3>
              </div>
              <p className="text-gray-400 group-hover:text-white transition duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-2xl font-light text-gray-300 mb-4">Ready to experience the future?</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-500 hover:to-blue-600 transition duration-300 transform hover:scale-105 inline-flex items-center">
            <Cpu className="mr-2" size={24} />
            Activate AI Assistant
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default AIAssistant;