export interface Wan25I2VSchema {
  model_id?: string;
  init_image: string;
  init_audio: string;
  prompt: string;
}

export interface Wan25T2VSchema {
  model_id?: string;
  prompt: string;
  init_audio: string;
  enhance_prompt?: boolean;
  generate_audio?: boolean;
}
