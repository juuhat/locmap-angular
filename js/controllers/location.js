angular.module('locmap.controllers')

.controller('LocationCtrl', function($scope, $state, $stateParams, ResourcesService, MapsService) {
  ResourcesService.get('locations/' + $stateParams.id).then(function(location) {
    $scope.location = location;

    MapsService.initMap(location.latitude, location.longitude);
    MapsService.addMarker(location.title, location.latitude, location.longitude);
  });
});
