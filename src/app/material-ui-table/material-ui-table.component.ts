import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-material-ui-table',
  templateUrl: './material-ui-table.component.html',
  styleUrls: ['./material-ui-table.component.css']
})
export class MaterialUiTableComponent {
  @Input() array: any[] = [];
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited', 'url'];


  constructor(private http: HttpClient) { }

  fetchHomeworld(event: Event, url: string): void {
    event.preventDefault(); // Prevent the default link behavior
  
    this.http.get(url).subscribe((data: any) => {
      const homeworldLink = event.target as HTMLAnchorElement;
      const cell = homeworldLink.parentElement;
      if (cell) {
        cell.textContent = data.name || 'n/a'; // Replace the text with the fetched data
      }
    });
  }

  fetchFilms(event: Event, urls: string[]): void {
    event.preventDefault(); // Prevent the default link behavior

  
    const filmObservables = urls.map(url => this.http.get(url));
  
    forkJoin(filmObservables).subscribe((films: any[]) => {
      const cell = (event.target as Element).parentElement;
      if (cell) {
        const filmNames = films.map(film => film.title || 'n/a');
        cell.innerHTML= filmNames.join('<br> <br>');
      }
    }, error => {
      console.error('Error fetching films:', error);
    });
  }
  
}
