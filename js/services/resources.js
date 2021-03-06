angular.module('locmap.services')

.factory('ResourcesService', function($http, $q, $state, API_URL, UserService) {

  var request = function(method, url, data) {
    var defer = $q.defer();

    $http({
      method: method,
      url: API_URL + url,
      headers: { Authorization: 'Bearer ' + UserService.getToken() },
      data: data
    }).then(function(response) {
      defer.resolve(response.data);
    }, function(response) {
      if (response.status === 401) {
        Materialize.toast('Unauthorized', 3000);
        $state.go('app.home');
      }

      $state.go('app.home');
      defer.reject();
    });

    return defer.promise;
  }

  return {
    get: function(url) {
      return request('get', url, null);
    },

    create: function(url, data) {
      return request('post', url, data);
    },

    update: function(url, data) {
      return request('put', url, data);
    },

    delete: function(url) {
      return request('delete', url, null);
    }
  }
})
