(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('DriverOverviewController',DriverOverview);

	DriverOverview.$injector = ['$log','$routeParams','ErgastService'];
	function DriverOverview($log, $routeParams, ErgastService){
		var vm = this;
		vm.dataOverview = null;

		execute();

		function execute(){
			getDriverOverview();
		}

		function getDriverOverview(){
			ErgastService.getDriverOverview($routeParams.driverId)
				.then(function(response){					
					vm.dataOverview = response;
				});
		}
	}
})();