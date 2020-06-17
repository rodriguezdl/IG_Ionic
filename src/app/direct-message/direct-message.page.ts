import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.page.html',
  styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
  public users =['Daniel','Yadu','E for Pres.','Jon','Darren']

  messages = [
  {
    user: 'Daniel',
    createdAt: 155409085600,
    msg: 'Whats up?'
  },
  {
    user: 'E for Pres.',
    createdAt: 155409085600;
    msg: 'nm'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
