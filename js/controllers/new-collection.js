angular.module('locmap.controllers')

.controller('NewCollectionCtrl', function($scope, $state, ResourcesService, UserService) {
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

  $scope.createCollection = function() {
    console.log($scope.collection.locations);

    var collection = {
      title: $scope.collection.title,
      description: $scope.collection.description,
      locations: []
    }

    $scope.collection.locations.forEach(function(e) {
      collection.locations.push(e._id);
    });

    console.log(collection);

    ResourcesService.create('collections', collection).then(function(data) {
      Materialize.toast('Collection created!', 3000);
      $state.go('app.collections');
    });
  }

});
