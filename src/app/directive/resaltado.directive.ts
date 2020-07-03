import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  constructor(private el: ElementRef) {
    console.log('Directiva Llamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEncima() {
    this.resaltar(this.nuevoColor || 'yellow');

    // console.log(this.nuevoColor);
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseAfuera() {
    this.resaltar(null);
    // this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
