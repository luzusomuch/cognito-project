'use strict';

angular.module('cognitoProject').controller('VerifyCodeCtrl', VerifyCodeCtrl);
/* @ngInject */
function VerifyCodeCtrl ($scope, AuthService, HelpService, $state) {

	$scope.verify = function(form) {
		if (form.$valid) {
			AuthService.verify($scope.username, $scope.code).then(function(resp) {
				console.log(resp);
				$state.go('login');
			}).catch(function(err) {
				console.log(err);
			});
		}
	};

	$scope.resendVerifyCode = function() {
		AuthService.resendVerifyCode().then(function(resp) {
			console.log(resp);
		}).catch(function(err) {
			console.log(err);
		});
	};
}

