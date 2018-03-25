var express = require('express');
var router = express.Router();
var config = require('../bin/config');
var auth = require('../bin/auth')
var queries = require('../models/queries')
var redis = require('../bin/redis');

router.use('/', function(req, res, next) {

  if (courseID==10184){
    var userID = 58644
    var courseID = 9659
  } else {
    var userID = auth.provider.body.custom_canvas_user_id;
    var courseID = auth.provider.body.custom_canvas_course_id;
  }

  console.log(userID);
  console.log(courseID);

  queries.homepageQuery(userID,courseID,function(module_progress, score, awarded_badge_ids, leaderboard, my_team, home_updates){

    res.render('home', {
      title: 'Home | ONEXYS',
      courseID: courseID,
      module_progress: module_progress,
      score: score,
      awarded_badge_ids: awarded_badge_ids,
      leaderboard: leaderboard,
      my_team: my_team,
      home_updates: home_updates,
     });
   });
   
});

module.exports = router;
