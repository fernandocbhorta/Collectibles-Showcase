"use client";

import { useState, useEffect } from "react";
import { useCallback } from "react";
import * as api from "../_services/connect.js";

// the nightmarish model list component
export default function ModelList({ chosen, criteria }) {

  // a whole lotta states to make this work
  const [models, setModels] = useState([]);
  const [expandedModelId, setexpandedModelId] = useState(null);
  const [modelDetails, setModelDetails] = useState("");
  const [apiType, setApiType] = useState("maker");  

  const selectApi = useCallback(async (criteria) => {
    setApiType(criteria);     
  }, [setApiType]); 

  // this gets the list of models matching the selected criteria id from the current API
  async function fetchmodelIdeas(chosen, criteria) {
    const data = await api.getList(criteria, chosen);
    return data; 
  }
  
  // this gets the details of the selected model
  async function fetchModelDetails(id) {
    const data = await api.getDetails(id);
    return data[0]; 
  }

  // refreshes the list of models when a new item is selected
  async function loadmodelIdeas() {
    if (chosen) {
      const data = await fetchmodelIdeas(chosen, criteria);
      setModels(data);
    } else {
      setModels([]);
    }
  }

  useEffect(() => {
    loadmodelIdeas();
  }, [chosen, criteria]);

  // this function handles the click on a model item to expand it and show its details, then hides it when clicked again or clicked on another item
  const handlemodelClick = async (id) => {
    setexpandedModelId((prevId) => (prevId === id ? null : id));   
    
    if (expandedModelId !== id) {
      const modelDetails = await fetchModelDetails(id);
      setModelDetails(modelDetails);
    } else {
      setModelDetails(""); 
    }
  };

  // the function that makes the model names lowercase, to then capitalize on display. If this was called on a third page I'd have moved to _services
  function lowerCaseName(name) {
    let newname = name.toLowerCase()        
    return newname;
}

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-slate-400">Model List</h2>
      
      <ul>
        {/* maps all models matching the criteria */}
        {models && models.length > 0 ? (
          models.map((model) => (
            <li 
              key={model.id} 
              onClick={() => handlemodelClick(model.id)}
              className={expandedModelId === model.id ? 'my-8 text-lg font-bold max-w-screen-sm' : ''}
            >
              <p className="capitalize">{lowerCaseName(model.title)}</p>
              {/* expands and retrieves when the model is clicked */}
              {expandedModelId === model.id && modelDetails && (
                <ul>
                {Object.entries(modelDetails).map(([key, value], i) => (
                    <li key={i}>
                      {
                        // a bit of code to display the image as an image and the rest as text
                      key === "image" ? (
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
