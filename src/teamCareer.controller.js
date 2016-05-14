(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('teamCareerController', TeamCareer);

	TeamCareer.$injector = ['$log','$stateParams', 'ErgastService'];
	function TeamCareer($log,$stateParams, ErgastService){
		var vm = this;
		vm.constructorData = {};
		
		execute();

		function execute(){
			getAllData();
		}

		function getAllData(){
			vm.constructorId = $stateParams.constructorId;
			ErgastService.getTeamDrivers(vm.constructorId)
				.then(function(response){
					vm.constructorData.drivers = response;
				});
			ErgastService.getTeamTitles(vm.constructorId)
				.then(function(response){
					vm.constructorData.titles = response;
				});
			ErgastService.getTeamSeasons(vm.constructorId)
				.then(function(response){
					vm.constructorData.seasons = response;
				});
			ErgastService.getTeamWins(vm.constructorId)
				.then(function(response){					
					vm.constructorData.wins = response;
				});
			return vm.constructorData;

		}
	};
})();