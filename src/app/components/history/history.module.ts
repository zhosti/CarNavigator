import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { NavigatorModule } from '../navigator/navigator.module';
import { NavigatorComponent } from '../navigator/navigator.component';
import { NavigatorService } from '../../services/navigator.service';
import { HistoryService } from '../../services/history.service';
import { HistoryComponent } from './history.component';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        NavigatorModule,
    ],
    declarations: [],
    providers: [NavigatorService, HistoryService]
})
export class HistoryModule { }
