// src/client.ts
export class Client {
    public readonly apiKey: string;
    public readonly baseUrl: string;
    public readonly fetchRetry: number;
    public readonly fetchTimeout: number;
  
    constructor(
      apiKey?: string,
      fetchRetry: number = 10,
      fetchTimeout: number = 2
    ) {
      this.apiKey = this._loadApiKey(apiKey);
      this.baseUrl = "https://modelslab.com/api/";
      this.fetchRetry = fetchRetry;
      this.fetchTimeout = fetchTimeout;
    }
  
    private _loadApiKey(apiKey?: string): string {
      if (!apiKey) {
        apiKey = process.env.API_KEY;
        if (!apiKey) {
          throw new Error("API key is required.");
        }
      }
      return apiKey;
    }
  }
  