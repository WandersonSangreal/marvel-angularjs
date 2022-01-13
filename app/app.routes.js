'use strict';

appMarvel.config(function ($locationProvider) {
	$locationProvider.html5Mode(true);
});

appMarvel.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			name: 'list',
			templateUrl: "/app/views/list/list.view.html",
			controller: "listController"
		})
		.when("/detail/:character", {
			name: 'detail',
			templateUrl: "/app/views/detail/detail.view.html",
			controller: "detailController"
		});
});
