import { RoutePlannerPage } from './app.po';

describe('route-planner App', function() {
  let page: RoutePlannerPage;

  beforeEach(() => {
    page = new RoutePlannerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('route-planner works!');
  });
});
