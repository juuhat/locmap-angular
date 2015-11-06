angular.module('locmap', ['ui.router', 'locmap.controllers', 'locmap.services'])

.constant('API_URL', 'http://localhost:4010/api/v1/')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    abstract: true,
    templateUrl: 'templates/layout.html',
  })

  .state('app.home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('app.sign-in', {
    url: '/sign-in',
    templateUrl: 'templates/sign-in.html',
    controller: 'SignInCtrl'
  })

  .state('app.sign-up', {
    url: '/sign-up',
    templateUrl: 'templates/sign-up.html',
    controller: 'SignUpCtrl'
  });

  $urlRouterProvider.otherwise("/");
});

// Init services module
angular.module('locmap.services', []);

// Init controllers module
angular.module('locmap.controllers', ['locmap.services']);
