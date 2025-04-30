// src/schemas/video.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

const VideoCommonFields = {
  negative_prompt: z.string().optional(),
  seed: z.number().optional(),
  width: z.number().optional().default(512),
  height: z.number().optional().default(512),
  num_frames: z.number().optional().default(30),
  num_inference_steps: z.number().optional().default(50),
  guidance_scale: z.number().optional().default(7.5),
  fps: z.number().optional().default(8),
};

export const Text2VideoSchema = z.object({
  ...BaseSchemaFields,
  model_id: z.string(),
  prompt: z.string(),
  ...VideoCommonFields,
});
export type Text2Video = z.infer<typeof Text2VideoSchema>;

export const Image2VideoSchema = z.object({
  ...BaseSchemaFields,
  model_id: z.string(),
  prompt: z.string(),
  init_image: z.any().optional(),
  ...VideoCommonFields,
});
export type Image2Video = z.infer<typeof Image2VideoSchema>;

export const Text2VideoUltraSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  negative_prompt: z.string().optional(),
  seed: z.number().optional(),
  resolution: z.string().optional().default("512x512"),
  num_frames: z.number().optional().default(30),
  num_inference_steps: z.number().optional().default(50),
  guidance_scale: z.number().optional().default(7.5),
  fps: z.number().optional().default(8),
  portrait: z.boolean().optional(),
  sample_shift: z.number().optional(),
});
export type Text2VideoUltra = z.infer<typeof Text2VideoUltraSchema>;
