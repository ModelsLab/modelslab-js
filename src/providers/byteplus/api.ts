import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import {
  SeeDreamT2ISchema,
  SeeDanceT2VSchema,
  SeeDanceI2VSchema,
  SeeEditI2ISchema,
  SeeDream4Schema,
  SeeDream4I2ISchema,
  SeeDance10ProI2VSchema,
  OmniHumanSchema,
  OmniHuman15Schema,
  SeeDance10ProFastI2VSchema,
  SeeDance10ProFastT2VSchema,
} from "./schemas";

export class BytePlusProvider extends BaseAPI {
  static readonly MODEL_SEEDREAM_T2I = "seedream-t2i";
  static readonly MODEL_SEEDANCE_T2V = "seedance-t2v";
  static readonly MODEL_SEEDANCE_I2V = "seedance-i2v";
  static readonly MODEL_SEEDEDIT_I2I = "seededit-i2i";
  static readonly MODEL_SEEDREAM_4 = "seedream-4";
  static readonly MODEL_SEEDREAM_4_I2I = "seedream-4.0-i2i";
  static readonly MODEL_SEEDANCE_10_PRO_I2V = "seedance-1.0-pro-i2v";
  static readonly MODEL_OMNI_HUMAN = "omni-human";
  static readonly MODEL_OMNI_HUMAN_15 = "omni-human-1.5";
  static readonly MODEL_SEEDANCE_10_PRO_FAST_I2V = "seedance-1.0-pro-fast-i2v";
  static readonly MODEL_SEEDANCE_10_PRO_FAST_T2V = "seedance-1.0-pro-fast-t2v";

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
      seedream_t2i: BytePlusProvider.MODEL_SEEDREAM_T2I,
      seedance_t2v: BytePlusProvider.MODEL_SEEDANCE_T2V,
      seedance_i2v: BytePlusProvider.MODEL_SEEDANCE_I2V,
      seededit_i2i: BytePlusProvider.MODEL_SEEDEDIT_I2I,
      seedream_4: BytePlusProvider.MODEL_SEEDREAM_4,
      seedream_4_i2i: BytePlusProvider.MODEL_SEEDREAM_4_I2I,
      seedance_10_pro_i2v: BytePlusProvider.MODEL_SEEDANCE_10_PRO_I2V,
      omni_human: BytePlusProvider.MODEL_OMNI_HUMAN,
      omni_human_15: BytePlusProvider.MODEL_OMNI_HUMAN_15,
      seedance_10_pro_fast_i2v: BytePlusProvider.MODEL_SEEDANCE_10_PRO_FAST_I2V,
      seedance_10_pro_fast_t2v: BytePlusProvider.MODEL_SEEDANCE_10_PRO_FAST_T2V,
    };
  }

  async seedreamT2I(schema: SeeDreamT2ISchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDREAM_T2I,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedanceT2V(schema: SeeDanceT2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDANCE_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedanceI2V(schema: SeeDanceI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDANCE_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seededitI2I(schema: SeeEditI2ISchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDEDIT_I2I,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedream4(schema: SeeDream4Schema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDREAM_4,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedream4I2I(schema: SeeDream4I2ISchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDREAM_4_I2I,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedance10ProI2V(schema: SeeDance10ProI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDANCE_10_PRO_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async omniHuman(schema: OmniHumanSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_OMNI_HUMAN,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async omniHuman15(schema: OmniHuman15Schema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_OMNI_HUMAN_15,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedance10ProFastI2V(schema: SeeDance10ProFastI2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/image-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDANCE_10_PRO_FAST_I2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async seedance10ProFastT2V(schema: SeeDance10ProFastT2VSchema) {
    const endpoint = this.baseUrl + "v7/video-fusion/text-to-video";
    const data = {
      key: this.key,
      model_id: schema.model_id || BytePlusProvider.MODEL_SEEDANCE_10_PRO_FAST_T2V,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
