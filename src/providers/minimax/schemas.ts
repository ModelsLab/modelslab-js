export interface Hailuo23T2VSchema {
  model_id?: string;
  prompt: string;
}

export interface Hailuo02T2VSchema {
  model_id?: string;
  prompt: string;
}

export interface Hailuo23I2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration?: string;
}

export interface Hailuo23FastI2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
  duration?: string;
}

export interface Hailuo02I2VSchema {
  model_id?: string;
  init_image: string;
  prompt: string;
}

export interface Hailuo02StartEndFrameSchema {
  model_id?: string;
  init_image: string[];
  prompt: string;
}
