var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeaderView = Backbone.View.extend({
    template: _.template(require('./headerView.html')),
    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = HeaderView;