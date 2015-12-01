angular.module('locmap.controllers')

.controller('NewLocationCtrl', function($scope, $state, ResourcesService, MapsService) {
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
      MapsService.setCenter(position.coords.latitude, position.coords.longitude);
    });
  }

  $scope.locationChanged = function() {
    MapsService.removeMarkers();
    console.log($scope.location);
    MapsService.addMarker($scope.location.title, $scope.location.latitude, $scope.location.longitude);
  }

  $scope.createLocation = function() {
    ResourcesService.create('locations', $scope.location).then(function(data) {
      console.log(data);
    });
  }

});
