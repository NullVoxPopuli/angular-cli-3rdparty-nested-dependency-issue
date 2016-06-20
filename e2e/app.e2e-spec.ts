import { AngularCli3rdpartyNestedDependencyIssuePage } from './app.po';

describe('angular-cli-3rdparty-nested-dependency-issue App', function() {
  let page: AngularCli3rdpartyNestedDependencyIssuePage;

  beforeEach(() => {
    page = new AngularCli3rdpartyNestedDependencyIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
