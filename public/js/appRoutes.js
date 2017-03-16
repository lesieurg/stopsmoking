angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/statistique', {
			templateUrl: 'views/statistique.html',
			controller: 'StatistiqueController'
		})

		.when('/reussite', {
			templateUrl: 'views/reussite.html',
			controller: 'ReussiteController'
		})

		.when('/autre', {
			templateUrl: 'views/autre.html',
			controller: 'AutreController'
		})

		.when('/volonte', {
			templateUrl: 'views/volonte.html',
			controller: 'VolonteController'
		});

	$locationProvider.html5Mode(true);

}]);
