import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { SettingsLauncherDirective } from '../settings/settings-launcher.directive';

@Component({
  selector: 'app-mytimer',
  templateUrl: './mytimer.component.html',
  styleUrls: ['./mytimer.component.scss']
})
export class MytimerComponent implements AfterViewInit{

  @ViewChild(SettingsLauncherDirective)
  settingsLauncher!: SettingsLauncherDirective;

  ngAfterViewInit(): void {
    console.log(this.settingsLauncher);
    this.settingsLauncher.launchSettingsOverlay(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
