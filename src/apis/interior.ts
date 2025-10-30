// src/apis/interior.ts
import { BaseAPI } from "./base";
import {
  Exterior,
  Scenario,
  Floor,
  RoomDecorator,
  Interior,
  ObjectRemoval,
  InteriorMixer,
} from "../schemas/interior";

export class InteriorAPI extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/interior/"
        : "https://modelslab.com/api/v6/interior/",
      enterprise,
    });
  }

  async interior(schema: Interior) {
    return this.post(this.baseUrl + "make", schema);
  }

  async roomDecorator(schema: RoomDecorator) {
    return this.post(this.baseUrl + "room_decorator", schema);
  }

  async floor(schema: Floor) {
    return this.post(this.baseUrl + "floor_planning", schema);
  }

  async scenario(schema: Scenario) {
    return this.post(this.baseUrl + "scenario", schema);
  }

  async exteriorRestorer(schema: Exterior) {
    return this.post(this.baseUrl + "exterior_restorer", schema);
  }

  async objectRemoval(schema: ObjectRemoval) {
    return this.post(this.baseUrl + "object_removal", schema);
  }

  async interiorMixer(schema: InteriorMixer) {
    return this.post(this.baseUrl + "interior_mixer", schema);
  }
}
