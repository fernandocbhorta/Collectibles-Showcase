"use client";

import { getAll } from '../_services/connect.js';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// a different way to display the list of models. Instead of allowing the user to choose the type of list to display, this component will display all models. Clicking on a model will take the user to the details page for that model using dynamic routing, pre-rendered using Link 
export default function Page() {

    const [list, setList] = useState([]);
    useEffect(() => {
        loadList();
    }, []);
    async function loadList() {
        const data = await getAll();
        setList(data);
    }

    return (
        <main>
        <h1 className='p-3 m-3 text-4xl text-center font-bold text-slate-400'>All models</h1>
        <div className="max-w-4xl mx-auto my-5 p-5 bg-slate-800 rounded-lg shadow-lg">
          {list.map((fact, index) => (
            <li key={index} className="text-sm text-slate-300">
              <Link href={`all/${fact.id}`} >{fact.title} </Link>
            </li>
          ))}
        </div>
        </main>
    );
}