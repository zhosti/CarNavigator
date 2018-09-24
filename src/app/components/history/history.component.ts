import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Response } from '@angular/http/src/static_response';
import { ResponseType } from '@angular/http/src/enums';
import { NavigatorService } from '../../services/navigator.service';
import { Navigator } from '../../model/navigator';
import { HistoryService } from '../../services/history.service';

@Component({
    selector: 'app-history',
    templateUrl: 'history.component.html',
})
export class HistoryComponent implements OnInit {

    historyList: Navigator[] = [];
    cols: any[];

    constructor(private historyService: HistoryService) {
    }

    ngOnInit() {
        this.cols = [
            { field: 'navigate', header: 'History Data' },
        ];

        this.updateHistoryList();
    }

    updateHistoryList() {
        this.historyService.currentHistoryData.subscribe(historyData => {
            let historyList = [...this.historyList];
            let nav = new Navigator();

            nav.navigate = historyData;
            historyList.unshift(nav);
            this.historyList = historyList;
        });
    }
}
