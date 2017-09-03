import { TranslatorPage } from './app.po';

describe('translator App', function() {
  let page: TranslatorPage;

  beforeEach(() => {
    page = new TranslatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
