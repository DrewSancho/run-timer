var Backbone = require('backbone');

var RunDataModel = Backbone.Model.extend({
    urlRoot:'/api/runs'
});

module.exports = RunDataModel;