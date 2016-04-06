var Backbone = require('backbone');
var $ = require('jquery');

var CalorieListView = Backbone.View.extend({
    className: 'calorieList',

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    render: function () {
        this.$el.html(this.template());
    }

});

module.exports = CalorieListView;