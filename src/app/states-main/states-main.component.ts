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

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.getStates();
  }

  getStates(){  
    this.stateService.getStateList().snapshotChanges().forEach(snapshot => {
      console.log('in stateService.getStateList', snapshot);
      
      this.stateList = [];
      console.log('stateList = ', this.stateList);
      
      snapshot.forEach(snap => {
        console.log('in snapshot.foreach');
        
        let state = snap.payload.toJSON();
        console.log('state------------------', state);
        state['$key'] = snap.key;
        this.stateList.push(state as iState);
      });
    });
  }

}

// states = [
  //   {
  //     name: "Alabama",
  //     flag: "alabama-flag.png"
  //   },
  //   {
  //     name: "Alaska",
  //     flag: "alaska-flag.png"
  //   },
  //   {
  //     name: "Arizona",
  //     flag: "arizona-flag.png"
  //   },
  //   {
  //     name: "Arkansas",
  //     flag: "arkansas-flag.png"
  //   },
  //   {
  //     name: "California",
  //     flag: "california-flag.png"
  //   },
  //   {
  //     name: "Colorado",
  //     flag: "colorado-flag.png"
  //   },
  //   {
  //     name: "Connecticut",
  //     flag: "connecticut-flag.png"
  //   },
  //   {
  //     name: "Delaware",
  //     flag: "delaware-flag.png"
  //   },
  //   {
  //     name: "Florida",
  //     flag: "florida-flag.png"
  //   },
  //   {
  //     name: "Georgia",
  //     flag: "georgia-flag.png"
  //   },
  //   {
  //     name: "Hawaii",
  //     flag: "hawaii-flag.png"
  //   },
  //   {
  //     name: "Idaho",
  //     flag: "idaho-flag.png"
  //   },
  //   {
  //     name: "Illinois",
  //     flag: "illinois-flag.png"
  //   },
  //   {
  //     name: "Indiana",
  //     flag: "indiana-flag.png"
  //   },
  //   {
  //     name: "Iowa",
  //     flag: "iowa-flag.png"
  //   },
  //   {
  //     name: "Kansas",
  //     flag: "kansas-flag.png"
  //   },
  //   {
  //     name: "Kentucky",
  //     flag: "kentucky-flag.png"
  //   },
  //   {
  //     name: "Louisiana",
  //     flag: "louisiana-flag.png"
  //   },
  //   {
  //     name: "Maine",
  //     flag: "maine-flag.png"
  //   },
  //   {
  //     name: "Maryland",
  //     flag: "maryland-flag.png"
  //   },
  //   {
  //     name: "Massachusetts",
  //     flag: "massachusetts-flag.png"
  //   },
  //   {
  //     name: "Michigan",
  //     flag: "michigan-flag.png"
  //   },
  //   {
  //     name: "Minnesota",
  //     flag: "minnesota-flag.png"
  //   },
  //   {
  //     name: "Mississippi",
  //     flag: "mississippi-flag.png"
  //   },
  //   {
  //     name: "Missouri",
  //     flag: "missouri-flag.png"
  //   },
  //   {
  //     name: "Montana",
  //     flag: "montana-flag.png"
  //   },
  //   {
  //     name: "Nebraska",
  //     flag: "nebraska-flag.png"
  //   },
  //   {
  //     name: "Nevada",
  //     flag: "nevada-flag.png"
  //   },
  //   {
  //     name: "New Hampshire",
  //     flag: "new-hampshire-flag.png"
  //   },
  //   {
  //     name: "New Jersey",
  //     flag: "new-jersey-flag.png"
  //   },
  //   {
  //     name: "New Mexico",
  //     flag: "new-mexico-flag.png"
  //   },
  //   {
  //     name: "New York",
  //     flag: "new-york-flag.png"
  //   },
  //   {
  //     name: "North Carolina",
  //     flag: "north-carolina-flag.png"
  //   },
  //   {
  //     name: "North Dakota",
  //     flag: "north-dakota-flag.png"
  //   },
  //   {
  //     name: "Ohio",
  //     flag: "ohio-flag.png"
  //   },
  //   {
  //     name: "Oklahoma",
  //     flag: "oklahoma-flag.png"
  //   },
  //   {
  //     name: "Oregon",
  //     flag: "oregon-flag.png"
  //   },
  //   {
  //     name: "Pennsylvania",
  //     flag: "pennsylvania-flag.png"
  //   },
  //   {
  //     name: "Rhode Island",
  //     flag: "rhode-island-flag.png"
  //   },
  //   {
  //     name: "South Carolina",
  //     flag: "south-carolina-flag.png"
  //   },
  //   {
  //     name: "South Dakota",
  //     flag: "south-dakota-flag.png"
  //   },
  //   {
  //     name: "Tennessee",
  //     flag: "tennessee-flag.png"
  //   },
  //   {
  //     name: "Texas",
  //     flag: "texas-flag.png"
  //   },
  //   {
  //     name: "Utah",
  //     flag: "utah-flag.png"
  //   },
  //   {
  //     name: "Vermont",
  //     flag: "vermont-flag.png"
  //   },
  //   {
  //     name: "Virginia",
  //     flag: "virginia-flag.png"
  //   },
  //   {
  //     name: "Washington",
  //     flag: "washington-flag.png"
  //   },
  //   {
  //     name: "West Virginia",
  //     flag: "west-virginia-flag.png"
  //   },
  //   {
  //     name: "Wisconsin",
  //     flag: "wisconsin-flag.png"
  //   },
  //   {
  //     name: "Wyoming",
  //     flag: "wyoming-flag.png"
  //   }
  // ];
