// we want to create a file that has the schema for our friends

var mongoose = require('mongoose');

// create a schema for our friends

var MoviesSchema = new mongoose.Schema({
	movie_id: Number,
	reviews: Array,
	likes: Number,
	dislikes: Number,
});

// create the model using that schema
// console.log("just created the model")
mongoose.model('movie', MoviesSchema);