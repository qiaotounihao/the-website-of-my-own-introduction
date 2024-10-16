import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-display animate-pulse">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out pl-12"
                placeholder="Your Name"
              />
              <User className="absolute left-3 top-3 text-gray-400" size={24} />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out pl-12"
                placeholder="Your Email"
              />
              <Mail className="absolute left-3 top-3 text-gray-400" size={24} />
            </div>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out pl-12"
              placeholder="Your Message"
            ></textarea>
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={24} />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Send className="mr-2" size={24} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;