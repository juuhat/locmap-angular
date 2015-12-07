angular.module('locmap.controllers')

.controller('EditCollectionCtrl', function($scope, $state, $stateParams, ResourcesService, UserService) {
  $scope.title = 'Edit collection';

  ResourcesService.get('collections/' + $stateParams.id).then(function(collection) {
    $scope.collection = {
      title: collection.title,
      description: collection.description,
      locations: []
    }

    $scope.locations = [];
    ResourcesService.get('users/' + UserService.getId()).then(function(data) {
      $scope.locations = data.locations;
      collection.locations.forEach(function(l) {
        $scope.collection.locations.push(l._id);
      })
      setTimeout(function() {
        $('select').material_select();
      }, 0);
    }, function(err) {
      console.log(err);
    });
  });

  $scope.submitCollection = function() {
    ResourcesService.update('collections/' + $stateParams.id, $scope.collection).then(function(data) {
      Materialize.toast('Collection updated!', 3000);
      $state.go('app.collections');
    });
  }
});
