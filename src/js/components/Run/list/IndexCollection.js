var Backbone = require('backbone');
var RunDataModel = require('./RunDataModel');

var IndexCollection = Backbone.Collection.extend({
    model: RunDataModel,
    url: '/api/runs'
});

module.exports = new IndexCollection();