import { Observable } from "rxjs";
import { ArtistResponse } from "../models/ArtistResponse.model";
import { SearchResponse } from "../models/SearchResponse.model";
import { TopArtist } from "../models/TopArtist.model";
import { TopTrack } from "../models/TopTrack.model";

export type PaginationParams = {
  limit?: number
  page?: number
}

export interface IApiService {
  getTopArtists(params?: PaginationParams): Observable<TopArtist>
  getTopTracks(params?: PaginationParams): Observable<TopTrack>
  searchByArtist(term: string, params?: PaginationParams): Observable<SearchResponse<ArtistResponse>>
}
