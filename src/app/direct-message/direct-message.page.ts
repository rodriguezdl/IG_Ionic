import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/frontend/messages/messages.service';
import { Message } from '../services/frontend/messages/message.model';




@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.page.html',
  styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
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

}
