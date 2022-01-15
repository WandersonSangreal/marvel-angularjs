'use strict';

appMarvel.controller('detailController', function ($scope, $routeParams) {
	$scope.id = $routeParams.character;

	console.log($scope.id);
});
