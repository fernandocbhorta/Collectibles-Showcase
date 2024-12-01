"use client";
import Item from "./item.js";
import { useCallback } from "react";
import { useState } from "react";
import * as api from "../_services/connect.js";

// this component displays a list of items (makers, drivers, teams, years) fetched from the API
export default function ItemList({ items, setItems, onItemSelect, criteria }) {
  const [apiType, setApiType] = useState("maker");  

  const selectApi = useCallback(async (criteria) => {
    setApiType(criteria); 
    const newItems = await api.getType(criteria);
    setItems(newItems); 
  }, [items, setApiType, setItems]); 

  return (
    <main>
      <p className="m-2">
        <button
          className={`p-2 m-2 ${
            apiType === "maker" ? "bg-slate-800 font-bold" : "bg-slate-700 text-slate-400"
          } rounded`}
          onClick={() => selectApi("maker")}
        >
          List by Maker
        </button>
        <button
          className={`p-2 m-2 ${
            apiType === "driver" ? "bg-slate-800 font-bold" : "bg-slate-700 text-slate-400"
          } rounded`}
          onClick={() => selectApi("driver")}
        >
          List by Driver
        </button>
        <button
          className={`p-2 m-2 ${
            apiType === "team" ? "bg-slate-800 font-bold" : "bg-slate-700 text-slate-400"
          } rounded`}
          onClick={() => selectApi("team")}
        >
          List by Team
        </button>        
        <button
          className={`p-2 m-2 ${
            apiType === "year" ? "bg-slate-800 font-bold" : "bg-slate-700 text-slate-400"
          } rounded`}
          onClick={() => selectApi("year")}
        >
          List by Year
        </button>
      </p>
      {items.map((item) => (        
        <div key={item.id}>
          {/* workaround #2: adding API called as attribute to the item retrieved */}
          <p className="hidden">{item.apiType = apiType}</p>          
          <Item {...item} onSelect={() => (onItemSelect(item))} />
        </div>
      ))}      
    </main>
  );
}
