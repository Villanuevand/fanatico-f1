// Driver Career Information
(function(){
	'use strict';
		angular
			.module('f1App')
			.controller('DriverCareerController',DriverCareer);
	DriverCareer.$injector = ['$log','$stateParams','ErgastService'];

	function DriverCareer($log, $stateParams, ErgastService){
		var vm = this;
		vm.allData = {};
		vm.driverId = null;

		execute();

		function execute(){
			getAllData();
		}

		function getAllData(){
			vm.driverId = $stateParams.driverId;
			ErgastService.getDriverTitles(vm.driverId)
				.then(function(response){					
					vm.allData.titles = response;
				});
			ErgastService.getDriverWins(vm.driverId)
				.then(function(response){					
					vm.allData.wins = response;
				});
			ErgastService.getDriverPolePositions(vm.driverId)
				.then(function(response){					
					vm.allData.pole = response;
				});
			ErgastService.getDriverConstructors(vm.driverId)
				.then(function(response){					
					vm.allData.constructors = response;
				});
			ErgastService.getDriverSeasons(vm.driverId)
				.then(function(response){					
					vm.allData.seasons = response;
				});

			return vm.allData;
		}
	}
	
})();
