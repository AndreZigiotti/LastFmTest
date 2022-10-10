import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { IApiService } from "src/app/shared/interfaces/IApiService";
import { Artist } from "src/app/shared/models/Artist.model";
import { Tag } from "src/app/shared/models/Tag.model";
import { TrackAlt } from "src/app/shared/models/Track.model";
import { BannerService, BannerSettings } from "../ui-components/services/banner.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, OnDestroy {

  loading = false
  topArtists!: Artist[]
  topTracks!: TrackAlt[]
  topTags!: Tag[]

  private _unsubscribe$ = new Subject()

  constructor(
    @Inject('IApiService') private apiService: IApiService,
    private bannerService: BannerService
  ) {}

  ngOnInit(): void {
    this.refresh()
    this.bannerService.reset()
  }

  ngOnDestroy() {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

  refresh() {
    this.apiService.getTopArtists({ limit: 12 })
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(res => {
        this.topArtists = res.artists.artist
      })

    this.apiService.getTopTracks({ limit: 6 })
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(res => {
        this.topTracks = res.tracks.track
      })

    this.apiService.getTopTags({ limit: 20 })
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(res => {
        this.topTags = res.tags.tag
      })
  }

  changeBanner(settings: BannerSettings) {
    this.bannerService.setSettings(settings)
  }
}
