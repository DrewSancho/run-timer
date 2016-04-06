var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var RunDataModel = require('./RunDataModel');

var stopwatchModel = require('../../utils/stopwatchModel');

var StopwatchView = Backbone.View.extend({

    template: _.template(require('./stopwatchView.html')),

    initialize: function (options) {
        this.data = options.data;
        this.listenTo(this.model, 'change', this.render);
        // startTimer();
    },

    events: {
        'click .stop-button': 'onStopButton',
        'click .pause-button': 'onPauseButton'
    },

    onStopButton: function () {
        var _this = this;

        this.model.stopTimer();

        // var time = this.model.get('time');
        var calories = 10000;
        // calorieCalc(this.INCOMPLETE!!!!!)
        // weight, distance, time

        var model = new RunDataModel();

        model.save({  // HTTP POST
            runDate: this.data.runDate,
            runNotes: this.data.runNotes,
            runCalories: calories,
            time: stopwatchModel.get('time'),
            success: completeXfer
        });

        function completeXfer () {
            _this.remove();
            window.location.hash = '/detail' + this.model.get('id');
        }
    },

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = StopwatchView;
