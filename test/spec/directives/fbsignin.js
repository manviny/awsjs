'use strict';

describe('Directive: fbSignin', function () {

  // load the directive's module
  beforeEach(module('awsjsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fb-signin></fb-signin>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fbSignin directive');
  }));
});
