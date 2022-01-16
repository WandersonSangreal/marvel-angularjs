appMarvel.directive('pagination', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			total: "=",
			page: "=",
			items: "=",
			change: "=",
		},
		controller: function ($scope) {
			$scope.pages = Array.from({length: Math.ceil($scope.total / $scope.items)}, (v, k) => (k + 1));
			$scope.size = 4;
			$scope.startPage = ($scope.page - $scope.size) <= 0 ? 1 : (($scope.page - $scope.size) + 1);
		},
		templateUrl: '/app/components/pagination/pagination.component.html',
		replace: true
	}

});
