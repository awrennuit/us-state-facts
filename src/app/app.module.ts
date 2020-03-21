import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { StateService } from './shared/state.service';
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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
