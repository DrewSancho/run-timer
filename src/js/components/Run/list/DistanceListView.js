var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DistanceListView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    template: _.template(require('./distanceListView.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }

});

module.exports = DistanceListView;