angular.module('locmap.controllers')

.controller('CollectionsCtrl', function($scope, $state, ResourcesService, UserService) {
  $scope.collections = [];

  ResourcesService.get('users/' + UserService.getId()).then(function(data) {
    $scope.collections = data.collections;
  }, function(err) {
    console.log(err);
  });

  $scope.deleteCollection = function(id) {
    var r = confirm("Do you really want to delete this collection?");
    if (r == true) {
      ResourcesService.delete('/collections/' + id).then(function(data) {
        Materialize.toast('Collection deleted!', 3000);
        $state.go($state.current, {}, {reload: true});
      });
    }
  }
});
