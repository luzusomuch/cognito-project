'use strict';

angular.module('cognitoProject').controller('RegisterCtrl', RegisterCtrl);
/* @ngInject */
function RegisterCtrl ($scope, AuthService, HelpService, $state) {
	$scope.type = 1;

	$scope.register = function(form) {
		if (form.$valid) {
			var attrsList = [];
			attrsList.push(HelpService.resolveAttr('email', $scope.email));
			attrsList.push(HelpService.resolveAttr('phone_number', $scope.phone));
			attrsList.push(HelpService.resolveAttr('custom:userType', $scope.type));
			AuthService.register($scope.username, $scope.password, attrsList).then(function(resp) {
				$state.go('verify');
			}).catch(function(err) {
				console.log(err);
			});
		}
	};
}

