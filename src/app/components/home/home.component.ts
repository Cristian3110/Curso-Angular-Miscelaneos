import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>
      Hola mundo desde app.component
    </p>
    -->

    <app-clases></app-clases>
    <br /><br />
    <p [appResaltado]="'blue'">
      Hola Mundo
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngAfterContentInit() {
    console.log('aftercontentInit');
  }

  ngAfterContentChecked() {
    console.log('afterocntentCheked');
  }

  ngOnDestroy() {
    console.log('Ondestroy');
  }
}
