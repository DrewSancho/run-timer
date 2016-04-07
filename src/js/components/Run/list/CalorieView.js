var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var CalorieView = Backbone.View.extend({

    tagName: 'ul',

    className: 'calorieView',

    events: {
        'click .clicker': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    template: _.template(require('./calorieView.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.find('.runCalories').css({'width': this.getCaloriePercent(this.model.get('runCalories'))});
    },

    getCaloriePercent: function (calorie) {
        return Number(calorie) * 0.025 + '%';
    }
});

module.exports = CalorieView;