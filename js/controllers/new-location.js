angular.module('locmap.controllers')

.controller('NewLocationCtrl', function($scope, $state, ResourcesService) {
  $scope.location = {
    title: '',
    description: ''
  }
});
