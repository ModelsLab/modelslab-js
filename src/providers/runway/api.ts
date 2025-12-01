import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import { Gen4ImageSchema, Gen4ImageTurboSchema, Gen4AlephSchema } from "./schemas";

export class RunwayProvider extends BaseAPI {
  static readonly MODEL_GEN4_IMAGE = "gen4_image";
  static readonly MODEL_GEN4_IMAGE_TURBO = "gen4_image_turbo";
  static readonly MODEL_GEN4_ALEPH = "gen4_aleph";

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
      gen4_image: RunwayProvider.MODEL_GEN4_IMAGE,
      gen4_image_turbo: RunwayProvider.MODEL_GEN4_IMAGE_TURBO,
      gen4_aleph: RunwayProvider.MODEL_GEN4_ALEPH,
    };
  }

  async gen4Image(schema: Gen4ImageSchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || RunwayProvider.MODEL_GEN4_IMAGE,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async gen4ImageTurbo(schema: Gen4ImageTurboSchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || RunwayProvider.MODEL_GEN4_IMAGE_TURBO,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async gen4Aleph(schema: Gen4AlephSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/video-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || RunwayProvider.MODEL_GEN4_ALEPH,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
