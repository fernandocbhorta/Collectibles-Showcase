"use client";

import { useState, useEffect } from 'react';


// images page
export default function PublicAPIs() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchFacts() {
    try {    
      const response = await fetch("https://horta.classicgames.com.br/api/collectables/images/?id=" + Math.floor(Math.random()
      * 30) + 1, {
        method: 'GET',
        withCredentials: true,    
        crossorigin: true,    
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFacts(data); 
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchFacts();
  }, []); 

  if (error) return (
    <div>
      <h2>Loading API...</h2>
      <p>{error}</p>
    </div>
  );

  return (
    <div>
        <h3 className='p-3 m-3 text-4xl text-center font-bold text-slate-400 '>images</h3>
      <ul className="max-w-4xl mx-auto my-5 p-5 bg-slate-800 rounded-lg shadow-lg">
        {facts.map((fact, index) => (
          <li key={index}>            
            <ul>
              {Object.entries(fact).map(([key, value], i) => (
                <li key={i} className="max-w-4xl mx-auto my-3 p-3 bg-slate-700 rounded-lg shadow-lg">
                  <img className="max-w-full  m-4 p-4" src={value} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
