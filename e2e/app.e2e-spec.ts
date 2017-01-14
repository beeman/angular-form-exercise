import { AngularFormExercisePage } from './app.po';

describe('angular-form-exercise App', function() {
  let page: AngularFormExercisePage;

  beforeEach(() => {
    page = new AngularFormExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
