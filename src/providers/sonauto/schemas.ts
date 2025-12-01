export interface SonautoSongSchema {
  model_id?: string;
  prompt: string;
  make_instrumental?: boolean;
  wait_audio?: boolean;
}

export interface SongExtenderSchema {
  model_id?: string;
  prompt: string;
  init_audio: string;
}

export interface SongInpaintSchema {
  model_id?: string;
  init_audio: string;
  prompt: string;
}
