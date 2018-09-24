import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Response } from '@angular/http/src/static_response';
import { ResponseType } from '@angular/http/src/enums';
import { NavigatorService } from '../../services/navigator.service';
import { Region } from '../../model/region';
import { SelectItem } from 'primeng/api';
import { Car } from '../../model/car';
import { formatDate, DatePipe } from '@angular/common';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { HistoryService } from '../../services/history.service';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
})
export class NavigatorComponent implements OnInit {

    selectedRegionFrom: Region;
    selectedRegionTo: Region;
    selectedCar: Car;

    regionsFrom: Region[];
    regionsTo: Region[];

    cars: Car[];

    historyInfo: string = '';
    constructor(private navigatorService: NavigatorService, private historyService: HistoryService) {
    }

    ngOnInit() {
        this.regionsFrom = this.navigatorService.getCitiesList();
        this.cars = this.navigatorService.gteCarsList();

        this.selectedRegionFrom = this.regionsFrom[0];
        this.validateDropdowns({value: this.selectedRegionFrom});

        this.selectedCar = this.cars[0];
    }


    saveHistory() {
        const transformDate = this.dateFormating();

        this.historyInfo =  transformDate + ': ' + this.selectedCar.model + ' was navigated from ' + this.selectedRegionFrom.name + ' to ' + this.selectedRegionTo.name;

        this.historyService.saveHistoryData(this.historyInfo);
    }

    dateFormating() {
        let date = new Date();
        
        let pipe = new TimeFormatPipe();
        let formattedDate = pipe.transform(date);

        return formattedDate;
    }

    validateDropdowns(event) {
        if (event) {
            this.regionsTo = this.navigatorService.getCitiesList();
            const index = this.regionsFrom.indexOf(event.value);

            this.regionsTo.splice(index, 1);
            this.selectedRegionTo = this.regionsTo[0];
        }
    }
}
