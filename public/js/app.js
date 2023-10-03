'use strict';


// Declare app level module which depends on filters, and services
angular.module('sample', [
  'ngRoute',
  'filters',
  'services',
  'directives',
  'controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  // enable HTML5 mode
  
  $routeProvider.when('/', {
      templateUrl: 'partials/index.html', 
      controller: 'UserCtrl'
  })
  .when('/create', {
      templateUrl: 'partials/create.html', 
      controller: 'CreateUserCtrl'
  })
  .when('/edit/:userId', {
      templateUrl: 'partials/edit.html',
      controller: 'EditUserCtrl'
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
}]);
