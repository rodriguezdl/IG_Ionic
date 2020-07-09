import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DirectMessagePageRoutingModule} from './direct-message-routing.module';

import {DirectMessagePage} from './direct-message.page';
import {ReversePipe} from '../components/pipes/reverse/reverse.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DirectMessagePageRoutingModule
    ],
    declarations: [
        DirectMessagePage,
        ReversePipe
    ]
})
export class DirectMessagePageModule {
}
