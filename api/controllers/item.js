'use strict';

var mongoose = require('mongoose'),
    Item = mongoose.model('Items'),
    clients = require('../../socket').clients;

console.log(clients);

exports.list_all_images = function(req, res) {
    Item.find({}, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};

exports.upload_image = function(req, res) {
    var new_item = new Item({
        title: req.body.art_title,
        description: req.body.art_description,
        image_location: req.files[0].filename
    });
    new_item.save(function(err, item) {
        if (err) {
            res.send(err);
        } else {
            console.log('Clients length: ' + clients.length);
            for (var i=0; i < clients.length; i++) {
                clients[i].send(item._id);
            }
        }
        res.json(item);
    });
};

exports.list_image = function(req, res) {
    Item.findById(req.params.itemId, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
