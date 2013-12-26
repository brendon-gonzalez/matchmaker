
/*
 * GET home page.
 */
module.exports = function(app) {
  return {
    index: function(req, res){
      res.render('index');
    }
  } 
}
