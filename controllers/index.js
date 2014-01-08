
/*
 * GET home page.
 */

module.exports = function(app) {
  return {
    index: function(req, res){
      var family = [, '2', '3'];
      var child = {
        eyeColor: 'brown',
        height: 12,
        favoriteShows: ['TVLand', 'Dexter', 'Breaking Bad']
      };
      
      if (req.xhr) return res.send({child: child});

      res.render('index', {child: child});
    }
  } 
}
