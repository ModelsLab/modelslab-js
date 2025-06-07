// src/schemas/base.ts
import { z } from "zod";

export const BaseSchemaFields = {
  key: z.string(),
  webhook: z.string().optional(),
  track_id: z.string().optional(),
};
