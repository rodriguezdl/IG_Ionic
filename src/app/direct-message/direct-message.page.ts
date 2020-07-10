import {Component, OnInit} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Message} from '../services/backend/messages/message.model';
import {MessageTypes} from '../services/backend/messages/message-types';


@Component({
    selector: 'app-direct-message',
    templateUrl: './direct-message.page.html',
    styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
    public users = ['Daniel', 'Yadu', 'E for Pres.', 'Jon', 'Darren', 'Vasu'];
    public newMsg: string;
    ws: WebSocketSubject<any>;
    messages: Message[] = [];

    currentUser = '';

    sendMessage(ev) {
        const tempMsg = {
            user: this.currentUser,
            createdAt: Date.now(),
            msg: this.newMsg,
            type: MessageTypes.msg,
        };
        this.messages.push(tempMsg);
        /*this.messages.sort((a, b) => {
            return a.createdAt < b.createdAt ? -1 : 1;
        });*/
        this.ws.next(tempMsg);
    }


    constructor() {
    }

    ngOnInit() {
        this.ws = webSocket('ws://127.0.0.1:44142');
        this.ws.asObservable().subscribe((msg: Message[]) => {
                console.log('ASD\n');


                if (msg[0].type === MessageTypes.init) {
                    this.currentUser = msg[0].msg;
                } else {
                    this.messages = this.messages.concat(msg);
                }
                /*this.messages.sort((a, b) => {
                    return a.createdAt < b.createdAt ? -1 : 1;
                });*/
            },
            error => {
                console.log('ASD:' + error);
            });
    }

}
