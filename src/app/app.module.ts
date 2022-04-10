import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './MyComponents/login/login.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { MoodtrackerComponent } from './MyComponents/moodtracker/moodtracker.component';
import { JournalingComponent } from './MyComponents/journaling/journaling.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from  '@angular/material/datepicker';
import { AvatarModule } from "primeng/avatar";
import { DatepickerModule } from 'ng2-datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ZoneComponent } from './MyComponents/zone/zone.component';
import 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { PointComponent } from './MyComponents/point/point.component';
import { GalleryModule } from '@ngx-gallery/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RandomComponent } from './MyComponents/random/random.component';
import { Policy } from 'src/app/policy.model';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { PolicyService } from './services/policy.service';
import { OperationService } from './services/operation.service';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { StatusBarComponent } from './MyComponents/status-bar/status-bar.component';
import { TimerComponent } from './MyComponents/timer/timer.component';
import { SettingsModule } from './MyComponents/settings/settings.module';
import { MytimerComponent } from './MyComponents/mytimer/mytimer.component';
import { PbmenuComponent } from './MyComponents/pbmenu/pbmenu.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { TodoService } from './MyComponents/todo/todo.service';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: ':status', component: TodoComponent },
  { path: '**', redirectTo: '/all' }
];



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MoodtrackerComponent,
    JournalingComponent,
    ZoneComponent,
    PointComponent,
    RandomComponent,
    StatusBarComponent,
    TimerComponent,
    MytimerComponent,
    PbmenuComponent,
    TodoComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    AvatarModule,
    DatepickerModule,
    MatNativeDateModule,
    NgxEchartsModule,
    ChartsModule,
    GalleryModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RichTextEditorAllModule,
    SettingsModule,
    RouterModule.forRoot(routes),
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [PolicyService,OperationService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }


