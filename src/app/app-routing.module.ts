import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompComponent } from './homecomp/homecomp.component';
import { PeoplecompComponent } from './peoplecomp/peoplecomp.component';
import { PlanetcompComponent } from './planetcomp/planetcomp.component';
import { StarshipcompComponent } from './starshipcomp/starshipcomp.component';

const routes: Routes = [
  { path: '', component: HomecompComponent },
  { path: 'People', component: PeoplecompComponent },
  { path: 'Planets', component: PlanetcompComponent },
  { path: 'Starships', component: StarshipcompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
