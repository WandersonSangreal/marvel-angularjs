'use strict';

appMarvel.controller('listController', function ($scope, characters, apiService) {

	$scope.search = sessionStorage.getItem('search') || null;

	$scope.setValues = function (data) {

		$scope.characters = data.results;
		$scope.pagination = {
			total: data.total,
			page: (((data.offset !== 0 ? (data.offset - 1) : data.offset) / data.limit) + 1),
			items: data.limit,
		};

	}

	$scope.setPage = function (page) {

		if (parseInt(page) === parseInt($scope.pagination.page) || (page >= (Math.ceil($scope.pagination.total / $scope.pagination.items))) || (page <= 0)) {
			return;
		}

		let search = sessionStorage.getItem('search') || undefined;
		let offset = (((page * $scope.pagination.items) + 1) - $scope.pagination.items);

		if (offset === 1) {
			offset = undefined;
		}

		$scope.characters = [];

		apiService.get('characters', offset, search).then(response => {

			$scope.setValues(response.data);

		});

	}

	$scope.setSearch = function () {

		if ($scope.search) {

			$scope.characters = [];
			sessionStorage.removeItem('search');

			apiService.get('characters', undefined, $scope.search).then(response => {

				$scope.setValues(response.data);

			});

		}

	}

	$scope.verifyClearSearch = function () {

		if (!$scope.search && sessionStorage.getItem('search')) {

			sessionStorage.removeItem('search');

			$scope.characters = [];

			apiService.get('characters', undefined, undefined).then(response => {

				$scope.setValues(response.data);

			});

		}

	}

	$scope.setValues(characters.data);

});
