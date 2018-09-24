import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { NavigatorComponent } from './navigator.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorComponent,
    data: {
      title: 'Navigator'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorRoutingModule {}