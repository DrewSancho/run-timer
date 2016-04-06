var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var RunDataModel = require('./RunDataModel');

var stopwatchModel = require('../../utils/stopwatchModel');

var calorieCalc = require('../../utils/calorieCalc')

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

    onStopButton: function () {
        var _this = this;

        stopwatchModel.stopTimer();

        // var time = this.model.get('time');
        var person = JSON.parse(localStorage.bio);
        var calories = calorieCalc(person.weight, this.data.runDistance, 
                    stopwatchModel.get('time'));

        var model = new RunDataModel();

        model.save({  // HTTP POST
            runDate: this.data.runDate,
            runNotes: this.data.runNotes,
            runDistance: this.data.runDistance,
            runCalories: calories,
            time: stopwatchModel.get('time'),
            success: completeXfer
        });

        function completeXfer () {
            _this.remove();
            window.location.hash = '/detail' + model.get('id');
        }
    },

    render: function () {

        var ticks = stopwatchModel.get('time');
        this.$el.html(this.template({
            hours: Math.floor(ticks / 3600),
            minutes: Math.floor(ticks % 3600 / 60),
            seconds: ticks % 60
        }));
    }
});

module.exports = StopwatchView;
