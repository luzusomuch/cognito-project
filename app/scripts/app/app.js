'use strict';
angular.module('cognitoProject', ['ui.router', 'ui.bootstrap', 'ngStorage', 'ckeditor', 'ngTagsInput', 'ngSanitize'])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');
})
.run(function ($rootScope, cognito, AuthService) {
	console.log(cognito);
	var poolData = {
    UserPoolId : cognito.AWSUserPoolId, // Your user pool id here
    ClientId : cognito.ClientId // Your client id here
	};
	$rootScope.userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
	AuthService.init().then(function() {
		AuthService.getCurrentUser().then(function(resp) {
			$rootScope.currentUser = resp;
		});
	}).catch(function(err) {
		console.log(err);
	});
});