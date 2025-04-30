// src/schemas/vision.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

const Dimensions = {
  width: z.number().optional().default(512),
  height: z.number().optional().default(512),
};

export const OutpaintingSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  image: z.any(),
  negative_prompt: z.string().optional(),
  ...Dimensions,
  overlap_width: z.number().optional().default(64),
  num_inference_steps: z.number().optional().default(20),
  guidance_scale: z.number().optional().default(7.5),
  seed: z.number().optional(),
});
export type Outpainting = z.infer<typeof OutpaintingSchema>;

export const BlipDiffusionSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  negative_prompt: z.string().optional(),
  task: z.string().optional().default("text_to_image"),
  condition_image: z.any().optional(),
  condition_subject: z.string().optional(),
  target_subject: z.string().optional(),
  style_subject: z.string().optional(),
  controlnet_condition_image: z.any().optional(),
  ...Dimensions,
  guidance_scale: z.number().optional().default(7.5),
});
export type BlipDiffusion = z.infer<typeof BlipDiffusionSchema>;

export const MagicMixSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  negative_prompt: z.string().optional(),
  image: z.any(),
  ...Dimensions,
  steps: z.number().optional().default(20),
  guidance_scale: z.number().optional().default(7.5),
  seed: z.number().optional(),
  kmax: z.number().optional().default(0.5),
  kmin: z.number().optional().default(0.5),
  mix_factor: z.number().optional().default(0.5),
  samples: z.number().optional().default(1),
});
export type MagicMix = z.infer<typeof MagicMixSchema>;

export const BackgroundRemoverSchema = z.object({
  ...BaseSchemaFields,
  image: z.any(),
  alpha_matting: z.boolean().optional().default(false),
  post_process_mask: z.boolean().optional().default(false),
  only_mask: z.boolean().optional().default(false),
  inverse_mask: z.boolean().optional().default(false),
  seed: z.number().optional(),
  base64: z.boolean().optional().default(false),
  alpha_matting_foreground_threshold: z.number().optional().default(240),
  alpha_matting_background_threshold: z.number().optional().default(20),
  alpha_matting_erode_size: z.number().optional().default(5),
});
export type BackgroundRemover = z.infer<typeof BackgroundRemoverSchema>;

export const SuperResolutionSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  model_id: z.string().optional().default("ultra_resolution"),
  scale: z.number().optional().default(4),
  face_enhance: z.boolean().optional().default(false),
});
export type SuperResolution = z.infer<typeof SuperResolutionSchema>;

export const FashionSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  prompt: z.string().optional(),
  negative_prompt: z.string().optional(),
  ...Dimensions,
  num_inference_steps: z.number().optional().default(20),
  cloth_image: z.any().optional(),
  cloth_type: z.string().optional().default("dress"),
});
export type Fashion = z.infer<typeof FashionSchema>;

export const ObjectRemovalSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  mask_image: z.any(),
});
export type ObjectRemoval = z.infer<typeof ObjectRemovalSchema>;

const FaceGenCommon = {
  prompt: z.string(),
  face_image: z.any().optional(),
  ...Dimensions,
  num_inference_steps: z.number().optional().default(20),
  guidance_scale: z.number().optional().default(7.5),
  s_scale: z.number().optional().default(7.5),
  samples: z.number().optional().default(1),
  safety_checker: z.boolean().optional().default(true),
  safety_checker_type: z.string().optional().default("black"),
  base64: z.boolean().optional().default(false),
  style: z.string().optional().default("realistic"),
};

export const FacegenSchema = z.object({
  ...BaseSchemaFields,
  ...FaceGenCommon,
});
export type Facegen = z.infer<typeof FacegenSchema>;

export const HeadshotSchema = z.object({
  ...BaseSchemaFields,
  ...FaceGenCommon,
});
export type Headshot = z.infer<typeof HeadshotSchema>;

export const FluxHeadshotSchema = z.object({
  ...BaseSchemaFields,
  ...FaceGenCommon,
});
export type FluxHeadshot = z.infer<typeof FluxHeadshotSchema>;

export const InpaintingSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_image: z.any(),
  mask_image: z.any(),
  negative_prompt: z.string().optional(),
  ...Dimensions,
  num_inference_steps: z.number().optional().default(20),
  guidance_scale: z.number().optional().default(7.5),
  seed: z.number().optional(),
  samples: z.number().optional().default(1),
  base64: z.boolean().optional().default(false),
});
export type Inpainting = z.infer<typeof InpaintingSchema>;
