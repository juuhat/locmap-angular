angular.module('locmap', ['ui.router', 'locmap.controllers', 'locmap.services', 'locmap.directives'])

.constant('API_URL', 'http://localhost:4010/api/v1/')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    abstract: true,
    templateUrl: 'templates/layout.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('app.locations', {
    url: '/locations',
    templateUrl: 'templates/locations.html',
    controller: 'LocationsCtrl'
  })

  .state('app.location', {
    url: '/locations/:id',
    templateUrl: 'templates/location.html',
    controller: 'LocationCtrl'
  })

  .state('app.new-location', {
    url: '/new-location',
    templateUrl: 'templates/location-form.html',
    controller: 'NewLocationCtrl'
  })

  .state('app.edit-location', {
    url: '/edit-location/:id',
    templateUrl: 'templates/location-form.html',
    controller: 'EditLocationCtrl'
  })

  .state('app.collections', {
    url: '/collections',
    templateUrl: 'templates/collections.html',
    controller: 'CollectionsCtrl'
  })

  .state('app.collection', {
    url: '/collections/:id',
    templateUrl: 'templates/collection.html',
    controller: 'CollectionCtrl'
  })

  .state('app.new-collection', {
    url: '/new-collection',
    templateUrl: 'templates/collection-form.html',
    controller: 'NewCollectionCtrl'
  })

  .state('app.edit-collection', {
    url: '/edit-collection/:id',
    templateUrl: 'templates/collection-form.html',
    controller: 'EditCollectionCtrl'
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

// Init directives module
angular.module('locmap.directives', []);

// Init controllers module
angular.module('locmap.controllers', ['locmap.services']);
