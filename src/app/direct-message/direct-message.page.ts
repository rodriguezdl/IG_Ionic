import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.page.html',
  styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
  public users =['Daniel','Yadu','E for Pres.','Jon','Darren']

  constructor() { }

  ngOnInit() {
  }

}
