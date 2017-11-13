'use strict';

angular.module('cognitoProject').controller('ItemCreateCtrl', ItemCreateCtrl);


/* @ngInject */
function ItemCreateCtrl ($scope, TagService, $q) {
	$scope.items = [];

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
			console.log(err);
			deferred.reject(err);
		});
		return deferred.promise;
	};
}

