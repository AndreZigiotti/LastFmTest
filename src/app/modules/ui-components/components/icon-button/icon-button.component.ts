import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: '[app-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon?: IconDefinition
  @Input() size?: 'lg' | 'sm' | 'md' = 'md'
  @Input() rounded?: 2 | 'circle' = 'circle'

  defaultClasses = 'btn btn-transparent'

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class') get class() {
    return `${this.defaultClasses} btn-${this.size} rounded-${this.rounded}`
  }

}
