// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
movies_app.controller('movies_controller', function($scope, $rootScope, $location, $routeParams, movies_factory) {

	$scope.find_movie = function(){
		var movie = {movie: $scope.movie}
		movies_factory.find_movie(movie, function(data){
			$scope.movies = data.Search;
			console.log('controller', data);
			console.log('controller', $scope.movies);
		});
	};


})



