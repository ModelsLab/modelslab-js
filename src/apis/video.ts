// src/apis/video.ts
import { BaseAPI } from "./base";
import { Text2Video, Image2Video } from "../schemas/video";

export class Video extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/video/"
        : "https://modelslab.com/api/v6/video/",
      enterprise,
    });
  }

  async textToVideo(schema: Text2Video) {
    return this.post(this.baseUrl + "text2video", schema);
  }

  async imageToVideo(schema: Image2Video) {
    return this.post(this.baseUrl + "img2video", schema);
  }
}