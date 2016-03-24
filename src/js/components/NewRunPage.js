var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var NewRunPage = Backbone.View.extend({

    className: 'newRunPage',

    events: {
        'click .submit': 'createRun',
        'click .cancel': 'formCancel',
        'keydown': 'onKeydown'
    },

    template: _.template(`
        <h1> New Run </h1>
        <input class="runTime" placeholder="Run Time">
        <input class="runDate" placeholder="Race Date">
        <input class="runNotes" placeholder="Race Notes">
        <button class="cancel"> Cancel </button>
        <button class="submit"> Save </submit>
    `),

    render: function () {
        this.$el.html(this.template());
    },

    formCancel: function () {
        // go back to the original screen
        window.location.hash = 'index';
    },

    createRun: function () {
        // get the values from the inputs, merge them into an object
        // and push the object to the run collection
        var runTime = this.$('.runTime').val();
        var runDate = this.$('.runDate').val();
        var runNotes = this.$('.runNotes').val();

        this.collection.create({
            runTime: runTime,
            runDate: runDate,
            runNotes: runNotes
        });

        // then, change the hash to 'index' so the router will navigate
        // to the index
        window.location.hash = 'index';
    },

    onKeydown: function (e) {
        if (e.keyCode === 13) {
            this.createRun();
        }
    }
});
module.exports = NewRunPage;