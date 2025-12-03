import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import {
  Hailuo23T2VSchema,
  Hailuo02T2VSchema,
  Hailuo23I2VSchema,
  Hailuo23FastI2VSchema,
  Hailuo02I2VSchema,
  Hailuo02StartEndFrameSchema,
} from "./schemas";

export class MinimaxProvider extends BaseAPI {
  static readonly MODEL_HAILUO_23_T2V = "Hailuo-2.3-t2v";
  static readonly MODEL_HAILUO_02_T2V = "Hailuo-02-t2v";
  static readonly MODEL_HAILUO_23_I2V = "Hailuo-2.3-i2v";
  static readonly MODEL_HAILUO_23_FAST_I2V = "Hailuo-2.3-Fast-i2v";
  static readonly MODEL_HAILUO_02_I2V = "Hailuo-02-i2v";
  static readonly MODEL_HAILUO_02_START_END_FRAME = "Hailuo-02-start-end-frame";

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
      hailuo_23_t2v: MinimaxProvider.MODEL_HAILUO_23_T2V,
      hailuo_02_t2v: MinimaxProvider.MODEL_HAILUO_02_T2V,
      hailuo_23_i2v: MinimaxProvider.MODEL_HAILUO_23_I2V,
      hailuo_23_fast_i2v: MinimaxProvider.MODEL_HAILUO_23_FAST_I2V,
      hailuo_02_i2v: MinimaxProvider.MODEL_HAILUO_02_I2V,
      hailuo_02_start_end_frame: MinimaxProvider.MODEL_HAILUO_02_START_END_FRAME,
    };
  }

  async hailuo23T2V(schema: Hailuo23T2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || MinimaxProvider.MODEL_HAILUO_23_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async hailuo02T2V(schema: Hailuo02T2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || MinimaxProvider.MODEL_HAILUO_02_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async hailuo23I2V(schema: Hailuo23I2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || MinimaxProvider.MODEL_HAILUO_23_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async hailuo23FastI2V(schema: Hailuo23FastI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || MinimaxProvider.MODEL_HAILUO_23_FAST_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async hailuo02I2V(schema: Hailuo02I2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || MinimaxProvider.MODEL_HAILUO_02_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async hailuo02StartEndFrame(schema: Hailuo02StartEndFrameSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || MinimaxProvider.MODEL_HAILUO_02_START_END_FRAME,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
