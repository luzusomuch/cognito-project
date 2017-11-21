'use strict';

angular.module('cognitoProject').factory('AuthService', function($q, $rootScope, cognito, $localStorage){
  var cognitoUser;
  var currentUser = {};

  return {
    register: function(username, password, attributeList) {
      var deferred = $q.defer();
      $rootScope.userPool.signUp(username, password, attributeList, null, function(err, result){
        if (err) {
          deferred.reject(err);
        } else {
          deferred.resolve(result);
          cognitoUser = result.user;
          console.log('user name is ' + cognitoUser.getUsername());
        }
      });
      return deferred.promise;
    },
    login: function(username, password) {
      var deferred = $q.defer();
      var authenticationData = {
        Username : username,
        Password : password,
      };
      var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
      var userData = {
        Username : username,
        Pool : $rootScope.userPool
      };
      cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          var token = result.getIdToken().getJwtToken();
          $localStorage['token'] = token;
          //POTENTIAL: Region needs to be set if not already set previously elsewhere.
          AWS.config.region = cognito.AWSRegion;

          // Change the key below according to the specific region your user pool is in.
          var credentialsUrl = 'cognito-idp.'+cognito.AWSRegion+'.amazonaws.com/'+cognito.AWSUserPoolId;

          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId : cognito.AWSPoolId, // your identity pool id here
              Logins : {
                credentialsUrl : token
              }
          });

          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: var s3 = new AWS.S3();
          var s3 = new AWS.S3();
          deferred.resolve(token);
        },
        onFailure: function(err) {
          deferred.reject(err);
        },
      });
      return deferred.promise;
    },
    logout: function() {
      cognitoUser.signOut();
    },
    verify: function(username, code) {
      var deferred = $q.defer();
      var userData = {
        Username: username,
        Pool: $rootScope.userPool
      };
      cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          deferred.reject(err);
        } else {
          console.log('call result: ' + result);
          deferred.resolve(result);
        }
      });
      return deferred.promise;
    },
    resendVerifyCode: function() {
      var deferred = $q.defer();
      cognitoUser.resendConfirmationCode(function(err, result) {
        if (err) {
          deferred.reject(err);
        } else {
          console.log('call result: ' + result);
          deferred.resolve(result);
        }
      });
      return deferred.promise;
    },
    getCurrentUser: function() {
      var deferred = $q.defer();
      cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
          deferred.reject(err);
        } else {
          for (var i = 0; i < result.length; i++) {
            currentUser[result[i].getName()] = result[i].getValue();
          }
          deferred.resolve(currentUser);
        }
      });
      return deferred.promise;
    },
    init: function() {
      var deferred = $q.defer();
      cognitoUser = $rootScope.userPool.getCurrentUser();
      if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
          if (err) {
            deferred.reject(err);
          } else {
            console.log('session validity: ' + session.isValid());
            var token = session.getIdToken().getJwtToken();
            $localStorage['token'] = token;
            var credentialsUrl = 'cognito-idp.'+cognito.AWSRegion+'.amazonaws.com/'+cognito.AWSUserPoolId;
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId : cognito.AWSPoolId, // your identity pool id here
                Logins : {
                  credentialsUrl : token
                }
            });
            deferred.resolve(token);
          }
        });
      }
      return deferred.promise;
    }
  };
});