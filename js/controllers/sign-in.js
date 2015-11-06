angular.module('locmap.controllers')

.controller('SignInCtrl', function($scope, $state, API_URL, $http) {
  $scope.signIn = function() {
    console.log("sign in");
  }
});
