(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('CircuitController',CircuitController);

	CircuitController.$injector = ['$log','$routeParams','ErgastService'];
	function CircuitController($log, $routeParams, ErgastService){
		var vm = this;
		vm.circuitId = $routeParams.circuitId;
		vm.roundId = $routeParams.roundId;

		execute();

		function execute(){
			getCircuitInformation();			
		}

		function getCircuitInformation(){
			ErgastService.raceInformation(vm.roundId)
				.then(function(response){
					$log.info(response);
					vm.response = response;
				});
		}
	}
})();