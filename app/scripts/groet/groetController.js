(function() {
	'use strict';


	function groetController(groetService) {
		var vm = this;

		vm.naam = '';		                          // default naam is leeg
		groetService.setBegroeting('Guten Tag');

		vm.doeGroet = function() {
			vm.groet = groetService.groet(vm.naam);
		}
	}

	angular.module('introApp')
		.controller('groetController', groetController)

})();
