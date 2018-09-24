import { Injectable } from '@angular/core';
import { Region } from '../model/region';
import { Subject, BehaviorSubject } from 'rxjs';
import { Car } from '../model/car';


@Injectable()
export class NavigatorService {
    cities: Region[];
    cars: Car[];
    history: string[];

    getCitiesList() {
        this.cities = [
            {name: 'Sofia', code: 'Sofia'},
            {name: 'Blagoevgrad', code: 'Blagoevgrad'},
            {name: 'Varna', code: 'Varna'},
            {name: 'Burgas', code: 'Burgas'},
            {name: 'Stara Zagora', code: 'Stara Zagora'}
        ];

        return this.cities;
    }

    gteCarsList() {
        this.cars = [
            {model: 'Mercedes-AMG GT R'},
            {model: 'Ferrari LaFerrari'},
            {model: 'Lamborghini Veneno'},
            {model: 'Rolls-Royce Ghost'},
            {model: 'McLaren MP4'},
        ];

        return this.cars;
    }
}