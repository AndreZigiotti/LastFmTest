import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy {
  @Output() searchTextChanges = new EventEmitter<string | null>()

  icon = faSearch
  searchFormControl = new FormControl('')

  private _unsubscribe$ = new Subject()

  constructor() {
    this.searchFormControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        takeUntil(this._unsubscribe$)
      )
      .subscribe(value => {
        this.searchTextChanges.emit(value)
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

}
