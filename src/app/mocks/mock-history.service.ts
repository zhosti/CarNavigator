import { Subject, Observable } from "rxjs";

export class MockHistoryService {

    private historyData = new Subject<any>();
    currentHistoryData = [];

    saveHistoryData(data) {
        this.currentHistoryData.push(this.saveHistoryData);
        return this.currentHistoryData;
    }


}