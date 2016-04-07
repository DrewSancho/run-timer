var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var bioModel = require('./BioModel');

var BioView = Backbone.View.extend({

    className: 'bioView',

    template: _.template(require('./bioView.html')),

    render: function () {
        this.$el.html(this.template(bioModel.attributes));
    },

    events: {
        'click .bio-save': 'saveChanges',
        'keydown': 'onKeyDown'
    },

    saveChanges: function () {
        var bioName = this.$('.bioName').val();
        var bioAge = parseInt(this.$('.bioAge').val());
        var bioWeight = parseInt(this.$('.bioWeight').val());

        bioModel.set({
            name: bioName,
            age: bioAge,
            weight: bioWeight
        });
        window.location.hash = '';
    },
    onKeyDown: function (e) {
        if (e.keyCode === 13) {
            this.saveChanges();
        }
    }

});

module.exports = BioView;