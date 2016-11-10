(function() {
	'use strict';


	function invoerController() {
		var vm = this;

		//vm
		vm.invoerveld = '';
		vm.heyPresto = heyPresto;

		vm.nogEenInvoerveld = 'Deze waarde is door de controller gezet';
		vm.simsalabim = simsalabim;

		// var

		// functies
		function heyPresto() {
			vm.invoerveld = 'Hey Presto';
		}

		function simsalabim() {
			vm.nogEenInvoerveld = 'Simsalabim';
		}


	}

	angular.module('introApp')
		.controller('invoerController', invoerController)

})();
