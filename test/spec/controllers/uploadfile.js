'use strict';

describe('Controller: UploadfileCtrl', function () {

  // load the controller's module
  beforeEach(module('awsjsApp'));

  var UploadfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadfileCtrl = $controller('UploadfileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
