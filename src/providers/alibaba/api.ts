import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import { Wan25I2VSchema, Wan25T2VSchema } from "./schemas";

export class AlibabaProvider extends BaseAPI {
  static readonly MODEL_WAN25_I2V = "wan2.5-i2v";
  static readonly MODEL_WAN25_T2V = "wan2.5-t2v";

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
      wan25_i2v: AlibabaProvider.MODEL_WAN25_I2V,
      wan25_t2v: AlibabaProvider.MODEL_WAN25_T2V,
    };
  }

  async wan25I2V(schema: Wan25I2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || AlibabaProvider.MODEL_WAN25_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async wan25T2V(schema: Wan25T2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || AlibabaProvider.MODEL_WAN25_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
