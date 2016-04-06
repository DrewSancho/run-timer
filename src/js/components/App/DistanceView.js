var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DistanceView = Backbone.View.extend({

    className: 'distance-view',

    template: _.template(require('./distanceView.html')),

});

module.exports = DistanceView;