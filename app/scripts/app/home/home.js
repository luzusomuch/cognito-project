'use strict';

angular.module('cognitoProject')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('home', {
    url: '/home',
    templateUrl: 'scripts/app/home/view.html',
    controller: 'HomeCtrl'
  });
});
