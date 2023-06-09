import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material-ui-table',
  templateUrl: './material-ui-table.component.html',
  styleUrls: ['./material-ui-table.component.css']
})
export class MaterialUiTableComponent {
  @Input() array: any[] = [];
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited', 'url'];
}
