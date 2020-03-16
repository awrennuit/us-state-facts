import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesMainComponent } from './states-main/states-main.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: StatesMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
