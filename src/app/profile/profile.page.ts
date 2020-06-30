import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverComponent} from '../popover/popover.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    username: string;

    constructor(public popoverController: PopoverController) {
    }

    ngOnInit() {
    }

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            componentProps: {},
            cssClass: 'popOver',
            event: ev,
            translucent: true
        });
        return await popover.present();
    }

    receiveUsername(event) {
        console.log('PROFILE: ' + event);
        this.username = event;
    }


}
