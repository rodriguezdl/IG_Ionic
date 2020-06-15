import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageThreadPage } from './message-thread.page';

const routes: Routes = [
  {
    path: '',
    component: MessageThreadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageThreadPageRoutingModule {}
