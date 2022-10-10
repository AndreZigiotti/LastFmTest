import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { distinctUntilChanged, Subject, takeUntil } from "rxjs";
import { BannerService, BannerSettings } from "../../services/banner.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {

  settings!: BannerSettings
  icon = faHeart

  private _unsubscribe$ = new Subject()

  @HostBinding('style.backgroundColor') bgColor: string = '';

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.settings$
      .pipe(
        // distinctUntilChanged(),
        takeUntil(this._unsubscribe$)
      )
      .subscribe(settings => {
        this.settings = settings
        this.bgColor = settings.color || '';
      })
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

}
