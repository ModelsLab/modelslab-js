import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import { InworldTTSSchema } from "./schemas";

export class InworldProvider extends BaseAPI {
  static readonly MODEL_INWORLD_TTS = "inworld-tts";

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
      inworld_tts: InworldProvider.MODEL_INWORLD_TTS,
    };
  }

  async inworldTTS(schema: InworldTTSSchema) {
    const endpoint = this.baseUrl + "v7/voice/text-to-speech";
    const data = {
      key: this.key,
      model_id: schema.model_id || InworldProvider.MODEL_INWORLD_TTS,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
