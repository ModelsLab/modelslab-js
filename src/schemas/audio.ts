// src/schemas/audio.ts
import { z } from "zod";

import { BaseSchemaFields } from "./base";

export const Text2AudioSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_audio: z.any().optional(),
  voice_id: z.string().optional(),
  language: z.string().optional(),
  speed: z.number().optional(),
  temp: z.number().optional(),
  base64: z.string().optional(),
  stream: z.boolean().optional(),
});
export type Text2Audio = z.infer<typeof Text2AudioSchema>;

export const Text2SpeechSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  voice_id: z.string(),
  language: z.string(),
  speed: z.number().optional(),
  emotion: z.boolean().optional(),
  temp: z.boolean().optional(),
});
export type Text2Speech = z.infer<typeof Text2SpeechSchema>;

export const Voice2VoiceSchema = z.object({
  ...BaseSchemaFields,
  init_audio: z.any(),
  target_audio: z.any(),
  base64: z.boolean().optional(),
  temp: z.number().optional(),
  stream: z.boolean().optional(),
});
export type Voice2Voice = z.infer<typeof Voice2VoiceSchema>;

export const VoiceCoverSchema = z.object({
  ...BaseSchemaFields,
  init_audio: z.any(),
  model_id: z.string().optional(),
  pitch: z.string().optional(),
  algorithm: z.string().optional(),
  rate: z.string().optional(),
  seed: z.string().optional(),
  language: z.string().optional(),
  emotion: z.string().optional().default("neutral"),
  speed: z.number().optional(),
  radius: z.number().optional(),
  mix: z.number().optional(),
  hop_length: z.number().int().optional(),
  originality: z.number().optional(),
  lead_voice_volume_delta: z.number().int().optional(),
  backup_voice_volume_delta: z.number().int().optional(),
  instrument_volume_delta: z.number().int().optional(),
  reverb_size: z.number().optional(),
  wetness: z.number().optional(),
  dryness: z.number().optional(),
  damping: z.number().optional(),
  base64: z.boolean().optional(),
  temp: z.number().optional(),
});
export type VoiceCover = z.infer<typeof VoiceCoverSchema>;

export const MusicGenSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  init_audio: z.any().optional(),
  base64: z.string().optional(),
  temp: z.number().optional(),
  max_new_token: z.number().optional(),
  sampling_rate: z.number().optional(),
});
export type MusicGen = z.infer<typeof MusicGenSchema>;

export const LyricsGeneratorSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  length: z.string().optional(),
});
export type LyricsGenerator = z.infer<typeof LyricsGeneratorSchema>;

export const SongGeneratorSchema = z.object({
  ...BaseSchemaFields,
  lyrics_generation: z.boolean().optional(),
  init_audio: z.any().optional(),
  prompt: z.string(),
  model_id: z.string().optional(),
  lyrics: z.string().optional(),
});
export type SongGenerator = z.infer<typeof SongGeneratorSchema>;

export const Speech2TextSchema = z.object({
  ...BaseSchemaFields,
  audio_url: z.string(),
  input_language: z.string().optional(),
  timestamp_level: z.string().optional(),
});
export type Speech2Text = z.infer<typeof Speech2TextSchema>;

export const SFXSchema = z.object({
  ...BaseSchemaFields,
  prompt: z.string(),
  duration: z.number().optional(),
  temp: z.boolean().optional(),
});
export type SFX = z.infer<typeof SFXSchema>;

export const FetchSchema = z.object({
  id: z.string(),
  key: z.string(),
});
export type Fetch = z.infer<typeof FetchSchema>;
