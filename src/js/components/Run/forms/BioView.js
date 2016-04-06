var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var BioView = Backbone.View.extend({

    className: 'bio-view',

    template: _.template(require('./bioView.html')),

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click .bio-save': 'saveChanges'
    },

    saveChanges: function () {
        var bioName = this.$('#bioName').val();
        var bioAge = this.$('#bioAge').val();
        var bioWeight = this.$('#bioWeight').val();
    }

});

module.exports = BioView;