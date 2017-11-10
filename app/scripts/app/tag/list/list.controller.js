'use strict';

angular.module('cognitoProject').controller('TagListCtrl', TagListCtrl);


/* @ngInject */
function TagListCtrl ($scope, TagService) {

	function init() {
		TagService.getAll().then(function(resp) {
			console.log(resp);
		}).catch(function(err) {
			console.log(err);
		});
	};

	init();
}

