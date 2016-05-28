// Teams Controller
(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('TeamsController',Teams);

	Teams.$injector = ['$log','ErgastService'];
	/* @ngInject */
	function Teams($log, ErgastService){
		var vm = this;
			vm.title = 'Teams';
			vm.information = null;

		execute();

		function execute(){
			getTeams();
		}

		function getTeams(){
			return ErgastService.getTeams()
				.then(function(response){
					vm.information = response;
					return vm.information;
				});
		}

	}
})();