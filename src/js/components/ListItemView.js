var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var ListItemView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },

    template: _.template(`
        <div class='runDate'> <%= runDate %> </div>
        <div class='runTime'> <%= runTime %> </div>
        <hr>
    `),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }

});

module.exports = ListItemView;