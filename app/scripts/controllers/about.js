'use strict';

/**
 * @ngdoc function
 * @name awsjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the awsjsApp
 */
angular.module('awsjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
