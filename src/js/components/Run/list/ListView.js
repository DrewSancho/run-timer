var Backbone = require('backbone');
var $ = require('jquery');

var ListItemView = require('./ListItemView');

var ListView = Backbone.View.extend({

    className: 'runList',

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
            return new ListItemView({ model: model });
        });

        this.childViews.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });
    }

});

module.exports = ListView;