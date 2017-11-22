'use strict';

angular.module('cognitoProject').controller('ItemCreateCtrl', ItemCreateCtrl);


/* @ngInject */
function ItemCreateCtrl ($scope, TagService, ItemService, ResponseService, $q) {
	$scope.item = {};

	$scope.loadTags = function(query) {
		var deferred = $q.defer();
		TagService.getAll().then(function(resp) {
			var tags = resp.data.body;
			var results = [];
			_.each(tags, function(tag) {
				if (tag.indexOf(query) !== -1) {
					results.push({text: tag});
				}
			});
			deferred.resolve(results);
		}).catch(function(err) {
			deferred.reject(err);
		});
		return deferred.promise;
	};


	$scope.submit = function(form) {
		if (form.$valid) {
			$scope.item.tags = _.map($scope.item.tags, function(tag) {
				return tag.text;
			});
			ItemService.create($scope.item).then(function(resp) {
				var doc = resp.data.body;
				ResponseService.create({'doc-id': doc.id, response: $scope.item.response});
			}).catch(function(err) {
				console.log(err);
			});
		}
	};
}

