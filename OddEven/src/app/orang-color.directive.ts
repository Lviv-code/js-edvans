import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrangColor]'
})
export class OrangColorDirective implements OnInit{
  
  @HostListener('mouseover') 
  onMouseOver(){
    
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "yellow")
    this.renderer.setStyle(this.elementRef.nativeElement, "width", "200px")
    this.renderer.setStyle(this.elementRef.nativeElement, "height", "200px")
  }
  @HostListener('mouseleave')
  onMouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "red")
    this.renderer.setStyle(this.elementRef.nativeElement, "width", "150px")
    this.renderer.setStyle(this.elementRef.nativeElement, "height", "150px")
  }

  ngOnInit(){
    this.renderer.addClass(this.elementRef.nativeElement, "cub")
    
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
}
