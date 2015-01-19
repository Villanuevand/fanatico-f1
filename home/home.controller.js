//Home Controller
(function(){
	'use strict';
	angular
		.module('f1App')
		.controller('HomeController',Home);
	Home.$injector = ['$log'];		
	function Home($log){
		var vm = this;
			vm.title = 'Home App';
	}
})();