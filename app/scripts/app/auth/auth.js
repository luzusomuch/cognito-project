'use strict';

angular.module('cognitoProject')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('register', {
    url: '/register',
    templateUrl: 'scripts/app/auth/register/register.html',
    controller: 'RegisterCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: 'scripts/app/auth/login/login.html',
    controller: 'LoginCtrl'
  }).state('forgotPw', {
    url: '/forgot-password',
    templateUrl: 'scripts/app/auth/forgot-pw/forgot-pw.html',
    controller: 'ForgotPasswordCtrl'
  }).state('verify', {
    url: '/verify-code',
    templateUrl: 'scripts/app/auth/verify/verify.html',
    controller: 'VerifyCodeCtrl'
  });
});
