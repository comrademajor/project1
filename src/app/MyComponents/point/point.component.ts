import { Component, OnInit, VERSION } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { point } from '../../JSONdata/point';
import { OperationService } from 'src/app/services/operation.service';
import { AuthenticationService } from 'src/app/services/auth.service';
import { insertCompleted } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
  journaldata:any;
  


  public lineChartType: ChartType = 'line';
  pointdata:any = {
    Label: [],
    Data: [],
    Type:'linechart',

  };
  constructor(public operationService:OperationService, private authService: AuthenticationService) { }

  read_Info(rate: any) {

    this.operationService.read_Data_From_Collection(rate).subscribe((res: any) => {
      this.pointdata.Label = [];
      this.pointdata.Data = [];
      if (res && Array.isArray(res)) {
        res.forEach((element, i) => {


          // console.log(element.payload.doc.id, this.journaldate, this.journalbool, "Year 4");
          // if (element.payload.doc.id== this.journaldate && this.journalbool){
          //   this.journaldata=element.payload.doc.data();
          //   console.log(this.journaldata);

          // }


          // console.log(element.payload.doc.data(), element.payload.doc.id);
          // const date = element?.payload?.doc?.id?.replaceAll(' ', '-');
          const date = element?.payload?.doc?.id;
          const rate = element?.payload?.doc?.data()?.rate
          if (date && rate && this.pointdata.Label.length <= 30) {
            this.pointdata.Label.push(date)
            this.pointdata.Data.push(rate)
  
            // console.log({ data: this.pointdata });
          }
        })
      }

       
    })


  }
  
  read_Info_From_Document(j:any){
    this.operationService.read_Data_From_Document(j).subscribe((res: any) => {
      this.journaldata=res.payload.data();
    })
  }
  
  chartClicked (e:any){
    console.log(e);
    if (e.active.length > 0){
      var chartElement = e.active[0]._chart.getElementAtEvent(e.event);
      // console.log(chartElement[0]._index);
      // console.log(this.pointdata.Label[chartElement[0]._index]);
      this.read_Info_From_Document(`Journaling/${this.authService.uid}/Journal/${this.pointdata.Label[chartElement[0]._index]}`);
      // this.journalbool=true;
      // this.journaldate=this.pointdata.Label[chartElement[0]._index];
      // this.journaldata=this.read_Info(`Journaling/${this.authService.uid}/Journal`);
      // this.journalbool=false;
    }
  }

  ngOnInit(): void {
    this.read_Info(`Moodtracker/${this.authService.uid}/Mood`);
  }


  activity = {
    Label: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    Data: [1,2,10,4,5,2,7,1,9,10,1,6,8,5,4,5,8,3],
    Type:'linechart',
    // options: {
    //   chartClicked: function(e) {
    //      var element = this.read_Info(`Journaling'/${this.authService.uid}/Journal`);
    //      if (element.length) {
    //         console.log(element[0])
    //      }
    //   },
  // }

 


}


}
