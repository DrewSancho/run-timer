var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DistanceView = Backbone.View.extend({

    className: 'distanceView',

    template: _.template(require('./distanceView.html')),

    events: {
        'click .distance-run': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }

});

module.exports = DistanceView;