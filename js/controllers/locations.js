angular.module('locmap.controllers')

.controller('LocationsCtrl', function($scope, $state, ResourcesService) {
  $scope.locations = [];
  
  ResourcesService.get('locations').then(function(data) {
    $scope.locations = data.locations;
  }, function(err) {
    console.log(err);
  });
});
