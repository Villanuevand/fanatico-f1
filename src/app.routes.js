/**
 * Created by Andres on 02/04/2015.
 */
(function () {
    'use strict';
    angular
        .module('f1App')
        .config(configRoutes);

    /* @ngInject */
    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
    function configRoutes($stateProvider,$urlRouterProvider,$locationProvider){
        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
        $stateProvider
            .state('home',{
                url : '/',
                templateUrl : 'home/home.html',
                controller : 'HomeController',
                controllerAs : 'home'
            })
                .state('estadisticas',{
                url : '/estadisticas',
                templateUrl : 'standings/standings.html',
                controller : 'StandingsController',
                controllerAs : 'list'
            })
            .state('calendario',{
                url : '/calendario',
                templateUrl : 'raceschedule/calendar.html',
                controller : 'RaceScheduleController',
                controllerAs : 'race'
            })
            .state('calendarioDetalle',{
                url :'/circuito/:circuitId/:roundId',
                templateUrl : 'raceschedule/circuit.html',
                controller : 'CircuitController',
                controllerAs : 'info'
            })
            .state('equipos',{
                url : '/equipos',
                templateUrl	: 'teams/teams.html',
                controller : 'TeamsController',
                controllerAs : 'team'
            })
            .state('equipoDetalle',{
                url : '/equipo/:constructorId',
                templateUrl : 'teams/teamDetail.html',
                controller : 'TeamDetailController',
                controllerAs : 'team'
            })
            .state('pilotos',{
                url : '/pilotos',
                templateUrl : 'drivers/drivers.html',
                controller : 'DriversController',
                controllerAs : 'driver'
            })
            .state('pilotosDetalle',{
                url : '/pilotos/:driverId',
                templateUrl : 'drivers/driverDetail.html',
                controller : 'driverDetailController',
                controllerAs : 'driver'
            });
    }

})();