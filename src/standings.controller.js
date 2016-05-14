(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('StandingsController',Home);

	Home.$injector = ['$q', '$log', 'ErgastService'];
	function Home($q, $log, ErgastService){
		var defer = $q.defer();
		var vm = this;
			vm.title = 'Driver Standings';
			vm.standings = null;


		execute();

		function execute(){
			getdriverStandings();
		}		

		function getdriverStandings(){			
			return ErgastService.driverStandings()
				.then(function(response){						
					vm.standings = response;
					return vm.standings;				
				})
		}

		
	}
})();