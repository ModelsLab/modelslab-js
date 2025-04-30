// src/schemas/realtime.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

const RealtimeCommonFields = {
  negative_prompt: z.string().optional(),
  strength: z.number().optional(),
  base64: z.boolean().optional(),
  seed: z.number().optional(),
  guidance_scale: z.number().optional(),
  num_inference_steps: z.number().optional(),
  width: z.number().optional().default(512),
  height: z.number().optional().default(512),
  samples: z.number().optional().default(1),
};

export const RealtimeText2ImageSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...RealtimeCommonFields,
});
export type RealtimeText2Image = z.infer<typeof RealtimeText2ImageSchema>;

export const RealtimeImage2ImageSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_image: z.any(),
  ...RealtimeCommonFields,
});
export type RealtimeImage2Image = z.infer<typeof RealtimeImage2ImageSchema>;

export const RealtimeInpaintingSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_image: z.any(),
  mask_image: z.any(),
  ...RealtimeCommonFields,
});
export type RealtimeInpainting = z.infer<typeof RealtimeInpaintingSchema>;
