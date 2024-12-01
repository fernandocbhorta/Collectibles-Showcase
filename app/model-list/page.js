"use client";

import ItemList from "./item-list.js";
import ModelList from "./model-list.js";
import { useState, useEffect, useCallback } from "react";
import * as api from "../_services/connect.js";


export default function Page() {

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [apiType, setApiType] = useState("maker");

  const loadItems = useCallback(async () => {    
      const fetchedItems = await api.getType(apiType);
      setItems(fetchedItems);
      setApiType(apiType);
      console.log(fetchedItems);    
  }, [apiType]); 

  useEffect(() => {
    loadItems();     
  }, [loadItems]);

  const handleItemSelect = (item) => {
    setSelectedItemName(item.id);
    setApiType(item.apiType);    
  };

  return (
    <main>
      <div className="flex">
        <ul>
          <ItemList
            items={items}
            setItems={setItems} // Pass setItems as a prop
            onItemSelect={handleItemSelect}
            criteria={apiType}
          />
        </ul>
        <ModelList chosen={selectedItemName} criteria={apiType}/>
      </div>
    </main>
  );
}
