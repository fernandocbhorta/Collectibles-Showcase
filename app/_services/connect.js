// APIs hosted on my own website. I had to resort to some "tricks" to get this working with just 3 functions.

// this is the api that will be used to get the list of filters (maker, driver, team, year)
export async function getType(api) {
    const baseUrl = "https://horta.classicgames.com.br/api/collectables/";
    const response = await fetch(baseUrl + api + "s/", {
      method: 'GET',
      withCredentials: true,    
      crossorigin: true,    
      
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

// this is the api that will be used to get the list of items based on the filter selected
export async function getList(api, id) {
    const baseUrl = "https://horta.classicgames.com.br/api/collectables/";
    const response = await fetch(baseUrl + api + "s/?id=" + id, {
      method: 'GET',
      withCredentials: true,    
      crossorigin: true,    
      
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  // this is the api that will be used to get the details of the item selected
  export async function getDetails(id) {
    const baseUrl = "https://horta.classicgames.com.br/api/collectables/";
    const response = await fetch(baseUrl + "models/?id=" + id, {
      method: 'GET',
      withCredentials: true,    
      crossorigin: true,    
      
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  // this is the api that will be used to get the details of the item selected
  export async function getAll() {
    const baseUrl = "https://horta.classicgames.com.br/api/collectables/models/";
    const response = await fetch(baseUrl, {
      method: 'GET',
      withCredentials: true,    
      crossorigin: true,    
      
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  // this is the api to get all images of a certain item
  export async function getAllImages(id) {
    const baseUrl = "https://horta.classicgames.com.br/api/collectables/images/?img=" + id;
    const response = await fetch(baseUrl, {
      method: 'GET',
      withCredentials: true,    
      crossorigin: true,    
      
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
