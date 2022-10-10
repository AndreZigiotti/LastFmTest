import { Component, Inject, OnInit } from '@angular/core';
import { Menu } from "./shared/types/Menu";
import { faCompactDisc, faGlobe, faHistory, faMusic,  } from '@fortawesome/free-solid-svg-icons'
import { Router } from "@angular/router";
import { ISearchHistoryService } from "./shared/interfaces/ISearchHistoryService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'L5LastFm';
  menus: Menu[] = [
    {
      title: 'Menu',
      items: [
        {
          icon: faGlobe,
          label: 'Explore',
          path: 'explore'
        },
        {
          icon: faHistory,
          label: 'History',
          path: 'history'
        }
      ]
    }
  ]

  constructor(
    private router: Router,
    @Inject('ISearchHistoryService') private searchHistory: ISearchHistoryService
  ) {}

  ngOnInit() {}

  onSearchTermChange(term: string | null) {
    if(!term) {
      return
    }

    this.searchHistory.register(term)
    this.router.navigate(['/search'], {
      queryParams: {
        term: term || ''
      }
    })
  }
}
