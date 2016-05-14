//Driver Career Directive
(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('driverCareer',driverCareer);

	function driverCareer(){
		var directive = {
			restrict : 'E',
			templateUrl : 'drivers/driverCareer.html',
			controller : 'DriverCareerController',
			controllerAs : 'info'				
		};
		return directive;
	}
})()