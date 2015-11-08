angular.module('locmap.controllers')

.controller('AppCtrl', function($scope, $state) {
  $scope.currentUser = localStorage.getItem('user');

  //materialize sidenav init
  $('.button-collapse').sideNav();

  $scope.signOut = function() {
    localStorage.clear();
    $scope.currentUser = null;
    Materialize.toast('Logged out!', 3000);
    $state.go('app.home');
  }
});
