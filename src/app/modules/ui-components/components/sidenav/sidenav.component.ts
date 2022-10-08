import { Component, Input, OnInit } from '@angular/core';
import { Menu } from "src/app/shared/types/Menu";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() menus: Menu[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
