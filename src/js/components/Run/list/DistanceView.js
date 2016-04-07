var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DistanceView = Backbone.View.extend({

    className: 'distanceView',

    template: _.template(require('./distanceView.html')),

    events: {
        'click .click-here': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.find('.miles_bar').css({'width': this.getDistancePercent(this.model.get('runDistance'))});
    },

    getDistancePercent: function (distance) {
        return Number(distance) * 6.7 + '%';
    }
});

module.exports = DistanceView;