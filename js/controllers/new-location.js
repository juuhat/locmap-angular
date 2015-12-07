angular.module('locmap.controllers')

.controller('NewLocationCtrl', function($scope, $state, ResourcesService, MapsService) {
  $scope.title = 'New location';

  $scope.location = {
    title: '',
    description: '',
    latitude: 0,
    longitude: 0
  }

  MapsService.initMap($scope.location.latitude, $scope.location.longitude);
  MapsService.addClickListener(function(e) {
    MapsService.removeMarkers();
    MapsService.addMarker($scope.location.title, e.latLng.lat(), e.latLng.lng());
    $scope.location.latitude = e.latLng.lat();
    $scope.location.longitude = e.latLng.lng();
    $scope.$apply();
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.location.latitude = position.coords.latitude;
      $scope.location.longitude = position.coords.longitude;
      MapsService.setCenter(position.coords.latitude, position.coords.longitude);
      MapsService.addMarker($scope.location.title, position.coords.latitude, position.coords.longitude);
      $scope.$apply();
    });
  }

  $scope.locationCoordsChanged = function() {
    MapsService.removeMarkers();
    MapsService.addMarker($scope.location.title, $scope.location.latitude, $scope.location.longitude);
  }

  $scope.submitLocation = function() {
    ResourcesService.create('locations', $scope.location).then(function(data) {
      Materialize.toast('Location created!', 3000);
      $state.go('app.locations');
    });
  }
});
