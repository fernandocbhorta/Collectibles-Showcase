"use client";

import { useState, useEffect } from 'react';


// Landing page. Nothing but a random picture of a collectable item retrieved from the API.
export default function PublicAPIs() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchFacts() {
    try {
      const response = await fetch('https://horta.dev.br/api/collectibles/images/?id=1', {
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
    <div className="max-w-6xl mx-auto my-5 p-5 bg-slate-800 rounded-lg shadow-lg">
        <h3 className='p-3 m-3 text-4xl text-center font-bold text-slate-400'>my_collectibles</h3>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>            
            <ul>
              {Object.entries(fact).map(([key, value], i) => (
                <li key={i}>
                  <img className="w-full h-auto object-cover rounded" src={value} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
