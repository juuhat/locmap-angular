angular.module('locmap.controllers')

.controller('LocationsCtrl', function($scope, $state, ResourcesService, UserService, ModalsService) {
  $scope.locations = [];

  ResourcesService.get('users/' + UserService.getId()).then(function(data) {
    $scope.locations = data.locations;
  }, function(err) {
    console.log(err);
  });

  $scope.deleteLocation = function(id) {
    console.log(id);
    var r = confirm("Do you really want to delete this location?");
    if (r == true) {
      ResourcesService.delete('/locations/' + id).then(function(data) {
        $state.go($state.current, {}, {reload: true});
      });
    }
  }

});
