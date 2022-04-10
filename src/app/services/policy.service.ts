import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Policy } from '../policy.model';
import { OperationService } from './operation.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(public fireservices : AngularFirestore, public operationService:OperationService) { }

  CreateRecord(data:any,uid:any)
  {
  
  //   console.log("Hiii");
    this.operationService.setWithMerge(data,"id").then(res =>{
           alert("Data Saved");
           
         })
         

  //  this.operationService.get_docById(uid).subscribe(res =>{
  //    console.log(res); 
  //    console.log("before set data")
  //    if(res!=null)console.log("ok")
  //    if(res == null){
  //      this.operationService.set_Data(data,uid).then(res =>{
  //       //  alert("Data Saved")
  //       console.log("set_Data")
  //      })
  //    }
  //    if(res != null){
  //      this.operationService.update_Data(data).then(res =>{
  //       // alert("Data Saved")
  //       console.log("Data modified")
  //      })
  //    }
  //  })
        }





}
