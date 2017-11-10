'use strict';

angular.module('cognitoProject').factory('HelpService', function($q, $rootScope){
  return {
    resolveAttr: function(field, value) {
    	var data = {
    		Name: field,
    		Value: value
    	};
      var result = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(data);
      return result;
    }
  };
});