'use strict';

appMarvel.controller('listController', function ($scope, characters, apiService) {

	$scope.characters = characters.data.results;

	/*
	$scope.data = apiService.get('characters');

	$scope.data.then(value => {
		console.log(value);
	});
	*/

});
