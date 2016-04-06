var stopwatchModel = Backbone.model.extend ({

    initialize: function () {
        this.stopTimer === true;
    }
    counter: function () {

        this.set(this.get('currentTime' + 1));

        if (stopTimer === false) {
            setTimeout(counter, 1000);

        };

    },

    startTimer: function () {

        this.stopTimer = false;
        setTimeout(counter, 1000);


    },

    api.pauseTimer = function () {


    };

    api.stopTimer = function () {

        stopTimer = true;
    };



    
});

module.exports 