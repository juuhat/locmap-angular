angular.module('locmap.controllers')

.controller('LocationsCtrl', function($scope, $state, ResourcesService, UserService) {
  $scope.locations = [];

  ResourcesService.get('users/' + UserService.getId()).then(function(data) {
    $scope.locations = data.locations;
  }, function(err) {
    console.log(err);
  });
});
