// make an immediate function that gives back an object that has methods that handle our requests and responses
// require mongoose so that we can access the model
var mongoose = require('mongoose');
var Movie = mongoose.model('movie');
module.exports = (function() {
	// return because we want to put an object into the variable for whatever requires this
	return {

		add_user: function(req, res) {
			var new_user = new User(req.body);
			new_user.save(function(err) {
				if(err) {
					console.log("err");
				} else {
					res.json({result: "success!"});
				}
			})
		},

		

		

	}
})();


