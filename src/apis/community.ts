// src/apis/community.ts
import { BaseAPI } from "./base";
import {
  Text2Image,
  Image2Image,
  Inpainting,
  ControlNet,
} from "../schemas/community";

export class Community extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/images/text2img/"
        : "https://modelslab.com/api/v6/images/text2img/",
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
}
