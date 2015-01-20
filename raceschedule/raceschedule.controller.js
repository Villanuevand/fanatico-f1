// Race Schedule Controller
(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('RaceScheduleController',RaceSchedule);

	RaceSchedule.$injector = ['$q', '$log', 'ErgastService'];
	function RaceSchedule($q, $log, ErgastService){
		var vm = this;
			vm.title = 'Race Schedule';
			vm.schedule = null;

		execute();

		function execute(){
			getRaceSchedule();		
		}

		function getRaceSchedule(){
			return ErgastService.raceSchedule()
				.then(function(response){					
					vm.schedule = response;
					return vm.schedule;
				});
		}
	}
})();