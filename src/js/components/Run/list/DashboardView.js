var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var ListItemView = require('./ListItemView');
var CalorieView = require('./CalorieView');
var DistanceView = require('./DistanceView');

var IndexView = Backbone.View.extend({
    className: 'IndexView',

    template: _.template(require('./indexView.html')),
    initialize: function () {
        this.children = [];
        this.render();
        this.listenTo(this.collection, 'sync destroy', this.render);
    },
    render: function () {
        var that = this;

        this.removeChildren();

        this.$el.html(this.template());

        // this.children = this.collection.map(function (model) {
        //     return new ListItemView({ model: model });
        // });

        this.children.forEach(function (view) {
            that.$el.append(view.$el);
            view.render();
        });
    },
    events: {
        'click .calories': 'calorieView',
        'click .distance': 'distanceView'
    },
    calorieView: function (e) {
        var _this = this;
        if (e.target.matches('.calories')) {
            _this.children = _this.collection.map(function (model) {
                return new CalorieView({ model: model });
            });
        }
    },
    distanceView: function (e) {
        var _this = this;
        if (e.target.matches('.distance')) {
            _this.children = _this.collection.map(function (model) {
                return new DistanceView({ model: model });
            });
        }
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