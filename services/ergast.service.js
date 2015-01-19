// Servicio  - Servicio Ergast API
(function(){
	'use strict';
	angular
		.module('f1App')
		.service('ErgastService', Ergast)
		.constant('URLS', {
			'DRIVER_STANDINGS' : 'http://ergast.com/api/f1/2014/driverStandings.json'
		});

	Ergast.$injector = ['$http','$q','$log','URLS'];
	// Driver Standings
	function Ergast($http, $q, $log, URLS){
		this.driverStandings = function(){			
			var request = $http({
				method : 'GET',
				url : URLS.DRIVER_STANDINGS				
			});
			return request.then(function(response){				
				return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			});			
		};
		
	}


})();