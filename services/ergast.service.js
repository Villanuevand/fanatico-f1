// Servicio  - Servicio Ergast API
(function(){
	'use strict';
	angular
		.module('f1App')
		.service('ErgastService', Ergast)
		.constant('URLS', {
			'DRIVERS_CURRENT' : 'https://ergast.com/api/f1/current/drivers.json',
			'DRIVER_INFO' : 'https://ergast.com/api/f1/current/drivers/',
			'DRIVER_STANDINGS' : 'https://ergast.com/api/f1/current/driverStandings.json',
			'RACE_SCHEDULE' : 'https://ergast.com/api/f1/2015.json',
			'TEAMS_INFORMATION' : 'https://ergast.com/api/f1/2014/constructors.json',
			'NEXT_RACE_INFO' : 'https://ergast.com/api/f1/current/next.json',
			'LAST_RACE_INFO' : 'https://ergast.com/api/f1/current/last/results.json'
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
		// Race Information
		this.raceInformation = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/2015/'+id+'.json'
			});
			return request.then(function(response){				
				return response.data.MRData.RaceTable.Races[0];
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
		// Especific Team by Id
		this.getTeam = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/2014/constructors/'+id+'.json'
			});
			return request.then(function(response){
				return response.data.MRData.ConstructorTable.Constructors;
			})
		};
		// Team Drivers
		this.getTeamDrivers = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/current/constructors/'+id+'/drivers.json'
			});
			return request.then(function(response){
				return response.data.MRData.DriverTable.Drivers;
			})
		};
		// Team Titles
		this.getTeamTitles = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/constructors/'+id+'/constructorStandings/1/seasons.json'
			});
			return request.then(function(response){
				return response.data.MRData.SeasonTable.Seasons;
			})
		};
		// Team Wins
		this.getTeamWins = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/constructors/'+id+'/results/1.json'
			});
			return request.then(function(response){
				return response.data.MRData.RaceTable.Races;
			})
		};
		// Team Seasons
		this.getTeamSeasons = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/constructors/'+id+'/seasons.json'
			});
			return request.then(function(response){
				return response.data.MRData.SeasonTable.Seasons;
			})
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
				url : 'http://ergast.com/api/f1/drivers/'+id+'/results/1.json?limit=100'
			});
			return request.then(function(response){
				return response.data.MRData.total;
			});
		};
		// Driver Pole Positions
		this.getDriverPolePositions = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/drivers/'+id+'/grid/1/qualifying.json?limit=100'					   
			});
			return request.then(function(response){
				return response.data.MRData.total;
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
		// Driver Overview
		this.getDriverOverview = function(id){
			var request = $http({
				method : 'GET',
				url : 'http://ergast.com/api/f1/2014/drivers/'+id+'/results.json'
			});
			return request.then(function(response){
				return response.data.MRData.RaceTable.Races;
			});
		};
	}


})();
