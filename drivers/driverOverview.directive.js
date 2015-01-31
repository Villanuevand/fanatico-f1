(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('driverOverview',DriverOverview);
	
	function DriverOverview(){
		var directive = {
			restrict : 'E',
			templateUrl : 'drivers/driverOverview.html',
			controller : 'DriverOverviewController',
			controllerAs : 'overview'
		};

		return directive;
	}
})();