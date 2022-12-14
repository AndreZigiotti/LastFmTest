import { Artist } from "./Artist.model";

export type Track = Omit<Artist, 'playcount'> & {
  artist: string;
}

export type TrackAlt = Track & {
  artist: Partial<Artist>
}
