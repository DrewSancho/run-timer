var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var dispatcher = require('../../Events/dispatcher');

var NewRunPage = Backbone.View.extend({

    className: 'newRunPage',

    events: {
        'click .startTimer': 'createRun',
        'click .cancel': 'formCancel',
        'keydown': 'onKeydown'
    },

    template: _.template(require('./newRunPage.html')),

    render: function () {
        this.$el.html(this.template());
    },

    formCancel: function () {
        // go back to the original screen
        window.history.back();
    },

    createRun: function () {
        // get the values from the inputs, merge them into an object
        // and push the object to the run collection
        var runName = this.$('.runName').val();
        var runDistance = Number(this.$('.runDistance').val());
        var runNotes = this.$('.runNotes').val();
        var runDate = new Date();

        dispatcher.trigger('app:start', {
            runName: runName,
            runDistance: runDistance,
            runNotes: runNotes,
            runDate: runDate.toLocaleString()
        });

        // then, change the hash to 'index' so the router will navigate
        // to the index
        window.location.hash = '';
    }

});
module.exports = NewRunPage;