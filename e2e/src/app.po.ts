import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNavigateButton() {
    return element(by.cssContainingText('button', 'Navigate'));
  }

  getHistoryCount() {
    return element(by.cssContainingText('div', 'Count')).$('span').getText();
  }
}
