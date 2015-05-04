var mongoose = require('mongoose');
var Movie = mongoose.model('movie');
var request = require('request');
var MovieDB = require('moviedb')('8f753b5bfad76594133bfd150451cf88');

module.exports = (function() {
	// return because we want to put an object into the variable for whatever requires this
	return {

		popular_movies: function(req, res){
			MovieDB.miscPopularMovies({}, function(err, results){
			  res.json(results);
			});
		},

		find_movie: function(req, res){
			MovieDB.movieInfo({id: req.body.id}, function(err, results){
				if(err){
					console.log('err',err);
				}else{
					Movie.findOne({movie_id: results.id}, function(err, results2){
						if(err){
							console.log('err', err);
						}else{
							results._result = results2;
							res.json(results);
						}
					})
				}
			});
		},

		search_for_movie: function(req, res){
			// console.log('searching for', req.body);
			MovieDB.searchMovie({query: req.body.movie}, function(err, results){
				if(err){
					console.log('err', err);
				}else{
					res.json(results);
				}
			})
		},

		submit_review: function(req, res){

			Movie.findOne({movie_id: req.body.movie_id}, function(err, results){
				if(err){
					console.log('err', err);
				}else{
					if(results === null){
						if(req.body.like === 'like'){
							var movie = new Movie({movie_id: req.body.movie_id, reviews:[{name:req.body.name, review:req.body.review, recommend: 'yes'}], likes: 1 , dislikes: 0});
							movie.save(function(err, results2){
								res.json(results2);
							})
						}else{
							var movie = new Movie({movie_id: req.body.movie_id, reviews:[{name:req.body.name, review:req.body.review, recommend: 'no'}], likes: 0, dislikes: 1});
							movie.save(function(err, results2){
								res.json(results2);
							})
						}
					}else{
						if(req.body.like === 'like'){
							var likes = results.likes;
							likes += 1;
							var reviews = results.reviews;
							reviews.push({name:req.body.name, review:req.body.review, recommend:'yes'});
							Movie.update({movie_id:req.body.movie_id}, {$set:{reviews:reviews, likes:likes}}, function(err, results3){
								res.json(results3);
							})
						}else{
							console.log('dislikes', results);
							var dislikes = results.dislikes;
							dislikes +=1;
							var reviews = results.reviews;
							reviews.push({name:req.body.name, review:req.body.review, recommend:'no'});
							Movie.update({movie_id:req.body.movie_id}, {$set:{reviews:reviews, dislikes:dislikes}}, function(err, results3){
								res.json(results3);
							})
						}
					}
				}
			})
		},

		// recently_reviewed: function(req, res){
		// 	Movie.find({}, function(err, results){
		// 		if(err){
		// 			console.log('err', err);
		// 		}else{
		// 			res.json
		// 		}
		// 	})
		// }

		

	}
})();


