var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DistanceView = require('./DistanceView');

var DistanceListView = Backbone.View.extend({

    className: 'distanceList',

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
            return new DistanceView({ model: model });
        });

        this.childViews.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });
    }
});

module.exports = DistanceListView;