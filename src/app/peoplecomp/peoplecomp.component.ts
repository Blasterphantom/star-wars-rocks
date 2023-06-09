import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableItemComponent } from '../table-item/table-item.component';
import { People } from '../model/people';

@Component({
  selector: 'app-peoplecomp',
  templateUrl: './peoplecomp.component.html',
  styleUrls: ['./peoplecomp.component.css']
})
export class PeoplecompComponent implements AfterViewInit {
  peoples: People[] = [];

  @ViewChildren(TableItemComponent)
  cards: QueryList<TableItemComponent> | undefined;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://swapi.dev/api/people';
    this.http.get<any>(url).subscribe({
      next: (response) => {
        console.log(response);
        this.peoples = response.results;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}