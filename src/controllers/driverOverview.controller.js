(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('DriverOverviewController',DriverOverview);

	/* @ngInject */
	DriverOverview.$inject = ['$log','$stateParams','ErgastService'];
	function DriverOverview($log, $stateParams, ErgastService){
		var vm = this;
		vm.dataOverview = null;

		execute();

		function execute(){
			getDriverOverview();
		}

		function getDriverOverview(){
			ErgastService.getDriverOverview($stateParams.driverId)
				.then(function(response){					
					vm.dataOverview = response;
				});
		}
	}
})();