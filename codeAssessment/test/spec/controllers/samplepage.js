'use strict';

describe('Controller: SamplepageCtrl', function () {

  // load the controller's module
  beforeEach(module('everStringApp'));

  var SamplepageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SamplepageCtrl = $controller('SamplepageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SamplepageCtrl.awesomeThings.length).toBe(3);
  });
});
