'use strict';

/**
 * @ngdoc directive
 * @name awsjsApp.directive:fbSignin
 * @description
 * # fbSignin
 */
angular.module('awsjsApp')
  .directive('fbSignin', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the fbSignin directive');
      }
    };
  });
