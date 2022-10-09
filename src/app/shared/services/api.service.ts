import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { API_METHODS } from "../constants/constants";
import { IApiService, PaginationParams } from "../interfaces/IApiService";
import { ArtistResponse } from "../models/ArtistResponse.model";
import { SearchResponse } from "../models/SearchResponse.model";
import { TopArtist } from "../models/TopArtist.model";
import { TopTrack } from "../models/TopTrack.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {

  constructor(private http: HttpClient) { }

  private get apiHost() {
    return environment.apiHost
  }

  getTopArtists({ limit = 10, page = 1 }: PaginationParams): Observable<TopArtist>  {
    return this.http.get<TopArtist>(this.apiHost, {
      params: {
        method: API_METHODS.CHART.GET_TOP_ARTISTS,
        limit,
        page
      }
    })
  }

  getTopTracks({ limit = 10, page = 1 }: PaginationParams): Observable<TopTrack> {
    return this.http.get<TopTrack>(this.apiHost, {
      params: {
        method: API_METHODS.CHART.GET_TOP_TRACKS,
        limit,
        page
      }
    })
  }

  searchByArtist(term: string, { limit = 12, page = 1 }: PaginationParams) {
    return this.http.get<SearchResponse<ArtistResponse>>(this.apiHost, {
      params: {
        method: API_METHODS.ARTIST.SEARCH,
        artist: term,
        limit
      }
    })
  }
}
