angular.module('locmap.controllers')

.controller('CollectionCtrl', function($scope, $state, $stateParams, ResourcesService, UserService) {
  ResourcesService.get('collections/' + $stateParams.id).then(function(collection) {
    $scope.collection = collection;
    console.log(collection);
    //MapsService.initMap(location.latitude, location.longitude);
    //MapsService.addMarker(location.title, location.latitude, location.longitude);
  });
});
