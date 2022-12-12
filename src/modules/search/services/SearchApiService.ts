class HomeApiService {
  private url: string;

  defaultOptions = {
    baseURI: process.env.BACKEND_URL || "http://localhost:5000",
  };

  constructor(url: string) {
    this.url = url;
  }

  public getProducts(query: string) {
    return fetch(`${this.defaultOptions.baseURI}${this.url}${query}`).then(
      (res) => res.json()
    );
  }
}

export default new HomeApiService("/api/items?q=");
