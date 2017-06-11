import { AngularByExamplesPage } from './app.po';

describe('angular-by-examples App', () => {
  let page: AngularByExamplesPage;

  beforeEach(() => {
    page = new AngularByExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
