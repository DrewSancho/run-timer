var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var ListItemView = require('./ListItemView');

var ListView = Backbone.View.extend({

    tagName: 'ul',

    className: 'runList past_runs',

    events: {
        'click .new_run': 'newRun'
    },

    newRun: function () {
        window.location.hash = 'add';
    },

    template: _.template(require('./listView.html')),

    initialize: function () {
        this.childViews = [];
    },

    render: function () {
        var _this = this;

        this.$el.empty();
        this.$el.html(this.template());

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