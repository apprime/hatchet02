
/*
 * GET List of all items
 */

exports.list = function(req, res){
  res.send("respond with item data");
};

/* 
 * GET Single Item 
 */
exports.view = function(req, res){
	res.send("This is a single item");
};