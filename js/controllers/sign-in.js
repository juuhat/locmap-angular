angular.module('locmap.controllers')

.controller('SignInCtrl', function($scope, $state, API_URL, $http) {
  $scope.user = {
    email: '',
    password: ''
  }

  $scope.signIn = function() {
    $http({
      method: 'POST',
      url: API_URL + 'auth/login',
      data: $scope.user
    }).then(function successCallback(response) {
      localStorage.setItem('user', JSON.stringify(response.data));
      $scope.$parent.currentUser = localStorage.getItem('user');
      Materialize.toast('Logged in!', 3000);
      $state.go('app.home');
    }, function errorCallback(response) {
      console.log(response);
    });
  }
});
