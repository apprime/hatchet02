
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , minion = require('./routes/minion')
  , achievement = require('./routes/achievement')
  , ability = require('./routes/ability')
  , item = require('./routes/item')
  , tech = require('./routes/tech')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

//Init
var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//ROUTES
//each route represents a URL (www.domain.com/URL)
app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/home', routes.index);

//Users
app.get('/users', user.list);
app.get('/user/:nr/:name', user.view);
app.get('/user/:nr/:name/hq', user.hq);
app.get('/user/:nr/:name/minions', user.minions);
app.get('/user/:nr/:name/achievements', user.achievements);

//Minions
app.get('/minions', minion.list);
app.get('/minion/:name', minion.view);

//Abilities
app.get('/abilities', ability.list);
app.get('/ability/:name', ability.view);

//Achivements
app.get('/achievements', achievement.list);
app.get('/achievement/:name', achievement.view);

//Items
app.get('/item', item.list);
app.get('/item/:name', item.view);

//Tech
app.get('/tech', tech.list);
app.get('/tech/:name', tech.view);

//Server runtime listener
//It listens for connections to your webserver 
//and calls the app(express) function on those requests
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
