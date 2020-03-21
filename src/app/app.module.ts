import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatesMainComponent } from './states-main/states-main.component';
import { StateDetailsComponent } from './state-details/state-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesMainComponent,
    StateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
