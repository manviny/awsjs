'use strict';

/**
 * @ngdoc service
 * @name awsjsApp.S3
 * @description
 * # S3
 * Factory in the awsjsApp.
 */
angular.module('awsjsApp')
  .factory('S3', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
