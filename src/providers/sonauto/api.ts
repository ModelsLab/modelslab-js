import { BaseAPI } from "../../apis/base";
import { Client } from "../../client";
import { SonautoSongSchema, SongExtenderSchema, SongInpaintSchema } from "./schemas";

export class SonautoProvider extends BaseAPI {
  static readonly MODEL_SONAUTO_SONG = "sonauto_song";
  static readonly MODEL_SONG_EXTENDER = "song-extender";
  static readonly MODEL_SONG_INPAINT = "song-inpaint";

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
      sonauto_song: SonautoProvider.MODEL_SONAUTO_SONG,
      song_extender: SonautoProvider.MODEL_SONG_EXTENDER,
      song_inpaint: SonautoProvider.MODEL_SONG_INPAINT,
    };
  }

  async sonautoSong(schema: SonautoSongSchema) {
    const endpoint = this.baseUrl + "v7/voice/music-gen";
    const data = {
      key: this.key,
      model_id: schema.model_id || SonautoProvider.MODEL_SONAUTO_SONG,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async songExtender(schema: SongExtenderSchema) {
    const endpoint = this.baseUrl + "v7/voice/song-extender";
    const data = {
      key: this.key,
      model_id: schema.model_id || SonautoProvider.MODEL_SONG_EXTENDER,
      ...schema,
    };
    return this.post(endpoint, data);
  }

  async songInpaint(schema: SongInpaintSchema) {
    const endpoint = this.baseUrl + "v7/voice/song-inpaint";
    const data = {
      key: this.key,
      model_id: schema.model_id || SonautoProvider.MODEL_SONG_INPAINT,
      ...schema,
    };
    return this.post(endpoint, data);
  }
}
