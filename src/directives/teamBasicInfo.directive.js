(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('teamInfo',TeamBasicInfo);
	/* @ngInject */
	function TeamBasicInfo(){
		var directive = {
			restrict : 'E',
			templateUrl : 'teams/TeamBasicInfo.html',
			controller : 'TeamBasicInfoController',
			controllerAs : 'team'
		};

		return directive;
	}
})();