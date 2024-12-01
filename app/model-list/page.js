"use client";

import ItemList from "./item-list.js";
import ModelList from "./model-list.js";
import { useState, useEffect, useCallback } from "react";
import * as api from "../_services/connect.js";


export default function Page() {

  // this state holds the type of API to be called for the list of results (makers, drivers, teams, years)
  const [apiType, setApiType] = useState("maker");
  
  // this state holds the list of results 
  const [items, setItems] = useState([]);

  // this state holds the name of the selected item. It is used to pass the name of the selected item to the model list, which in turn will use it to fetch the details of the selected item.
  const [selectedItemName, setSelectedItemName] = useState(null);
  

  const loadItems = useCallback(async () => {    
      const fetchedItems = await api.getType(apiType);
      setItems(fetchedItems);
      setApiType(apiType); 
  }, [apiType]); 

  useEffect(() => {
    loadItems();     
  }, [loadItems]);

  // a bit of a workaround to get the type of API to be passed to the model list
  const handleItemSelect = (item) => {
    setSelectedItemName(item.id);
    setApiType(item.apiType);    
  };

  return (
    <main>
      <div className="flex mx-auto">
        <ul className="max-w-3xl my-5 p-5 bg-slate-800 rounded-lg shadow-lg">
          <ItemList
            items={items}
            setItems={setItems}
            onItemSelect={handleItemSelect}
            criteria={apiType}
          />
        </ul>
        <ModelList chosen={selectedItemName} criteria={apiType}/>
      </div>
    </main>
  );
}
