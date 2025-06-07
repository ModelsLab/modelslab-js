// src/client.ts
export class Client {
    public readonly key: string;
    public readonly baseUrl: string;
    public readonly fetchRetry: number;
    public readonly fetchTimeout: number;
  
    constructor(
      key?: string,
      fetchRetry: number = 10,
      fetchTimeout: number = 2
    ) {
      this.key = this._loadkey(key);
      this.baseUrl = "https://modelslab.com/api/";
      this.fetchRetry = fetchRetry;
      this.fetchTimeout = fetchTimeout;
    }
  
    private _loadkey(key?: string): string {
      if (!key) {
        key = process.env.API_KEY;
        if (!key) {
          throw new Error("API key is required.");
        }
      }
      return key;
    }
  }
  