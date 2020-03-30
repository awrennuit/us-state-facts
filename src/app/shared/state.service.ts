import { Injectable } from '@angular/core';
// import { State } from './state';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private stateRef: AngularFireList<any>;
  private stateListRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getState(id: string){
    this.stateRef = this.db.list(`states/${id}`);    
    return this.stateRef;
  }

  getStateList(){
    this.stateListRef = this.db.list('states');
    return this.stateListRef;
  }
}