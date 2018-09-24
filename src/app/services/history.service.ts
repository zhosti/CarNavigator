import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class HistoryService {
    private historyData = new Subject<any>();
    currentHistoryData = this.historyData.asObservable();
    
    saveHistoryData(data: string) {
        this.historyData.next(data);
    }

}