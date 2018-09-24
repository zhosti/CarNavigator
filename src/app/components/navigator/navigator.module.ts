import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {CommonModule} from '@angular/common';

import { NavigatorComponent } from './navigator.component';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { NavigatorService } from '../../services/navigator.service';
import {DropdownModule} from 'primeng/primeng';
import { HistoryComponent } from '../history/history.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HistoryService } from '../../services/history.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    DropdownModule,
    TableModule,
    CommonModule,
    ButtonModule
  ],
  declarations: [ NavigatorComponent, HistoryComponent],
  providers: [ NavigatorService, HistoryService ]
})
export class NavigatorModule { }
