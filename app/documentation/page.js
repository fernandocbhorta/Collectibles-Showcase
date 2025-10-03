import React from 'react';

// API Documentation
const apiList = [
  {
    endpoint: '/api/collectibles/models',
    method: 'GET',
    description: 'a list of of all models.',
    response: `[
  {
    "id": "543",
    "year": "2020",
    "model": "CORVETTE STINGRAY",
    "maker": "BBurago",
    "scale": "1:18",
    "title": "2020  CORVETTE STINGRAY"
  },
  {
    "id": "305",
    "year": "2020",
    "driver": "LEWIS HAMILTON",
    "team": "MERCEDES-BENZ",
    "model": "W11 EQ PERFORMANCE",
    "maker": "Minichamps",
    "scale": "1:18",
    "title": "LEWIS HAMILTON 2020 MERCEDES-BENZ W11 EQ PERFORMANCE"
  }
]`,

  },
  {
    endpoint: `/api/collectibles/models/?id={id}`,
    method: 'GET',
    description: 'all details of a specific model.',
    response: `[
  {
    "id": "305",
    "year": "2020",
    "number": "44",
    "maker": "Minichamps",
    "category": "F1",
    "scale": "1:18",
    "additional_info": "Styrie GP",
    "SKU": "4012138749634",
    "champion": "Yes",
    "limited_edition": "Yes",
    "driver": "LEWIS HAMILTON",
    "characteristics": "DIECAST MODEL, MOVABLE FRONT WHEELS",
    "contents": "BOX, MODEL, STAND",
    "model": "W11 EQ PERFORMANCE",
    "team": "MERCEDES-BENZ",
    "image": "https://horta.classicgames.com.br/collectibles/images/new_305 (5.jpg"
  }
]`,
  },
  {
    endpoint: '/api/collectibles/drivers',
    method: 'GET',
    description: 'a list of of all drivers.',
    response: `[
  {
    "name": "A. J. FOYT",
    "id": "138"
  },
  {
    "name": "ADRIÁN FERNÁNDEZ",
    "id": "285"
  }
]`,

  },
  {
    endpoint: `/api/collectibles/drivers/?id={id}`,
    method: 'GET',
    description: 'a list of all models of a specific driver.',
    response: `[
  {
    "id": "107",
    "title": "ALAIN PROST 1993 WILLIAMS FW15C"
  },
  {
    "id": "84",
    "title": "ALAIN PROST 1990 FERRARI F1-90"
  }
]`,
  },
  {
    endpoint: '/api/collectibles/teams',
    method: 'GET',
    description: 'a list of of all teams.',
    response: `[
  {
    "name": "ABT SCHAEFFLER",
    "id": "46"
  },
  {
    "name": "ADT CHAMPION RACING",
    "id": "99"
  }
]`,

  },
  {
    endpoint: `/api/collectibles/teams/?id={id}`,
    method: 'GET',
    description: 'a list of all models of a specific team.',
    response: `[
  {
    "id": "303",
    "title": "CHARLES LECLERC 2019 FERRARI SF90"
  },
  {
    "id": "301",
    "title": "KIMI RAIKKONEN 2018 FERRARI SF71H"
  }
]`,
  },
  {
    endpoint: '/api/collectibles/makers',
    method: 'GET',
    description: 'a list of of all makers.',
    response: `[
  {
    "name": "Action",
    "id": "36"
  },
  {
    "name": "Anson Models",
    "id": "34"
  }
]`,

  },
  {
    endpoint: `/api/collectibles/makers/?id={id}`,
    method: 'GET',
    description: 'a list of all models of a specific maker.',
    response: `[
  {
    "id": "39",
    "title": "GILLES VILLENEUVE 1982 FERRARI 126C2"
  },
  {
    "id": "476",
    "title": "1953 JAGUAR XK 120 COUPE"
  }
]`,
  },
  {
    endpoint: '/api/collectibles/years',
    method: 'GET',
    description: 'a list of of all years.',
    response: `[
  {
    "name": "1999",
    "id": "1999"
  },
  {
    "name": "2000",
    "id": "2000"
  }
]`,

  },
  {
    endpoint: `/api/collectibles/years/?id={id}`,
    method: 'GET',
    description: 'a list of all models of a specific year.',
    response: `[
  {
    "id": "39",
    "title": "GILLES VILLENEUVE 1982 FERRARI 126C2"
  },
]`,
  },
  {
    endpoint: '/api/collectibles/images',
    method: 'GET',
    description: 'a random collectable image',
    response: `[
  {
    "image":"https:\/\/horta.classicgames.com.br\/collectibles\/images\/new_399 133294_5-3.jpg"
  },
]`,

  },
  {
    endpoint: `/api/collectibles/images/?id={number}`,
    method: 'GET',
    description: 'get X random images. Max 30',
    response: `[
  {
    "image":"https:\/\/horta.classicgames.com.br\/collectibles\/images\/c412t2ja (8).jpg"
  },
  {
    "image":"https:\/\/horta.classicgames.com.br\/collectibles\/images\/0743 (3).jpg"
  }
]`,
  },
  {
    endpoint: `/api/collectibles/images/?img={id}`,
    method: 'GET',
    description: 'get all images from a specific model.',
    response: `[
  {
    "image": "https://horta.classicgames.com.br/collectibles/images/0783 (1).jpg",
    "id": 0
  },
  {
    "image": "https://horta.classicgames.com.br/collectibles/images/0783 (2).jpg",
    "id": 1
  }
]`,
  },
  
]

const ApiDocs = () => {
  return (
    <div className="max-w-4xl mx-auto my-5 p-5 bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-300 mb-4">API Documentation</h1>
      <p className="text-gray-300 mb-6">This application retrieves information from my personal collection, with API endpoints created using php and MySQL.</p>
      
      {apiList.map((api, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200">Endpoint: <code className="px-1 rounded text-lg">https://horta.classicgames.com.br{api.endpoint}</code></h2>
          <p className="text-gray-400 text-sm mb-4">This endpoint retrieves {api.description}</p>
          <h3 className="text-lg font-medium text-gray-400">Method: {api.method}</h3>
          <h3 className="text-lg font-medium text-gray-400">Response:</h3>
          <pre className="bg-gray-700 p-2 text-xs rounded"><code>{api.response}</code></pre>
        </section>
      ))}
      
    </div>
  );
};
export default ApiDocs;
