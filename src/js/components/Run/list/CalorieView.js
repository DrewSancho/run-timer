var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var CalorieView = Backbone.View.extend({

    className: 'calorie-view',

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    template: _.template(require('./calorieView.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }
});

module.exports = CalorieView;