import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name?: string
  @Input() listeners?: number | string
  @Input() playcount?: number | string
  @Input() imageUrl?: string

  constructor() { }

  ngOnInit(): void {
  }

  toInteger(property: number | string) {
    const language = navigator.language || 'pt-BR'

    if(typeof property === 'string') {
      property = parseInt(property)
    }

    return Intl.NumberFormat(language).format(property)
  }

}
