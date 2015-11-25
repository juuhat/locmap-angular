angular.module('locmap.controllers')

.controller('CollectionsCtrl', function($scope, $state, ResourcesService, UserService) {
  $scope.collections = [];

  ResourcesService.get('users/' + UserService.getId()).then(function(data) {
    $scope.collections = data.collections;
  }, function(err) {
    console.log(err);
  });
});
