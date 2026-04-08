export interface Imagen4Schema {
  model_id?: string;
  prompt: string;
  aspect_ratio: string;
}

export interface Imagen3Schema {
  model_id?: string;
  prompt: string;
}

export interface Imagen40FastGenerateSchema {
  model_id?: string;
  prompt: string;
  aspect_ratio: string;
}

export interface Imagen40UltraSchema {
  model_id?: string;
  prompt: string;
  aspect_ratio: string;
  samples?: number;
}

export interface NanoBananaT2ISchema {
  model_id?: string;
  prompt: string;
  width?: number;
  height?: number;
  samples?: number;
}

export interface NanoBananaSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  width?: number;
  height?: number;
}

export interface NanoBanaProSchema {
  model_id?: string;
  prompt: string;
  width?: number;
  height?: number;
  samples?: number;
}

export interface NanoBanaProImageEditSchema {
  model_id?: string;
  init_image: string[];
  prompt: string;
}
