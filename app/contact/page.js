import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSheet = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-slate-800 rounded-lg shadow-md text-slate-300">
      <h1 className="text-2xl font-bold text-center mb-4">Contact Me</h1>
      <div className="flex items-center mb-4">
        <FaLinkedin className="text-slate-300 mr-2" />
        <a href="https://www.linkedin.com/in/fernandocbhorta/" className="text-slate-300 hover:underline" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaGithub className="text-slate-300 mr-2" />
        <a href="https://github.com/fernandocbhorta" className="text-slate-300 hover:underline" target="_blank">
          GitHub
        </a>
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">✉️</span>
        <a href="mailto:fernandocbhorta@gmail.com" className="text-slate-300 hover:underline" target="_blank">
          Email
        </a>
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">🔗</span>
        <a href="https://horta.classicgames.com.br/" className="text-slate-300 hover:underline" target="_blank">
          My Hobbies
        </a>
      </div>
    </div>
  );
};

export default ContactSheet;
