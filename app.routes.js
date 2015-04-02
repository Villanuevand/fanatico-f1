/**
 * Created by Andres on 02/04/2015.
 */
(function () {
    'use strict';
    angular
        .module('f1App')
        .config(configRoutes);

    configRoutes.$injector = ['$routeProvider'];

    function configRoutes($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl : 'home/home.html',
                controller : 'HomeController',
                controllerAs : 'home'
            })
            .when('/estadisticas',{
                templateUrl : 'standings/standings.html',
                controller : 'StandingsController',
                controllerAs : 'list'
            })
            .when('/calendario',{
                templateUrl : 'raceschedule/calendar.html',
                controller : 'RaceScheduleController',
                controllerAs : 'race'
            })
            .when('/circuito/:circuitId/:roundId',{
                templateUrl : 'raceschedule/circuit.html',
                controller : 'CircuitController',
                controllerAs : 'info'
            })
            .when('/equipos',{
                templateUrl	: 'teams/teams.html',
                controller : 'TeamsController',
                controllerAs : 'team'
            })
            .when('/equipos/:constructorId',{
                templateUrl : 'teams/teamDetail.html',
                controller : 'TeamDetailController',
                controllerAs : 'team'
            })
            .when('/pilotos',{
                templateUrl : 'drivers/drivers.html',
                controller : 'DriversController',
                controllerAs : 'driver'
            })
            .when('/pilotos/:driverId',{
                templateUrl : 'drivers/driverDetail.html',
                controller : 'driverDetailController',
                controllerAs : 'driver'
            })
            .otherwise({
                redirecTo : '/'
            });
    }

})();