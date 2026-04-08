export interface Gen4ImageSchema {
  model_id?: string;
  prompt: string;
  aspect_ratio?: string;
}

export interface Gen4ImageTurboSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface Gen4AlephSchema {
  model_id?: string;
  init_video: string;
  prompt: string;
}
