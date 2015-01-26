// Driver Basic Info Directive
(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('driverInfo',driverBasicInfo);

	function driverBasicInfo(){
		var directive = {
			restrict : 'E',
			templateUrl : 'drivers/driverBasicInfo.html',
			controller : 'DriverBasicInfoController',
			controllerAs : 'info'
		};

		return directive;
	}

})();