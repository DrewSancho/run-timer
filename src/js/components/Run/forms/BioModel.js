var Backbone = require('backbone');

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

module.exports = new BioModel();