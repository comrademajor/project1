import { Component, OnInit, VERSION } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { point } from '../../JSONdata/point';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {


  public lineChartType: ChartType = 'line';
  pointdata:any = {
    Label: [],
    Data: [],
    Type:'linechart',

  };
  constructor(public operationService:OperationService) { }

  read_Info(rate:any){
    this.operationService.read_Data_From_Collection(rate).subscribe(res =>{
      console.log(res[0].payload.doc.data(),res[0].payload.doc.id);
      
    })

  }

 
  
  chartClicked(event:any){
    console.log(event);
  }

  ngOnInit(): void {
    this.read_Info("Moodtracker/"+"3yoSA5aFahesSEQVde9DwwxKF3t2" + "/Mood" )

   for(let p of point){
    this.pointdata.Label.push(p.date);
    this.pointdata.Data.push(p.rate);
 }


   
  //  this.pointdata=point;
  }

  activity = {
    Label: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    Data: [1,2,10,4,5,2,7,1,9,10,1,6,8,5,4,5,8,3],
    Type:'linechart'
  };

 


}



