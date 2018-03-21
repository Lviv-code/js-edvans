import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrangColor]'
})
export class OrangColorDirective implements OnInit{
  
  @HostListener('mouseover') 
  onMouseOver(){
    
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "yellow")
  }
  @HostListener('mouseleave')
  onmouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "red")
  }

  ngOnInit(){
    this.renderer.addClass(this.elementRef.nativeElement, "cub")
    
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
}
