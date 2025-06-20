// src/schemas/image.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

const SharedImageFields = {
  model_id: z.string(),
  negative_prompt: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  samples: z.number().optional(),
  num_inference_steps: z.number().optional(),
  safety_checker: z.string().optional(),
  seed: z.number().optional(),
  enhance_prompt: z.string().optional(),
  guidance_scale: z.number().optional(),
  multi_lingual: z.string().optional(),
  panorama: z.string().optional(),
  self_attention: z.string().optional(),
  upscale: z.string().optional(),
  lora_model: z.string().optional(),
  lora_strength: z.number().optional(),
  scheduler: z.string().optional(),
  clip_skip: z.number().optional(),
};

export const Text2ImageSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...SharedImageFields,
});
export type Text2Image = z.infer<typeof Text2ImageSchema>;

export const Image2ImageSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_image: z.any().optional(),
  ...SharedImageFields,
});
export type Image2Image = z.infer<typeof Image2ImageSchema>;

export const InpaintingSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_image: z.any().optional(),
  mask_image: z.any().optional(),
  ...SharedImageFields,
});
export type Inpainting = z.infer<typeof InpaintingSchema>;

export const ControlNetSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_image: z.any().optional(),
  mask_image: z.any().optional(),
  controlnet_model: z.string().optional(),
  controlnet_type: z.string().optional(),
  strength: z.number().optional(),
  ...SharedImageFields,
});
export type ControlNet = z.infer<typeof ControlNetSchema>;
