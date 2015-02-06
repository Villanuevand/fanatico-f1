// App.js - Configuración de la aplicación
(function(){
	'use strict';
	angular
		.module('f1App',[
			'ngRoute',
			'app.filters'
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
			templateUrl : 'raceschedule/calendar.html',
			controller : 'RaceScheduleController',
			controllerAs : 'race'
		})
		.when('/circuit/:circuitId',{
			templateUrl : 'raceschedule/circuit.html',
			controller : 'CircuitController',
			controllerAs : 'circuit'
		})
		.when('/teams',{
			templateUrl	: 'teams/teams.html',
			controller : 'TeamsController',
			controllerAs : 'team'
		})
		.when('/teams/:constructorId',{
			templateUrl : 'teams/teamDetail.html',
			controller : 'TeamDetailController',
			controllerAs : 'team'
		})
		.when('/drivers',{
			templateUrl : 'drivers/drivers.html',
			controller : 'DriversController',
			controllerAs : 'driver'
		})
		.when('/drivers/:driverId',{
			templateUrl : 'drivers/driverDetail.html',
			controller : 'driverDetailController',
			controllerAs : 'driver'
		})
		.otherwise({
			redirecTo : '/'
		});		
	}

})();