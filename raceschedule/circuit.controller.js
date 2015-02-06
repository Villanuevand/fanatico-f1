(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('CircuitController',CircuitController);

	CircuitController.$injector = ['$log','$routeParams','ErgastService'];
	function CircuitController($log, $routeParams, ErgastService){
		var vm = this;
		vm.circuitId = $routeParams.circuitId;

		
	}
})();