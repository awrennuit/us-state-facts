import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { iState } from '../shared/state';

@Component({
  selector: 'app-states-main',
  templateUrl: './states-main.component.html',
  styleUrls: ['./states-main.component.css']
})

export class StatesMainComponent implements OnInit {

  stateList: iState[];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.getStates();
  }

  getStates(){  
    this.stateService.getStateList().snapshotChanges().forEach(snapshot => {      
      this.stateList = [];            
      snapshot.forEach(child => {        
        let state = child.payload.toJSON();        
        state['$key'] = child.key;
        this.stateList.push(state as iState);
      });      
    });
  }
}