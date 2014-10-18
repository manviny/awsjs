'use strict';

describe('Service: fbSignin', function () {

  // load the service's module
  beforeEach(module('awsjsApp'));

  // instantiate service
  var fbSignin;
  beforeEach(inject(function (_fbSignin_) {
    fbSignin = _fbSignin_;
  }));

  it('should do something', function () {
    expect(!!fbSignin).toBe(true);
  });

});
