import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appOrangColor]'
})
export class OrangColorDirective implements OnInit{

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "orange")
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "red")
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
