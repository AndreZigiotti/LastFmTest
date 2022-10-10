import { Component, OnInit } from '@angular/core';
import { faHeart } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  icon = faHeart

  constructor() { }

  ngOnInit(): void {
  }

}
