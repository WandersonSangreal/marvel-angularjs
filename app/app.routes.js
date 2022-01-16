'use strict';

appMarvel.config(function ($locationProvider) {
	$locationProvider.html5Mode(true);
});

appMarvel.config(function ($httpProvider) {
	$httpProvider.interceptors.push('interceptorRouter');
}).factory('interceptorRouter', function () {
	return {
		request: function (config) {
			return config;
		}
	}
});

appMarvel.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			name: 'list',
			templateUrl: "/app/views/list/list.view.html",
			controller: "listController",
			resolve: {
				characters: function (apiService) {

					const offset = sessionStorage.getItem('offset') || undefined;

					return apiService.get('characters', offset);

				}
			}
		})
		.when("/detail/:character", {
			name: 'detail',
			templateUrl: "/app/views/detail/detail.view.html",
			controller: "detailController",
			resolve: {
				character: function (apiService, $route) {

					const offset = sessionStorage.getItem('offset') || undefined;

					return apiService.get('characters/' + $route.current.params.character, offset);

				}
			}
		}).otherwise({redirectTo: '/'});
});
