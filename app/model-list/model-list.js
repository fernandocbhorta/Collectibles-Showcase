"use client";

import { useState, useEffect } from "react";
import { useCallback } from "react";
import * as api from "../_services/connect.js";

export default function ModelList({ chosen, criteria }) {

  const [models, setmodels] = useState([]);
  const [expandedmodelId, setExpandedmodelId] = useState(null);
  const [modelDetails, setModelDetails] = useState("");

  const [apiType, setApiType] = useState("maker");  

  const selectApi = useCallback(async (criteria) => {
    setApiType(criteria);     
  }, [setApiType]); 

  async function fetchmodelIdeas(chosen, criteria) {
    const data = await api.getList(criteria, chosen);
    console.log(data);  
    return data; 
  }
  
  async function fetchModelDetails(id) {
    const data = await api.getDetails(id);
    console.log(data);
    return data[0]; 
  }

  async function loadmodelIdeas() {
    if (chosen) {
      const data = await fetchmodelIdeas(chosen, criteria);
      setmodels(data);
    } else {
      setmodels([]);
    }
  }

  useEffect(() => {
    loadmodelIdeas();
  }, [chosen, criteria]);

  const handlemodelClick = async (id) => {
    setExpandedmodelId((prevId) => (prevId === id ? null : id));   
    
    if (expandedmodelId !== id) {
      const modelDetails = await fetchModelDetails(id);
      setModelDetails(modelDetails);
    } else {
      setModelDetails(""); 
    }
  };

  function lowerCaseName(name) {
    let newname = name.toLowerCase()        
    return newname;
}

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-slate-400">Model List</h2>
      
      <ul>
        {models && models.length > 0 ? (
          models.map((model) => (
            <li 
              key={model.id} 
              onClick={() => handlemodelClick(model.id)}
              className={expandedmodelId === model.id ? 'my-8 text-lg font-bold max-w-screen-sm' : ''}
            >
              <p className="capitalize">{lowerCaseName(model.title)}</p>
              {expandedmodelId === model.id && modelDetails && (
                <ul>
                {Object.entries(modelDetails).map(([key, value], i) => (
                       <li key={i}>
                         {key === "image" ? (
                           <img className="w-full h-auto object-cover" src={value} />
                         ) : (
                           <p className="capitalize text-sm">{lowerCaseName(`${key}: ${value}`)}</p>
                         )}                      
                       </li>
                     ))}
                   </ul>
              )}
             
            </li>
          ))
        ) : (
          <li>Choose one item from left</li>
        )}
      </ul>
    </div>
  );
}
