// src/apis/realtime.ts
import { BaseAPI } from "./base";
import {
  RealtimeText2Image,
  RealtimeImage2Image,
  RealtimeInpainting,
} from "../schemas/realtime";

export class Realtime extends BaseAPI {
  constructor(apiKey: string, enterprise: boolean = false) {
    super({
      apiKey,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/realtime/"
        : "https://modelslab.com/api/v6/realtime/",
      enterprise,
    });
  }

  async textToImage(schema: RealtimeText2Image) {
    return this.post(this.baseUrl + "text2img", schema);
  }

  async imageToImage(schema: RealtimeImage2Image) {
    return this.post(this.baseUrl + "img2img", schema);
  }

  async inpainting(schema: RealtimeInpainting) {
    return this.post(this.baseUrl + "inpaint", schema);
  }
}
