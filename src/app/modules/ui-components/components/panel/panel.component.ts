import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() title?: string
  @Input() showNavigation?: boolean = false
  @Input() path?: string | string[]

  @Output() navigateToNext = new EventEmitter()
  @Output() navigateToPrevious = new EventEmitter()

  prevIcon = faChevronLeft
  nextIcon = faChevronRight

  constructor() { }

  ngOnInit(): void {
  }

  get showPanelHeader() {
    return !!this.title || !!this.showNavigation || !!this.path
  }

  onNextClick() {
    this.navigateToNext.emit()
  }

  onPrevClick() {
    this.navigateToPrevious.emit()
  }

}
