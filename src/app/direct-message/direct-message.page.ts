import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.page.html',
  styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
  public users = ['Daniel', 'Yadu', 'E for Pres.', 'Jon', 'Darren', 'Vasu']
  public newMsg:any;

  messages = [
    {
      user: 'Daniel',
      createdAt: 155409085600,
      msg: 'Whats up?'
    },
    {
      user: 'E for Pres.',
      createdAt: 155409085600,
      msg: 'nm'
    },
    {
      user: 'Daniel',
      createdAt:155409085600,
      msg: 'Wanna play some soccer?'
    },
    {
      user:'Daniel',
      createdAt: 155409085600,
      newMsg: 'This is the message'
    }
  ];

  currentUser = 'Daniel';

  sendMessage() {
      this.messages.push({
        user: 'Daniel',
        createdAt:
        msg:this.newMsg
      });
    }
    
  
  
  constructor() { }

  ngOnInit() {
  }

}
