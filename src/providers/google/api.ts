import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import {
  Imagen4Schema,
  Imagen3Schema,
  Imagen40FastGenerateSchema,
  Imagen40UltraSchema,
  NanoBananaT2ISchema,
  NanoBananaSchema,
  NanoBanaProSchema,
  NanoBanaProImageEditSchema,
} from "./schemas";

export class GoogleProvider extends BaseAPI {
  static readonly MODEL_IMAGEN_4 = "imagen-4";
  static readonly MODEL_IMAGEN_3 = "imagen-3";
  static readonly MODEL_IMAGEN_40_FAST_GENERATE = "imagen-4.0-fast-generate";
  static readonly MODEL_IMAGEN_40_ULTRA = "imagen-4.0-ultra";
  static readonly MODEL_NANO_BANANA_T2I = "nano-banana-t2i";
  static readonly MODEL_NANO_BANANA = "nano-banana";
  static readonly MODEL_NANO_BANANA_PRO = "nano-banana-pro";

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
      imagen_4: GoogleProvider.MODEL_IMAGEN_4,
      imagen_3: GoogleProvider.MODEL_IMAGEN_3,
      imagen_40_fast_generate: GoogleProvider.MODEL_IMAGEN_40_FAST_GENERATE,
      imagen_40_ultra: GoogleProvider.MODEL_IMAGEN_40_ULTRA,
      nano_banana_t2i: GoogleProvider.MODEL_NANO_BANANA_T2I,
      nano_banana: GoogleProvider.MODEL_NANO_BANANA,
      nano_banana_pro: GoogleProvider.MODEL_NANO_BANANA_PRO,
    };
  }

  async imagen4(schema: Imagen4Schema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_IMAGEN_4,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async imagen3(schema: Imagen3Schema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_IMAGEN_3,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async imagen40FastGenerate(schema: Imagen40FastGenerateSchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_IMAGEN_40_FAST_GENERATE,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async imagen40Ultra(schema: Imagen40UltraSchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_IMAGEN_40_ULTRA,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async nanoBananaT2I(schema: NanoBananaT2ISchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_NANO_BANANA_T2I,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async nanoBanana(schema: NanoBananaSchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_NANO_BANANA,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async nanoBananaPro(schema: NanoBanaProSchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_NANO_BANANA_PRO,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async nanoBanaProImageEdit(schema: NanoBanaProImageEditSchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || GoogleProvider.MODEL_NANO_BANANA_PRO,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
