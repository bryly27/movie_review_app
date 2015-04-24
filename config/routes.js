// we are requiring a controller file that will do stuff when a route is triggered
var movies = require('./../server/controllers/movies.js');
module.exports = function(app) {

	app.get('/popular_movies', function(req, res){
		movies.popular_movies(req, res);
	})

	app.post('/find_movie', function(req, res){
		movies.find_movie(req, res);
	})

	app.post('/search_for_movie', function(req, res){
		movies.search_for_movie(req, res);
	})

	app.post('/submit_review', function(req, res){
		movies.submit_review(req, res);
	})

	// app.get('/recently_reviewed', function(req, res){
	// 	movies.recently_reviewed(req, res);
	// })


	



	

}