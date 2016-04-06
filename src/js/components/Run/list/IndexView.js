var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var ListItemView = require('./ListItemView');

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

        this.children = this.collection.map(function (model) {
            return new ListItemView({ model: model });
        });

        this.children.forEach(function (view) {
            that.$el.append(view.$el);
            view.render();
        });
    },
    events: {
        'click .add': 'formCreate'
    },
    formCreate: function () {
        window.location.hash = 'create';
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