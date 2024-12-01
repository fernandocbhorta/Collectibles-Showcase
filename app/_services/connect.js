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
