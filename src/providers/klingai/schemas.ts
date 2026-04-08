export interface KlingV21I2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration: string;
}

export interface KlingV25TurboI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration: string;
}

export interface KlingV25TurboT2VSchema {
  model_id?: string;
  prompt: string;
  duration: string;
  aspect_ratio?: string;
}

export interface KlingV2MasterT2VSchema {
  model_id?: string;
  prompt: string;
  duration: string;
  aspect_ratio?: string;
}

export interface KlingV2MasterI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration: string;
}

export interface KlingV21MasterT2VSchema {
  model_id?: string;
  prompt: string;
  duration: string;
  aspect_ratio?: string;
}

export interface KlingV21MasterI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration: string;
}
