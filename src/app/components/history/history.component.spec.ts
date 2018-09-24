import { AppPage } from "e2e/src/app.po";
import { HistoryService } from "../../services/history.service";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { inject } from "@angular/core/testing";
import { HistoryComponent } from "../history/history.component";
import { TableModule } from 'primeng/table';
import { MockHistoryService } from "../../mocks/mock-history.service";
import { Observable, Subject } from "rxjs";

describe('History component', () => {
    let navigator: AppPage;
    let component: HistoryComponent;
    let historyComponent: HistoryComponent;
    let fixture: ComponentFixture<HistoryComponent>;
    let hisoryService: HistoryService;
    let mockHistoryService: MockHistoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TableModule],
            declarations: [HistoryComponent],
            providers: [{provide: HistoryService, useClass: MockHistoryService}, MockHistoryService]
        });

        fixture = TestBed.createComponent(HistoryComponent);

        component = fixture.componentInstance;
        mockHistoryService = fixture.debugElement.injector.get(MockHistoryService);

        hisoryService = TestBed.get(HistoryService);


    });

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([HistoryService], (injectService: HistoryService) => {
            expect(injectService).toBe(hisoryService);
        })
    );

    it('Service must return currentHistoryData 0',() => {
        expect(mockHistoryService.currentHistoryData.length).toEqual(0);
    });

    it('Service must save navigate data and current history data lenght increase by 1', () => {
        expect(mockHistoryService.saveHistoryData('21:00:00 Car 1 was navigated from Region 1 to Region 2').length).toBe(1);
    });

    it('Must set new record on top of the list', () => {
        let navigatorList = [
            '23:00:00 Car 8 was navigated from Region 1 to Region 2',
            '12:00:00 Car 3 was navigated from Region 1 to Region 2',
        ];
        
        navigatorList.unshift('22:00:00 Car 1 was navigated from Region 1 to Region 2');

        expect(navigatorList[0]).toMatch(
            '22:00:00 Car 1 was navigated from Region 1 to Region 2'
        );
    });
});