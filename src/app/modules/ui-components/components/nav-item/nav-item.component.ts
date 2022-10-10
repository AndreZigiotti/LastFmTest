import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-item, [app-nav-item]',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() path?: string | string[]
  @Input() label?: string
  @Input() icon?: IconDefinition

  constructor() { }

  ngOnInit(): void {
  }

}
