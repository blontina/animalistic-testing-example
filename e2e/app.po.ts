import { browser, element, by } from 'protractor';

export class PetBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pb-root h1')).getText();
  }
}
