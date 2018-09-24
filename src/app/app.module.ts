import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { NavigatorModule } from './components/navigator/navigator.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryModule } from './components/history/history.module';
import { DataTableModule, PaginatorModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HistoryModule,
    BrowserAnimationsModule,
    DataTableModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
