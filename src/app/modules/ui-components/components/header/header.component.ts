import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchTermChange = new EventEmitter<string | null>()

  icon = faBars
  bgOpacity = 0

  constructor() { }

  ngOnInit(): void {
  }

  calcHeaderBgOpacity($event: Event) {
    const target = $event.target as HTMLElement
    const total = (target.scrollTop * 0.7) / 100

    this.bgOpacity = total < 1 ? total : 1
  }

  onSearchChange(searchTerm: string | null) {
    this.searchTermChange.emit(searchTerm)
  }
}
