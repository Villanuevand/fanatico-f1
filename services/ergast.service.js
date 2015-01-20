// Servicio  - Servicio Ergast API
(function(){
	'use strict';
	angular
		.module('f1App')
		.service('ErgastService', Ergast)
		.constant('URLS', {
			'DRIVER_STANDINGS' : 'http://ergast.com/api/f1/2014/driverStandings.json',
			'RACE_SCHEDULE' : 'http://ergast.com/api/f1/2014.json',
			'TEAMS_INFORMATION' : 'http://ergast.com/api/f1/2014/constructors.json'
		});

	Ergast.$injector = ['$http','$log','URLS'];	

	function Ergast($http, $log, URLS){
		// Driver Standings
		this.driverStandings = function(){			
			var request = $http({
				method : 'GET',
				url : URLS.DRIVER_STANDINGS				
			});
			return request.then(function(response){				
				return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			});			
		};
		//Race Schedule
		this.raceSchedule = function(){
			var request = $http({
				method : 'GET',
				url : URLS.RACE_SCHEDULE
			});
			return request.then(function(response){					
				return response.data.MRData.RaceTable.Races;
			});
		};
		// Teams 
		this.getTeams = function(){
			var request = $http({
				method : 'GET',
				url : URLS.TEAMS_INFORMATION
			});
			return request.then(function(response){
				$log.info(response.data.MRData.ConstructorTable.Constructors);
				return response.data.MRData.ConstructorTable.Constructors;
			});
		}
	}


})();