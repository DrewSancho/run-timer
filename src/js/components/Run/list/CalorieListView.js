var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var CalorieListView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    template: _.template(require('./calorieListView.html')),

    render: function () {
        this.$el.html(this.template());
    }

});

module.exports = CalorieListView;