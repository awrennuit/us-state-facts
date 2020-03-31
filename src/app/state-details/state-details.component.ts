import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})

export class StateDetailsComponent implements OnInit {

  state: any;
  route: string;

  constructor(
    private stateService: StateService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getState();
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
  
}
