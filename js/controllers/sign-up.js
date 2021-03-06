angular.module('locmap.controllers')

.controller('SignUpCtrl', function($scope, $state, API_URL, $http) {
  $scope.user = {
    email: '',
    username: '',
    password: '',
    password_repeat: ''
  }

  $scope.signUp = function() {
    var data = {
      email: $scope.user.email,
      username: $scope.user.username,
      password: $scope.user.password
    }

    $http({
      method: 'POST',
      url: API_URL + 'auth/register',
      data: data
    }).then(function successCallback(response) {
      Materialize.toast('Account created!', 3000);
      $state.go('app.sign-in');
    }, function errorCallback(response) {
      console.log(response);
    });
  }
});
