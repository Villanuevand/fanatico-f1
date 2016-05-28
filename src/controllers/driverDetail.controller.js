// Driver Detail Controller
(function(){
	'use strict';
		angular
			.module('f1App')
			.controller('driverDetailController',DriverDetail);

	/* @ngInject */
	DriverDetail.$inject = ['$log', '$stateParams','ErgastService'];
	function DriverDetail($log, $stateParams, ErgastService){
		var vm = this;
		vm.detailInfo = null;
		vm.driverId = null;

		execute();

		function execute(){
			getDriverDetail();
		};

		function getDriverDetail(){
			vm.driverId = $stateParams.driverId;
			if(vm.driverId){
				ErgastService.getDriverDetail(vm.driverId)
					.then(function(response){
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