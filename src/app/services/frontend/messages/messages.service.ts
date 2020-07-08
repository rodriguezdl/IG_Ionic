import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Message } from './message.model';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Message[] = [{
    user: 'O_Brasileiro',
    message: 'Hi'
  },
  {
    user: 'erekevan',
    message: 'Hello'
  }]

  constructor() { }

  getMessage(): any {
    const messageObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.messages);
      }, 1000);
    });

    return messageObservable;
  }
}
