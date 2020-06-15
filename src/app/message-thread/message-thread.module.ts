import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageThreadPageRoutingModule } from './message-thread-routing.module';

import { MessageThreadPage } from './message-thread.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageThreadPageRoutingModule
  ],
  declarations: [MessageThreadPage]
})
export class MessageThreadPageModule {}
