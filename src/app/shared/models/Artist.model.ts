import { ImageSize } from "./Image.model"

export type Artist = {
  image: ImageSize[],
  listeners: string,
  name: string,
  mbid: string,
  playcount: string,
  streamable: string,
  url: string
}
