// src/apis/deepfake.ts
import { BaseAPI } from "./base";
import {
  SingleVideoSwap,
  SpecificFaceSwap,
  MultipleFaceSwap,
  SpecificVideoSwap,
} from "../schemas/deepfake";

export class DeepFake extends BaseAPI {
  constructor(apiKey: string, enterprise: boolean = false) {
    super({
      apiKey,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/deepfake/"
        : "https://modelslab.com/api/v6/deepfake/",
      enterprise,
    });
  }

  async specificFaceSwap(schema: SpecificFaceSwap) {
    return this.post(this.baseUrl + "single_face_swap", schema);
  }

  async multipleFaceSwap(schema: MultipleFaceSwap) {
    return this.post(this.baseUrl + "multiple_face_swap", schema);
  }

  async multipleVideoSwap(schema: SpecificVideoSwap) {
    return this.post(this.baseUrl + "specific_video_swap", schema);
  }

  async singleVideoSwap(schema: SingleVideoSwap) {
    return this.post(this.baseUrl + "single_video_swap", schema);
  }
}
