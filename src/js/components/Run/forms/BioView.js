var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var bioModel = (function () {
    var BioModel = Backbone.Model.extend({

        defaults: {
            name: '',
            age: 0,
            weight: 0
        },

        initialize: function () {
            this.set(JSON.parse(window.localStorage.bio) || {});
            this.on('change', this.localSave);
        },

        localSave: function () {
            window.localStorage.bio = JSON.stringify(this.toJSON());
        }

    });

    return new BioModel();
})();

var BioView = Backbone.View.extend({

    className: 'bioView',

    template: _.template(require('./bioView.html')),

    render: function () {
        this.$el.html(this.template(bioModel.attributes));
    },

    events: {
        'click .bio-save': 'saveChanges'
    },

    saveChanges: function () {
        var bioName = this.$('#bioName').val();
        var bioAge = parseInt(this.$('#bioAge').val());
        var bioWeight = parseInt(this.$('#bioWeight').val());

        bioModel.set({
            name: bioName,
            age: bioAge,
            weight: bioWeight
        });
    }

});

module.exports = new BioView();