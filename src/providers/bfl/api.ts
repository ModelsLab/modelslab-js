import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import {
  FluxPro1752000026Schema,
  FluxPro11Schema,
  FluxPro11UltraSchema,
  FluxKontextProSchema,
  Flux2ProSchema,
  Flux2ProImageEditingSchema,
} from "./schemas";

export class BFLProvider extends BaseAPI {
  static readonly MODEL_FLUX_PRO_1752000026 = "flux-pro-1752000026";
  static readonly MODEL_FLUX_PRO_11 = "flux-pro-1.1";
  static readonly MODEL_FLUX_PRO_11_ULTRA = "flux-pro-1.1-ultra";
  static readonly MODEL_FLUX_KONTEXT_PRO = "flux-kontext-pro";
  static readonly MODEL_FLUX_2_PRO = "flux-2-pro";

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
      flux_pro_1752000026: BFLProvider.MODEL_FLUX_PRO_1752000026,
      flux_pro_11: BFLProvider.MODEL_FLUX_PRO_11,
      flux_pro_11_ultra: BFLProvider.MODEL_FLUX_PRO_11_ULTRA,
      flux_kontext_pro: BFLProvider.MODEL_FLUX_KONTEXT_PRO,
      flux_2_pro: BFLProvider.MODEL_FLUX_2_PRO,
    };
  }

  async fluxPro1752000026(schema: FluxPro1752000026Schema) {
    const endpoint = this.baseUrl + "v6/images/text2img";
    const data = {
      key: this.key,
      model_id: schema.model_id || BFLProvider.MODEL_FLUX_PRO_1752000026,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async fluxPro11(schema: FluxPro11Schema) {
    const endpoint = this.baseUrl + "v6/images/text2img";
    const data = {
      key: this.key,
      model_id: schema.model_id || BFLProvider.MODEL_FLUX_PRO_11,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async fluxPro11Ultra(schema: FluxPro11UltraSchema) {
    const endpoint = this.baseUrl + "v6/images/text2img";
    const data = {
      key: this.key,
      model_id: schema.model_id || BFLProvider.MODEL_FLUX_PRO_11_ULTRA,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async fluxKontextPro(schema: FluxKontextProSchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BFLProvider.MODEL_FLUX_KONTEXT_PRO,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async flux2Pro(schema: Flux2ProSchema) {
    const endpoint = this.baseUrl + "v7/images/text-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BFLProvider.MODEL_FLUX_2_PRO,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async flux2ProImageEditing(schema: Flux2ProImageEditingSchema) {
    const endpoint = this.baseUrl + "v7/images/image-to-image";
    const data = {
      key: this.key,
      model_id: schema.model_id || BFLProvider.MODEL_FLUX_2_PRO,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
