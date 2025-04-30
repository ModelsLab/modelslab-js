// src/schemas/faceswap.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

export const SpecificFaceSwapSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  target_image: z.any(),
  reference_image: z.any(),
  watermark: z.boolean().optional(),
});
export type SpecificFaceSwap = z.infer<typeof SpecificFaceSwapSchema>;

export const MultipleFaceSwapSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  target_image: z.any(),
  watermark: z.boolean().optional(),
});
export type MultipleFaceSwap = z.infer<typeof MultipleFaceSwapSchema>;

export const SingleVideoSwapSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  init_video: z.any(),
  output_format: z.string().optional().default("mp4"),
  watermark: z.boolean().optional(),
});
export type SingleVideoSwap = z.infer<typeof SingleVideoSwapSchema>;

export const SpecificVideoSwapSchema = z.object({
  ...BaseSchemaFields,
  init_image: z.any(),
  init_video: z.any(),
  reference_image: z.any(),
  output_format: z.string().optional().default("mp4"),
  watermark: z.boolean().optional(),
});
export type SpecificVideoSwap = z.infer<typeof SpecificVideoSwapSchema>;
