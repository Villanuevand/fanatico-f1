(function(){
	'use strict';
	angular
		.module('app.filters',[])
		.filter('driverNationality',driverNationality)
		.filter('constructorNationality',constructorNationality);	

	//Nationality Filter
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
			}
		}
	};

	// Constructor Nationality
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
	};
})();