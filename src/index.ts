// src/index.ts
export { Client } from "./client";
export { BaseAPI } from "./apis/base";
export { Community } from "./apis/community";
export { DeepFake } from "./apis/deepfake";
export { ThreeD } from "./apis/threed";
export { Realtime } from "./apis/realtime";
export { InteriorAPI } from "./apis/interior";
export { Audio } from "./apis/audio";
export { ImageEditing } from "./apis/image_editing";
export { Video } from "./apis/video";

// Export schemas
export * from "./schemas/base";
export * from "./schemas/community";
export * from "./schemas/deepfake";
export * from "./schemas/threed";
export * from "./schemas/realtime";
export * from "./schemas/interior";
export * from "./schemas/audio";
export * from "./schemas/video";

// Export image editing schemas with aliases to avoid conflicts
export {
  Outpainting,
  OutpaintingSchema,
  BackgroundRemover,
  BackgroundRemoverSchema,
  SuperResolution,
  SuperResolutionSchema,
  Fashion,
  FashionSchema,
  ObjectRemoval,
  ObjectRemovalSchema,
  Facegen,
  FacegenSchema,
  Inpainting as ImageEditingInpainting,
  InpaintingSchema as ImageEditingInpaintingSchema,
  Headshot,
  HeadshotSchema,
  FluxHeadshot,
  FluxHeadshotSchema,
} from "./schemas/image_editing";
