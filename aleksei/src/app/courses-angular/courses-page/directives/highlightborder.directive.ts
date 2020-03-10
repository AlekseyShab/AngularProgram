import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit{
  @Input() creationDate : Date;
  currentDate = new Date();

  constructor(public element: ElementRef) {
  }

  ngOnInit(){
      if(this.creationDate < this.currentDate && this.creationDate >= this.createDate()){
        this.element.nativeElement.style.border = '2px solid green'
      }
      if(this.creationDate > this.currentDate){
        this.element.nativeElement.style.border = '2px solid blue'
      }
    };

  createDate(): Date {
    let date = new Date();
    date.setDate(date.getDate() - 14);
    return date;
  }
}
