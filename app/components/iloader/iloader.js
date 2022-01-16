appMarvel.directive('iloading', function ($rootScope, $timeout) {
	return {
		link: function (scope, element, attr) {

			const i = attr['index'];

			function die() {
				$timeout(function () {
					// scope.$destroy();
					element.remove();
				});
			}

			function error() {
				$timeout(function () {
					// scope.$destroy();
				});
			}

			scope.$on("imageLoadComplete" + i, die);
			scope.$on("imageLoadFailed" + i, error);

		},

		template: '<div class="iplace"><div class="loading"></div></div>'
	}
});

appMarvel.directive('iload', function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {

			const i = attrs['iload'];

			element.bind('load', function () {
				$rootScope.$broadcast("imageLoadComplete" + i);
			});
			element.bind('error', function () {
				element.remove();
				$rootScope.$broadcast("imageLoadFailed" + i);
			});
		}
	};
});
