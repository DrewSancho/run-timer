var Backbone = require('backbone');

var RunDataModel = Backbone.Model.extend({

    defaults: {
        runTime: 0,
        runDate: new Date(),
        runName: '',
        runNotes: ''
    },

    urlRoot: '/api/runs'

});

module.exports = RunDataModel;