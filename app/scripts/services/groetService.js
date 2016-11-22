(function () {
	'use strict';

	function groetService() {

		var begroeting = 'Hallo';	      // default begroeting
		var groet = function(naam) {
			return begroeting + ' ' + naam;
		};

		var setBegroeting = function(value) {
			begroeting = value;
		};

		return {
			groet: groet,
			setBegroeting: setBegroeting
		};

	}


	angular.module('introApp')
		.factory('groetService', groetService)


})();
