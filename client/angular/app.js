// Where you create the angular app and sp?ecify its options
var movies_app = angular.module('movies_app', ['ngRoute']);

movies_app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
		})
		// .when('/dashboard/:id',{
		// 	templateUrl: '../partials/dashboard.html',
		// })
		// .when('/profile/:id',{
		// 	templateUrl: 'partials/profile.html',
		// })
		// .when('/user/:id',{
		// 	templateUrl: 'partials/user.html',
		// })
		.otherwise({
			redirectTo: '/'
		})
})
