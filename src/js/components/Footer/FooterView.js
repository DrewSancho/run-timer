var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var FooterView = Backbone.View.extend({
    template: _.template(require('./footerView.html')),
    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = FooterView;