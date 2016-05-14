(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('CircuitController',CircuitController);

	CircuitController.$injector = ['$log','$stateParams','ErgastService'];
	function CircuitController($log, $stateParams, ErgastService){
		var vm = this;
		vm.circuitId = $stateParams.circuitId;
		vm.roundId = $stateParams.roundId;

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