'use strict';

angular.module('cognitoProject').factory('TagService', function($http, cognito, $localStorage, $q){
  var token = $localStorage['token'];
  return {
    getAll: function() {
      var deferred = $q.defer();
      $http.get('/v1/tags', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+ token
        }
      }).then(function(resp) {
        deferred.resolve(resp);
      }, function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    },
  };
});
