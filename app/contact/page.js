import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Contact sheet with links to my social media and email
const ContactSheet = () => {
  return (
    <div className="max-w-xl my-auto mx-auto p-5 bg-slate-800 rounded-lg shadow-lg">
      <div className="max-w-xl mx-auto p-4 my-4 bg-slate-700 rounded-lg shadow-md text-slate-300">
        <h1 className="text-2xl font-bold text-center mb-4">Contact</h1>
        <div className="flex items-center p-2 m-2 hover:bg-slate-600 rounded hover:scale-110 duration-200">
          <FaLinkedin className="text-slate-300 mr-2" />
          <a href="https://www.linkedin.com/in/fernandocbhorta/" className="text-slate-300 hover:underline" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center p-2 m-2 hover:bg-slate-600 rounded hover:scale-110 duration-200">
          <FaGithub className="text-slate-300 mr-2" />
          <a href="https://github.com/fernandocbhorta" className="text-slate-300 hover:underline" target="_blank">
            GitHub
          </a>
        </div>
        <div className="flex items-center p-2 m-2 hover:bg-slate-600 rounded hover:scale-110 duration-200">
          <span className="mr-2">✉️</span>
          <a href="mailto:fernandocbhorta@gmail.com" className="text-slate-300 hover:underline" target="_blank">
            Email
          </a>
        </div>
        <div className="flex items-center p-2 m-2 hover:bg-slate-600 rounded hover:scale-110 duration-200">
          <span className="mr-2">🔗</span>
          <a href="https://horta.classicgames.com.br/" className="text-slate-300 hover:underline" target="_blank">
            My Hobbies
          </a>
        </div>        
      </div>
      <div className="max-w-xl mx-auto p-4 my-4 bg-slate-700 rounded-lg shadow-md text-slate-300">
        <h1 className="text-2xl font-bold text-center mb-4">About me</h1>
        <div className="flex items-center p-2 m-2 text-justify">
            I&apos;m a student at SAIT in the Software Development program, heading to the last semester and looking forward to improve my skills in web development.
        </div>
        <div className="flex items-center p-2 m-2 text-justify">
            My first experiences with Internet were in 1997, creating personal websites on GeoCities and similar (Xoom, Tripod, Angelfire) using pure HTML, as well as some &quot;mods&quot; for Grand Prix 2 - a few of them are still available online. Time went by, I moved away from the field spent 20 years working with administration, until deciding on a new career late in 2023, where I&apos;ve been learning new technologies and languages, studying abroad to fulfill this goal.       
        </div>
        <div className="flex items-center p-2 m-2 text-justify">
            I&apos;m currently learning React and React-Native, Next.JS, Node.JS, having some experience with Python, C#, Maui, Java, some frameworks such as TailwindCSS, Bootstrap, and others. On the database side, I have experience with MySQL, starting to learn more about Oracle, NoSQL. My go to language is php, which I used to create my personal website and the APIs used in this project.    
        </div>
      </div>
    </div>
  );
};

export default ContactSheet;


