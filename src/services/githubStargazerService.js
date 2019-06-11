export default class GithubStargazerService {
  _apiBase = 'https://api.github.com/repos/';
  
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
  
    if(!res.ok) {
      
      throw new Error(`Could not featch ${url}` + 
        `, recived ${res.status}`);
    }
  
    const body = await res.json();
    return body;
  }
}