import { Component } from '@angular/core';
import {ScreenService} from './screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private screenService: ScreenService) {}

  mobile = this.screenService.config.mobile;
  tablet = this.screenService.config.tablet;
  desktop = this.screenService.config.desktop;
}

