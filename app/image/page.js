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
      <ul className="justify-start flex-auto">
        {facts.map((fact, index) => (
          <li key={index}>            
            <ul>
              {Object.entries(fact).map(([key, value], i) => (
                <li key={i}>
                  <img className="max-w-lg h-auto object-cover m-4 p-4" src={value} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
