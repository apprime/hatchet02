
/*
 * GET List of all users
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

/*
 * GET Single user
 */

exports.view = function(req, res){
	res.send("This is user " +req.params.name +" and his favourite number " +req.params.nr);
};

exports.hq = function(req, res){
	res.send("The headquarters of user");
};

exports.minions = function(req, res){
	res.send("All mininons of user");
};

exports.achievements = function(req, res){
	res.send("Achievements of user");
};