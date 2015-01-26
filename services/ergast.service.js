// Servicio  - Servicio Ergast API
(function(){
	'use strict';
	angular
		.module('f1App')
		.service('ErgastService', Ergast)
		.constant('URLS', {
			'DRIVERS_CURRENT' : 'http://ergast.com/api/f1/current/drivers.json',
			'DRIVER_INFO' : 'http://ergast.com/api/f1/current/drivers/',
			'DRIVER_STANDINGS' : 'http://ergast.com/api/f1/current/driverStandings.json',
			'RACE_SCHEDULE' : 'http://ergast.com/api/f1/2014.json',
			'TEAMS_INFORMATION' : 'http://ergast.com/api/f1/2014/constructors.json',
			'NEXT_RACE_INFO' : 'http://ergast.com/api/f1/current/next.json',
			'LAST_RACE_INFO' : 'http://ergast.com/api/f1/current/last/results.json'
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
				return response.data.MRData.ConstructorTable.Constructors;
			});
		};
		// Next Race
		this.getNextRace = function(){
			var request = $http({
				method : 'GET',
				url : URLS.NEXT_RACE_INFO
			});
			return request.then(function(response){
				return response.data.MRData.RaceTable.Races[0];
			});
		};
		//Last Race
		this.getLastRace = function(){
			var request = $http({
				method : 'GET',
				url : URLS.LAST_RACE_INFO
			});
			return request.then(function(response){				
				return response.data.MRData.RaceTable.Races[0];
			});
		};
		// Drivers
		this.getAllDrivers = function(){
			var request = $http({
				method : 'GET',
				url : URLS.DRIVERS_CURRENT
			});
			return request.then(function(response){				
				return response.data.MRData.DriverTable.Drivers;
			});
		};
		// Driver Detail
		this.getDriverDetail = function(id){
			var request = $http({
				method : 'GET',
				url : URLS.DRIVER_INFO + id +'.json'
			});
			return request.then(function(response){
				return response.data.MRData.DriverTable.Drivers[0];
			});
		};
		// Driver Championships
		this.getDriverTitles = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/drivers/'+id+'/driverStandings/1/seasons.json'
			});
			return request.then(function(response){
				return response.data.MRData.SeasonTable.Seasons;
			});
		};
		// Driver Wins
		this.getDriverWins = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/drivers/'+id+'/results/1.json'
			});
			return request.then(function(response){
				return response.data.MRData.RaceTable.Races.length;
			});
		};
		// Driver Pole Positions
		this.getDriverPolePositions = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/drivers/'+id+'/results/1/qualifying.json'					   
			});
			return request.then(function(response){
				return response.data.MRData.RaceTable.Races.length;
			});
		};		
		// Driver Costructor
		this.getDriverConstructors = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/drivers/'+id+'/constructors.json'
			});
			return request.then(function(response){
				return response.data.MRData.ConstructorTable.Constructors;
			});
		};
		// Driver Seasons
		this.getDriverSeasons = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/drivers/'+id+'/seasons.json'
			});
			return request.then(function(response){
				return response.data.MRData.SeasonTable.Seasons;
			});
		};
	}


})();