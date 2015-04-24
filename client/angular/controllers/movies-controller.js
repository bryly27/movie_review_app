// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
movies_app.controller('movies_controller', function($scope, $route, $rootScope, $location, $routeParams, movies_factory) {

	//get popular movies
	movies_factory.popular_movies(function(data){
		$scope.popular_movies = data.results;
		console.log(data);
	});

	// movies_factory.recently_reviewed(function(data){
	// 	console.log('recent', data);
	// 	$scope.recently_reviewed = data;
	// })

	//get movie profile
	movies_factory.find_movie($routeParams.id, function(data){
		console.log('back in controller', data);
		$scope.movie_profile = data;
	});

	$scope.search_for_movie = function(){
	  movies_factory.search_for_movie($scope.search_movie, function(data){	
			$rootScope.search_movies = data;
			console.log('found', $rootScope.search_movies);
			$location.path('/search/'+$scope.search_movie.movie);
			$scope.search_movie = {};
		})
	}

  movies_factory.search_for_movie($routeParams.search_for_movie, function(data){	
		$rootScope.search_movies = data;
		console.log('found', $rootScope.search_movies);
	})

	$scope.submit_review = function(){
		$scope.new_review.movie_id = $routeParams.id;
		movies_factory.submit_review($scope.new_review, function(data){
			$route.reload();
		})
	}


})



