import { StateMgmtPocPage } from './app.po';

describe('state-mgmt-poc App', () => {
  let page: StateMgmtPocPage;

  beforeEach(() => {
    page = new StateMgmtPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
