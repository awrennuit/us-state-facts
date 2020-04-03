import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { ActivatedRoute } from "@angular/router";
import { iState } from '../shared/state';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})

export class StateDetailsComponent implements OnInit {

  stateKeyList: any[];
  state: any;
  route: string;

  constructor(
    private stateService: StateService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getState();
    this.getStateKeyList();
  }

  getState(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.route = id;
    this.stateService.getState(id).snapshotChanges().forEach(snapshot => {
      this.state = [];
      let stateData = [];
      let object = [];
      snapshot.forEach(child => {
        let state = {[child.payload.key]: child.payload.val()};
        stateData.push(state);
      });
      object = Object.assign({}, ...stateData);
      this.state = object;      
    });
  }

  getStateKeyList(){
    this.stateService.getStateKeys().snapshotChanges().forEach(snapshot => {
      this.stateKeyList = [];
      snapshot.forEach(child => {
        this.stateKeyList.push(child.key);
      });
    });
  }

  public nextState(){
    const urlParams = this.stateKeyList.indexOf(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.stateKeyList[urlParams + 1]){
      return this.stateKeyList[urlParams + 1];
    }
    else {
      return this.stateKeyList[0];
    }
  }

  public prevState(){
    const urlParams = this.stateKeyList.indexOf(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.stateKeyList[urlParams - 1]){
      return this.stateKeyList[urlParams - 1];
    }
    else {
      return this.stateKeyList[this.stateKeyList.length - 1];
    }
  }

}
