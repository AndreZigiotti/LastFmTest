import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AvailableContexts } from "src/app/shared/types/AvailableContexts";

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() context?: AvailableContexts = 'primary'
  @Input() rounded?: 2 | 'circle' | 'pill' = 'pill'

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class')
  get class() {
    return `btn btn-${this.context} rounded-${this.rounded}`
  }

}
