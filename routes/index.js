
/*
 * GET home page.
 */

exports.index = function(req, res){
	if(req.session.userid)
		res.render('index', 
		{ 
			title: 'Something else',
			gameNews: "placeholder",
			socialNews: 											//ToDo Fetch and format proper strings for gameNews and socialNews
			{
				"Breaking news!" : "You have a friend",
				"More news" : "Your friend has blocked you",
				"Yet more news" : "It is raining outside"
			}
		});
	else
		res.render('login', { title: 'Express' });
};

exports.login = function(req,res){
	req.session.userid = 'nisse';									//ToDo: Verify user and set session
	res.render('index', 
		{ 
		title: 'Something else',
		gameNews: "placeholder",
		socialNews: 
		{
			"Breaking news!" : "You have a friend",
			"More news" : "Your friend has blocked you",
			"Yet more news" : "It is raining outside"
		}
	});
};

exports.logout = function(req,res){
	req.session.destroy();
	res.render('login', { title: 'Express' });
}



exports.register = function(req, res){
	res.render('register', {title: 'Express' });
}

exports.manual = function(req, res){
	res.render('manual', {title: 'Express' });
}

exports.game = require(__dirname + '/game');
exports.user = require(__dirname + '/user');
exports.minion = require(__dirname + '/minion');
exports.achievement = require(__dirname + '/achievement');
exports.ability = require(__dirname + '/ability');
exports.item = require(__dirname + '/item');
exports.tech = require(__dirname + '/tech');
exports.forum = require(__dirname + '/forum');