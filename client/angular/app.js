// Where you create the angular app and sp?ecify its options
var movies_app = angular.module('movies_app', ['ngRoute']);

movies_app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
		})
		.when('/movie/:id',{
			templateUrl: '../partials/movie.html',
		})
		.when('/search/:search_for_movie',{
			templateUrl: 'partials/search.html',
		})
		// .when('/user/:id',{
		// 	templateUrl: 'partials/user.html',
		// })
		.otherwise({
			redirectTo: '/'
		})
})
