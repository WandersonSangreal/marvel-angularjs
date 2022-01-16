'use strict';

appMarvel.controller('listController', function ($scope, characters, apiService) {

	$scope.setValues = function (data) {

		$scope.characters = data.results;
		$scope.pagination = {
			total: data.total,
			page: (((data.offset !== 0 ? (data.offset - 1) : data.offset) / data.limit) + 1),
			items: data.limit,
		};

	}

	$scope.setPage = function (page) {

		let offset = (((page * $scope.pagination.items) + 1) - $scope.pagination.items);

		if (offset === 1) {
			offset = undefined;
		}

		$scope.characters = [];

		apiService.get('characters', offset).then(response => {

			$scope.setValues(response.data);

		});

	}

	$scope.setValues(characters.data);

});
