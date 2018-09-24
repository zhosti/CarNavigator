import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'navigator',
      pathMatch: 'full',
    },
    {
      path: 'navigator',
      component: NavigatorComponent,
      data: {
        title: 'Navigator'
      },
    },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
