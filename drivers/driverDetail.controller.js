// Driver Detail Controller
(function(){
	'use strict';
		angular
			.module('f1App')
			.controller('driverDetailController',DriverDetail);
	DriverDetail.$injector = ['$log', '$routeParams','ErgastService'];

	function DriverDetail($log, $routeParams, ErgastService){
		var vm = this;
		vm.detailInfo = null;
		vm.driverId = null;

		execute();

		function execute(){
			getDriverDetail();
		};

		function getDriverDetail(){
			vm.driverId = $routeParams.driverId;
			if(vm.driverId){
				ErgastService.getDriverDetail(vm.driverId)
					.then(function(response){
						$log.info(response);
						vm.detailInfo = response;
						return vm.detailInfo;
					});		
			}else{
				vm.detailInfo = 'Hubo un error.';
				return vm.detailInfo;
			}
			
		}
	}

})();