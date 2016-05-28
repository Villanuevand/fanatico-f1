(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('TeamDetailController',TeamDetail);

	/* @ngInject */
	TeamDetail.$inject = ['$log', '$stateParams','ErgastService'];
	function TeamDetail($log, $stateParams, ErgastService){
		var vm = this;
		vm.title = 'Teams Detail';
		vm.constructorId = null;

		vm.constructorId = $stateParams.constructorId;
	}


})();