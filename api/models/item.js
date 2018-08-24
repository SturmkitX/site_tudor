'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title'
    },
    description: {
        type: String,
        required: 'Kindly enter a description'
    },
    image_location: {
        type: String,
        required: 'Kindly enter image location'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Items', ItemSchema);
