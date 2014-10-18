'use strict';

describe('Service: S3', function () {

  // load the service's module
  beforeEach(module('awsjsApp'));

  // instantiate service
  var S3;
  beforeEach(inject(function (_S3_) {
    S3 = _S3_;
  }));

  it('should do something', function () {
    expect(!!S3).toBe(true);
  });

});
