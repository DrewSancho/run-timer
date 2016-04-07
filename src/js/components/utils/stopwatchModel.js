var Backbone = require('backbone');

var StopwatchModel = Backbone.Model.extend({

    defaults: {
        time: 0
    },

    initialize: function () {
        this.stopped = true;
    },

    counter: function () {
        var temp = this.get('time') + 1;

        this.set('time', temp);

        if (this.stopped === false) {
            setTimeout(this.counter.bind(this), 1000);
        }
    },

    startTimer: function () {
        this.set('time', 0);
        this.stopped = false;
        this.counter();
    },

    pauseTimer: function () {
        if (this.stopped === true) {
            this.stopped = false;
            setTimeout(this.counter.bind(this), 1000);           
        } else {
            this.stopped = true;
        };

    },

    stopTimer: function () {
        this.stopped = true;
    }
});



module.exports = new StopwatchModel();