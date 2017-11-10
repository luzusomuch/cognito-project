'use strict';

angular.module('cognitoProject').factory('ItemService', function($resource){
  return $resource('/v1/my/managed-account', {}, {
    'get': {
      method: 'GET',
      params: {},
      isArray: false
    },
    'save': {
      method: 'PATCH',
      params: {},
      isArray: false
    }
  });
});
