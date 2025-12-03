// src/apis/community.ts
import { BaseAPI } from "./base";
import {
  Text2Image,
  Image2Image,
  Inpainting,
  ControlNet,
  QwenText2Image,
  ZImageTurbo,
  Flux2Dev,
} from "../schemas/community";

export class Community extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/images/"
        : "https://modelslab.com/api/v6/images/",
      enterprise,
    });
  }

  async textToImage(schema: Text2Image) {
    return this.post(this.baseUrl + "text2img", schema);
  }

  async imageToImage(schema: Image2Image) {
    return this.post(this.baseUrl + "img2img", schema);
  }

  async inpainting(schema: Inpainting) {
    return this.post(this.baseUrl + "inpaint", schema);
  }

  async controlnet(schema: ControlNet) {
    return this.post(this.baseUrl + "controlnet", schema);
  }

  async qwenTextToImage(schema: QwenText2Image) {
    if (!this.enterprise) {
      throw new Error("Qwen API is only available for enterprise users.");
    }
    return this.post("https://modelslab.com/api/v1/enterprise/qwen/text2img", schema);
  }

  async zImageTurbo(schema: ZImageTurbo) {
    const data = { ...schema, model_id: "z-image-turbo" };
    return this.post(this.baseUrl + "text2img", data);
  }

  async flux2Dev(schema: Flux2Dev) {
    const data = { ...schema, model_id: "flux-2-dev" };
    return this.post(this.baseUrl + "text2img", data);
  }
}
