import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import {
  KlingV21I2VSchema,
  KlingV25TurboI2VSchema,
  KlingV25TurboT2VSchema,
  KlingV2MasterT2VSchema,
  KlingV2MasterI2VSchema,
  KlingV21MasterT2VSchema,
  KlingV21MasterI2VSchema,
} from "./schemas";

export class KlingAIProvider extends BaseAPI {
  static readonly MODEL_KLING_V21_I2V = "kling-v2-1-i2v";
  static readonly MODEL_KLING_V25_TURBO_I2V = "Kling-V2-5-Turbo-i2v";
  static readonly MODEL_KLING_V25_TURBO_T2V = "kling-v2-5-turbo-t2v";
  static readonly MODEL_KLING_V2_MASTER_T2V = "kling-v2-master-t2v";
  static readonly MODEL_KLING_V2_MASTER_I2V = "kling-v2-master-i2v";
  static readonly MODEL_KLING_V21_MASTER_T2V = "kling-v2-1-master-t2v";
  static readonly MODEL_KLING_V21_MASTER_I2V = "kling-v2-1-master-i2v";

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
      kling_v21_i2v: KlingAIProvider.MODEL_KLING_V21_I2V,
      kling_v25_turbo_i2v: KlingAIProvider.MODEL_KLING_V25_TURBO_I2V,
      kling_v25_turbo_t2v: KlingAIProvider.MODEL_KLING_V25_TURBO_T2V,
      kling_v2_master_t2v: KlingAIProvider.MODEL_KLING_V2_MASTER_T2V,
      kling_v2_master_i2v: KlingAIProvider.MODEL_KLING_V2_MASTER_I2V,
      kling_v21_master_t2v: KlingAIProvider.MODEL_KLING_V21_MASTER_T2V,
      kling_v21_master_i2v: KlingAIProvider.MODEL_KLING_V21_MASTER_I2V,
    };
  }

  async klingV21I2V(schema: KlingV21I2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V21_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async klingV25TurboI2V(schema: KlingV25TurboI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V25_TURBO_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async klingV25TurboT2V(schema: KlingV25TurboT2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V25_TURBO_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async klingV2MasterT2V(schema: KlingV2MasterT2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V2_MASTER_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async klingV2MasterI2V(schema: KlingV2MasterI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V2_MASTER_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async klingV21MasterT2V(schema: KlingV21MasterT2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V21_MASTER_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async klingV21MasterI2V(schema: KlingV21MasterI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || KlingAIProvider.MODEL_KLING_V21_MASTER_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
