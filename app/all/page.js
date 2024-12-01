"use client";

import { getAll } from '../_services/connect.js';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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