'use strict';

appMarvel.controller('detailController', function ($scope, $routeParams, character, apiService) {

	$scope.comics = [];

	$scope.character = character?.data?.results[0] || [];
	$scope.thumbnail = $scope.character.thumbnail.path.replace('http', 'https') + '/standard_amazing.jpg';

	let comicsURI = $scope.character?.comics?.collectionURI;

	if (comicsURI) {

		apiService.get(comicsURI.replace('http', 'https')).then(response => {
			$scope.comics = response.data.results.map(item => {
				return {
					title: item.title,
					thumbnail: {url: item.thumbnail.path.replace('http', 'https') + '/portrait_fantastic.jpg'},
				};
			});
		});

	}

});
