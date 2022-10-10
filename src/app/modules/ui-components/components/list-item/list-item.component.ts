import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMusic, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Output() deleteClick = new EventEmitter()

  @Input() index?: number
  @Input() text?: string
  @Input() showCover = false
  @Input() artist?: string
  @Input() listeners?: string
  @Input() showControls = false

  coverIcon = faMusic
  trashIcon = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }

}
