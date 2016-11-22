(function () {
	'use strict';

	function gebruikersService($q, $timeout) {


		// vars
		var alleGebruikers = [
			{
				naam: 'Roel Noorman',
				woonplaats: 'Groningen'
			},
			{
				naam: 'Arie Roos',
				woonplaats: 'Amsterdam'
			},
			{
				naam: 'Bob Evers',
				woonplaats: 'Pittsburgh'
			}
		];


		// functions
		function getAlleGebruikers() {
			var deferred = $q.defer();

			$timeout(function () {
				deferred.resolve(alleGebruikers);
			}, 3000);


			return deferred.promise;
		}

		function addGebruiker(naam, woonplaats) {
			if (naam && woonplaats) {
				alleGebruikers.push({
					naam: naam,
					woonplaats: woonplaats
				})
			}
		}

		return {
			getAlleGebruikers: getAlleGebruikers,
			addGebruiker: addGebruiker
		}
	}


	angular.module('introApp')
		.factory('gebruikersService', gebruikersService)


})();
