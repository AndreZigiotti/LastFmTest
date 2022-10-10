import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((params) => {
        const term = params?.['term']
        if(term) this.searchFormControl.setValue(term)
      })

    this.router.events
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((event) => {
        if(event instanceof NavigationStart) this.searchFormControl.reset()
      })

    this.searchFormControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        takeUntil(this._unsubscribe$)
      )
      .subscribe(value => {
        this.emitValue()
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

  emitValue() {
    this.searchTextChanges.emit(this.searchFormControl.value)
  }

}
