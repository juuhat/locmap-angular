angular.module('locmap.controllers')

.controller('EditLocationCtrl', function($scope, $state, $stateParams, ResourcesService, MapsService) {
  $scope.title = 'Edit location';

  ResourcesService.get('locations/' + $stateParams.id).then(function(location) {
    $scope.location = {
      title: location.title,
      description: location.description,
      latitude: location.latitude,
      longitude: location.longitude
    }

    MapsService.initMap($scope.location.latitude, $scope.location.longitude);
    MapsService.addMarker($scope.location.title, $scope.location.latitude, $scope.location.longitude);

    MapsService.addClickListener(function(e) {
      MapsService.removeMarkers();
      MapsService.addMarker($scope.location.title, e.latLng.lat(), e.latLng.lng());
      $scope.location.latitude = e.latLng.lat();
      $scope.location.longitude = e.latLng.lng();
      $scope.$apply();
    });
  });

  $scope.locationCoordsChanged = function() {
    MapsService.removeMarkers();
    MapsService.addMarker($scope.location.title, $scope.location.latitude, $scope.location.longitude);
  }

  $scope.submitLocation = function() {
    ResourcesService.update('locations/' + $stateParams.id, $scope.location).then(function(data) {
      Materialize.toast('Location updated!', 3000);
      $state.go('app.locations');
    });
  }
});
