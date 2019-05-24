'use strict';
module.exports = function(app) {
  var restaurant = require('../controllers/appController');

  // restaurant Routes
  app.route('/restaurant')
    .get(restaurant.list_all_tasks_promise)
    };