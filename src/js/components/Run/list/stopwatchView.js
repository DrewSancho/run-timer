var $ = require('jquery');
var Backbone = require('backbone');

var StopwatchView = Backbone.View.extend({

    events {
        'click .stopButton',
        'click .pauseButton'
    },
    
    render: function () {
        $('<div>').html("this is the Stopwatch view");

    }

});

module.exports = new StopWatchView;