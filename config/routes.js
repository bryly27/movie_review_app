// we are requiring a controller file that will do stuff when a route is triggered
var users = require('./../server/controllers/movies.js');
module.exports = function(app, imdb) {

	app.post('/movies/find_movie', function(req, res){
		console.log(req.body);
	})
	



	

}