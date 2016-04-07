var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var ListItemView = Backbone.View.extend({

    tagName: 'li',

    className: 'listItem past_runs',

    events: {
        'click .past_runs': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    template: _.template(require('./listItemView.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }

});

module.exports = ListItemView;