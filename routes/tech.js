
exports.list = function(req, res){
  res.send("A list of all tech");
};

exports.view = function(req, res){
  res.send("Specifics of a tech");
};