var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var CalorieListView = require('./CalorieListView');
var DistanceListView = require('./DistanceListView');

var IndexView = Backbone.View.extend({
    className: 'dashboard',

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
        'click .calories': 'showCalorieListView',
        'click .distance': 'showDistanceListView'
    },
    showCalorieListView: function (e) {
        this.show(new CalorieListView({ collection: this.collection }));
    },
    showDistanceListView: function (e) {
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