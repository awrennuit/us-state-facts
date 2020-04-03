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

}
