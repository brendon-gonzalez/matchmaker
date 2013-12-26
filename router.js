exports.registerRoutes = function(app) {
  //Register controllers
  var index = require('./controllers')(app);
  
  //Register routes
  app.get('/', index.index);
}