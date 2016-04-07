var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeaderView = Backbone.View.extend({
    tagName: 'header',

    className: 'header',

    template: _.template(require('./headerView.html')),

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click .arrow': 'goBack'
    },

    goBack: function () {
        window.history.back();
    }
});

module.exports = HeaderView;