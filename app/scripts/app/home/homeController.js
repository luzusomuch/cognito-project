'use strict';

angular.module('cognitoProject')
.controller('HomeCtrl', function ($state, user) {
  console.log(user);
  if (user['custom:userType'] === '1') {
  	$state.go('item.list');
  } else {
  	$state.go('tag.list');
  }
});