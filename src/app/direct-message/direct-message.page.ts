<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/frontend/messages/messages.service';
import { Message } from '../services/frontend/messages/message.model';



=======
import {Component, OnInit} from '@angular/core';
>>>>>>> d6fbb33e78ea7e3a94f6c6ec1a6661b82ecba7b8

@Component({
    selector: 'app-direct-message',
    templateUrl: './direct-message.page.html',
    styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
<<<<<<< HEAD
  public users = ['Daniel', 'Yadu', 'E for Pres.', 'Jon', 'Darren', 'Vasu']
  public newMsg:any;
  messages: Message[] = [];

  ntUcurreser = 'O_Brasileiro';

  // sendMessage() {
  //     this.messages.push({
  //       user: 'Daniel',
  //       createdAt:155409085600,
  //       msg:this.newMsg,
  //     });
  //   }
    
  
  
  constructor(private messagesService : MessagesService) { }

  ngOnInit() {
    const messagesObservable = this.messagesService.getMessage();
    messagesObservable.subscribe((messageData: Message[]) => {
      this.messages = messageData;
    })
  }
=======
    public users = ['Daniel', 'Yadu', 'E for Pres.', 'Jon', 'Darren', 'Vasu'];
    public newMsg: any;

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
            createdAt: 155409085600,
            msg: 'Wanna play some soccer?'
        },
    ];

    currentUser = 'Daniel';

    sendMessage() {
        this.messages.push({
            user: 'Daniel',
            createdAt: 155409085600,
            msg: this.newMsg,
        });
    }


    constructor() {
    }

    ngOnInit() {
    }
>>>>>>> d6fbb33e78ea7e3a94f6c6ec1a6661b82ecba7b8

}
