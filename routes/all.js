var express = require('express');
var router = express.Router();
var _ = require('underscore');


module.exports = function(app) {
  function setActiveNavTo(title) {
    var active_item = _(app.locals.links).findWhere({ active: true });
    if (active_item) { active_item.active = false }
    _(app.locals.links).findWhere({ title: title }).active = true;
  }

  router.get('/', function(req, res, next) {
    var title = "Home";

    setActiveNavTo(title);

    res.sendFile(__dirname.replace(/routes/, "views") + "/index.html");
    // res.render('index', {
    //   title: title
    // });
  });

  router.get('/about', function(req, res, next) {
    var title = "About";

    setActiveNavTo(title);


    res.render('about', {
      title: title
    });
  });

  router.get('/test', function(req, res, next) {
    var title = "Web Store";

    res.render('index', {
      title: title
    });
  });

  return router;
}