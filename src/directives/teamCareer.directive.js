(function(){
	'use strict';
	angular
		.module('f1App')
		.directive('teamCareer',TeamCareer);
	/* @ngInject */
	function TeamCareer(){
		var directive = {
			restrict : 'E',
			templateUrl : 'teams/teamCareer.html',
			controller : 'teamCareerController',
			controllerAs : 'teamLog'
		};

		return directive;
	}
})();