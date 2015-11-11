angular.module('locmap.services')

.factory('UserService', function() {
  return {

    set: function(user) {
      window.localStorage.setItem('user', JSON.stringify(user));
    },

    get: function() {
      return JSON.parse(localStorage.getItem('user'));
    },

    getToken: function(url) {
      var user = this.get();

      if (!user)
        return '';

      if (!user.token)
        return '';

      return user.token;
    }
  }
})
