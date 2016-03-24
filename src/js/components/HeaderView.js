var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeaderView = Backbone.View.extend({
    template: _.template('<h1 class="header"> Run Timer</h1>'),
    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = HeaderView;