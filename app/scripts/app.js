'use strict';

// in scripts/app.js
window.onLoadCallback = function() {
  // When the document is ready
  angular.element(document).ready(function() {
    // Bootstrap the oauth2 library
    gapi.client.load('oauth2', 'v2', function() {
      // Finally, bootstrap our angular app
      angular.bootstrap(document, ['awsjsApp']);
    });
  });
}

/**
 * @ngdoc overview
 * @name awsjsApp
 * @description
 * # awsjsApp
 *
 * Main module of the application.
 */
angular
  .module('awsjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/uploadFile', {
        templateUrl: 'views/uploadfile.html',
        controller: 'UploadfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })  .config(function($httpProvider){ 
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });