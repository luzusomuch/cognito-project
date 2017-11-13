'use strict';

angular.module('cognitoProject').controller('TagListCtrl', TagListCtrl);


/* @ngInject */
function TagListCtrl ($scope, TagService) {
	$scope.tags = [];
	function init() {
		TagService.getAll().then(function(resp) {
			$scope.tags = resp.data.body;
			console.log($scope.tags);
		}).catch(function(err) {
			console.log(err);
		});
	}

	init();
}

