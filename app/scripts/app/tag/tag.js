'use strict';

angular.module('cognitoProject')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('tag', {
    url: '/tag',
  }).state('tag.list', {
    url: '/list',
    templateUrl: 'scripts/app/tag/list/list.html',
    controller: 'TagListCtrl'
  }).state('tag.create', {
    url: '/create',
    templateUrl: 'scripts/app/tag/create/create.html',
    controller: 'TagCreateCtrl'
  }).state('tag.edit', {
    url: '/edit/:id',
    templateUrl: 'scripts/app/tag/edit/edit.html',
    controller: 'TagEditCtrl'
  });
});
