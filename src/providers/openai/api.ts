import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import { Sora2Schema } from "./schemas";

export class OpenAIProvider extends BaseAPI {
  static readonly MODEL_SORA_2 = "sora-2";

  constructor(client: Client) {
    super({
      key: client.key,
      baseUrl: client.baseUrl,
      fetchRetry: client.fetchRetry,
      fetchTimeout: client.fetchTimeout,
    });
  }

  static getModelIds() {
    return {
      sora_2: OpenAIProvider.MODEL_SORA_2,
    };
  }

  async sora2(schema: Sora2Schema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || OpenAIProvider.MODEL_SORA_2,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
