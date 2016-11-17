import { PetBookPage } from './app.po';

describe('pet-book App', function() {
  let page: PetBookPage;

  beforeEach(() => {
    page = new PetBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pb works!');
  });
});
