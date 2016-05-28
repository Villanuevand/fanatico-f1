(function(){
	'use strict';
	angular
		.module('app.filters',[])
		.filter('country',country)
		.filter('driverNationality',driverNationality)
		.filter('constructorNationality',constructorNationality)
		.filter('grandPrixTranslation', grandPrixTranslation)
		.filter('grandPrixDate',grandPrixDate);

	// Country
	/* @ngInject */
	function country(){
		return function(item){
			switch(item){
				case 'Abu Dhabi' :
					return 'Abu Dabi';
					break;
				case 'Australia' :
					return item;
					break;
				case 'Austria' :
					return item;
					break;
				case 'Bahrain' :
					return 'Barein';
					break;
				case 'Belgium' :
					return 'Belgica';
					break;
				case 'Brazil' :
					return 'Brasil';
					break;
				case 'Canada' :
					return item;
					break;
				case 'China' :
					return item;
					break;
				case 'United Arab Emirates' :
					return 'Emiratos Árabes Unidos';
					break;
				case 'Hungary' :
					return 'Hungria';
					break;
				case 'Italy' :
					return 'Italia';
					break;
				case 'Japan' :
					return 'Japón';
					break;
				case 'Malaysia' :
					return 'Malasia';
					break;
				case 'Mexico' :
					return item;
					break;
				case 'Monaco' :
					return item;
					break;
				case 'Russia' :
					return 'Rusia';
					break;
				case 'Spain' :
					return 'España';
					break;
				case 'Singapore' :
					return 'Singapur';
					break;
				case 'UK' :
					return 'Gran Bretaña';
					break;
				case 'United States' :
					return 'Estados Unidos';
					break;
				default :
					return item;
			}
		}
	}
	//Nationality Filter
	/* @ngInject */
	function driverNationality(){
		return function(item){
			switch(item){
				case 'Australian' :
					return 'Australiano';
					break;
				case 'Brazilian' :
					return 'Brasileño';
					break;
				case 'British' :
					return 'Británico';
					break;
				case 'Danish' :
					return 'Danés';
					break;
				case 'French' :
					return 'Francés';
					break;
				case 'Finnish' :
					return 'Finlandes';
					break;
				case 'German' :
					return 'Alemán';
					break;
				case 'Japanese' :
					return 'Japones';
					break;
				case 'Mexican' :
					return 'Mexicano';
					break;
				case 'Russian' :
					return 'Ruso';
					break;
				case 'Spanish' :
					return 'Español';
					break;
				case 'Swedish' :
					return 'Sueco';
					break;				
				case 'Venezuelan' :
					return 'Venezolano';
					break;				
				default:
					return item;
					break;
			}
		}
	}
	// Constructor Nationality
	/* @ngInject */
	function constructorNationality(){
		return function(item){
			switch(item){
				case 'Austrian' :
					return 'Austriaca';
					break;
				case 'British' :
					return 'Britanica';
					break;
				case 'German' :
					return 'Alemana';
					break;
				case 'Indian' :
					return 'India';
					break;
				case 'Italian' :
					return 'Italiana';
					break;
				case 'Malaysian' :
					return 'Malasia';
					break;
				case 'Russian' :
					return 'Rusa';
					break;
				case 'Swiss' :
					return 'Suiza';
					break;
				default :
					return item;
					break;	
			}
		}
	}
	// Grand Prix Translation
	/* @ngInject */
	function grandPrixTranslation(){
		return function(item){
			switch(item){
				case 'Abu Dhabi Grand Prix' : 
					return 'Gran Premio de Abu Dabi'
				case 'Australian Grand Prix' : 
					return 'Gran Premio de Australia';
					break;
				case 'Austrian Grand Prix' : 
					return 'Gran Premio de Austria';
					break;
				case 'Bahrain Grand Prix' : 
					return 'Gran Premio de Barein';
					break;
				case 'Belgian Grand Prix' : 
					return 'Gran Premio de Belgica';
					break;
				case 'Brazilian Grand Prix' : 
					return 'Gran Premio de Brasil';
					break;
				case 'British Grand Prix' : 
					return 'Gran Premio de Gran Bretaña';
					break;
				case 'Canadian Grand Prix' : 
					return 'Gran Premio de Canada';
					break;
				case 'Chinese Grand Prix' : 
					return 'Gran Premio de China';
					break;
				case 'Hungarian Grand Prix' : 
					return 'Gran Premio de Hungria';
					break;
				case 'Italian Grand Prix' : 
					return 'Gran Premio de Italia';
					break;
				case 'Japanese Grand Prix' : 
					return 'Gran Premio de Japón';
					break;
				case 'Malaysian Grand Prix' : 
					return 'Gran Premio de Malasia';
					break;
				case 'Mexican Grand Prix' :
					return 'Gran Premio de México'
					break;
				case 'Monaco Grand Prix' : 
					return 'Gran Premio de Monaco';
					break;
				case 'Spanish Grand Prix' : 
					return 'Gran Premio de España';
					break;
				case 'Singapore Grand Prix' : 
					return 'Gran Premio de Singapur';
					break;
				case 'Russian Grand Prix' : 
					return 'Gran Premio de Rusia';
					break;
				case 'United States Grand Prix' : 
					return 'Gran Premio de Estados Unidos';
					break;
				default :
					return item;
					break;
			}
		}
	}
	// Grand Prix Date
	/* @ngInject */
	function grandPrixDate(){
		return function(item){
			var date = item.split('-');
			return date[2]+'-'+date[1]+'-'+date[0];
		}
	}
})();