import {Component, OnInit} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Message} from '../services/frontend/messages/message.model';

@Component({
    selector: 'app-direct-message',
    templateUrl: './direct-message.page.html',
    styleUrls: ['./direct-message.page.scss'],
})
export class DirectMessagePage implements OnInit {
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
            msg: 'asd',
        });
    }


    constructor() {
    }

    ngOnInit() {
        const ws = webSocket('ws://127.0.0.1:44142');
        ws.asObservable().subscribe((msg: Message) => {
                console.log(msg);
                this.messages.push(msg);
            },
            error => {
                console.log('ASD:' + error);
            });
    }

}
