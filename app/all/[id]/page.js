"use client";

import { getDetails } from "../../_services/connect.js";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        loadDetails(details);
    }, []);
    async function loadDetails() {
        const { id } = await params;
        const data = await getDetails(id);
        setDetails(data);        
    }

    return (
        <main>
        <div className="max-w-5xl mx-auto p-4 bg-slate-800 rounded-lg shadow-md text-slate-300">           
        {(details && details.length > 0) && (
          details.map((model) => (
            <h2 
              key={model.id}              
              className='my-8 text-lg font-bold max-w-5xl'
            >
              {model && (
                <ul>
                {Object.entries(model).map(([key, value], i) => (
                    <li key={i}>
                      {
                        // a bit of code to display the image as an image and the rest as text
                      key === "image" ? (
                        <img className="w-full h-auto object-cover" src={value} />
                      ) : (
                        <p className="capitalize text-sm">{key}: {value}</p>
                      )}                      
                    </li>
                  ))}
                </ul>
              )}
             
            </h2>
          ))
        )
    }
        </div>
        </main>
    );
    }