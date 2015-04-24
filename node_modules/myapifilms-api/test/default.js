
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var MyAPIFilms = require('../')
		, api;



	describe('The MyAPIFilms API client', function() {
		it('should not crash when instantiated', function() {
			api = new MyAPIFilms();
		});
		


		it('should be able to list movies', function(done) {
			this.timeout(20000);

			api({title:'manche hunde müssen sterben'}).list().then(function(movie) {
				assert(movie);
				done();
			}).catch(done);
		});


		it('should be able to list movies using the imdb id', function(done) {
			this.timeout(20000);

			api({idIMDB:'tt3838306',actors: 'F'}).list().then(function(movie) {
				assert(movie);
				done();
			}).catch(done);
		});



		it('should be able to identify errors', function(done) {
			this.timeout(20000);

			api({ccc:'dd'}).list().then(function(movie) {}).catch(function(err) {
				assert(err instanceof Error);
				done();
			});
		});
	});
	