import { Component, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../model/people';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent {

  @Input()
  people?:People

  @Input()
  cardIndex?: number;

  @Output()
  peopleSelected = new EventEmitter<People>();

  constructor(){}

}
