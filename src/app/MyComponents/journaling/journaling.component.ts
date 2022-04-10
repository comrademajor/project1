import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service'
import { identity } from 'rxjs';
import { Policy } from 'src/app/policy.model';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../../services/auth.service';


@Component({
  selector: 'app-journaling',
  templateUrl: './journaling.component.html',
  styleUrls: ['./journaling.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})


export class JournalingComponent implements OnInit {
  

  public maxLength = 200;
  
  policies!: string;
  journal!: string;
  today1!:string;

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
  }


  CreateRecord(){
    let Record ={};
    console.log(this.journal);
    Record["journal"] =this.journal;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.today1 = mm + ' ' + dd + ' ' + yyyy;
    console.log(this.today1,this.today1.length,"len"); //today1.split(' ')  --> 02,19,2022
    
    this.db.collection("Journaling").doc(this.user.uid).collection("Journal").doc(this.today1).set(Record);
    console.log(Record,this.user.uid);
    this.policyService.CreateRecord(Record,this.user.uid);
  }

}
