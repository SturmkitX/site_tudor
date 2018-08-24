'use strict';

module.exports = function(app) {
    const item_controller = require('../controllers/item');

    app.route('/item')
        .get(item_controller.list_all_images)
        .post(item_controller.upload_image);

    app.route('/item/:itemId')
        .get(item_controller.list_image);
}
