import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  user: string;
  
  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  passToParent(){
    this.output.emit(this.user);
    console.log(this.user);
  }
}
