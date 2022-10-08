import { Component } from '@angular/core';
import { Menu } from "./shared/types/Menu";
import { faCompactDisc, faGlobe, faMusic,  } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'L5LastFm';

  menus: Menu[] = [
    {
      title: 'Menu',
      items: [
        {
          icon: faGlobe,
          label: 'Explore',
          path: '/'
        },
        {
          icon: faMusic,
          label: 'Genres',
          path: 'genres'
        },
        {
          icon: faCompactDisc,
          label: 'Albums',
          path: 'albums'
        }
      ]
    }
  ]
}
