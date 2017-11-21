'use strict';

angular.module('cognitoProject').controller('ItemListCtrl', ItemListCtrl);


/* @ngInject */
function ItemListCtrl ($scope, ItemService) {
	$scope.contents = [];
	function init() {
		ItemService.getAll().then(function(resp) {
			$scope.contents = resp.data.body;
			console.log($scope.contents);
		}).catch(function(err) {
			console.log(err);
		});
	}

	init();
}

