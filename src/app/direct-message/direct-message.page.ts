import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from '../services/backend/messages/message.model';
import { MessageTypes } from '../services/backend/messages/message-types';
import { PopoverController } from '@ionic/angular';
import { UploadPopoverComponent } from '../upload-popover/upload-popover.component';
import { PopoverComponent } from '../popover/popover.component';


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


    constructor(public popoverController: PopoverController) {
    }

    ngOnInit() {
        this.ws = webSocket('ws://10.0.2.2:44142');
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

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: UploadPopoverComponent,
            componentProps: {},
            cssClass: 'upload-popover',
            event: ev,
            translucent: true
        });
        return await popover.present();
        console.log('clicked');
    }

}
