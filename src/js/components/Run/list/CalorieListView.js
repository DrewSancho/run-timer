var Backbone = require('backbone');
var $ = require('jquery');

var CalorieView = require('./CalorieView');

var CalorieListView = Backbone.View.extend({

    tagName: 'li',

    className: 'calorieList',

    initialize: function () {
        this.childViews = [];
    },

    render: function () {
        var _this = this;

        this.$el.empty();

        this.childViews.forEach(function (view) {
            view.remove();
        });

        this.childViews = this.collection.map(function (model) {
            return new CalorieView({ model: model });
        });

        this.childViews.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });
    }

});

module.exports = CalorieListView;