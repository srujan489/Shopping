import { ShoppingPage } from './app.po';

describe('shopping App', () => {
  let page: ShoppingPage;

  beforeEach(() => {
    page = new ShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
