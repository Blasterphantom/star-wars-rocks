import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material-ui-table3',
  templateUrl: './material-ui-table3.component.html',
  styleUrls: ['./material-ui-table3.component.css']
})
export class MaterialUiTable3Component {
  @Input() array3: any[] = [];
  displayedColumns3: string[] = [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'passengers',
    'cargo_capacity',
    'consumables',
    'hyperdrive_rating',
    'MGLT',
    'starship_class',
    'pilots',
    'films',
    'created',
    'edited',
    'url'
  ];
}
