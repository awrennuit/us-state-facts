import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  statesRef: AngularFireList<any>;
  stateRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  GetState(id: string){
    this.stateRef = this.db.object('us-states-9c6f4/' + id);
    return this.stateRef;
  }  

  GetStateList(){
    this.statesRef = this.db.list('us-states-9c6f4');
    return this.statesRef;
  }
}