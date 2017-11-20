'use strict';

angular.module('cognitoProject').factory('ItemService', function($localStorage, $q, $http){
  var token = $localStorage['token'];
  return {
    getAll: function() {
      var deferred = $q.defer();
      $http.get('/v1/docs', {
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
    getAllByCode: function(codeList) {
      var deferred = $q.defer();
      $http.get('/v1/docs?tags='+codeList, {
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
      $http.post('/v1/docs', data, {
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
    update: function(id, data) {
      var deferred = $q.defer();
      $http.put('/v1/docs/'+id, data, {
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
    get: function(id) {
      var deferred = $q.defer();
      $http.get('/v1/docs/'+id, {
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
    }
  };
});
