'use strict';
module.exports = function(app) {
    const todoList = require('../controllers/test_controller');

    app.route('/')
        .get(todoList.show_index);

    app.route('/upload')
        .get(todoList.show_upload);
};
