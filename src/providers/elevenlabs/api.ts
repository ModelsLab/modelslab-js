import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import {
  ScribeV1Schema,
  ElevenMultilingualV2Schema,
  ElevenEnglishStsV2Schema,
  ElevenSoundEffectSchema,
  MusicV1Schema,
} from "./schemas";

export class ElevenLabsProvider extends BaseAPI {
  static readonly MODEL_SCRIBE_V1 = "scribe_v1";
  static readonly MODEL_ELEVEN_MULTILINGUAL_V2 = "eleven_multilingual_v2";
  static readonly MODEL_ELEVEN_ENGLISH_STS_V2 = "eleven_english_sts_v2";
  static readonly MODEL_ELEVEN_SOUND_EFFECT = "eleven_sound_effect";
  static readonly MODEL_MUSIC_V1 = "music_v1";

  constructor(client: Client) {
    super({
      key: client.key,
      baseUrl: client.baseUrl,
      fetchRetry: client.fetchRetry,
      fetchTimeout: client.fetchTimeout,
    });
  }

  static getModelIds() {
    return {
      scribe_v1: ElevenLabsProvider.MODEL_SCRIBE_V1,
      eleven_multilingual_v2: ElevenLabsProvider.MODEL_ELEVEN_MULTILINGUAL_V2,
      eleven_english_sts_v2: ElevenLabsProvider.MODEL_ELEVEN_ENGLISH_STS_V2,
      eleven_sound_effect: ElevenLabsProvider.MODEL_ELEVEN_SOUND_EFFECT,
      music_v1: ElevenLabsProvider.MODEL_MUSIC_V1,
    };
  }

  async scribeV1(schema: ScribeV1Schema) {
    const endpoint = this.baseUrl + "v7/voice/speech-to-text";
    const data = {
      key: this.key,
      model_id: schema.model_id || ElevenLabsProvider.MODEL_SCRIBE_V1,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async elevenMultilingualV2(schema: ElevenMultilingualV2Schema) {
    const endpoint = this.baseUrl + "v7/voice/text-to-speech";
    const data = {
      key: this.key,
      model_id: schema.model_id || ElevenLabsProvider.MODEL_ELEVEN_MULTILINGUAL_V2,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async elevenEnglishStsV2(schema: ElevenEnglishStsV2Schema) {
    const endpoint = this.baseUrl + "v7/voice/speech-to-speech";
    const data = {
      key: this.key,
      model_id: schema.model_id || ElevenLabsProvider.MODEL_ELEVEN_ENGLISH_STS_V2,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async elevenSoundEffect(schema: ElevenSoundEffectSchema) {
    const endpoint = this.baseUrl + "v7/voice/sound-generation";
    const data = {
      key: this.key,
      model_id: schema.model_id || ElevenLabsProvider.MODEL_ELEVEN_SOUND_EFFECT,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async musicV1(schema: MusicV1Schema) {
    const endpoint = this.baseUrl + "v7/voice/music-gen";
    const data = {
      key: this.key,
      model_id: schema.model_id || ElevenLabsProvider.MODEL_MUSIC_V1,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
