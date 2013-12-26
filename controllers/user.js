
/*
 * GET users listing.
 */
module.exports = function(app) {
  return {
    list: function(req, res){
      res.send("respond with a resource");
    }
  } 
}