import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomecompComponent } from './homecomp/homecomp.component';
import { PeoplecompComponent } from './peoplecomp/peoplecomp.component';
import { PlanetcompComponent } from './planetcomp/planetcomp.component';
import { StarshipcompComponent } from './starshipcomp/starshipcomp.component';
import { TableItemComponent } from './table-item/table-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecompComponent,
    PeoplecompComponent,
    PlanetcompComponent,
    StarshipcompComponent,
    TableItemComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
