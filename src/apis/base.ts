// src/apis/base.ts
import axios from "axios";

export class BaseAPI {
  protected readonly key: string;
  protected readonly baseUrl: string;
  protected readonly fetchRetry: number;
  protected readonly fetchTimeout: number;
  protected readonly enterprise: boolean;

  constructor({
    key,
    baseUrl,
    fetchRetry = 10,
    fetchTimeout = 2,
    enterprise = false,
  }: {
    key: string;
    baseUrl: string;
    fetchRetry?: number;
    fetchTimeout?: number;
    enterprise?: boolean;
  }) {
    this.key = key;
    this.baseUrl = baseUrl;
    this.fetchRetry = fetchRetry;
    this.fetchTimeout = fetchTimeout;
    this.enterprise = enterprise;
  }

  protected async post(endpoint: string, data: any): Promise<any> {
    const url = `${endpoint}`;
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${this.key}`,
        "Content-Type": "application/json",
        "X-Requested-With": "modelslab-js",
      },
    });
    return response.data;
  }

  async fetch(id: string): Promise<any> {
    const url = `${this.baseUrl}fetch/${id}`;
    for (let i = 0; i < this.fetchRetry; i++) {
      const response = await this.post(url, { key: this.key });
      if (response.status === "success") {
        return response;
      }
      await new Promise((r) => setTimeout(r, this.fetchTimeout * 1000));
    }
    return { status: "error", message: "Max retries exceeded" };
  }

  protected async postToEnterprise(endpoint: string): Promise<any> {
    if (!this.enterprise) {
      throw new Error("System details are only available for enterprise users.");
    }
    return this.post(`${this.baseUrl}${endpoint}`, { key: this.key });
  }

  async systemDetails() {
    return this.postToEnterprise("system_details");
  }

  async restart() {
    return this.postToEnterprise("restart_server");
  }

  async update() {
    return this.postToEnterprise("update");
  }

  async clearCache() {
    return this.postToEnterprise("clear_cache");
  }

  async clearQueue() {
    return this.postToEnterprise("clear_queue");
  }
}
