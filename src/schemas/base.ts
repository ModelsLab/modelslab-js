// src/schemas/base.ts
import { z } from "zod";

export const BaseSchemaFields = {
  api_key: z.string(),
  webhook: z.string().optional(),
  track_id: z.string().optional(),
};
