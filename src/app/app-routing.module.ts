import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { JournalingComponent } from './MyComponents/journaling/journaling.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { MoodtrackerComponent } from './MyComponents/moodtracker/moodtracker.component';
import { PointComponent } from './MyComponents/point/point.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { ZoneComponent } from './MyComponents/zone/zone.component';
import { RandomComponent } from './MyComponents/random/random.component';
// import { TimerComponent } from './MyComponents/timer/timer.component';
import { SettingsComponent } from './MyComponents/settings/settings/settings.component';
import { MytimerComponent } from './MyComponents/mytimer/mytimer.component';
import { PbmenuComponent } from './MyComponents/pbmenu/pbmenu.component';
import { TodoComponent } from './MyComponents/todo/todo.component';





const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: 'menu', component:MenuComponent},
  { path: 'moodtracker', component:MoodtrackerComponent},
  { path: 'journaling', component:JournalingComponent},
  { path: 'zone', component:ZoneComponent},
  { path: 'point', component:PointComponent},
  { path: 'random', component:RandomComponent },
  { path: 'timer', component:MytimerComponent},
  { path: 'pbmenu', component:PbmenuComponent},
  { path: 'todo', component:TodoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SignupComponent, LoginComponent, MenuComponent]
