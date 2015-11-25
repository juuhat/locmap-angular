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
  }

});
