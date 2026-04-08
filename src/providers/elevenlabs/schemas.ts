export interface ScribeV1Schema {
  model_id?: string;
  init_audio: string;
}

export interface ElevenMultilingualV2Schema {
  model_id?: string;
  prompt: string;
  voice_id: string;
}

export interface ElevenEnglishStsV2Schema {
  model_id?: string;
  init_audio: string;
  voice_id: string;
}

export interface ElevenSoundEffectSchema {
  model_id?: string;
  prompt: string;
  duration_seconds?: number;
  prompt_influence?: number;
}

export interface MusicV1Schema {
  model_id?: string;
  prompt: string;
  duration?: number;
}
