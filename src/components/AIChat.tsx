import React, { useState } from 'react';
import { Send, Mic, Download, Trash2, Sun, Moon } from 'lucide-react';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm an AI assistant. How can I help you?", isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const exportChat = () => {
    const chatContent = messages.map((msg) => `${msg.isUser ? 'You' : 'AI'}: ${msg.text}`).join('\n');
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_export.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section id="ai-assistant" className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">AI Assistant</h2>
        <div className={`border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden`}>
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold">Chat with AI</h3>
            <div className="flex space-x-2">
              <button onClick={clearChat} className="p-2 rounded-full hover:bg-gray-200">
                <Trash2 size={20} />
              </button>
              <button onClick={exportChat} className="p-2 rounded-full hover:bg-gray-200">
                <Download size={20} />
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-indigo-600 text-white'
                      : isDarkMode
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={`flex-grow p-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                }`}
                rows={1}
              />
              <button onClick={handleSend} className="p-2 bg-indigo-600 text-white rounded-full">
                <Send size={20} />
              </button>
              <button className="p-2 bg-indigo-600 text-white rounded-full">
                <Mic size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;