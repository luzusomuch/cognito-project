'use strict';

angular.module('cognitoProject').controller('ItemListCtrl', ItemListCtrl);


/* @ngInject */
function ItemListCtrl ($scope, ItemService) {
	$scope.tags = [];
	function init() {
		ItemService.getAll().then(function(resp) {
			$scope.tags = resp.data.body;
			console.log($scope.tags);
		}).catch(function(err) {
			console.log(err);
		});
	}

	init();
}

