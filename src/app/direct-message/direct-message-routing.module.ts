import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectMessagePage } from './direct-message.page';

const routes: Routes = [
  {
    path: '',
    component: DirectMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectMessagePageRoutingModule {}
