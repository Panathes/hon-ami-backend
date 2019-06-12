'use strict';

var restaurant = require('../model/appModel.js');

// exports.list_all_tasks = function(req, res) {
//     restaurant.getAllRestaurant(function(err, restaurant) {

//     console.log('controller');
//     if (err)
//       res.send(err);
//       console.log('res', restaurant);
//     res.send(restaurant);
//   });
// };


exports.list_all_tasks_promise = function(req, res) {
    restaurant.promiseExample()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
};

exports.All_Borough_promise = function(req, res) {
    restaurant.getAllBoroughDesc()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
};

exports.Borough_Desc_promise = function(req, res) {
    restaurant.Borough_Desc_promise()
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
}

