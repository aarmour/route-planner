export class RoutePlannerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('route-planner-app h1')).getText();
  }
}
