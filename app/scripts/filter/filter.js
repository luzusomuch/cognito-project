'use strict';

angular.module('cognitoProject').filter('nl2br', function() {
  return function(data) {
    if (!data) {
      return data;
    }
    return data.replace(/\n\r?/g, '<br />');
  };
}).filter('html', function($sce) {
  return function(data) {
    return $sce.trustAsHtml(data);
  };
});