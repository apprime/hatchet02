
/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, http = require('http')
	, path = require('path')
;

var app = express();
var MemStore = express.session.MemoryStore;

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ 
	secret: 'Admiral Aardvark, first amongst his kin. Benevolent. Strident. Uncompromising.',
	store: MemStore({reapInterval: 60000 * 10})
}));
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

app.get('/', routes.index);
app.get('/index', routes.index);
app.post('/login', routes.login);
app.get('/logout', routes.logout);
app.get('/signup', routes.register);
app.get('/help', routes.manual);

app.get('/world', routes.game.world);
app.get('/hq', routes.game.hq);

app.get('/users', routes.user.list);
app.get('/user/:nr/:name', routes.user.view);
app.get('/user/:nr/:name/hq', routes.user.hq);
app.get('/user/:nr/:name/minions', routes.user.minions);
app.get('/user/:nr/:name/achievements', routes.user.achievements);

app.get('/lexicon', routes.minion.list);
app.get('/lexicon/:name', routes.minion.view);

app.get('/abilities', routes.ability.list);
app.get('/ability/:name', routes.ability.view);

app.get('/achievements', routes.achievement.list);
app.get('/achievement/:name', routes.achievement.view);

app.get('/store', routes.item.list);
app.get('/store/:name', routes.item.view);

app.get('/tech', routes.tech.list);
app.get('/tech/:name', routes.tech.view);

app.get('/forums', routes.forum.list);
app.get('/forum/section/:id', routes.forum.view);
app.get('/forum/thread/:id', routes.forum.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
