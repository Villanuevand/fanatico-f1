(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('TeamBasicInfoController',TeamBasicInfo);

	TeamBasicInfo.$injector = ['$log', '$routeParams', 'ErgastService'];
	function TeamBasicInfo($log, $routeParams, ErgastService){
		var vm = this;
		vm.constructorData = null;

		execute();

		function execute(){
			getTeam();
		};

		function getTeam(){
			ErgastService.getTeam($routeParams.constructorId)
				.then(function(response){
					vm.constructorData = response;					
					return vm.constructorData;
				});
		}	
			
	}
})();