import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonViewComponent } from './person/person-view/person-view.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'person/view/:id', component: PersonViewComponent },
  { path: 'person/edit/:id', component: PersonEditComponent },
  { path: 'person/list', component: PersonListComponent },
  { path: 'home', component: InicioComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true, // Para poder usar @Input en rutas https://angular.io/guide/router
      onSameUrlNavigation: 'reload' // https://stackoverflow.com/a/52512361
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
