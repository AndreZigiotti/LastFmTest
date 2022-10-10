import { Component, Input, OnInit } from '@angular/core';
import { faCompactDisc, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() name?: string
  @Input() image?: string
  @Input() listeners?: string
  @Input() isAlbum = false
  @Input() title?: string

  icon = faUser
  albumIcon = faCompactDisc

  constructor() { }

  ngOnInit(): void {
  }
}
