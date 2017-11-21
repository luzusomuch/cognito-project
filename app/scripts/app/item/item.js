'use strict';

angular.module('cognitoProject')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('item', {
    url: '/item',
    template: '<ui-view/>'
  }).state('item.list', {
    url: '/list',
    templateUrl: 'scripts/app/item/list/list.html',
    controller: 'ItemListCtrl'
  }).state('item.create', {
    url: '/create',
    templateUrl: 'scripts/app/item/create/create.html',
    controller: 'ItemCreateCtrl'
  }).state('item.edit', {
    url: '/edit/:id',
    templateUrl: 'scripts/app/item/edit/edit.html',
    controller: 'ItemEditCtrl',
    resolve: {
      content: ['ItemService', '$stateParams', '$state', function(ItemService, $stateParams, $state) {
        return ItemService.get($stateParams.id).then(function(resp) {
          console.log(resp);
        }).catch(function(err) {
          console.log(err);
          $state.go('item.list');
        });
      }]
    }
  });
});
