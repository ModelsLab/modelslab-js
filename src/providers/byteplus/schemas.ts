export interface SeeDreamT2ISchema {
  model_id?: string;
  prompt: string;
  width: number;
  height: number;
}

export interface SeeDanceT2VSchema {
  model_id?: string;
  prompt: string;
  aspect_ratio?: string;
  resolution?: string;
  camera_fixed?: boolean;
}

export interface SeeDanceI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface SeeEditI2ISchema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface SeeDream4Schema {
  model_id?: string;
  prompt: string;
  width?: number;
  height?: number;
  samples?: number;
}

export interface SeeDream4I2ISchema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface SeeDance10ProI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration?: string;
}

export interface OmniHumanSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface OmniHuman15Schema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface SeeDance10ProFastI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration?: string;
}

export interface SeeDance10ProFastT2VSchema {
  model_id?: string;
  prompt: string;
  duration?: string;
}
