import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import { Lipsync2Schema } from "./schemas";

export class SyncProvider extends BaseAPI {
  static readonly MODEL_LIPSYNC_2 = "lipsync-2";

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
      lipsync_2: SyncProvider.MODEL_LIPSYNC_2,
    };
  }

  async lipsync2(schema: Lipsync2Schema) {
    const endpoint = this.baseUrl + "v7/video-fusion/lip-sync";
    const data = {
      key: this.key,
      model_id: schema.model_id || SyncProvider.MODEL_LIPSYNC_2,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
