'use strict';

angular.module('cognitoProject').factory('ResponseService', function($http, cognito, $localStorage, $q){
  var token = $localStorage['token'];
  return {
    getAll: function() {
      var deferred = $q.defer();
      $http.get('/v1/response', {
        headers: {
          'Content-Type': 'application/json',
          'user': token
        }
      }).then(function(resp) {
        deferred.resolve(resp);
      }, function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    },
    create: function(data) {
      var deferred = $q.defer();
      $http.post('/v1/response', data, {
        headers: {
          'Content-Type': 'application/json',
          'user': token
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
