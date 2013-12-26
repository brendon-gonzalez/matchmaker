exports.registerRoutes = function(app) {
  //Register controllers
  var index = require('./controllers')(app)
    , user = require('./controllers/user')(app);
  
  //Register routes
  app.get('/', index.index);
  app.get('/users', user.list);
}