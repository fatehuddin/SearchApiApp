'use strict';

/**
 * @ngdoc overview
 * @name everStringApp
 * @description
 * # everStringApp
 *
 * Main module of the application.
 */
angular
  .module('everStringApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
