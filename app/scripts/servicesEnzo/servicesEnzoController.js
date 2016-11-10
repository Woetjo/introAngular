(function () {
	'use strict';


	function servicesEnzoController(gebruikersService) {
		var vm = this;

		// vm
		vm.gebruikers = [];
		vm.toevoegen = toevoegen;


		//var


		// functions
		function success(gebruikers) {
			vm.gebruikers = gebruikers;

		}

		function error(error) {
			console.error('Oh nee, een error.');
			console.error(error);
		}

		function toevoegen() {
			gebruikersService.addGebruiker(vm.naam, vm.woonplaats);
			vm.naam = '';
			vm.woonplaats ='';
		}

		// init
		gebruikersService.getAlleGebruikers()
			.then(success, error)


	}

	angular.module('introApp')
		.controller('servicesEnzoController', servicesEnzoController)

})();
