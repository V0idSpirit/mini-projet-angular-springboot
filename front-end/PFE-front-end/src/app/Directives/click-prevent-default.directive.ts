import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[clickPreventDefault]'
})
export class ClickPreventDefaultDirective {

  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
    event.preventDefault();
  }

}
