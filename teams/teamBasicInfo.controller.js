(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('TeamBasicInfoController',TeamBasicInfo);

	TeamBasicInfo.$injector = ['$log', '$stateParams', 'ErgastService'];
	function TeamBasicInfo($log, $stateParams, ErgastService){
		var vm = this;
		vm.constructorData = null;

		execute();

		function execute(){
			getTeam();
		};

		function getTeam(){
			ErgastService.getTeam($stateParams.constructorId)
				.then(function(response){
					vm.constructorData = response;					
					return vm.constructorData;
				});
		}	
			
	}
})();