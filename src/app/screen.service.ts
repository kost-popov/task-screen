import {Injectable} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {filter, share} from 'rxjs/operators';

interface IConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screen: number;
  config: IConfig = {
    mobile: 600,
    tablet: 800,
    desktop: 1024,
  };

  changeScreenObservable$: Observable<Event>;

  constructor() {
    console.log(window.innerWidth);
    if (window.innerWidth < this.config.mobile) {
      this.screen = this.config.mobile;
    }
    if (this.config.mobile <= window.innerWidth && window.innerWidth < this.config.tablet) {
      this.screen = this.config.tablet;
    }
    if (this.config.tablet <= window.innerWidth) {
      this.screen = this.config.desktop;
    }

    this.changeScreenObservable$ = fromEvent(window, 'resize').pipe(
      filter((evt) => {
        console.log('filter pass');
        const newWidth = (evt.target as any).innerWidth;
        let newScreen: number;

        if (newWidth < this.config.mobile) {
          newScreen = this.config.mobile;
        }
        if (this.config.mobile <= newWidth && newWidth < this.config.tablet) {
          newScreen = this.config.tablet;
        }
        if (this.config.tablet <= newWidth) {
          newScreen = this.config.desktop;
        }

        if (newScreen !== this.screen) {
          this.screen = newScreen;
          return true;
          //window.location.reload();
        }
        return false;
     }),
     share(),
    );

    // this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    //   const newWidth = (evt.target as any).innerWidth;
    //   let newScreen: number;
    //
    //   if (newWidth < this.config.mobile) {
    //     newScreen = this.config.mobile;
    //   }
    //   if (this.config.mobile <= newWidth && newWidth < this.config.tablet) {
    //     newScreen = this.config.tablet;
    //   }
    //   if (this.config.tablet <= newWidth) {
    //     newScreen = this.config.desktop;
    //   }
    //
    //   if (newScreen !== this.screen) {
    //     this.screen = newScreen;
    //     //window.location.reload();
    //   }
    // });
  }
}
