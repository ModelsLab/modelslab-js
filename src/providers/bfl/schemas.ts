export interface FluxPro1752000026Schema {
  model_id?: string;
  prompt: string;
  lora_model?: string;
  width: number;
  height: number;
  negative_prompt?: string;
  scheduler?: string;
  guidance_scale?: number;
}

export interface FluxPro11Schema {
  model_id?: string;
  prompt: string;
  width?: number;
  height?: number;
  samples?: number;
}

export interface FluxPro11UltraSchema {
  model_id?: string;
  prompt: string;
  aspect_ratio?: string;
  output_format?: string;
}

export interface FluxKontextProSchema {
  model_id?: string;
  prompt: string;
  init_image: string;
  aspect_ratio?: string;
  output_format?: string;
}

export interface Flux2ProSchema {
  model_id?: string;
  prompt: string;
  width?: number;
  height?: number;
  samples?: number;
  guidance_scale?: number;
}

export interface Flux2ProImageEditingSchema {
  model_id?: string;
  prompt: string;
  init_image: string;
  width?: number;
  height?: number;
  guidance_scale?: number;
}
