// Last Race Directive
(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('lastRace',lastRace);

	function lastRace(){
		var directive = {
			restrict : 'E',
			templateUrl : 'home/lastRace.html',
			controller : 'HomeController',
			controllerAs : 'info'
		};
		return directive;
	}
})();