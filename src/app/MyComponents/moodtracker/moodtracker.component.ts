import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { PolicyService } from 'src/app/services/policy.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { identity } from 'rxjs';
import { Policy } from 'src/app/policy.model';
import { OperationService } from 'src/app/services/operation.service';
import * as $ from 'jquery';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.scss']
})

export class MoodtrackerComponent implements OnInit {
  
  policies!: string;
  rate!: number;
  today1!:string;
  
  value: number = 5;
  options: Options = {
    showTicksValues: true,
    showSelectionBar: true,
    stepsArray: [
      { value: 1, legend: "Worst"},
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10, legend: "Excellent" }
    ],
    ticksTooltip: (val: number): string => `Tooltip: ${val}`,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
        
          return 'red';  
      }
      if (value <= 6) {
          return 'orange';
      }
      if (value <= 8) {
          return 'yellow';
      }
      return '#2AE02A';
    },
    getPointerColor: (value: number): string => {
      if (value <= 3) {
          return 'red';
      }
      if (value <= 6) {
          return 'orange';
      }
      if (value <= 8) {
          return 'yellow';
      }
      return '#2AE02A';
    },

  };
 

  
  constructor(private as: AuthenticationService,private policyService: PolicyService,private db: AngularFirestore) { }
  user:any;
  ngOnInit(): void {
    console.log("here");
    this.as.getUserState().subscribe(user => {
      if(user == null) {this.user = null}
      else{
        
        this.user = user;
        // console.log(user.uid);
        this.as.getprofile(user.uid).subscribe((res:any) => {  
        })
        
      }
      
    });
    // console.log(this.user.uid);
    
  }

  CreateRecord(){
    
    let Record ={};
    console.log(this.rate);
    Record["rate"] =this.rate;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.today1 = mm + ' ' + dd + ' ' + yyyy;
    console.log(this.today1,this.today1.length,"len"); //today1.split(' ')  --> 02,19,2022
    
    this.db.collection("Moodtracker").doc(this.user.uid).collection("Mood").doc(this.today1).set(Record);
    console.log(Record,this.user.uid);
    this.policyService.CreateRecord(Record,this.user.uid);
  
    // return this.fireservices.collection('policies').doc(uid).set(Record);

  
 
  }

  
}

