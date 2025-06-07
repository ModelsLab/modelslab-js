// src/apis/audio.ts
import { BaseAPI } from "./base";
import {
  Text2Audio,
  Text2Speech,
  Voice2Voice,
  VoiceCover,
  MusicGen,
  LyricsGenerator,
  SongGenerator,
  Speech2Text,
  SFX,
} from "../schemas/audio";

export class Audio extends BaseAPI {
  constructor(key: string, enterprise: boolean = false) {
    super({
      key,
      baseUrl: enterprise
        ? "https://modelslab.com/api/v1/enterprise/voice/"
        : "https://modelslab.com/api/v6/voice/",
      enterprise,
    });
  }

  async textToAudio(schema: Text2Audio) {
    return this.post(this.baseUrl + "text_to_audio", schema);
  }

  async textToSpeech(schema: Text2Speech) {
    return this.post(this.baseUrl + "text_to_speech", schema);
  }

  async voiceToVoice(schema: Voice2Voice) {
    return this.post(this.baseUrl + "voice_to_voice", schema);
  }

  async voiceCover(schema: VoiceCover) {
    return this.post(this.baseUrl + "voice_cover", schema);
  }

  async musicGen(schema: MusicGen) {
    return this.post(this.baseUrl + "music_gen", schema);
  }

  async lyricsGen(schema: LyricsGenerator) {
    return this.post(this.baseUrl + "lyrics_generator", schema);
  }

  async songGenerator(schema: SongGenerator) {
    return this.post(this.baseUrl + "song_generator", schema);
  }

  async speechToText(schema: Speech2Text) {
    return this.post("https://modelslab.com/api/v6/whisper/transcribe", schema);
  }

  async sfxGen(schema: SFX) {
    return this.post(this.baseUrl + "sfx", schema);
  }
}
