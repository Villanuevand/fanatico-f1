(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('TeamDetailController',TeamDetail);
	
	TeamDetail.$injector = ['$log', '$routeParams','ErgastService'];
	function TeamDetail($log, $routeParams, ErgastService){
		var vm = this;
		vm.title = 'Teams Detail';
		vm.constructorId = null;

		vm.constructorId = $routeParams.constructorId;
	}


})();