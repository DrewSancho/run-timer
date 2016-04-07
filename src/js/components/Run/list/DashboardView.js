var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var CalorieListView = require('./CalorieListView');
var DistanceListView = require('./DistanceListView');

var IndexView = Backbone.View.extend({
    className: 'IndexView',

    template: _.template(require('./dashboardView.html')),
    initialize: function () {
        this.children = [];
        this.render();
        this.listenTo(this.collection, 'sync destroy', this.render);
    },
    render: function () {
        var that = this;

        this.removeChildren();

        this.$el.html(this.template());

        this.children.forEach(function (view) {
            that.$el.append(view.$el);
            view.render();
        });
    },
    events: {
        'click .calories': 'showCalorieView',
        'click .distance': 'distanceView'
    },
    showCalorieView: function (e) {
        this.show(new CalorieListView({ collection: this.collection }));
    },
    showDistanceView: function (e) {
        this.show(new DistanceListView({ collection: this.collection }));
    },
    show: function (view) {
        if (this.child) {
            this.child.remove();
        }

        this.child = view;

        view.render();
        this.$('.child-slot').append(view.$el);
    },
    removeChildren: function () {
        this.children.forEach(function (view) {
            view.remove();
        });
    },
    remove: function () {
        this.removeChildren();
        Backbone.View.prototype.remove.call(this);
    }
});

module.exports = IndexView;