import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private stateRef: AngularFireList<any>;
  private stateKeysRef: AngularFireObject<any>;
  private stateListRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getState(id: string){
    this.stateRef = this.db.list(`states/${id}`);    
    return this.stateRef;
  }

  getStateKeys(){
    this.stateKeysRef = this.db.object('states');
    return this.stateListRef;
  }

  getStateList(){
    this.stateListRef = this.db.list('states');
    return this.stateListRef;
  }
}