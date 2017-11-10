'use strict';

angular.module('cognitoProject').factory('TagService', function($http, cognito, $localStorage, $q){
  
  return {
    getAll: function() {
      var deferred = $q.defer();
      $http.get(cognito.apiEndPoint + '/tags', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+$localStorage['token']
        }
      }).then(function(resp) {
        console.log(resp)
        deferred.resolve(resp);
      }, function(err) {
        console.log(err);
        deferred.reject(err);
      });
      return deferred.promise;
    },
  };
});
