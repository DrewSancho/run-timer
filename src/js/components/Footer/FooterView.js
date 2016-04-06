var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var FooterView = Backbone.View.extend({
    template: _.template(require('./footerView.html')),
    render: function () {
        this.$el.html(this.template());
    },
    events: {
        'click .dash': 'dashboard',
        'click .runs': 'runs',
        'click .bio': 'bio'
    },
    dashboard: function () {
        window.location.hash = '';
    },
    runs: function () {
        window.location.hash = 'runs';
    },
    bio: function () {
        window.location.hash = 'bio';
    }
});

module.exports = FooterView;