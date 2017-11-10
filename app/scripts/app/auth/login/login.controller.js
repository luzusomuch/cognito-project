'use strict';

angular.module('cognitoProject').controller('LoginCtrl', LoginCtrl);


/* @ngInject */
function LoginCtrl ($scope, AuthService, $state) {

	$scope.login = function(form) {
		if (form.$valid) {
			AuthService.login($scope.username, $scope.password).then(function(resp) {
				console.log(resp);
				$state.go('home');
			}).catch(function(err) {
				console.log(err);
			});
		}
	};
}

