import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { IApiService } from "src/app/shared/interfaces/IApiService";
import { Artist } from "src/app/shared/models/Artist.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  term = ''
  artists!: Artist[]

  private _unsubscribe$ = new Subject()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IApiService') private apiService: IApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(params => {
        this.term = params?.['term'] || ''

        if(!this.term) {
          this.router.navigate(['/'])
        }

        this.refresh()
      })
  }

  ngOnDestroy() {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

  refresh() {
    this.apiService.searchByArtist(this.term, {})
      .subscribe(res => this.artists = res.results?.artistmatches?.artist)
    this.apiService.getTopArtists({}).subscribe(res => console.log(res))
  }

}
