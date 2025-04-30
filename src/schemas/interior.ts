// src/schemas/interior.ts
import { z } from "zod";
import { BaseSchemaFields } from "./base";

const InteriorCommonFields = {
  init_image: z.any().optional(),
  negative_prompt: z.string().optional(),
  strength: z.number().optional(),
  base64: z.boolean().optional(),
  seed: z.number().optional(),
  guidance_scale: z.number().optional(),
  num_inference_steps: z.number().optional(),
};

export const SkechRendringSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...InteriorCommonFields,
});
export type SkechRendring = z.infer<typeof SkechRendringSchema>;

export const InteriorSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...InteriorCommonFields,
});
export type Interior = z.infer<typeof InteriorSchema>;

export const RoomDecoratorSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...InteriorCommonFields,
});
export type RoomDecorator = z.infer<typeof RoomDecoratorSchema>;

export const FloorSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...InteriorCommonFields,
});
export type Floor = z.infer<typeof FloorSchema>;

export const ExteriorSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...InteriorCommonFields,
});
export type Exterior = z.infer<typeof ExteriorSchema>;

export const ScenarioSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  ...InteriorCommonFields,
  scenario: z.string().optional(),
});
export type Scenario = z.infer<typeof ScenarioSchema>;
