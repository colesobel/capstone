import { PersonalFinancePage } from './app.po';

describe('personal-finance App', function() {
  let page: PersonalFinancePage;

  beforeEach(() => {
    page = new PersonalFinancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
