import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, finalize, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css']
})
export class HomecompComponent {
  homeContClass: string = 'homeCont';
  selectedComponent: string = '';
  isLoading: boolean = false;

  array: any[] = [];
  subscription: Subscription | undefined;
  searchQuery: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';

  constructor(private http: HttpClient) { }

  async OnPeopleSearch(): Promise<void> {
    try {
      const data = await firstValueFrom(this.fetchData(this.searchQuery));
      this.array = data.results;
      this.onClickChangeClass();
    } catch (error) {
      console.error(error);
    }
  }

  async OnPlanetSearch(): Promise<void> {
    try {
      const data = await firstValueFrom(this.fetchData2(this.searchQuery2));
      this.array = data.results;
      this.onClickChangeClass();
    } catch (error) {
      console.error(error);
    }
  }

  async OnStarshipSearch(): Promise<void> {
    try {
      const data = await firstValueFrom(this.fetchData3(this.searchQuery3));
      this.array = data.results;
      this.onClickChangeClass();
    } catch (error) {
      console.error(error);
    }
  }

  onClickChangeClass(): void {
    this.homeContClass = 'homeContSearch';
  }

  fetchData(searchQuery: string): Observable<any> {
    const url = 'https://swapi.dev/api/people/?search=' + searchQuery;
    this.isLoading = true; 
    return this.http.get<any>(url).pipe(
      finalize(() => {
        this.isLoading = false; // Set isLoading to false after the request completes (success or error)
      })
    );
  }

  fetchData2(searchQuery: string): Observable<any> {
    const url = 'https://swapi.dev/api/planets/?search=' + searchQuery;
    return this.http.get<any>(url);
  }

  fetchData3(searchQuery: string): Observable<any> {
    const url = 'https://swapi.dev/api/starships/?search=' + searchQuery;
    return this.http.get<any>(url);
  }
}