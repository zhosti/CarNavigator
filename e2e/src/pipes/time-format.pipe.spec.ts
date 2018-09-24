import { TimeFormatPipe } from "../../../src/app/pipes/time-format.pipe";

describe('Pipe: TimeFormat', () => {
    let pipe: TimeFormatPipe;

    beforeEach(() => {
        pipe = new TimeFormatPipe();
    });

    it('format time hh:mm:ss', () => {
        let date = new Date('Sep 3, 2010, 09:05:08 AM');

        expect(pipe.transform(date)).toBe('09:05:08');
    });
});