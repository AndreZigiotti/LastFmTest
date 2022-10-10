import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

type Colors = '#8ecae6' | '#219ebc' | '#023047' | '#ffb703' | '#fb8500'

export type BannerSettings = {
  title?: string
  name?: string
  listeners?: string
  color?: Colors
}

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private defaultSettings: BannerSettings = {
    name: 'Dream Theater',
    title: 'A View From The Top Of The World',
    color: '#219ebc',
  }

  private readonly _settings$ = new BehaviorSubject<BannerSettings>(this.defaultSettings)
  readonly settings$ = this._settings$.asObservable()

  constructor() { }

  private get settings(): BannerSettings {
    return this._settings$.getValue()
  }

  private set settings(value: BannerSettings) {
    this._settings$.next(value)
  }

  setSettings(newSettings: BannerSettings) {
    const colors: Colors[] = ['#023047', '#219ebc', '#8ecae6', '#fb8500', '#ffb703']

    this.settings = {
      ...newSettings,
      color: colors[Math.floor((Math.random() * colors.length))]
    }
  }

  reset() {
    this.settings = this.defaultSettings
  }
}
