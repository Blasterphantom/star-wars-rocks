import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule } from '@angular/forms';
import { MaterialUiTableComponent } from './material-ui-table/material-ui-table.component';
import { MaterialUiTable2Component } from './material-ui-table2/material-ui-table2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecompComponent,
    PeoplecompComponent,
    PlanetcompComponent,
    StarshipcompComponent,
    TableItemComponent,
    MaterialUiTableComponent,
    MaterialUiTable2Component
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
