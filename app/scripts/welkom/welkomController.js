(function() {
	'use strict';


	function welkomController() {
		var vm = this;

		// vm
		vm.message = 'Hallo, welkom bij de introductie Angular.';
		vm.berekenSom = berekenSom;

		//var


		// functions
		function berekenSom(arg1, arg2) {
			return arg1 + arg2;
		}

	}

	angular.module('introApp')
		.controller('welkomController', welkomController)

})();
