import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import {ScreenService} from './screen.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective {

  constructor(
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private screenService: ScreenService,
  ) {}

  @Input('onlyForScreen') set onlyForScreen(screen: number) {
    if (screen === this.screenService.screen) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }

    // const test1 = new BehaviorSubject(this.screenService.resizeObservable$);
    const changeScreenObservable$ = this.screenService.changeScreenObservable$;

    changeScreenObservable$.subscribe(() => {
      // console.log('OnlyForScreenDirective ', screen);
      // console.log('this.screenService.screen ', this.screenService.screen);
      console.log('test1');
      if (screen === this.screenService.screen) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });

    changeScreenObservable$.subscribe(() => {
      console.log('test2');
    });

    // console.log('OnlyForScreenDirective1 ', screen);
    // const test1 =  this.screenService.resizeObservable2$;
    // test1.subscribe(() => {console.log('1')});
    // test1.subscribe(() => {console.log('2')});
    // test1.subscribe(console.log('3'));
    // test1.subscribe(console.log('4'));
    // test1.subscribe(() => {
    //   console.log('OnlyForScreenDirective2 ', screen);
    //   if (screen === this.screenService.screen) {
    //     this.viewContainer.createEmbeddedView(this.templateRef);
    //   } else {
    //     this.viewContainer.clear();
    //   }
    // });
  }
}
