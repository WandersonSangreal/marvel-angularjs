angular.module('list.component', []).directive('list', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		controller: function ($scope, $element) {

		},
		templateUrl: '/app/components/list/list.component.html',
		replace: true
	}

});
