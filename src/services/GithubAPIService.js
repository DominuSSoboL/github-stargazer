class GithubAPIService {
  API_BASE = 'https://api.github.com/repos/';

  async getRepository(url) {
    const res = await fetch(`${this.API_BASE}${url}`);

    if(!res.ok) {
      throw new Error(`Could not featch ${url}, recived ${res.status}`);
    }

    const body = await res.json();

    return body;
  }
};

const githubStargazer = new GithubAPIService();

export default githubStargazer;
