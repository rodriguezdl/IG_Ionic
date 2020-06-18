import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.page.html',
  styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
<<<<<<< HEAD
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
=======
  public users = ['Daniel', 'Yadu', 'E for Pres.','Jon','Darren'];

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
  }
]
>>>>>>> 53af74074550bb1c7342af7a26a29d82c7adc5fe

  sendMessage() {
      this.messages.push({
        user: 'Daniel',
        createdAt: 155409085600,
        msg:this.newMsg
      });
    }
    
  
  
  constructor() { }

  ngOnInit() {
  }

}
