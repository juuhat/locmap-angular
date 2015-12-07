angular.module('locmap.controllers')

.controller('NewCollectionCtrl', function($scope, $state, ResourcesService, UserService) {
  $scope.title = 'New collection';

  $scope.collection = {
    title: '',
    description: '',
    locations: []
  }

  $scope.locations = [];
  ResourcesService.get('users/' + UserService.getId()).then(function(data) {
    $scope.locations = data.locations;
    setTimeout(function() {
      $('select').material_select();
    }, 0);
  }, function(err) {
    console.log(err);
  });

  $scope.submitCollection = function() {
    ResourcesService.create('collections', $scope.collection).then(function(data) {
      Materialize.toast('Collection created!', 3000);
      $state.go('app.collections');
    });
  }
});
