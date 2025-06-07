// src/apis/imageEditing.ts
import { BaseAPI } from "./base";
import {
  Outpainting,
  BackgroundRemover,
  SuperResolution,
  Fashion,
  ObjectRemoval,
  Facegen,
  Inpainting,
  Headshot,
  FluxHeadshot,
} from "../schemas/image_editing";

export class ImageEditing extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/image_editing/"
        : "https://modelslab.com/api/v6/image_editing/",
      enterprise,
    });
  }

  async outpainting(schema: Outpainting) {
    return this.post(this.baseUrl + "outpaint", schema);
  }

  async backgroundRemover(schema: BackgroundRemover) {
    return this.post(this.baseUrl + "removebg_mask", schema);
  }

  async superResolution(schema: SuperResolution) {
    return this.post(this.baseUrl + "super_resolution", schema);
  }

  async fashion(schema: Fashion) {
    return this.post(this.baseUrl + "fashion", schema);
  }

  async objectRemover(schema: ObjectRemoval) {
    return this.post(this.baseUrl + "object_removal", schema);
  }

  async facegen(schema: Facegen) {
    return this.post(this.baseUrl + "face_gen", schema);
  }

  async inpainting(schema: Inpainting) {
    return this.post(this.baseUrl + "inpaint", schema);
  }

  async headshot(schema: Headshot) {
    return this.post(this.baseUrl + "head_shot", schema);
  }

  async fluxHeadshot(schema: FluxHeadshot) {
    return this.post(this.baseUrl + "flux_headshot", schema);
  }
}
