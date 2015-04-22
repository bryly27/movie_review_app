// make the factory call it FriendFactory and pass it a callback function telling us that we are going to use $http functionality
movies_app.factory('movies_factory', function($http) {
	var factory= {};

	factory.find_movie = function(movie, callback){
		// console.log(movie);
		// $http.post('/movies/find_movie', movie).success(function(){

		// });
		$http({
			method: 'get',
			// url: 'http://www.imdbapi.com/?t='+movie.movie,
			// url: 'http://www.imdb.com/xml/find?q=' + movie.movie,
			url: 'http://www.omdbapi.com/?s=' + movie.movie,
		}).success(function(response){
			console.log(response);
			if(response.Error){
				callback({error: 'No movies found'});
			}else{
				for(var i=0; i<response.Search.length-1; i++){
					var counter = 0;
					$http({
						method: 'get',
						url: 'http://www.omdbapi.com/?i=' +response.Search[i].imdbID 
					}).success(function(movie){
						console.log(counter);
						counter ++;
						
						response.Search[counter].Poster = movie.Poster;
						console.log(response.Search[counter]);
					})
				}
				
			}



		});
	};

	return factory;
})

