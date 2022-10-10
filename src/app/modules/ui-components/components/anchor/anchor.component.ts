import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AvailableContexts } from "src/app/shared/types/AvailableContexts";

@Component({
  selector: '[app-anchor]',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {
  @Input() context?: AvailableContexts = 'default'

  defaultClasses = 'text-decoration-none'

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class') get class() {
    return `${this.defaultClasses} ${this.context}`
  }

}
