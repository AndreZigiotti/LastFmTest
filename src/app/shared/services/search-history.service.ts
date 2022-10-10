import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ISearchHistoryService } from "../interfaces/ISearchHistoryService";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService implements ISearchHistoryService {

  private readonly _history$ = new BehaviorSubject<string[]>([])
  readonly history$ = this._history$.asObservable()

  private storageKey = 'searches'

  constructor(private localStorageService: LocalStorageService) {
    this.history = this.localStorageService.get(this.storageKey) || []
  }

  private get history(): string[] {
    return this._history$.getValue()
  }

  private set history(value: string[]) {
    this._history$.next(value)
    this.localStorageService.set(this.storageKey, value)
  }

  register(term: string) {
    const index = this.history.indexOf(term)
    const initialHistory = [...this.history]

    if(index > -1) {
      initialHistory.splice(index, 1)
    }

    initialHistory.push(term)
    this.history = initialHistory
  }

  delete(term: string) {
    const index = this.history.indexOf(term)
    const initialHistory = this.history

    initialHistory.splice(index, 1)
    this.history = initialHistory
  }
}
