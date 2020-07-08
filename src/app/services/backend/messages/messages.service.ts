import {Injectable} from '@angular/core';
import {observable, Observable} from 'rxjs';
import {Message} from './message.model';
import WebSocket from 'ws';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    msgOb: Observable<any>;
    ws: WebSocket;
    messages: Message[] = [{
        user: 'O_Brasileiro',
        message: 'Hi'
    },
        {
            user: 'erekevan',
            message: 'Hello'
        }];

    constructor() {
        this.ws = new WebSocket('ws://127.0.0.1:44142');
        this.msgOb = new Observable(observer => {
            this.ws.on('message', (msg) => {
                observer.next([{
                    user: 'o_brasileiro',
                    message: msg
                }]);
            });

        });
    }


    getMessage(): any {
        const messageObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.messages);
            }, 1000);
        });

        return messageObservable;
    }
}
