(function () {
	'use strict';


	function routes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'scripts/welkom/welkom.tpl.html',
				controller: 'welkomController',
				controllerAs: 'vm'
			})
			.when('/invoer', {
				templateUrl: 'scripts/invoervelden/invoer.tpl.html',
				controller: 'invoerController',
				controllerAs: 'vm'
			})
			.when('/services', {
				templateUrl: 'scripts/servicesEnzo/servicesEnzo.tpl.html',
				controller: 'servicesEnzoController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			})
	}


	angular.module('introApp')
		.config(routes);

})();
