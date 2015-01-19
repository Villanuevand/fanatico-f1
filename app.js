// App.js - Configuración de la aplicación
(function(){
	'use strict';
	angular
		.module('f1App',[
			'ngRoute'
		])
		.config(config);

	config.$injector = ['$routeProvider'];

	function config($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : 'home/home.html',
			controller : 'HomeController',
			controllerAs : 'home'
		})
		.when('/standings',{
			templateUrl : 'standings/standings.html',
			controller : 'StandingsController',
			controllerAs : 'list'
		})
		.when('/calendar',{
			templateUrl : 'raceschedule/raceschedule.html',
			controller : 'RaceScheduleController',
			controllerAs : 'race'
		})
		.otherwise({
			redirecTo : '/'
		});		
	}

})();