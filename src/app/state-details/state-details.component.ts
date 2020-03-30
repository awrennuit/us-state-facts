import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { iState } from '../shared/state';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {

  state: iState[];
  route: string;

  constructor(
    private stateService: StateService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.getState();
  }

  getState(){  
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.route = id;
    
    this.stateService.getState(id).snapshotChanges().forEach(snapshot => {           
      this.state = [];            
      snapshot.forEach(child => {           
        let state = {[child.payload.key]: child.payload.val()};        
        this.state.push(state as iState);
      });      
    });

    // this.stateService.getState(id).valueChanges().subscribe(data => {
    //   console.log('dat:::::::::::', data);
    // });
  }

}
