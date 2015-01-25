// Next Race Directive
(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('nextRace',nextRace);

	function nextRace(){
		var directive = {
			restrict : 'E',
			templateUrl : 'home/nextRace.html',
			controller : 'HomeController',
			controllerAs : 'info'
		};
		return directive;
	}
})();