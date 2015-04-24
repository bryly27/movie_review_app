// make the factory call it FriendFactory and pass it a callback function telling us that we are going to use $http functionality
movies_app.factory('movies_factory', function($http) {
	var factory= {};


	factory.popular_movies = function(callback){
		$http.get('/popular_movies').success(function(output){
			callback(output);
		})
	}

	factory.find_movie = function(id, callback){
		var movie = {id:id};
		$http.post('/find_movie', movie).success(function(output){
			callback(output);
		})
	}

	factory.search_for_movie = function(search, callback){
		var movie = {movie:search};
		$http.post('/search_for_movie', movie).success(function(output){
			callback(output);
		})
	}

	factory.submit_review = function(review, callback){
		$http.post('/submit_review', review).success(function(output){
			callback(output);
		})
	}

	// factory.recently_reviewed = function(callback){
	// 	$http.get('/recently_reviewed').success(function(output){
	// 		callback(output);
	// 	})
	// }



	return factory;
})

