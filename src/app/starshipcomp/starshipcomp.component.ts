import { Component, AfterViewInit, QueryList, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, finalize, firstValueFrom } from 'rxjs';
import { TableItemComponent } from '../table-item/table-item.component';
import { People } from '../model/people';

@Component({
  selector: 'app-starshipcomp',
  templateUrl: './starshipcomp.component.html',
  styleUrls: ['./starshipcomp.component.css']
})
export class StarshipcompComponent implements AfterViewInit  {
  peoples: People[] = [];
  array: any[] = [];
  subscription: Subscription | undefined;
  searchQuery: string = '';
  homeContClass: string = 'homeCont';
  isLoading: boolean = false;

  @ViewChildren(TableItemComponent)
  cards: QueryList<TableItemComponent> | undefined;

  @ViewChild('myDiv3', { static: false }) myDivRef: ElementRef | undefined;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.OnLoad();
  }

  onClickChangeClass(): void {
    this.homeContClass = 'homeContSearch';
  }

  async OnLoad(): Promise<void> {
    if (this.myDivRef && this.myDivRef.nativeElement) {
    try {
      const data = await firstValueFrom(this.fetchData());
      this.myDivRef.nativeElement.classList.add('homeContSearch'); 
      // this.homeContClass = 'homeContSearch';
      this.array = data.results;
    } catch (error) {
      console.error(error);
    }
  }
  }

  async OnStarshipSearch(): Promise<void> {
    try {
      const data = await firstValueFrom(this.fetchDataStarship(this.searchQuery));
      this.array = data.results;
      this.onClickChangeClass();
    } catch (error) {
      console.error(error);
    }
  }
  

  fetchData(): Observable<any> {
    const url = 'https://swapi.dev/api/starships';
    this.isLoading = true;
    return this.http.get<any>(url).pipe(
      finalize(() => {
        this.isLoading = false; // Set isLoading to false after the request completes (success or error)
      })
    );
  }

  fetchDataStarship(searchQuery: string): Observable<any> {
    const url = 'https://swapi.dev/api/starships/?search=' + searchQuery;
    return this.http.get<any>(url);
  }
}
