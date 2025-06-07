// src/apis/threeD.ts
import { BaseAPI } from "./base";
import { Text23D, Image23D } from "../schemas/threed";

export class ThreeD extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/3d/"
        : "https://modelslab.com/api/v6/3d/",
      enterprise,
    });
  }

  async textTo3D(schema: Text23D) {
    return this.post(this.baseUrl + "text_to_3d", schema);
  }

  async imageTo3D(schema: Image23D) {
    return this.post(this.baseUrl + "image_to_3d", schema);
  }
}
