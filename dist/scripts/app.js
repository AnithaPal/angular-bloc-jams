(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
			enabled: true,
			requireBase: false
		});
		
		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'LandingCtrl as landing',
				templateUrl: 'templates/landing.html'	
			})
			.state('album', {
				url: '/',
				controller: 'AlbumCtrl as album',
				templateUrl: 'templates/album.html'
			})
			.state('collection', {
				url: '/',
				controller: 'CollectionCtrl as collection',
				templateUrl: 'templates/collection.html'
		    })
			.state('playerBar', {
				url: '/',
				controller: 'playerBarCtrl as playerBar',
				templateUrl: 'templates/palyer_bar.html'
		    });
		
	}
	
	angular
		.module('blocJams', ['ui.router', 'firebase'])
		.config(config)
		.constant('FIREBASE_URI', 'https://torrid-torch-5676.firebaseio.com/');	
})();
