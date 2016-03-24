var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeaderView = require('./HeaderView');

var dispatcher = require('./dispatcher');

var appView = Backbone.View.extend({

    template: _.template(`
        <div class='header-slot'></div>
        <div class="content-slot"></div>
    `),

    initialize: function () {
        this.headerView = new HeaderView();
        this.listenTo(dispatcher, 'app:show', this.show);
    },

    render: function () {
        this.$el.html(this.template());
        this.$('.header-slot').append(this.headerView.$el);
        this.headerView.render();
    },
    remove: function () {
        this.headerView.remove();
        Backbone.View.prototype.remove.call(this);
    },
    show: function (view) {
        if (this.child) {
            this.child.remove();
        }
        view.render();
        this.$('.content-slot').append(view.$el);
        this.child = view;
    }
});

module.exports = appView;