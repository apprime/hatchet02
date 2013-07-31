
exports.list = function(req, res){
  res.send("A list of all achievements");
};

exports.view = function(req, res){
  res.send("An achievement");
};