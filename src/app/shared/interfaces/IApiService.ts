import { Observable } from "rxjs";
import { AlbumResponse } from "../models/AlbumResponse.model";
import { ArtistResponse } from "../models/ArtistResponse.model";
import { SearchResponse } from "../models/SearchResponse.model";
import { TopArtist } from "../models/TopArtist.model";
import { TopTag } from "../models/TopTag.model";
import { TopTrack } from "../models/TopTrack.model";
import { TrackResponse } from "../models/TrackResponse.model";

export type PaginationParams = {
  limit?: number
  page?: number
}

export interface IApiService {
  getTopArtists(params?: PaginationParams): Observable<TopArtist>
  getTopTracks(params?: PaginationParams): Observable<TopTrack>
  getTopTags(params?: PaginationParams): Observable<TopTag>
  searchByArtist(term: string, params?: PaginationParams): Observable<SearchResponse<ArtistResponse>>
  searchByTrack(term: string, params?: PaginationParams): Observable<SearchResponse<TrackResponse>>
  searchByAlbum(term: string, params?: PaginationParams): Observable<SearchResponse<AlbumResponse>>
}
