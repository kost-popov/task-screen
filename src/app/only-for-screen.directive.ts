import {Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
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
    if (screen === this.screenService.viewWidth) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
