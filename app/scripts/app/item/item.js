'use strict';

angular.module('cognitoProject')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('item', {
    url: '/item',
    templateUrl: '</ui-view>'
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
    controller: 'ItemEditCtrl'
  });
});
