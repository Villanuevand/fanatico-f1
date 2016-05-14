// Drivers Controller
(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('DriversController',Drivers);
	Drivers.$injector = ['$log', 'ErgastService'];

	function Drivers($log, ErgastService){
		var vm = this; 
		vm.currentData = null;

		execute();

		function execute(){
			getAllDrivers();
		};

		function getAllDrivers(){
			ErgastService.getAllDrivers()
				.then(function(response){
					vm.currentData = response;
					return vm.currentData;
				});
		};


	}
})();