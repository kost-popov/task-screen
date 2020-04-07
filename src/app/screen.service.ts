import { Injectable } from '@angular/core';

interface IConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor() { }

  viewWidth = 1024;

  config: IConfig = {
    mobile: 600,
    tablet: 800,
    desktop: 1024,
  };
}
