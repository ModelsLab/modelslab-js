// src/schemas/three-d.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

const ThreeDCommonFields = {
  resolution: z.union([z.string(), z.number()]).optional(),
  output_format: z.string().optional(),
  render: z.boolean().optional(),
  seed: z.number().optional(),
  ss_guidance_strength: z.number().optional(),
  slat_guidance_strength: z.number().optional(),
  slat_sampling_steps: z.number().optional(),
  mesh_simplify: z.number().optional(),
  chunk_size: z.number().optional(),
  temp: z.string().optional(),
};

export const Text23DSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  negative_prompt: z.string().optional(),
  guidance_scale: z.number().optional(),
  num_inference_steps: z.number().optional(),
  foreground_ratio: z.number().optional(),
  remove_bg: z.boolean().optional(),
  ...ThreeDCommonFields,
});
export type Text23D = z.infer<typeof Text23DSchema>;

export const Image23DSchema = z.object({
  ...BaseSchemaFields,
  image: z.any(),
  multi_image: z.boolean().optional(),
  ...ThreeDCommonFields,
});
export type Image23D = z.infer<typeof Image23DSchema>;
