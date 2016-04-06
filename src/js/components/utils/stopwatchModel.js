var Backbone = require('backbone');

var stopwatchModel = Backbone.Model.extend({

    initialize: function () {
        this.stopTimer === true;
    },
    counter: function () {
        this.set(this.get('currentTime' + 1));

        if (this.stopTimer === false) {
            setTimeout(counter, 1000);
        };
    },

    startTimer: function () {
        this.stopTimer = false;
        setTimeout(counter, 1000);
    },

    pauseTimer: function () {

    },

    stopTimer: function () {
        this.stopTimer = true;
    }
});

module.exports = stopwatchModel;