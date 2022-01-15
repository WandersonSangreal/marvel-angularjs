appMarvel.directive('card', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			index: "=",
			character: "="
		},
		controller: function ($scope) {
			$scope.thumbnail = $scope.character.thumbnail.path.replace('http', 'https') + '/standard_large.jpg';
		},
		templateUrl: '/app/components/card/card.component.html',
		replace: true
	}

});
