var createDialogService;

describe('createDialog', function () {

  beforeEach(function () {
    angular.mock.module('fundoo.services');
  });
  
  beforeEach(inject(function (createDialog) {
    createDialogService = createDialog;
  }));
  
  it('should exist', function () {
    expect(createDialogService).toBeDefined();
  });
});
