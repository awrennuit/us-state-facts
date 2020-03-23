import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private state: AngularFireList<any>;
  private stateList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.state = this.db.list(`states/${name}`);
    this.stateList = this.db.list('states');
  }

  getState(){
    return this.state;
  }

  getStateList(){
    return this.stateList;
  }
}