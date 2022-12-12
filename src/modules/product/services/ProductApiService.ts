class ProductApiService {
  private url: string;

  defaultOptions = {
    baseURI: process.env.BACKEND_URL || "http://localhost:5000",
  };

  constructor(url: string) {
    this.url = url;
  }

  public getProduct(id: string) {
    return fetch(`${this.defaultOptions.baseURI}${this.url}/${id}`).then((res) =>
      res.json()
    );
  }
}

export default new ProductApiService("/api/items");
