var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var RunDataModel = require('./RunDataModel');

var stopwatchModel = require('../../utils/stopwatchModel');

var calorieCalc = require('../../utils/calorieCalc');

var StopwatchView = Backbone.View.extend({

    template: _.template(require('./stopwatchView.html')),

    initialize: function (options) {
        this.data = options.data;
        this.listenTo(stopwatchModel, 'change', this.render);
        stopwatchModel.startTimer();
    },

    events: {
        'click .stop-button': 'onStopButton',
        'click .pause-button': 'onPauseButton'
    },

    onPauseButton: function () {
        stopwatchModel.pauseTimer();
    },

    onStopButton: function () {
        var _this = this;

        stopwatchModel.stopTimer();

        // var time = this.model.get('time');
        var person = JSON.parse(window.localStorage.bio);
        var calories = calorieCalc(person.weight, this.data.runDistance,
                    stopwatchModel.get('time'));

        var model = new RunDataModel({
            runDate: this.data.runDate,
            runNotes: this.data.runNotes,
            runName: this.data.runName,
            runDistance: this.data.runDistance,
            runCalories: calories,
            runTime: stopwatchModel.get('time')
        });

        this.remove();
        $('.timer-slot').empty();

        model.save(null, {  // HTTP POST
            success: completeXfer
        });

        function completeXfer () {
            window.location.hash = 'detail/' + model.get('id');
        }
    },

    render: function () {
        var ticks = stopwatchModel.get('time');
        this.$el.html(this.template({
            formattedTime: this.getFormattedTime(ticks)
        }));
    },

    getFormattedTime: function (ticks) {
        return ((ticks / 3600 > 9) ? '' : '0') + Math.floor(ticks / 3600) + ':' + (((ticks % 3600) / 60 > 9) ? '' : '0') + Math.floor((ticks % 3600) / 60) + ':' + (((ticks % 60) > 9) ? '' : '0') + ticks % 60;
    }
});

module.exports = StopwatchView;
