import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesMainComponent } from './states-main/states-main.component';
import { StateDetailsComponent } from './state-details/state-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: StatesMainComponent },
  { path: 'state-details/:id', component: StateDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
