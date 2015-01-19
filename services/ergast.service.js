// Servicio  - Servicio Ergast API
(function(){
	'use strict';
	angular
		.module('f1App')
		.service('ErgastService', Ergast)
		.constant('URLS', {
			'DRIVER_STANDINGS' : 'http://ergast.com/api/f1/2014/driverStandings.json',
			'RACE_SCHEDULE' : 'http://ergast.com/api/f1/2015.json'
		});

	Ergast.$injector = ['$http','$log','URLS'];
	// Driver Standings
	function Ergast($http, $log, URLS){
		this.driverStandings = function(){			
			var request = $http({
				method : 'GET',
				url : URLS.DRIVER_STANDINGS				
			});
			return request.then(function(response){				
				return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			});			
		};
		this.raceSchedule = function(){
			var request = $http({
				method : 'GET',
				url : URLS.RACE_SCHEDULE
			});
			return request.then(function(response){					
				return response.data.MRData.RaceTable.Races;
			});
		}
	}


})();