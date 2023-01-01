import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddPfeComponent } from './Components/add-pfe/add-pfe.component';
import { PfeListComponent } from './Components/pfe-list/pfe-list.component';

const appRoutes: Routes = [
  { path: '', component: PfeListComponent },
  { path: 'home', component: PfeListComponent },
  { path: 'add-pfe', component: AddPfeComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
