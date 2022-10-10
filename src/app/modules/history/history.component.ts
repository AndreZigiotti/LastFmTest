import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { ISearchHistoryService } from "src/app/shared/interfaces/ISearchHistoryService";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  history: string[] = []

  private _unsubscribe$ = new Subject()

  constructor(@Inject('ISearchHistoryService') private historyService: ISearchHistoryService) { }

  ngOnInit(): void {
    this.historyService.history$
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(hist => this.history = hist)
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

  onDelete(term: string) {
    this.historyService.delete(term)
  }
}
