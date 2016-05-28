//Home Controller
(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('HomeController',Home);
	Home.$injector = ['$log','ErgastService'];
	/* @ngInject */
	function Home($log, ErgastService){
		var vm = this;
		vm.title = 'Home App';
		vm.lastRace = null;
		vm.nextRace = null;

		execute();

		function execute(){
			getLastRace();
			getNextRace();
		};

		function getLastRace(){
			ErgastService.getLastRace()
				.then(function(response){					
					vm.lastRace = response;
					return vm.lastRace;
				});
		};

		function getNextRace(){		
			ErgastService.getNextRace()
				.then(function(response){					
					vm.nextRace = response;					
					return vm.nextRace;
				});
		};




	}
})();