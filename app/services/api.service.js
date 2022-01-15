'use strict';

appMarvel.service('apiService', function ($http) {

	const config = {
		url: 'https://gateway.marvel.com/v1/public/',
		credentials: {
			apikey: '5a237863b3cc2061003cbbc4fe20dc06',
			ts: '1641665714440',
			hash: 'e5116ac2dbdaa8d6fb1642631fde2588',
			limit: '20',
		}
	};

	this.get = function get(tail, offset, search) {

		let url = new URL(config.url + tail);

		if (offset) {
			sessionStorage.setItem('offset', String(offset));
			url.searchParams.append('offset', String(offset));
		}

		if (search) {
			sessionStorage.setItem('search', search);
			url.searchParams.append('nameStartsWith', search);
		}

		return $http
			.get(url.toString(), {params: config.credentials})
			.then(function (response) {
				return response.data;
			});
	}

});
