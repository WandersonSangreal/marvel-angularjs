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

					const page = sessionStorage.getItem('page') || undefined;

					return apiService.get('characters', page);
					// return {data: {results: []}};

				}
			}
		})
		.when("/detail/:character", {
			name: 'detail',
			templateUrl: "/app/views/detail/detail.view.html",
			controller: "detailController",
			resolve: {
				character: function (apiService, $route) {
					console.log($route.current.params.character);
					// return apiService.get('character');
				}
			}
		}).otherwise({redirectTo: '/'});
});
